export type NavLink = {
  label: string;
  href: string;
};

/**
 * Primary (desktop header) navigation.
 *
 * Seven items + the Book Free Audit CTA. Spacing in SiteHeader is tightened
 * so this still fits cleanly on a 13" laptop without overflow. Monthly Care
 * lives in the footer so the header can carry the showroom routes.
 */
export const PRIMARY_NAV: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Examples", href: "/examples" },
  { label: "Features", href: "/features" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Mobile nav. Includes everything the desktop header carries plus the
 * surfaces that live in the footer on desktop. SEO traffic landing on an
 * industry or resource page can reach the rest of the system in one tap.
 */
export const MOBILE_NAV: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Monthly Care", href: "/monthly-care" },
  { label: "Examples", href: "/examples" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Process", href: "/process" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

/**
 * Footer columns. See SiteFooter for rendering.
 */
export const FOOTER_STUDIO: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Monthly Care", href: "/monthly-care" },
  { label: "Examples", href: "/examples" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
];

export const FOOTER_MORE: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Free Audit", href: "/free-audit" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
