/**
 * Server-side validation and formatting for the Free Audit form.
 *
 * This module is server-only by intent (no React imports). The client form
 * only sends JSON; all validation, sanitization, and email content lives here
 * so we have a single source of truth.
 */

/* ============================================================
   Shared contract: matches what the client form posts as JSON.
   ============================================================ */
export type AuditSubmissionInput = {
  name: string;
  businessName: string;
  email: string;
  websiteUrl?: string;
  phone?: string;
  interest?: string;
  message?: string;
  /** Honeypot field. Real users never fill this. Bots auto-fill it. */
  company_website?: string;
};

export type AuditSubmissionNormalized = {
  name: string;
  businessName: string;
  email: string;
  websiteUrl: string;
  phone: string;
  interest: string;
  message: string;
};

/** Hard ceilings to make payloads safe and predictable. */
export const FIELD_LIMITS = {
  name: 100,
  businessName: 150,
  websiteUrl: 300,
  email: 200,
  phone: 50,
  interest: 100,
  message: 4000,
  honeypot: 0,
} as const;

/** Per-field validation errors, keyed by field name. */
export type AuditValidationErrors = Partial<
  Record<keyof AuditSubmissionInput | "_form", string>
>;

export type AuditValidationResult =
  | { ok: true; data: AuditSubmissionNormalized; honeypotTripped: false }
  | { ok: true; data: null; honeypotTripped: true }
  | { ok: false; errors: AuditValidationErrors };

/* Pragmatic email regex. Not RFC-perfect, but rejects obvious typos. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ============================================================
   Public API
   ============================================================ */
export function validateAuditSubmission(
  raw: unknown,
): AuditValidationResult {
  if (!raw || typeof raw !== "object") {
    return { ok: false, errors: { _form: "Invalid request body." } };
  }

  const input = raw as Record<string, unknown>;

  // Honeypot: if filled, silently succeed without notifying anyone.
  // The endpoint should still return a 2xx so bots don't learn anything.
  const honeypot = stringOrEmpty(input.company_website);
  if (honeypot.length > 0) {
    return { ok: true, data: null, honeypotTripped: true };
  }

  const errors: AuditValidationErrors = {};

  const name = clean(stringOrEmpty(input.name));
  const businessName = clean(stringOrEmpty(input.businessName));
  const email = clean(stringOrEmpty(input.email)).toLowerCase();
  const websiteUrl = clean(stringOrEmpty(input.websiteUrl));
  const phone = clean(stringOrEmpty(input.phone));
  const interest = clean(stringOrEmpty(input.interest));
  const message = clean(stringOrEmpty(input.message));

  if (!name) errors.name = "Name is required.";
  else if (name.length > FIELD_LIMITS.name)
    errors.name = `Name must be ${FIELD_LIMITS.name} characters or fewer.`;

  if (!businessName) errors.businessName = "Business name is required.";
  else if (businessName.length > FIELD_LIMITS.businessName)
    errors.businessName = `Business name must be ${FIELD_LIMITS.businessName} characters or fewer.`;

  if (!email) errors.email = "Email is required.";
  else if (email.length > FIELD_LIMITS.email)
    errors.email = `Email must be ${FIELD_LIMITS.email} characters or fewer.`;
  else if (!EMAIL_RE.test(email))
    errors.email = "Enter a valid email address.";

  if (websiteUrl.length > FIELD_LIMITS.websiteUrl)
    errors.websiteUrl = `Website URL must be ${FIELD_LIMITS.websiteUrl} characters or fewer.`;

  if (phone.length > FIELD_LIMITS.phone)
    errors.phone = `Phone must be ${FIELD_LIMITS.phone} characters or fewer.`;

  if (interest.length > FIELD_LIMITS.interest)
    errors.interest = `Interest must be ${FIELD_LIMITS.interest} characters or fewer.`;

  if (message.length > FIELD_LIMITS.message)
    errors.message = `Message must be ${FIELD_LIMITS.message} characters or fewer.`;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    honeypotTripped: false,
    data: {
      name,
      businessName,
      email,
      websiteUrl: normalizeUrl(websiteUrl),
      phone,
      interest: interest || "Not specified",
      message,
    },
  };
}

/* ============================================================
   Email body composition
   ============================================================ */
export type AuditEmailContext = {
  /** ISO timestamp the request was received. */
  submittedAt: string;
  /** Optional Referer header so we know which page submitted the form. */
  source?: string;
};

export type AuditEmailContent = {
  subject: string;
  text: string;
  html: string;
};

