/**
 * Concept-example walkthroughs.
 *
 * Each entry powers a full /examples/[slug] page. They are *concept
 * examples* designed by Martin Web Works, not real client work. Every
 * mention in the UI is honest about that.
 *
 * To add a new walkthrough:
 *   1. Add an entry below.
 *   2. /examples/[slug] picks it up automatically and the sitemap
 *      includes it on the next build.
 *
 * Slugs intentionally read like topics ("roofing-website-concept") so
 * the URL itself communicates "this is a concept, not a real client".
 */

import { EXAMPLES, type ExampleBusiness } from "./examples";

export type ConceptSection = {
  /** Short label above the section title. */
  eyebrow: string;
  /** Headline for this section. */
  title: string;
  /** Plain-English explanation. 2–4 sentences max. */
  body: string;
  /** Compact bullets shown beside the explanation. */
  highlights: string[];
};

export type ConceptFeature = {
  label: string;
  included: boolean;
  /** Short note clarifying scope. */
  note?: string;
};

/**
 * Visual + interactive variant key. The /examples/[slug] page uses this to:
 *   - pick the industry-specific ConceptHomeMockup
 *   - pick the BookingMockup variant
 *   - pick the AssistantDemo scenario id
 *
 * Keep this in sync with:
 *   - ConceptHomeMockup `variant` prop
 *   - BookingMockup `variant` prop
 *   - AssistantDemo scenario `id`
 */
export type ConceptVariant = "roofing" | "medSpa" | "lawFirm";

export type ExampleConcept = {
  slug: string;
  /** ExampleBusiness slug used for palette + identity reuse. */
  baseSlug: ExampleBusiness["slug"];
  /** Drives mockup, booking, and assistant variants. */
  variant: ConceptVariant;
  /** Scenario id passed to AssistantDemo's scenario picker. */
  assistantScenarioId: string;
  /** Display name for headlines, e.g. "Roofing website". */
  industryLabel: string;
  industryShort: string;
  /** Hero copy. */
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    primaryCtaInPage: string;
    siteTagline: string;
    siteCta: string;
    services: [string, string, string];
  };
  /** Sections of the concept site, in order. */
  sections: ConceptSection[];
  /** Lead-capture narrative (used in a 4-step strip). */
  leadFlow: {
    title: string;
    body: string;
    steps: { label: string; title: string; body: string }[];
  };
  /** What this concept site includes. */
  features: ConceptFeature[];
  /** Why this structure works for the industry. */
  whyItWorks: {
    title: string;
    body: string;
    points: string[];
  };
  /** Meta for SEO. */
  meta: { title: string; description: string };
};

