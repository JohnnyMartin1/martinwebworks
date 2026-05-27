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

export type ExampleConcept = {
  slug: string;
  /** ExampleBusiness slug used for palette + identity reuse. */
  baseSlug: ExampleBusiness["slug"];
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

const DENTAL: ExampleConcept = {
  slug: "dental-website-concept",
  baseSlug: "lumen-dental",
  industryLabel: "Dental website",
  industryShort: "dentists",
  hero: {
    eyebrow: "Concept example · Not a real client",
    headline: "A dental website that books new patients without the brochure.",
    lead: "Patients researching a new dentist are skimming for three things: do you take my insurance, can I book online, and does the practice look clean and current. This concept answers all three above the fold.",
    primaryCtaInPage: "Book Free Website Audit",
    siteTagline: "Modern dental care, transparently priced.",
    siteCta: "Book a new-patient visit",
    services: ["Cleanings", "Cosmetic", "Restorative"],
  },
  sections: [
    {
      eyebrow: "Hero",
      title: "Insurance, booking, and a calm visual register.",
      body: "The hero pairs a quiet, current visual register with one CTA: book a new-patient visit. Insurance carriers and a short ‘what to expect’ note live in the upper third — no scrolling required to answer the most common patient question.",
      highlights: [
        "Insurance carriers shown above the fold",
        "Single primary CTA: book a visit",
        "‘What to expect’ note for first-time guests",
      ],
    },
    {
      eyebrow: "Procedures",
      title: "Procedure pages with pricing transparency.",
      body: "Cleanings, cosmetic, restorative, emergency. Each page lists what the visit covers, typical pricing without insurance, and the team member who performs it. Patients self-qualify before booking.",
      highlights: [
        "Per-procedure page with pricing",
        "‘Who performs this’ shown clearly",
        "Recovery time and aftercare answered",
      ],
    },
    {
      eyebrow: "Booking",
      title: "Real online booking, not a contact-us form.",
      body: "A modern booking flow picks the visit type, finds a time, captures insurance and contact info, and ends with a confirmation email. The widget is mobile-first and works without an account.",
      highlights: [
        "Choose visit type → time → details",
        "Confirmation email + calendar attach",
        "Reschedule link in the confirmation",
      ],
    },
    {
      eyebrow: "Trust",
      title: "Team, credentials, and reviews — in that order.",
      body: "Photos of the doctors and hygienists, school and licensure, and verified reviews. Patients are choosing a person, not just a clinic; the page treats it that way.",
      highlights: [
        "Doctor and hygienist bios",
        "Schools, licenses, board certifications",
        "Verified Google reviews embed",
      ],
    },
    {
      eyebrow: "Gallery",
      title: "Before-and-after, the way a dentist would present it.",
      body: "Smile galleries grouped by case type (whitening, veneers, alignment). Each pair includes the treatment, the time elapsed, and any caveats. Honest visual proof, not a stock library.",
      highlights: [
        "Case-type filter",
        "Treatment + timeline noted",
        "No stock smiles — patient-permission gallery",
      ],
    },
    {
      eyebrow: "FAQ",
      title: "First-visit logistics, insurance, financing.",
      body: "The biggest blockers to booking a dentist aren’t clinical — they’re logistical. The FAQ answers them in plain English and earns rich-result eligibility through schema.",
      highlights: [
        "What to bring on your first visit",
        "Insurance and financing answered",
        "FAQ schema for rich results",
      ],
    },
  ],
  leadFlow: {
    title: "How a new patient becomes a booked visit.",
    body: "The page treats the booking flow as the first appointment, not a sales funnel. Each step removes friction the patient was about to feel.",
    steps: [
      {
        label: "01",
        title: "Patient picks a procedure or visit type",
        body: "Cleaning, cosmetic, restorative, emergency. The shape of the visit decides what’s asked next.",
      },
      {
        label: "02",
        title: "Time and insurance",
        body: "The visitor picks a slot and confirms an in-network carrier. Out-of-network patients still see prices.",
      },
      {
        label: "03",
        title: "Booking + confirmation",
        body: "A confirmation email lands instantly. A separate notification reaches the front desk.",
      },
      {
        label: "04",
        title: "Reminder + arrival flow",
        body: "Day-before reminder by email or SMS. New-patient packet attached.",
      },
    ],
  },
  features: [
    { label: "Online booking widget", included: true, note: "Cal.com / Calendly style" },
    { label: "Procedure pages with pricing", included: true },
    { label: "Doctor and team bios", included: true },
    { label: "Smile gallery", included: true, note: "Patient-permission" },
    { label: "Reviews + trust block", included: true },
    { label: "New patient intake form", included: true },
    { label: "Insurance carrier list", included: true },
    { label: "FAQ + schema", included: true },
    { label: "AI booking / intake assistant", included: false, note: "Optional add-on" },
    { label: "Monthly care plan", included: true, note: "From $99/month" },
  ],
  whyItWorks: {
    title: "Why this structure works for dental practices.",
    body: "Dentistry is high-trust, high-friction, and high-intent. Patients are deciding on a person and a process at the same time. A site that answers logistical questions first wins more bookings than one that tries to sell craftsmanship.",
    points: [
      "Insurance and booking surface above the fold.",
      "Procedure pages let patients self-qualify before booking.",
      "Booking is a real widget, not a contact form.",
      "Team and credentials are presented as people, not titles.",
      "FAQ is patient-led, not marketing-led.",
    ],
  },
  meta: {
    title: "Dental Website Concept · Martin Web Works",
    description:
      "Concept walkthrough of a modern dental practice website built around online booking, procedure pricing, and verified trust. Designed by Martin Web Works.",
  },
};

const LAW_FIRM: ExampleConcept = {
  slug: "law-firm-website-concept",
  baseSlug: "rivermark-law",
  industryLabel: "Law-firm website",
  industryShort: "law firms",
  hero: {
    eyebrow: "Concept example · Not a real client",
    headline: "A solo law-firm website that earns trust before the first call.",
    lead: "Most small law-firm websites speak to other attorneys. A prospective client wants to understand their situation, see whether the firm handles it, and confirm a real human will reply within a day. This concept is built for that visitor.",
    primaryCtaInPage: "Book Free Website Audit",
    siteTagline: "Estate planning that protects what you have built.",
    siteCta: "Schedule a confidential 15-minute call",
    services: ["Wills & Trusts", "Probate", "Power of Attorney"],
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
    title: "Why this structure works for solo attorneys.",
    body: "Solo practitioners win on judgment and presence, not on logos. The site’s job is to communicate both — quietly, deliberately, and without sounding like an agency template.",
    points: [
      "Practice area named in the headline.",
      "Attorney page reads like a person, not a CV.",
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

export const EXAMPLE_CONCEPTS: ExampleConcept[] = [ROOFING, DENTAL, LAW_FIRM];

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