export function formatAuditEmail(
  data: AuditSubmissionNormalized,
  ctx: AuditEmailContext,
): AuditEmailContent {
  const submitted = formatTimestamp(ctx.submittedAt);
  const source = ctx.source?.trim() || "Direct submission";

  const subject = `New Martin Web Works audit request: ${data.businessName}`;

  const rows: Array<[label: string, value: string]> = [
    ["Name", data.name],
    ["Business name", data.businessName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Website URL", data.websiteUrl || "—"],
    ["Interest", data.interest],
    ["Message", data.message || "—"],
    ["Submitted", submitted],
    ["Source", source],
  ];

  const text = rows
    .map(([label, value]) => `${label}:\n${value}`)
    .join("\n\n");

  const html = renderHtmlEmail(rows);

  return { subject, text, html };
}

/**
 * Confirmation email sent to the person who submitted the audit request.
 * Intentionally minimal: white background, navy text, no images, no tracking,
 * no marketing language. The whole point is reassurance + the team@ address.
 */
export function formatConfirmationEmail(
  data: AuditSubmissionNormalized,
): AuditEmailContent {
  const firstName = firstWord(data.name) || "there";
  const teamEmail = "team@martinwebworks.com";

  const subject = "We received your website audit request";

  const text = `Hi ${firstName},

Thanks for requesting a free website audit from Martin Web Works.

We received your request and will review your website or business situation shortly. We'll reply within one business day to schedule a 30-minute conversation and walk through what is helping, what may be hurting, and what we would fix first.

In the meantime, you can reach us directly at ${teamEmail} if you have anything else you want us to look at.

Best,
Martin Web Works
${teamEmail}
`;

  const html = renderConfirmationHtml(firstName, teamEmail);

  return { subject, text, html };
}

/* ============================================================
   Helpers
   ============================================================ */
function stringOrEmpty(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function clean(s: string): string {
  // Collapse internal whitespace, strip control chars (except newlines for textarea), trim.
  return s
    .replace(/\u0000/g, "")
    .replace(/[\u0001-\u0009\u000B-\u001F\u007F]/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function normalizeUrl(raw: string): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  if (!trimmed) return "";
  // If it looks like a bare domain, add https://. Be liberal: we are not
  // validating, just making the link clickable in email clients.
  if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}

function formatTimestamp(iso: string): string {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " ET";
  } catch {
    return iso;
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstWord(s: string): string {
  return s.trim().split(/\s+/)[0] ?? "";
}

function renderConfirmationHtml(firstName: string, teamEmail: string): string {
  const safeName = escapeHtml(firstName);
  const safeEmail = escapeHtml(teamEmail);

  return `<!doctype html>
<html>
<body style="margin:0; padding: 24px; background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #0b1b33;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto;">
    <tr>
      <td style="padding: 0 8px;">
        <h1 style="margin: 0 0 16px; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; color: #0b1b33;">
          We received your website audit request.
        </h1>
        <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0b1b33;">
          Hi ${safeName},
        </p>
        <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0b1b33;">
          Thanks for requesting a free website audit from Martin Web Works.
        </p>
        <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0b1b33;">
          We received your request and will review your website or business situation shortly.
          We&rsquo;ll reply within one business day to schedule a 30-minute conversation and walk through
          what is helping, what may be hurting, and what we would fix first.
        </p>
        <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #0b1b33;">
          In the meantime, you can reach us directly at
          <a href="mailto:${safeEmail}" style="color: #0b1b33; text-decoration: underline;">${safeEmail}</a>
          if you have anything else you want us to look at.
        </p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #0b1b33;">
          Best,<br />
          Martin Web Works<br />
          <a href="mailto:${safeEmail}" style="color: #0b1b33; text-decoration: underline;">${safeEmail}</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderHtmlEmail(rows: Array<[string, string]>): string {
  const cells = rows
    .map(([label, value]) => {
      const safeValue = escapeHtml(value).replace(/\n/g, "<br />");
      return `
        <tr>
          <td style="padding: 12px 16px; vertical-align: top; width: 140px; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e6e0d3;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 12px 16px; vertical-align: top; color: #0b1b33; font-size: 15px; line-height: 1.5; border-bottom: 1px solid #e6e0d3;">
            ${safeValue}
          </td>
        </tr>`;
    })
    .join("");

  return `<!doctype html>
<html>
<body style="margin:0; padding: 24px; background: #faf7f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #0b1b33;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e6e0d3; border-radius: 14px; overflow: hidden;">
    <tr>
      <td style="padding: 20px 24px; background: #0b1b33; color: #faf7f2;">
        <p style="margin:0; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #ece4d3;">Martin Web Works</p>
        <h1 style="margin: 6px 0 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em;">New free audit request</h1>
      </td>
    </tr>
    <tr>
      <td>
        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
          ${cells}
        </table>
      </td>
    </tr>
  </table>
  <p style="max-width: 640px; margin: 16px auto 0; font-size: 12px; color: #94a3b8; text-align: center;">
    Sent by the Martin Web Works website.
  </p>
</body>
</html>`;
}
