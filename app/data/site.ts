// Single source of truth for site-wide constants.

export const SITE = {
  name: "Martin Web Works",
  description:
    "Websites that help local businesses get more calls, quote requests, and booked jobs. Built, hosted, and maintained for you.",
  email: "team@martinwebworks.com",
  location: "Arlington, VA / Washington, DC area",
} as const;

/**
 * Phone number.
 *
 * Leave this empty until a real, owned business number is wired in. While
 * empty:
 *   - the footer omits the phone block
 *   - the mobile sticky CTA falls back to an email button
 *   - the /contact page omits the phone card
 *   - no `tel:` link is ever rendered with a fake value
 *
 * To enable phone CTAs:
 *   1. Set PHONE_NUMBER to the human-readable form, e.g. "(571) 555-0140".
 *   2. Set PHONE_HREF to the dial-able form, e.g. "+15715550140".
 *
 * TODO: replace with the real studio phone before launch.
 */
export const PHONE_NUMBER = "";
export const PHONE_HREF = "";

export const HAS_PHONE = PHONE_NUMBER.length > 0 && PHONE_HREF.length > 0;

/**
 * Scheduling URL.
 *
 * Leave this empty until a real calendar is ready. While empty, every
 * "Book Free Website Audit" CTA on the site routes to /free-audit and the
 * Free Audit form is the only intake path.
 *
 * To enable calendar booking later, set this to a real Calendly / Cal.com URL,
 * for example: `"https://cal.com/martinwebworks/audit"`.
 *
 * TODO: replace with the real scheduling link once warmup and verification
 * are complete (see EMAIL_SETUP.md).
 *
 * The helpers below handle internal vs external link behavior automatically.
 */
export const SCHEDULING_URL = "";

export const BOOK_AUDIT_HREF = SCHEDULING_URL || "/free-audit";
export const BOOK_AUDIT_IS_EXTERNAL = SCHEDULING_URL.length > 0;
