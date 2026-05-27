/**
 * Email sending. Wraps Resend so the rest of the app can ignore which provider
 * is in use.
 *
 * Required environment variables for live email:
 *   - RESEND_API_KEY       (server-only; from resend.com → API Keys)
 *   - CONTACT_FROM_EMAIL   (must belong to a domain you've verified in Resend)
 *   - CONTACT_TO_EMAIL     (the inbox that receives lead notifications)
 *
 * Behavior:
 *   - If RESEND_API_KEY is missing, sending returns { ok: false, skipped: true }.
 *     The route still returns 200 to the user (we never reveal infrastructure
 *     failures), but logs a clear development-only warning.
 *   - All errors return { ok: false } with a sanitized message. Stack traces
 *     stay in server logs only.
 */

import { Resend } from "resend";
import { logError, logWarn, isDev } from "./log";

export type SendEmailParams = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; skipped: true; reason: string }
  | { ok: false; skipped: false; reason: string };

let cachedClient: Resend | null = null;

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cachedClient) cachedClient = new Resend(key);
  return cachedClient;
}

export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const client = getResendClient();

  if (!client) {
    if (isDev()) {
      logWarn(
        "RESEND_API_KEY not configured. Skipping email send. " +
          "Set RESEND_API_KEY in .env.local to enable live delivery.",
        { to: params.to, subject: params.subject },
      );
    }
    return {
      ok: false,
      skipped: true,
      reason: "Email provider is not configured.",
    };
  }

  try {
    const response = await client.emails.send({
      from: params.from,
      to: params.to,
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });

    if (response.error) {
      logError("Resend returned an error", response.error, {
        to: params.to,
        subject: params.subject,
      });
      return {
        ok: false,
        skipped: false,
        reason: response.error.message || "Email provider rejected the message.",
      };
    }

    const id = response.data?.id ?? "unknown";
    return { ok: true, id };
  } catch (err) {
    logError("Email send threw", err, {
      to: params.to,
      subject: params.subject,
    });
    return {
      ok: false,
      skipped: false,
      reason: "Failed to send email.",
    };
  }
}

/**
 * Convenience helper: read the configured "from" / "to" pair from env and
 * surface a clear error if they are not set. Returns null when either is
 * missing so the route can decide how to respond.
 */
export function getEmailRouting(): { from: string; to: string } | null {
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!from || !to) {
    if (isDev()) {
      logWarn(
        "CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL is not set. " +
          "Email send will be skipped.",
      );
    }
    return null;
  }
  return { from, to };
}
