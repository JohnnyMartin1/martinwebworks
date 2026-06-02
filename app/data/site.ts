// Single source of truth for site-wide constants.

export const SITE = {
  name: "Martin Web Works",
  description:
    "Conversion-focused websites for service businesses ready to grow. Strategy, design, SEO structure, lead capture, booking flows, and ongoing care — built as a system, not a brochure.",
  // The studio operates remotely across the US. Arlington is the address of
  // record; we do not lead with geography in marketing copy.
  email: "team@martinwebworks.com",
  location: "Remote · United States",
  /**
   * Address of record. Kept separate from `location` so the public marketing
   * surface can say "Remote · United States" while legal / structured-data /
   * footer disclosures can still use the real city.
   */
  cityOfRecord: "Arlington, VA",
  regionOfRecord: "Washington, DC metro area",
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
 * Read from `NEXT_PUBLIC_SCHEDULING_URL` so the value is available to both
 * server and client components. Set it in `.env.local` (and in your hosting
 * environment) when a real calendar is ready, e.g.
 *   NEXT_PUBLIC_SCHEDULING_URL=https://cal.com/martinwebworks/free-audit
 *
 * When unset (empty string), the site keeps `/free-audit` as the only intake
 * path and never renders a broken scheduling link.
 *
 * Notes:
 *   - `BOOK_AUDIT_HREF` is what every "Book Free Audit" button points to.
 *     We deliberately keep this as `/free-audit` (the hub) even when a
 *     scheduling link is configured — the /free-audit page then offers
 *     scheduling + the form side-by-side. Direct scheduling links use
 *     `SCHEDULING_URL` / `HAS_SCHEDULING` directly.
 *   - Trimmed, https-only validation prevents accidental local-file leaks.
 */
const RAW_SCHEDULING_URL =
  (process.env.NEXT_PUBLIC_SCHEDULING_URL ?? "").trim();

export const SCHEDULING_URL: string = /^https?:\/\//i.test(RAW_SCHEDULING_URL)
  ? RAW_SCHEDULING_URL
  : "";

export const HAS_SCHEDULING = SCHEDULING_URL.length > 0;

/**
 * Where every "Book Free Audit" CTA on the site lives. Keep this internal
 * so the visitor lands on the /free-audit hub, which itself presents the
 * scheduling option + the form. This is the recommended pattern from
 * marketing teams that A/B-tested direct-to-calendar vs hub-first.
 */
export const BOOK_AUDIT_HREF = "/free-audit";
export const BOOK_AUDIT_IS_EXTERNAL = false;

/**
 * Shared Open Graph / Twitter image descriptor.
 *
 * Centralized here so pages that declare their own `openGraph` or `twitter`
 * blocks in `metadata` can spread these images in. When a page overrides
 * those blocks without re-declaring `images`, Next.js does not inherit the
 * file-based image from `app/opengraph-image.tsx`, and shared links go
 * preview-blank. Importing `SHARE_IMAGES` and including it in the override
 * keeps every shared link emitting a real og:image / twitter:image tag.
 *
 * The path `/opengraph-image` resolves to the file-based image route.
 */
export const SHARE_IMAGES = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${SITE.name} — Conversion-focused websites for service businesses`,
  },
];
