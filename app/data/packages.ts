export type WebsitePackage = {
  slug: "starter" | "growth" | "authority";
  name: string;
  price: string;
  blurb: string;
  bestFor: string;
  features: string[];
  badge?: string;
  featured?: boolean;
};

export const PACKAGES: WebsitePackage[] = [
  {
    slug: "starter",
    name: "Starter Website",
    price: "From $1,995",
    blurb: "A clean online presence and a simple way to get contacted.",
    bestFor:
      "Best if you need a clean online presence and a simple way for customers to understand your business and contact you.",
    features: [
      "3 to 5 page website",
      "Mobile-friendly design",
      "Homepage, services, about, contact",
      "One lead or contact form",
      "Click-to-call buttons",
      "Basic SEO titles and descriptions",
      "Domain connection help",
      "1 revision round",
      "30 days post-launch support",
    ],
  },
  {
    slug: "growth",
    name: "Growth Website",
    price: "From $3,995",
    blurb: "Built to earn more calls and quote requests.",
    bestFor:
      "Best if you want stronger service pages, trust signals, reviews, galleries, and a better structure for quote requests.",
    badge: "Most Popular",
    featured: true,
    features: [
      "5 to 10 page website",
      "Custom homepage",
      "Individual service pages",
      "Reviews and testimonials section",
      "Gallery or work examples",
      "FAQ section",
      "Contact and quote form",
      "Better local SEO structure",
      "Analytics and Search Console setup",
      "2 revision rounds",
      "30 days post-launch support",
    ],
  },
  {
    slug: "authority",
    name: "Authority Website",
    price: "From $6,995",
    blurb: "A full lead-generation site for higher-value businesses.",
    bestFor:
      "Best if you have multiple services, multiple locations, higher-ticket work, or want your website to become a serious lead-generation asset.",
    features: [
      "10 to 20 page website",
      "Service and location page structure",
      "Advanced quote and intake form",
      "Case study or project pages",
      "Stronger conversion paths",
      "Copy polishing or partial copywriting",
      "Lead routing or CRM handoff planning",
      "3 revision rounds",
      "45 days post-launch support",
    ],
  },
];

export type ComparisonRow = {
  label: string;
  starter: string | boolean;
  growth: string | boolean;
  authority: string | boolean;
};

export const PACKAGE_COMPARISON: ComparisonRow[] = [
  { label: "Pages", starter: "3 to 5", growth: "5 to 10", authority: "10 to 20" },
  { label: "Mobile-first design", starter: true, growth: true, authority: true },
  { label: "Contact form", starter: "1", growth: "1", authority: "Advanced intake" },
  { label: "Service pages", starter: "Section", growth: "Individual pages", authority: "Pages + locations" },
  { label: "Reviews and testimonials", starter: false, growth: true, authority: true },
  { label: "Gallery or work examples", starter: false, growth: true, authority: true },
  { label: "FAQ section", starter: false, growth: true, authority: true },
  { label: "Case study or project pages", starter: false, growth: false, authority: true },
  { label: "Local SEO structure", starter: "Basic", growth: "Standard", authority: "Multi-location" },
  { label: "Analytics + Search Console", starter: false, growth: true, authority: true },
  { label: "Domain connection help", starter: true, growth: true, authority: true },
  { label: "Revision rounds", starter: "1", growth: "2", authority: "3" },
  { label: "Post-launch support", starter: "30 days", growth: "30 days", authority: "45 days" },
  { label: "Copy polishing", starter: false, growth: false, authority: true },
];

export type AddOn = {
  name: string;
  price: string;
  body: string;
};

export const ADD_ONS: AddOn[] = [
  {
    name: "AI Lead Assistant",
    price: "From $1,500 setup + $149/month",
    body: "Optional assistant that answers common questions and captures leads. See /ai-assistant.",
  },
  {
    name: "AI Booking / Intake Assistant",
    price: "From $3,000 setup + $399/month",
    body: "Intake, routing, and qualification for appointment-based businesses.",
  },
  {
    name: "Extra service pages",
    price: "$150 each",
    body: "Add a dedicated page for an additional service.",
  },
  {
    name: "Extra location pages",
    price: "$200 each",
    body: "Add a dedicated page for an additional service area or location.",
  },
  {
    name: "Copywriting",
    price: "From $400",
    body: "Custom written copy for a section or full page, with a structured intake.",
  },
  {
    name: "Gallery / project portfolio",
    price: "From $250",
    body: "A polished gallery with categories, captions, and easy updates.",
  },
  {
    name: "Reviews / testimonials section",
    price: "$300",
    body: "Structured review section with Google review embed.",
  },
  {
    name: "Advanced quote form",
    price: "From $400",
    body: "Multi-step intake form, conditional logic, lead routing.",
  },
  {
    name: "Booking integration",
    price: "From $250",
    body: "Calendly, Cal.com, or similar booking tool wired into the site.",
  },
];