const ROOFING: ExampleConcept = {
  slug: "roofing-website-concept",
  baseSlug: "summit-ridge-roofing",
  variant: "roofing",
  assistantScenarioId: "roofing",
  industryLabel: "Roofing website",
  industryShort: "roofers",
  hero: {
    eyebrow: "Concept example · Not a real client",
    headline: "A roofing website built for storm-damage calls and quote requests.",
    lead: "Most roofing sites bury the phone number, hide the service area, and leave homeowners scrolling past stock photos. This concept inverts that — the entire homepage answers the three questions a homeowner asks during a storm.",
    primaryCtaInPage: "Book Free Website Audit",
    siteTagline: "Storm damage? We answer the phone.",
    siteCta: "Free roof inspection",
    services: ["Storm Repair", "Replacement", "Inspections"],
  },
  sections: [
    {
      eyebrow: "Hero",
      title: "One line, one call, no scrolling.",
      body: "The hero leads with a clear statement of intent: storm damage is the dominant use case for a residential roofer, so the headline names it. Above the fold there is a phone number, a free-inspection CTA, and a visible service area.",
      highlights: [
        "Phone link visible without scrolling",
        "Free inspection as the primary CTA",
        "Service area named explicitly",
      ],
    },
    {
      eyebrow: "Services",
      title: "Three clear service paths.",
      body: "Repair, replacement, and inspections. Each opens to a dedicated service page with photos, scope, typical pricing, and warranty notes. Customers self-select before they ever fill out a form.",
      highlights: [
        "Individual service page per offering",
        "Plain-English scope + typical timeline",
        "Warranty and material details in one place",
      ],
    },
    {
      eyebrow: "Trust",
      title: "Reviews, license, and warranty in one block.",
      body: "Verified Google reviews, contractor license number, GAF/Owens Corning certifications, and the workmanship warranty live together. A homeowner deciding between three estimates wants this on one screen.",
      highlights: [
        "Verified review embed",
        "Visible license + insurance line",
        "Manufacturer certifications",
        "10-year workmanship warranty",
      ],
    },
    {
      eyebrow: "Proof",
      title: "Before-and-after gallery, organized by neighborhood.",
      body: "Real project photos grouped by city or neighborhood. A homeowner can see work done on a street like theirs, which closes the ‘would they really come out here?’ question.",
      highlights: [
        "Before-and-after pairs",
        "Filter by neighborhood",
        "Captions describe the actual scope",
      ],
    },
    {
      eyebrow: "FAQ",
      title: "FAQ that doubles as SEO.",
      body: "Insurance claims, financing, timing, materials, warranty. The same FAQ that calms a hesitant homeowner is the FAQ Google rewards with rich results.",
      highlights: [
        "Insurance and financing answered",
        "FAQ schema for rich results",
        "Mobile-friendly accordions",
      ],
    },
    {
      eyebrow: "Quote form",
      title: "A form a roofer would actually fill out.",
      body: "Five fields, no captcha hostility, no required upload step. The form asks for the situation, not the personality. Honeypot stops bots without slowing down a customer in a parking lot.",
      highlights: [
        "Five required fields, mobile-first",
        "Optional photo upload, not required",
        "Spam-protected without friction",
        "Email confirmation to the customer",
      ],
    },
  ],
  leadFlow: {
    title: "How a quote request reaches you.",
    body: "From the moment a homeowner taps the inspection button to the moment a lead arrives in your inbox, here is the path the system takes.",
    steps: [
      {
        label: "01",
        title: "Tap-to-call or quote form",
        body: "Homeowner picks up the phone or fills the inspection form — whichever fits their moment.",
      },
      {
        label: "02",
        title: "Spam + bot filter",
        body: "Honeypot fields and validation strip bot submissions before they reach your inbox.",
      },
      {
        label: "03",
        title: "Lead notification",
        body: "Plain-text email lands in your inbox with name, address, and damage notes.",
      },
      {
        label: "04",
        title: "Optional handoff",
        body: "Routed to a project manager, a CRM, or both — based on what you already use.",
      },
    ],
  },
  features: [
    { label: "Quote / inspection form", included: true, note: "Routed to your inbox" },
    { label: "Click-to-call on mobile", included: true },
    { label: "Service pages (repair / replace / inspect)", included: true },
    { label: "Before-and-after gallery", included: true, note: "By neighborhood" },
    { label: "Reviews and trust block", included: true },
    { label: "Service-area pages", included: true, note: "Local-SEO tuned" },
    { label: "FAQ + schema", included: true },
    { label: "AI lead assistant", included: false, note: "Optional add-on" },
    { label: "Online booking widget", included: false, note: "Optional add-on" },
    { label: "Monthly care plan", included: true, note: "From $99/month" },
  ],
  whyItWorks: {
    title: "Why this structure works for roofers.",
    body: "Roofing customers decide fast and they decide on a phone, often outside, often after a storm. They are not browsing — they are triaging. A roofing website should triage with them.",
    points: [
      "The headline names the urgent moment.",
      "The first tap is a phone call or a quote.",
      "Trust signals live one screen below the headline, not five.",
      "Service-area pages tell Google exactly where to surface the site.",
      "The monthly care plan keeps storm-season hours and crews accurate.",
    ],
  },
  meta: {
    title: "Roofing Website Concept · Martin Web Works",
    description:
      "Concept walkthrough of a residential roofing website built for storm-damage calls, quote requests, and local search. Designed by Martin Web Works.",
  },
};

