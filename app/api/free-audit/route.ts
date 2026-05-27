/**
 * POST /api/free-audit
 *
 * Receives Free Audit form submissions, validates server-side, sanitizes,
 * applies a soft rate limit, sends an internal notification email to
 * CONTACT_TO_EMAIL, and sends a confirmation email to the submitter.
 *
 * Contract (request, JSON):
 *   {
 *     "name": "string (required)",
 *     "businessName": "string (required)",
 *     "email": "string (required)",
 *     "websiteUrl": "string (optional)",
 *     "phone": "string (optional)",
 *     "interest": "string (optional)",
 *     "message": "string (optional)",
 *     "company_website": "string (honeypot, must be empty)"
 *   }
 *
 * Contract (response, JSON):
 *   200 { ok: true, confirmationSent?: boolean, deliveryPending?: boolean }
 *   400 { ok: false, errors: { fieldName: "message" } }
 *   429 { ok: false, error: "Too many requests." }
 *   500 { ok: false, error: "Something went wrong. Please email us instead." }
 *
 * Email behavior:
 *   - The internal notification email is the primary delivery. If it fails,
 *     we return 500 so a lead is never silently lost.
 *   - The confirmation email is a courtesy. If it fails, we log the failure
 *     server-side and still return success — the team already has the lead.
 *
 * Missing RESEND_API_KEY:
 *   - Development: return 200 with `deliveryPending: true` and log a warning,
 *     so the form is testable locally without a real key.
 *   - Production: return 500. Silent success in prod would mean lost leads.
 *
 * Honeypot:
 *   - If filled, we return 200 with no email sent. Bots learn nothing.
 */

import { NextResponse } from "next/server";
import {
  validateAuditSubmission,
  formatAuditEmail,
  formatConfirmationEmail,
} from "@/app/lib/audit-submission";
import { sendEmail, getEmailRouting } from "@/app/lib/email";
import { rateLimit, getClientIp } from "@/app/lib/rate-limit";
import { logInfo, logWarn, logError, isDev } from "@/app/lib/log";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = {
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
};

export async function POST(request: Request) {
  // 1. Rate limit per IP.
  const ip = getClientIp(request.headers);
  const limit = rateLimit(`free-audit:${ip}`, RATE_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many requests from this address. Please email us at team@martinwebworks.com.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((limit.retryAt - Date.now()) / 1000)),
        },
      },
    );
  }

  // 2. Parse JSON safely.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON." },
      { status: 400 },
    );
  }

  // 3. Validate + sanitize.
  const result = validateAuditSubmission(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  // 4. Honeypot tripped: pretend success, but do nothing.
  if (result.honeypotTripped) {
    if (isDev()) {
      logInfo("Free Audit honeypot tripped. Silently accepting.", { ip });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const data = result.data;
  const submittedAt = new Date().toISOString();
  const source = request.headers.get("referer") || "Direct submission";

  // 5. Compose both emails up front. Keeps the send section simple.
  const internalEmail = formatAuditEmail(data, { submittedAt, source });
  const confirmationEmail = formatConfirmationEmail(data);

  // 6. Send via Resend if configured. Behavior diverges by environment:
  //    - dev: missing config returns ok:true + deliveryPending:true so the
  //      form is testable locally without a real key.
  //    - prod: missing config returns 500 so leads are never silently dropped.
  const routing = getEmailRouting();
  if (!routing) {
    if (isDev()) {
      return NextResponse.json(
        { ok: true, deliveryPending: true, confirmationSent: false },
        { status: 200 },
      );
    }
    logError(
      "Email routing missing in production. Aborting submission.",
      undefined,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end. Please email us at team@martinwebworks.com.",
      },
      { status: 500 },
    );
  }

  // 7. Primary delivery: internal notification.
  const internalSend = await sendEmail({
    from: routing.from,
    to: routing.to,
    replyTo: data.email,
    subject: internalEmail.subject,
    text: internalEmail.text,
    html: internalEmail.html,
  });

  if (!internalSend.ok && internalSend.skipped) {
    // RESEND_API_KEY missing.
    if (isDev()) {
      return NextResponse.json(
        { ok: true, deliveryPending: true, confirmationSent: false },
        { status: 200 },
      );
    }
    logError(
      "RESEND_API_KEY missing in production. Internal notification not sent.",
      undefined,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end. Please email us at team@martinwebworks.com.",
      },
      { status: 500 },
    );
  }

  if (!internalSend.ok) {
    logError("Audit notification email failed to send.", undefined, {
      reason: internalSend.reason,
      to: routing.to,
    });
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end. Please email us at team@martinwebworks.com.",
      },
      { status: 500 },
    );
  }

  // 8. Secondary delivery: confirmation to the submitter. Failure here is
  //    logged but does not flip the user-facing response — the team already
  //    has the lead.
  const confirmationSend = await sendEmail({
    from: routing.from,
    to: data.email,
    replyTo: routing.to,
    subject: confirmationEmail.subject,
    text: confirmationEmail.text,
    html: confirmationEmail.html,
  });

  let confirmationSent = false;
  if (confirmationSend.ok) {
    confirmationSent = true;
  } else if (confirmationSend.skipped) {
    // Shouldn't happen — internal already succeeded, so the key is set — but
    // keep the case explicit so future refactors don't silently regress.
    logWarn("Confirmation email skipped (provider not configured).", {
      to: data.email,
    });
  } else {
    logError("Confirmation email failed to send.", undefined, {
      reason: confirmationSend.reason,
      to: data.email,
    });
  }

  logInfo("Free Audit submission accepted.", {
    business: data.businessName,
    email: data.email,
    confirmationSent,
  });

  return NextResponse.json(
    { ok: true, confirmationSent },
    { status: 200 },
  );
}

// Make GET (and other methods) return a clean 405 instead of crashing on bots.
export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
