export type Service = {
  slug: string;
  name: string;
  short: string;
  body: string;
  bullets: string[];
};

/**
 * Services framed around business growth outcomes — not generic web-design
 * deliverables. Each name leads with the customer-acquisition function it
 * performs; the body explains the mechanism.
 *
 * Order matters: Conversion-focused builds → Care → Edits → Lead capture →
 * Search structure → AI assistant. The path mirrors a typical engagement.
 */
export const SERVICES: Service[] = [
  {
    slug: "website-design-build",
    name: "Conversion-Focused Website Builds",
    short: "A website designed as a customer-acquisition system.",
    body: "Every site is built around how your customers actually find you, evaluate you, and decide to call, quote, or book. The output is a clean, mobile-first website with hierarchy, copy, and CTAs designed to move visitors toward an inquiry — not a brochure that sits there looking pretty.",
    bullets: [
      "Custom homepage and dedicated service pages",
      "Mobile-first layouts and tap-friendly conversion paths",
      "Clear CTAs at every scroll depth: call, quote, book",
      "Trust signals, reviews, and proof embedded in the layout",
      "Conversion patterns chosen for your specific industry",
    ],
  },
  {
    slug: "managed-hosting",
    name: "Ongoing Website Care & Growth Support",
    short: "Hosting, security, edits, and quarterly tuning.",
    body: "Care plans cover the operational backbone — managed hosting, SSL, backups, monitoring, and patching — plus the ongoing edits, content updates, and conversion tuning that keep a site producing leads after launch. One specialist email, not a ticket queue.",
    bullets: [
      "Managed hosting with SSL and weekly backups",
      "Uptime monitoring and disaster-recovery snapshots",
      "Security updates and dependency patching",
      "Monthly edits done by email request",
      "Quarterly lead-flow and analytics check",
    ],
  },
  {
    slug: "edits-and-updates",
    name: "Monthly Edits and Content Updates",
    short: "Email what changed. We update it.",
    body: "Service businesses change every month — new offers, new locations, new team members, seasonal hours. With a care plan you email what changed and we make the change. Included up to your plan's monthly allowance, so the site never falls behind the business it represents.",
    bullets: [
      "Hours, pricing, and contact updates",
      "New photos, services, and team additions",
      "Seasonal pages, promotions, and offers",
      "Copy refreshes and SEO tightening",
      "Up to 30, 90, or 180 minutes per month",
    ],
  },
  {
    slug: "lead-capture",
    name: "Lead Capture & Quote Request Systems",
    short: "Quote, contact, and intake flows that land in your inbox.",
    body: "Forms designed so customers actually fill them out — and routed so the lead lands in front of the right person fast. Click-to-call, multi-step intake, confirmations, and lead notifications work as one system, not three plugins fighting each other.",
    bullets: [
      "Custom quote forms tuned to your specific services",
      "Multi-step intake for higher-ticket work",
      "Click-to-call buttons on every mobile screen",
      "Visitor confirmation + plain-text lead notification",
      "Optional CRM, team-member, or location routing",
    ],
  },
  {
    slug: "local-seo-foundation",
    name: "Search Structure & Service-Area SEO",
    short: "Pages, schema, and Search Console built to be found.",
    body: "Your site is structured so search engines understand which services you offer and which areas you serve. Service pages, service-area pages, schema, sitemap, and Search Console are wired in from day one — so visibility compounds instead of waiting on a future SEO project.",
    bullets: [
      "Service page per offering, service-area page per city",
      "Title, description, and on-page SEO tuned per page",
      "LocalBusiness, FAQ, and breadcrumb schema where applicable",
      "Sitemap, robots, and Search Console verification",
      "GA4 analytics and form-conversion events wired in",
    ],
  },
  {
    slug: "ai-add-on",
    name: "AI Lead Assistant (Optional)",
    short: "Captures off-hours questions; hands the lead to your inbox.",
    body: "An embedded assistant that answers common questions from your approved business information and qualifies serious inquiries into your inbox. Trained on your services, hours, and service areas — designed to capture leads at the moments your team is not available, not to replace the conversation.",
    bullets: [
      "Answers from approved business information only",
      "Sends qualified leads with contact details to your inbox",
      "Updated whenever your services, hours, or areas change",
      "Available 24/7, including weekends and off-hours",
      "Optional booking/intake handoff for appointment-based work",
    ],
  },
];