const MED_SPA: ExampleConcept = {
  slug: "med-spa-website-concept",
  baseSlug: "luma-aesthetics",
  variant: "medSpa",
  assistantScenarioId: "med-spa",
  industryLabel: "Med spa website",
  industryShort: "med spas",
  hero: {
    eyebrow: "Concept example · Not a real client",
    headline:
      "A med spa website built for treatment education, consultations, and online booking.",
    lead: "First-time med spa guests are not browsing — they are deciding whether to trust an injector or aesthetician with their face. This concept leads with education, makes consultations the obvious next step, and removes the friction between curiosity and a booked appointment.",
    primaryCtaInPage: "Book Free Website Audit",
    siteTagline: "Premium aesthetics, calmly explained.",
    siteCta: "Book a consultation",
    services: ["Injectables", "Facials", "Body"],
  },
  sections: [
    {
      eyebrow: "Hero",
      title: "Calm, clinical, and consultation-first.",
      body: "The hero pairs a quiet visual register with one CTA: book a consultation. Provider names, a short ‘what to expect on your first visit’ note, and a confidential intake live in the upper third — no scrolling required to answer the questions a first-time guest is about to ask.",
      highlights: [
        "Provider names visible above the fold",
        "Single primary CTA: book a consultation",
        "‘What to expect’ note for first-time guests",
      ],
    },
    {
      eyebrow: "Treatments",
      title: "Treatment pages that educate before they sell.",
      body: "Injectables, facials, laser, body. Each page explains the treatment, the typical timeline, who performs it, and the conservative pricing window. Guests self-qualify before they ever touch the booking widget.",
      highlights: [
        "Per-treatment page with plain-English explanation",
        "‘Who performs this’ shown clearly",
        "Recovery time and aftercare answered",
      ],
    },
    {
      eyebrow: "Booking",
      title: "Real online booking, not a contact-us form.",
      body: "A modern booking flow picks the treatment or consultation, finds a time, captures the intake, and ends with a confirmation email. The widget is mobile-first and works without an account.",
      highlights: [
        "Choose visit type → time → details",
        "Confirmation email + calendar attach",
        "Reschedule link in the confirmation",
      ],
    },
    {
      eyebrow: "Team",
      title: "Providers, credentials, and a face for the practice.",
      body: "Photos of the medical director, nurse injectors, and lead aestheticians, along with licensure and training. Guests are choosing a person; the page treats it that way.",
      highlights: [
        "Provider bios and roles",
        "Schools, licenses, certifications",
        "Sample review layout, clearly labeled",
      ],
    },
    {
      eyebrow: "Gallery",
      title: "Before-and-after, with the disclaimer guests expect.",
      body: "Treatment galleries grouped by category (lips, smoothing, skin, body). Each pair includes the treatment, the time elapsed, and a results-vary disclaimer. Honest visual proof, never stock smiles.",
      highlights: [
        "Treatment-type filter",
        "Timeline + results-vary disclaimer",
        "No stock photography — guest-permission gallery",
      ],
    },
    {
      eyebrow: "FAQ",
      title: "First-visit logistics, pricing windows, and aftercare.",
      body: "The biggest blockers to booking a med spa are logistical and emotional. The FAQ answers both in plain English and earns rich-result eligibility through schema.",
      highlights: [
        "What to bring on your first visit",
        "Pricing windows and packages",
        "FAQ schema for rich results",
      ],
    },
    {
      eyebrow: "Intake",
      title: "Confidential intake, written like a clinical form.",
      body: "Health history, medications, and treatment goals collected in a short structured form. Encrypted in transit, with a confirmation that explains what happens next and how the information is used.",
      highlights: [
        "Short structured intake",
        "Encrypted in transit",
        "Confirmation email explains next steps",
      ],
    },
  ],
  leadFlow: {
    title: "How a curious visitor becomes a booked consultation.",
    body: "The page treats the booking flow as the first appointment, not a sales funnel. Each step removes a question the guest was about to ask.",
    steps: [
      {
        label: "01",
        title: "Guest reads a treatment page",
        body: "Injectables, facials, laser, body. Each page is written for the guest, not for SEO.",
      },
      {
        label: "02",
        title: "Guest picks a consultation or visit",
        body: "The shape of the visit decides what is asked next.",
      },
      {
        label: "03",
        title: "Time and intake",
        body: "The visitor picks a slot, confirms basic intake, and lands a confirmation email instantly.",
      },
      {
        label: "04",
        title: "Reminder + arrival flow",
        body: "Day-before reminder by email or SMS. Pre-visit packet attached for first-time guests.",
      },
    ],
  },
  features: [
    { label: "Online booking widget", included: true, note: "Consultation + treatment" },
    { label: "Treatment pages with pricing windows", included: true },
    { label: "Provider and team bios", included: true },
    { label: "Before/after gallery", included: true, note: "With results-vary disclaimer" },
    { label: "Sample review layout", included: true },
    { label: "First-visit intake form", included: true },
    { label: "Mobile-first sticky booking CTA", included: true },
    { label: "FAQ + schema", included: true },
    { label: "AI intake assistant", included: false, note: "Optional add-on" },
    { label: "Monthly care plan", included: true, note: "From $99/month" },
  ],
  whyItWorks: {
    title: "Why this structure works for med spas.",
    body: "Med spa decisions are high-trust, high-friction, and emotionally weighted. Guests are deciding on a person and a treatment at the same time. A site that educates first and books second wins more consultations than one that tries to sell results.",
    points: [
      "Consultations surface above the fold.",
      "Treatment pages let guests self-qualify before booking.",
      "Booking is a real widget, not a contact form.",
      "Providers are presented as people, not titles.",
      "Galleries include the disclaimers guests expect.",
    ],
  },
  meta: {
    title: "Med Spa Website Concept · Martin Web Works",
    description:
      "Concept walkthrough of a med spa website built around consultations, treatment education, and online booking. Designed by Martin Web Works.",
  },
};

const LAW_FIRM: ExampleConcept = {
  slug: "law-firm-website-concept",
  baseSlug: "harbor-slate-law",
  variant: "lawFirm",
  assistantScenarioId: "law-firm",
  industryLabel: "Law-firm website",
  industryShort: "law firms",
  hero: {
    eyebrow: "Concept example · Not a real client",
    headline:
      "A boutique law-firm website that earns trust before the first call.",
    lead: "Most small law-firm websites speak to other attorneys. A prospective client wants to understand their situation, see whether the firm handles it, and confirm a real human will reply within a day. This concept is built for that visitor.",
    primaryCtaInPage: "Book Free Website Audit",
    siteTagline: "Estate, business, and contracts — handled with care.",
    siteCta: "Request a confidential 15-minute call",
    services: ["Estate Planning", "Business", "Contracts"],
  },
  sections: [
    {
      eyebrow: "Hero",
      title: "Calm, specific, and confidential.",
      body: "The headline names the practice area precisely. The lead paragraph explains who the firm serves and how a first conversation works. A 15-minute confidential call replaces the usual ‘Contact us’.",
      highlights: [
        "Practice area named in the headline",
        "Plain-English explanation of the first call",
        "Confidentiality noted under the form",
      ],
    },
    {
      eyebrow: "Practice areas",
      title: "A real practice-area tree, not one page.",
      body: "Each practice area lives on its own page with a clear description of the work, typical timelines, and what a first call covers. Visitors decide whether the firm is right for them before they reach the intake.",
      highlights: [
        "Page per practice area",
        "Typical timeline + fee structure",
        "What the first call covers",
      ],
    },
    {
      eyebrow: "Attorney",
      title: "An attorney page that reads like a person.",
      body: "Education, bar admissions, career history, and a short personal note. Not a CV dump — a page that signals who is on the other end of the email.",
      highlights: [
        "Education and bar admissions",
        "Career history in two paragraphs",
        "Personal note about the practice",
      ],
    },
    {
      eyebrow: "Intake",
      title: "Confidential intake, not a contact form.",
      body: "A short structured intake collects the situation, urgency, and contact preference. The form is encrypted in transit; the confirmation email outlines what happens next and reaffirms confidentiality.",
      highlights: [
        "Short structured intake",
        "Encrypted in transit",
        "Confirmation email explains next steps",
      ],
    },
    {
      eyebrow: "Trust",
      title: "Endorsements, associations, and a calm visual register.",
      body: "Bar associations, professional memberships, and any speaking or publication history live in a single quiet block. The visual register stays library-calm — no urgent reds, no big stock photos.",
      highlights: [
        "Bar associations + memberships",
        "Publications and speaking",
        "Quiet, deliberate visual register",
      ],
    },
    {
      eyebrow: "FAQ",
      title: "The questions a client is too polite to ask.",
      body: "Fees, retainers, timelines, document handling. Answering these on the site removes the awkwardness from the first call and earns rich-result eligibility through schema.",
      highlights: [
        "Fees and retainers explained",
        "Document handling expectations",
        "FAQ schema for rich results",
      ],
    },
  ],
  leadFlow: {
    title: "How a hesitant visitor becomes a confidential call.",
    body: "Estate planning is high-trust and low-frequency. The structure assumes the visitor is reading carefully, not browsing.",
    steps: [
      {
        label: "01",
        title: "Visitor reads the practice area",
        body: "Wills, trusts, probate, power of attorney. Each page is written for the visitor, not for SEO.",
      },
      {
        label: "02",
        title: "Visitor opens the attorney page",
        body: "A real biography. A photo or initials placeholder. The page earns the call before the visitor asks for it.",
      },
      {
        label: "03",
        title: "Short, confidential intake",
        body: "Five fields. The footer explains confidentiality. The submit button reads ‘Request a 15-minute call’.",
      },
      {
        label: "04",
        title: "Confirmation + next-business-day reply",
        body: "An email confirmation arrives instantly. A real reply with time options follows within one business day.",
      },
    ],
  },
  features: [
    { label: "Practice area pages", included: true },
    { label: "Attorney bio + credentials", included: true },
    { label: "Confidential intake form", included: true, note: "Encrypted in transit" },
    { label: "Schedule a 15-min call", included: true, note: "Calendar widget optional" },
    { label: "Bar associations + memberships", included: true },
    { label: "FAQ + schema", included: true },
    { label: "Reviews", included: false, note: "Most attorneys use endorsements instead" },
    { label: "AI lead assistant", included: false, note: "Optional add-on" },
    { label: "Online booking widget", included: true, note: "Optional, calendar-driven" },
    { label: "Monthly care plan", included: true, note: "From $99/month" },
  ],
  whyItWorks: {
    title: "Why this structure works for small firms.",
    body: "Boutique firms win on judgment and presence, not on logos. The site’s job is to communicate both — quietly, deliberately, and without sounding like an agency template.",
    points: [
      "Practice area named in the headline.",
      "Attorney pages read like people, not CVs.",
      "Confidentiality is shown, not just stated.",
      "Intake replaces ‘Contact us’ entirely.",
      "FAQ removes friction from the first call.",
    ],
  },
  meta: {
    title: "Law Firm Website Concept · Martin Web Works",
    description:
      "Concept walkthrough of a solo law-firm website built around confidential intake, practice area structure, and quiet trust. Designed by Martin Web Works.",
  },
};

export const EXAMPLE_CONCEPTS: ExampleConcept[] = [ROOFING, MED_SPA, LAW_FIRM];

export function getExampleConceptBySlug(slug: string): ExampleConcept | null {
  return EXAMPLE_CONCEPTS.find((c) => c.slug === slug) ?? null;
}

export function getBaseExample(concept: ExampleConcept): ExampleBusiness | null {
  return EXAMPLES.find((e) => e.slug === concept.baseSlug) ?? null;
}

/**
 * Map of base ExampleBusiness slug → concept walkthrough slug.
 * Used by the ExampleCard to decide whether to link to a detail page.
 */
export const CONCEPT_SLUG_BY_BASE: Record<string, string> = EXAMPLE_CONCEPTS.reduce(
  (acc, c) => {
    acc[c.baseSlug] = c.slug;
    return acc;
  },
  {} as Record<string, string>,
);
