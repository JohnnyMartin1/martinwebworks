/**
 * Industry landing pages.
 *
 * See SEO_CONTENT.md for the full content system, voice rules, and rules
 * about draft entries.
 *
 * Drafts:
 *  - `draft: true` entries are not rendered at their URL (404)
 *  - not included in the sitemap
 *  - not linked from /industries
 *  - not shown in related-industry blocks
 */

export type IndustryFaq = { question: string; answer: string };

export type IndustryLeadField = {
  field: string;
  rationale: string;
};

export type IndustryRecommendedPage = {
  title: string;
  note: string;
};

export type IndustryMockupSettings = {
  /** Domain shown in the browser frame. Treated as concept, not real. */
  domain: string;
  /** Brand label inside the mockup header. */
  brandLabel: string;
  /** A few short nav items in the mockup. */
  navItems: string[];
  /** Hero headline inside the mockup. */
  heroHeadline: string;
  /** Sub-line under the mockup headline. */
  heroSubhead: string;
  /** Primary button label inside the mockup. */
  primaryAction: string;
  /** Secondary button label inside the mockup. */
  secondaryAction: string;
  /** Three short service cards rendered in the mockup. */
  services: { label: string; note: string }[];
  /** Inline trust strip below the hero. */
  trustStrip: string[];
  /** The form title rendered to the right of the hero on desktop. */
  formTitle: string;
  /** Three placeholder form rows shown inside the mockup form. */
  formRows: string[];
  /** A short reassurance line under the form button. */
  formNote: string;
};

type BaseIndustry = {
  slug: string;
  industryName: string;
  pluralName: string;
};

export type DraftIndustry = BaseIndustry & {
  draft: true;
};

export type PublishedIndustry = BaseIndustry & {
  draft?: false;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  searchIntent: string;
  whatCustomersNeed: string[];
  recommendedPages: IndustryRecommendedPage[];
  leadCaptureFields: IndustryLeadField[];
  trustSignals: string[];
  localSeoIdeas: string[];
  commonMistakes: string[];
  recommendedPackage: {
    slug: "starter" | "growth" | "authority";
    why: string;
  };
  suggestedFeatures: string[];
  faqs: IndustryFaq[];
  relatedIndustries: string[];
  relatedResources: string[];
  mockup: IndustryMockupSettings;
  ctaHeadline: string;
};

export type IndustryEntry = DraftIndustry | PublishedIndustry;

export function isPublished(entry: IndustryEntry): entry is PublishedIndustry {
  return entry.draft !== true;
}

/* ============================================================
   Entries
   ============================================================ */

export const INDUSTRIES: IndustryEntry[] = [
  /* ---------- Roofers (published) ---------- */
  {
    slug: "roofers",
    industryName: "Roofer",
    pluralName: "Roofers",
    metaTitle: "Websites for Roofers",
    metaDescription:
      "Roofing websites that turn storm-damage searches into quote requests. Clear services, fast mobile, trust signals, and a simple way to request an estimate. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for roofers that turn storm-damage searches into quote requests.",
    heroSubtext:
      "Your roofing website should make it easy for homeowners to understand your services, trust your work, and request an estimate without hunting for your phone number.",
    searchIntent:
      "Owners typing 'websites for roofers' or 'roofing contractor website design' are usually mid-job-season, looking to replace a stale site that has stopped producing quote requests.",
    whatCustomersNeed: [
      "Do you handle repairs, replacements, or both?",
      "Do you work with storm and insurance claims?",
      "What areas and zip codes do you actually cover?",
      "Can they request a quote in under a minute on a phone?",
      "Do you have photos of past roofs you have done?",
      "Are you licensed and insured, and how do they verify that?",
      "What happens after they hit submit?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Phone number, service area, one primary photo, and a clear quote button above the fold.",
      },
      {
        title: "Services",
        note: "Repairs, full replacement, storm damage, gutters. One short paragraph each.",
      },
      {
        title: "Storm damage and insurance claims",
        note: "Plain-English page on how a typical claim works, what you handle, what the homeowner does.",
      },
      {
        title: "Service area pages",
        note: "Real pages for the actual cities or counties you cover. Not fifty thin SEO clones.",
      },
      {
        title: "Project gallery",
        note: "Before-and-after photos of real jobs, with city and roof type captions.",
      },
      {
        title: "About and licensing",
        note: "License number, insurance, manufacturer certifications, photo of the crew.",
      },
      {
        title: "Quote request",
        note: "Short form. Phone, address, what is wrong. Photo upload optional, not required.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required. Keep it first; do not start with the address field." },
      { field: "Phone", rationale: "Most roofing leads are urgent. Phone matters more than email." },
      { field: "Property address or ZIP", rationale: "Confirms you actually serve them before you call back." },
      { field: "Service needed", rationale: "Repair, replacement, gutters, storm damage, not sure. A short select, not a long list." },
      { field: "Roof issue (short)", rationale: "One open text field. Skip if it slows the form down on mobile." },
      { field: "Storm or insurance question", rationale: "Yes/no toggle. Helps you route the lead correctly." },
      { field: "Photo upload (optional)", rationale: "Optional. Useful, but never required on first contact." },
    ],
    trustSignals: [
      "License number visible in the footer and on the contact page",
      "General liability and workers' comp insurance, stated plainly",
      "Manufacturer certifications, with logos at small size, not banner size",
      "Real photos of completed roofs, not stock imagery",
      "Crew or owner photo on the About page",
      "Years in business, stated honestly",
      "Honest service-area map, not a 50-mile radius marketing claim",
      "Storm response or emergency policy, in writing",
    ],
    localSeoIdeas: [
      "Title tag on the homepage should read like 'Roofing in [City] · [Business Name].' Plain, not stuffed.",
      "Build one service-area page per city you actually cover. Real content per page, not a template with the city swapped in.",
      "Mirror the business name, phone number, and address on the site exactly as they appear on the Google Business Profile.",
      "Add internal links from service-area pages to the relevant service pages (repair, replacement, storm).",
      "Use real review excerpts on the site only when you have permission; do not invent ratings.",
      "Keep photos at sensible file sizes; a 5 MB hero photo hurts mobile speed and local rankings.",
    ],
    commonMistakes: [
      "Phone number buried in the footer instead of pinned to the header on mobile",
      "No quote form at all, only an email address",
      "No mobile click-to-call wiring on the phone number",
      "No service-area pages, so Google has nothing to anchor your local ranking to",
      "Outdated photos from a 2017 site refresh",
      "Generic service list copied from a template",
      "Slow load times because of one giant hero video",
      "No proof of license or insurance anywhere on the site",
      "Form fields the homeowner cannot answer at 9pm in their kitchen",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most roofers need service pages, storm-damage explanations, a real quote form, reviews, and a project gallery. That is exactly what the Growth Website is shaped for. Starter is too thin once storm season hits; Authority is overkill unless you also run multiple crews or service multiple states.",
    },
    suggestedFeatures: [
      "Sticky click-to-call on mobile",
      "Quote form on every service page",
      "Storm-response page",
      "Service-area pages for real cities",
      "Project gallery with city captions",
      "License and insurance footer block",
      "Reviews section (Google embed or quoted with permission)",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Do you build roofing websites that work for both retail and storm-restoration work?",
        answer:
          "Yes. Most roofers do both, and the site usually needs to explain the difference clearly. We build a normal services structure for retail work and a separate storm or insurance-claim page that walks the homeowner through what you handle, what their insurance company handles, and what the typical timeline looks like.",
      },
      {
        question: "How long does a roofing website take to build?",
        answer:
          "About three to six weeks for the Growth Website, depending on how quickly you can send photos, your service list, and your service-area cities. We do not start the timer until we have what we need from you.",
      },
      {
        question: "Will the site work for after-hours leads from storm calls?",
        answer:
          "Yes. The form lands in your inbox the moment it is submitted. We also set up the click-to-call so a homeowner can dial you from the site without typing the number. After-hours behavior is up to you (route to a partner, voicemail with a 9am callback note, etc).",
      },
      {
        question: "Do you handle the photos?",
        answer:
          "We do not shoot photos for you. We use the photos you already have, organize them, and explain which kinds of photos would help most if you want to grab a few more on your next job site.",
      },
    ],
    relatedIndustries: ["contractors", "electricians"],
    relatedResources: [
      "website-not-getting-leads",
      "get-more-quote-requests",
      "service-area-pages-local-seo",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "summitridgeroofing.com",
      brandLabel: "Summit Ridge Roofing",
      navItems: ["Services", "Storm", "Areas", "Reviews", "Quote"],
      heroHeadline: "Roofing in Loudoun County, done once and done right.",
      heroSubhead:
        "Repairs, full replacements, and storm-damage claims. Licensed, insured, and on time.",
      primaryAction: "Request Free Estimate",
      secondaryAction: "Call (703) 555-0144",
      services: [
        { label: "Roof repair", note: "Same-week scheduling for most repairs." },
        { label: "Full replacement", note: "Architectural shingle, metal, slate." },
        { label: "Storm damage", note: "We walk you through the claim end to end." },
      ],
      trustStrip: [
        "Licensed in VA",
        "GAF Master Elite",
        "Insured",
        "12+ years",
      ],
      formTitle: "Get a free estimate",
      formRows: ["Your name", "ZIP or address", "What is going on?"],
      formNote: "We reply same business day. No drive-by sales pitch.",
    },
    ctaHeadline:
      "Want a roofing website built around how your customers actually search and contact you?",
  },

  /* ---------- Contractors (published) ---------- */
  {
    slug: "contractors",
    industryName: "Contractor",
    pluralName: "Contractors",
    metaTitle: "Websites for General Contractors and Home Remodelers",
    metaDescription:
      "Websites for general contractors and home remodelers that show real project photos, explain your process, and turn slow-burning research into qualified estimate requests.",
    heroHeadline:
      "Websites for general contractors that turn slow research into qualified estimate requests.",
    heroSubtext:
      "A remodel is a months-long decision. Your website is the part that proves you can be trusted before anyone picks up the phone.",
    searchIntent:
      "Homeowners researching a kitchen or addition compare three to five contractors before contacting any of them. The website is the silent screening round.",
    whatCustomersNeed: [
      "What kinds of work do you actually take on?",
      "Are you a one-person operator, or a crew?",
      "What is the typical project size you handle?",
      "How does the process work, from estimate to punch list?",
      "What does the budget conversation look like?",
      "Can they see real projects you have completed?",
      "How do you handle change orders, timelines, and surprises?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "One strong project photo, what you actually do, and a clear path to start a project conversation.",
      },
      {
        title: "Services",
        note: "Whole-home, kitchens, baths, additions, basements. Don't promise everything; be specific.",
      },
      {
        title: "Process",
        note: "How an estimate, design, build, and punch-list actually work in your shop.",
      },
      {
        title: "Past projects",
        note: "5 to 12 real projects with photos, location, scope, and what was challenging.",
      },
      {
        title: "About",
        note: "Who you are, what you trained as, how long you have been doing this, who else is on the crew.",
      },
      {
        title: "Reviews",
        note: "Real reviews, quoted with attribution. Or a Google embed.",
      },
      {
        title: "Start a project",
        note: "A short intake form. Not a quote calculator.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required, first." },
      { field: "Email", rationale: "Most remodel research happens at 10pm, not on a phone." },
      { field: "Phone", rationale: "Optional, but most owners will fill it." },
      { field: "Property city / ZIP", rationale: "Pre-qualifies the lead for service area." },
      { field: "Project type", rationale: "Kitchen, bath, addition, whole-home, not sure yet. Short select." },
      { field: "Rough budget range", rationale: "Helps both sides. Not a hard filter; a clarifier." },
      { field: "Timeline", rationale: "ASAP, 3 to 6 months, 6 to 12 months, exploring. Sets expectations." },
      { field: "Short description", rationale: "One open text field. Where most of the value lives." },
    ],
    trustSignals: [
      "Real project photos with location and scope captions",
      "Crew or owner photo, not stock",
      "Years in business, stated plainly",
      "License number and insurance in the footer",
      "Process page that admits projects have surprises",
      "Reviews quoted with attribution, with permission",
      "Honest service area, not 'the whole tri-state region'",
      "Membership in real associations only (NARI, NAHB, etc), where applicable",
    ],
    localSeoIdeas: [
      "Title tag should read like 'Home remodeling in [City] · [Business Name].' Avoid 'best,' 'top,' 'premier.'",
      "Build one page per major project type (kitchens, baths, additions) before adding more service-area pages.",
      "Use project pages with city captions to capture long-tail location-plus-type searches naturally.",
      "Mirror NAP (name, address, phone) exactly across the site, Google Business Profile, and any directory listings.",
      "Add internal links from each project page back to the relevant service page.",
    ],
    commonMistakes: [
      "Trying to look like a national brand instead of a real local crew",
      "Promising 'on time, on budget, every time'",
      "Stock photos of nice kitchens you did not build",
      "Process page that is six bullets and a stock photo",
      "No real budget range, anywhere on the site",
      "Reviews section with three suspiciously identical testimonials",
      "Contact form that asks 14 questions before letting you submit",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most contractors need a real services section, a process page, a project gallery, and an intake form that respects the homeowner's time. The Growth Website covers that cleanly. Authority is worth considering only if you handle multi-million-dollar custom builds with several active simultaneously.",
    },
    suggestedFeatures: [
      "Project gallery with captions",
      "Service pages with internal links to projects",
      "Real process page, not a six-icon strip",
      "Intake form with budget and timeline",
      "Reviews section",
      "Footer block: license, insurance, associations",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Do you write the project descriptions for me?",
        answer:
          "We will draft them from a short conversation about each project, and you edit. Most contractors are not writers, and most writers do not know what a punch list is. The drafts give us both a starting point.",
      },
      {
        question: "Can you set up a budget range on the form?",
        answer:
          "Yes, but it goes on the intake form, not on the public pages. A site that advertises specific dollar figures usually attracts the wrong leads. The intake form is where the budget conversation actually belongs.",
      },
      {
        question: "How many projects should be on the site at launch?",
        answer:
          "Five to eight strong projects is better than twenty thin ones. We can add more after launch through the monthly care plan, as you finish new ones.",
      },
    ],
    relatedIndustries: ["roofers", "electricians", "landscapers"],
    relatedResources: [
      "website-not-getting-leads",
      "get-more-quote-requests",
      "local-business-website-checklist",
      "website-checklist-before-ads",
    ],
    mockup: {
      domain: "northbendbuilders.com",
      brandLabel: "North Bend Builders",
      navItems: ["Services", "Projects", "Process", "About", "Start"],
      heroHeadline: "Kitchens, baths, and additions, built by the same crew start to finish.",
      heroSubhead:
        "Locally owned, in business since 2011. We handle one project at a time, on a real schedule.",
      primaryAction: "Start a Project",
      secondaryAction: "See Recent Projects",
      services: [
        { label: "Kitchens", note: "Layout changes, cabinets, full remodels." },
        { label: "Bathrooms", note: "Walk-in showers, layout reworks, tile." },
        { label: "Additions", note: "Single-story additions, primary suites." },
      ],
      trustStrip: ["Licensed", "Insured", "NARI member", "Since 2011"],
      formTitle: "Start your project",
      formRows: [
        "Name and email",
        "Project type",
        "Rough budget and timeline",
      ],
      formNote: "We respond within one business day with next steps.",
    },
    ctaHeadline:
      "Want a contractor website that earns a homeowner's trust before they fill out a single form?",
  },

  /* ---------- Electricians (published) ---------- */
  {
    slug: "electricians",
    industryName: "Electrician",
    pluralName: "Electricians",
    metaTitle: "Websites for Electricians",
    metaDescription:
      "Electrician websites that surface the phone number, explain panel and service work, and turn emergency searches into scheduled service calls. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for electricians that turn emergency searches into scheduled service calls.",
    heroSubtext:
      "Half of your traffic is searching at 7pm on a phone with a flickering outlet in the kitchen. Your website should make it absurdly easy to call you, schedule you, or trust you in under thirty seconds.",
    searchIntent:
      "Searches like 'electrician near me,' 'panel upgrade [city],' and 'EV charger installation' arrive in two waves: urgent troubleshooting and planned service upgrades. The site has to handle both without becoming a wall of services.",
    whatCustomersNeed: [
      "Can they call you with one tap?",
      "Do you handle their specific problem (panel, EV, generator, knob-and-tube, lighting)?",
      "Are you licensed and insured?",
      "Do you offer same-day or after-hours service?",
      "What areas do you cover?",
      "Will they get a flat estimate or hourly billing?",
      "What does the visit look like?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Phone first. Service icons second. One photo of you in a truck or panel.",
      },
      {
        title: "Services",
        note: "Panel upgrades, EV chargers, generators, lighting, troubleshooting, code corrections.",
      },
      {
        title: "Emergency / after-hours",
        note: "Plain-English page on what you treat as an emergency and how to reach you.",
      },
      {
        title: "Service area pages",
        note: "Real pages for cities you actually drive to.",
      },
      {
        title: "About",
        note: "License number, years in business, who answers the phone.",
      },
      {
        title: "Reviews",
        note: "Real reviews with permission, or a Google embed.",
      },
      {
        title: "Schedule or quote",
        note: "Short form for non-urgent jobs. A big phone button for urgent ones.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required, first." },
      { field: "Phone", rationale: "Most electrician leads convert better by phone than email." },
      { field: "Address or ZIP", rationale: "Pre-qualifies service area." },
      { field: "Service type", rationale: "Panel, EV, generator, troubleshooting, lighting, other. A select, not free text." },
      { field: "Urgency", rationale: "Today, this week, this month, flexible. Routes the lead correctly." },
      { field: "Short description", rationale: "One open field. Optional photo upload if you want it." },
    ],
    trustSignals: [
      "License number in the footer and on contact",
      "Insurance carrier statement",
      "Truck or van photo (real)",
      "Years in business",
      "Service area, stated plainly",
      "Pricing posture: flat-rate vs hourly, explained in one line",
      "Photo of the owner or lead tech",
    ],
    localSeoIdeas: [
      "Title tag: 'Electrician in [City] · [Business Name].' Avoid stuffing.",
      "Build service-area pages for the cities you genuinely cover, with one paragraph about local context (older homes, common panel issues, EV chargers, etc).",
      "Add page-level FAQs that answer the things people actually call about (cost of a panel upgrade, what kinds of EV chargers you install).",
      "Make sure the Google Business Profile lists the same service categories your site does.",
    ],
    commonMistakes: [
      "Phone number not pinned to the mobile header",
      "No service-area pages, just one 'we serve the tri-state' line",
      "Generic 'lighting solutions' copy that does not mention any actual service",
      "Quote forms that ask twelve questions before you can submit",
      "No mention of license number anywhere",
      "Big hero photo of a chandelier when 90% of the work is panels and outlets",
      "Slow load times because of unoptimized truck photos",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Electricians need real service pages, a clear after-hours story, service-area pages, and a phone-first mobile layout. Growth handles that. Starter is too thin for the service breadth most electricians offer.",
    },
    suggestedFeatures: [
      "Sticky click-to-call on mobile",
      "Service pages with FAQs",
      "Emergency/after-hours page",
      "Service-area pages",
      "Reviews section",
      "Short scheduling form",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site route emergency calls differently from non-urgent leads?",
        answer:
          "Yes. The form lets the customer flag urgency, which can route to a different inbox or trigger a faster response on your side. For truly urgent calls, the click-to-call button is faster than any form, so we put that front and center on mobile.",
      },
      {
        question: "Do I need service-area pages for every town I cover?",
        answer:
          "Only for the cities you actually drive to and want to be found in. A page per real city is useful. Fifty thin pages for towns you never visit is the kind of SEO move that hurts rather than helps.",
      },
      {
        question: "Will the site keep my license number current?",
        answer:
          "Yes, that is part of the monthly care plan. When you renew, send us the new expiration; we update the footer and any service pages where it appears.",
      },
    ],
    relatedIndustries: ["plumbers", "contractors", "roofers"],
    relatedResources: [
      "get-more-quote-requests",
      "service-area-pages-local-seo",
      "mobile-website-local-business",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "blueoakelectric.com",
      brandLabel: "Blue Oak Electric",
      navItems: ["Services", "EV", "Areas", "Reviews", "Schedule"],
      heroHeadline: "Licensed electrician serving Arlington and Falls Church.",
      heroSubhead:
        "Panel upgrades, EV chargers, generators, and the small stuff most electricians no longer take.",
      primaryAction: "Schedule a Visit",
      secondaryAction: "Call (571) 555-0118",
      services: [
        { label: "Panel upgrades", note: "200A standard, generator-ready optional." },
        { label: "EV chargers", note: "Tesla, ChargePoint, JuiceBox installs." },
        { label: "Troubleshooting", note: "Outlets, breakers, weird buzzing." },
      ],
      trustStrip: ["VA Master Electrician", "Insured", "10+ years"],
      formTitle: "Tell us what is going on",
      formRows: ["Name and phone", "Address or ZIP", "What needs help?"],
      formNote: "Same-day response on most service requests.",
    },
    ctaHeadline:
      "Want an electrician website built around how people actually call, search, and schedule?",
  },

  /* ---------- Plumbers (published) ---------- */
  {
    slug: "plumbers",
    industryName: "Plumber",
    pluralName: "Plumbers",
    metaTitle: "Websites for Plumbers",
    metaDescription:
      "Plumbing websites that handle emergency calls, explain repairs and replacements clearly, and turn 'water heater leaking' searches into booked service. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for plumbers that turn 2am emergency searches into booked service.",
    heroSubtext:
      "Half your leads search with a wet floor in the background. Your site has to load fast, explain what you fix, and let them call you with one tap.",
    searchIntent:
      "Searches divide between 'plumber near me' urgency and planned-replacement research like 'tankless water heater installation [city].' The page has to handle both without burying the phone number.",
    whatCustomersNeed: [
      "Can they call you in one tap?",
      "Do you handle their problem (clogs, water heaters, leaks, sewer lines, repipes)?",
      "Do you do emergency calls, and what counts as one?",
      "Are you licensed and insured?",
      "Are you available now, or by appointment?",
      "What areas do you cover?",
      "How is pricing handled (diagnostic fee, flat rate, estimates)?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Phone number first. One photo of you or the van. Three service tiles.",
      },
      {
        title: "Services",
        note: "Drains, water heaters, leak repair, sewer, repipes. One service page each is fine.",
      },
      {
        title: "Emergency plumbing",
        note: "What counts as an emergency, how to reach you, and a realistic response window.",
      },
      {
        title: "Service area pages",
        note: "Real cities only. Each page has a paragraph that mentions actual local plumbing patterns.",
      },
      {
        title: "About / license",
        note: "Master plumber license, insurance, who is on the truck.",
      },
      {
        title: "Reviews",
        note: "Real, with permission, or a Google embed.",
      },
      {
        title: "Schedule or quote",
        note: "Short form for non-urgent. Click-to-call front and center for urgent.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required, first." },
      { field: "Phone", rationale: "Plumbing is a phone-first lead category." },
      { field: "Address or ZIP", rationale: "Service-area gate and routing hint." },
      { field: "Service type", rationale: "Clog, water heater, leak, sewer, other. A short select." },
      { field: "Urgency", rationale: "Right now, today, this week, scheduling ahead." },
      { field: "Short description", rationale: "One open field, with optional photo upload." },
    ],
    trustSignals: [
      "Master plumber license number in the footer",
      "Insurance statement",
      "Real photo of the truck or owner",
      "Years in business",
      "Service area, plainly stated",
      "Pricing posture, in one line (diagnostic fee, flat-rate, estimate-based)",
    ],
    localSeoIdeas: [
      "Title tag: 'Plumber in [City] · [Business Name].'",
      "Service-area pages for real cities, each with a paragraph about local plumbing realities (well water, old galvanized pipes, frozen-pipe season).",
      "Reviews on the Google Business Profile carry more weight than reviews on the website. Both matter; pick what you can actually maintain.",
      "Watch your page speed; one oversized photo of a wrench can sink mobile performance.",
    ],
    commonMistakes: [
      "Phone number buried in a contact page",
      "No emergency page",
      "Service area listed as 'the entire DMV' instead of actual cities",
      "Generic 'plumbing solutions' copy with no real services named",
      "Diagnostic fee policy that is not visible until the customer is already on the phone",
      "Forms with twelve fields when three would have worked",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Plumbers need real service pages, an emergency story, service-area pages, and phone-first mobile design. Growth covers that cleanly. Starter is too thin.",
    },
    suggestedFeatures: [
      "Sticky click-to-call on mobile",
      "Emergency / after-hours page",
      "Service-area pages",
      "Reviews section",
      "Short scheduling form",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Can you put my diagnostic fee on the site?",
        answer:
          "Yes, and we recommend it. Customers who see a $79 diagnostic fee on the site and still book are far better leads than the ones who feel ambushed by it on the phone. It also reduces tire-kicker calls.",
      },
      {
        question: "Do you handle plumbing websites with after-hours routing?",
        answer:
          "We do not run a call center, but we can wire your contact form to mark urgent submissions and route them to a separate inbox or a phone-friendly endpoint you choose.",
      },
      {
        question: "How quickly can a plumbing website like this be live?",
        answer:
          "Three to six weeks for the Growth Website. Often faster if you have your photos and service list ready.",
      },
    ],
    relatedIndustries: ["electricians", "roofers", "contractors"],
    relatedResources: [
      "mobile-website-local-business",
      "service-area-pages-local-seo",
      "get-more-quote-requests",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "ridgeviewplumbing.com",
      brandLabel: "Ridgeview Plumbing",
      navItems: ["Services", "Emergency", "Areas", "Reviews", "Call"],
      heroHeadline: "Master plumber serving Arlington and Alexandria.",
      heroSubhead:
        "Water heaters, drains, leaks, and sewer lines. Real estimates, no surprise pricing.",
      primaryAction: "Schedule Service",
      secondaryAction: "Call (703) 555-0177",
      services: [
        { label: "Water heaters", note: "Tank and tankless installs and repairs." },
        { label: "Drains and sewer", note: "Camera inspections and unclogging." },
        { label: "Leak repair", note: "Slab, kitchen, and bathroom leaks." },
      ],
      trustStrip: ["VA Master Plumber", "Insured", "Same-day"],
      formTitle: "Book a visit",
      formRows: ["Name and phone", "Address or ZIP", "What is going on?"],
      formNote: "$79 diagnostic, applied to the repair.",
    },
    ctaHeadline:
      "Want a plumbing website that handles emergency calls and planned replacements without confusing either?",
  },

  /* ---------- Landscapers (published) ---------- */
  {
    slug: "landscapers",
    industryName: "Landscaper",
    pluralName: "Landscapers",
    metaTitle: "Websites for Landscapers and Lawn Care Businesses",
    metaDescription:
      "Landscaping and lawn care websites that show real project work, structure seasonal services clearly, and turn spring quote searches into booked routes.",
    heroHeadline:
      "Websites for landscapers that turn spring quote searches into booked routes.",
    heroSubtext:
      "Landscaping is seasonal, visual, and trust-based. Your website should show real work, explain what you actually maintain, and make it easy to get on next year's schedule.",
    searchIntent:
      "Searches like 'landscaper near me,' 'lawn care [city],' 'paver patio installation,' and 'mulch delivery' arrive in waves. Spring is the spike; the rest of the year is research.",
    whatCustomersNeed: [
      "Do you do maintenance, design and install, or both?",
      "Can they see real projects (front yards, beds, hardscape, patios)?",
      "What is the actual service area?",
      "Is service contract-based, one-time, or both?",
      "What is the typical price range?",
      "How does the seasonal schedule work?",
      "Are you insured?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "One strong project photo. Three service tiles. A clear path to request a quote.",
      },
      {
        title: "Maintenance services",
        note: "Mowing, edging, cleanup, mulch, seasonal programs.",
      },
      {
        title: "Design and install",
        note: "Beds, plantings, patios, walls, walkways. With photos.",
      },
      {
        title: "Project gallery",
        note: "Real before-and-after photos with neighborhood captions.",
      },
      {
        title: "Service area",
        note: "Actual cities and neighborhoods. Not 'all of Northern Virginia.'",
      },
      {
        title: "About",
        note: "Who you are, how long the crew has been together.",
      },
      {
        title: "Quote / schedule",
        note: "Different forms make sense for maintenance and install requests.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required." },
      { field: "Email", rationale: "Most landscaping research is desktop and email-driven." },
      { field: "Phone", rationale: "Optional but helpful for scheduling visits." },
      { field: "Property address", rationale: "Helps the route planner and the estimator." },
      { field: "Service type", rationale: "Maintenance, install, hardscape, cleanup. A short select." },
      { field: "Frequency", rationale: "One-time, weekly, bi-weekly, monthly, not sure." },
      { field: "Notes", rationale: "Open text field for specifics (slope, dog gate, etc)." },
    ],
    trustSignals: [
      "Real before-and-after project photos",
      "Insurance statement",
      "Years in business",
      "Crew or owner photo",
      "Service area in plain language",
      "Honest seasonal availability statement",
    ],
    localSeoIdeas: [
      "Title tag: '[City] landscaping and lawn care · [Business Name].'",
      "One project page per neighborhood / city you have worked in, with photos and a paragraph.",
      "Use seasonal posts or page additions through the monthly care plan rather than launching 50 thin city pages.",
      "Map the Google Business Profile services to your site services so they reinforce each other.",
    ],
    commonMistakes: [
      "Stock photos of perfect lawns that look nothing like the work you actually do",
      "No real project photos, only generic clipart",
      "Service area listed as 'the entire metro area'",
      "Same form for one-time mulch delivery and a $20,000 hardscape design",
      "No seasonal availability disclosure (booked through July, etc)",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most landscapers need service pages, a real project gallery, and at least two intake paths. Growth Website covers that. Authority is worth considering only if you run multiple crews or design-build a high-volume of large projects per season.",
    },
    suggestedFeatures: [
      "Project gallery with captions",
      "Separate intake forms for maintenance vs install",
      "Service-area page or list",
      "Seasonal availability notice in the header or footer",
      "Reviews section",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site show a different intake form for maintenance versus design-build?",
        answer:
          "Yes. They are completely different conversations. One is a route question; the other is a design and budget conversation. We make both forms easy to find, with different fields and different copy.",
      },
      {
        question: "Should I show pricing on the site?",
        answer:
          "Most landscapers benefit from a starting-price range (e.g. 'weekly maintenance starts at $X per visit, $Y per month'). It pre-qualifies leads and reduces the back-and-forth on email.",
      },
      {
        question: "Will the site handle off-season slowdowns?",
        answer:
          "Yes. We can add a seasonal note at the top of the site, swap the homepage CTA to a fall cleanup or holiday lighting service, and update the schedule through the monthly care plan.",
      },
    ],
    relatedIndustries: ["contractors", "roofers", "auto-detailers"],
    relatedResources: [
      "service-area-pages-local-seo",
      "get-more-quote-requests",
      "local-business-website-checklist",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "stonefieldlandscape.com",
      brandLabel: "Stonefield Landscape",
      navItems: ["Maintenance", "Design", "Projects", "Areas", "Quote"],
      heroHeadline: "Lawn care and landscape design across Arlington and McLean.",
      heroSubhead:
        "Weekly maintenance, paver patios, garden beds, and small-yard transformations.",
      primaryAction: "Request a Quote",
      secondaryAction: "See Recent Projects",
      services: [
        { label: "Weekly maintenance", note: "Mow, edge, blow, beds tended." },
        { label: "Paver patios", note: "Design, install, and small additions." },
        { label: "Bed renovation", note: "Cleanup, new plantings, mulching." },
      ],
      trustStrip: ["Insured", "Local crew", "8+ years"],
      formTitle: "Get a free estimate",
      formRows: ["Name and email", "Property address", "What kind of work?"],
      formNote: "Spring slots fill fast. We reply within one business day.",
    },
    ctaHeadline:
      "Want a landscaping website built around how your customers actually search through the seasons?",
  },

  /* ---------- Auto Detailers (published) ---------- */
  {
    slug: "auto-detailers",
    industryName: "Auto Detailer",
    pluralName: "Auto Detailers",
    metaTitle: "Websites for Auto Detailers",
    metaDescription:
      "Auto detailing websites that show clean before-and-afters, structure packages clearly, and turn detailing searches into booked appointments.",
    heroHeadline:
      "Websites for auto detailers that turn before-and-after photos into booked appointments.",
    heroSubtext:
      "Detailing is a visual business. Your site should let a customer pick a package, see real work, and book a slot in under a minute.",
    searchIntent:
      "Searches like 'auto detailing [city],' 'mobile detailing near me,' 'ceramic coating [city]' arrive year-round. Showroom-clean photos and clear packages convert better than long copy.",
    whatCustomersNeed: [
      "What packages do you offer (interior, exterior, full, ceramic)?",
      "Is service at your shop or mobile?",
      "Can they see real before-and-afters?",
      "What does each package include?",
      "How long does each service take?",
      "What is the price range?",
      "How do they book?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Hero photo of a polished car. Three package cards. One booking CTA.",
      },
      {
        title: "Packages",
        note: "Interior, exterior, full, ceramic, monthly maintenance. Each with what is included, time, and starting price.",
      },
      {
        title: "Gallery",
        note: "Real before-and-after photos with vehicle and package captions.",
      },
      {
        title: "Mobile or shop",
        note: "Where you work, and any difference in availability or pricing.",
      },
      {
        title: "About",
        note: "Who you are, what you trained on, what products you use.",
      },
      {
        title: "Booking",
        note: "Simple booking form. Calendar integration when you are ready.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required." },
      { field: "Phone or email", rationale: "Whichever the customer prefers. Phone wins for mobile detailing." },
      { field: "Vehicle", rationale: "Year, make, model. A short text field works." },
      { field: "Package", rationale: "Interior, exterior, full, ceramic, maintenance. A short select." },
      { field: "Preferred date", rationale: "A simple date picker, not a calendar widget." },
      { field: "Address (mobile)", rationale: "Only if you do mobile work." },
    ],
    trustSignals: [
      "Real before-and-after photos",
      "Products you use (Gtechniq, CarPro, Adam's, etc) listed honestly",
      "Years in business",
      "Insurance for mobile work",
      "Owner photo and a real story",
      "Honest pricing",
    ],
    localSeoIdeas: [
      "Title tag: '[City] auto detailing · [Business Name].'",
      "One page per major service (interior, exterior, ceramic) with photos and pricing.",
      "If you do mobile, add a page that explains the service-area boundary plainly.",
      "Use the Google Business Profile photo upload feature regularly; detailing converts on photos.",
    ],
    commonMistakes: [
      "Stock photos of cars you did not detail",
      "No clear pricing or starting price",
      "Booking buried behind a contact form with no calendar",
      "Mobile vs shop confusion (no clear explanation of which one you do)",
      "Heavy hero video that kills mobile load time",
      "Generic 'we make your car like new' copy with no specifics",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most auto detailers need real package pages, a strong gallery, a booking flow, and a clean mobile layout. Growth Website is the right fit. Starter works if you only offer one or two packages and only at the shop.",
    },
    suggestedFeatures: [
      "Package pages with photos and starting prices",
      "Real before-and-after gallery",
      "Mobile vs shop explainer",
      "Simple booking form (with calendar add-on when ready)",
      "Reviews section",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site connect to a real booking calendar?",
        answer:
          "Yes. We can wire it to Calendly, Cal.com, Square Appointments, or a similar tool. We do not build the calendar from scratch; we use a tool you can manage yourself.",
      },
      {
        question: "Should the prices be on the website?",
        answer:
          "Yes, at minimum as 'starting at' numbers. Detailing customers compare two or three shops in a row. The shop with prices wins more than the shop without.",
      },
      {
        question: "Can the gallery filter by package or by car?",
        answer:
          "Yes, on the Growth Website. We add simple tags so customers can see only ceramic coatings, only interiors, or only certain car types.",
      },
    ],
    relatedIndustries: ["landscapers", "med-spas", "law-firms"],
    relatedResources: [
      "mobile-website-local-business",
      "get-more-quote-requests",
      "local-business-website-checklist",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "polishridgedetail.com",
      brandLabel: "Polish Ridge Detail",
      navItems: ["Packages", "Gallery", "Mobile", "About", "Book"],
      heroHeadline: "Detail packages and ceramic coatings in Arlington.",
      heroSubhead:
        "Shop and mobile detailing. Real before-and-after work, real package prices.",
      primaryAction: "Book a Slot",
      secondaryAction: "See Gallery",
      services: [
        { label: "Interior detail", note: "Vacuum, shampoo, leather, dash. From $189." },
        { label: "Exterior detail", note: "Wash, decon, polish, sealant. From $249." },
        { label: "Ceramic coating", note: "1, 3, or 5 year packages. From $799." },
      ],
      trustStrip: ["Gtechniq accredited", "Insured", "5+ years"],
      formTitle: "Book a slot",
      formRows: ["Name and phone", "Year / make / model", "Pick a date"],
      formNote: "Most weeks book out by Wednesday.",
    },
    ctaHeadline:
      "Want a detailing website where customers pick a package and book a slot, fast?",
  },

  /* ---------- Med Spas (published) ---------- */
  {
    slug: "med-spas",
    industryName: "Med Spa",
    pluralName: "Med Spas",
    metaTitle: "Websites for Med Spas",
    metaDescription:
      "Med spa websites that explain treatments clearly, build trust before a consultation, and turn research into booked appointments. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for med spas that turn treatment research into booked consultations.",
    heroSubtext:
      "Med spa decisions are personal, careful, and often quiet. Your site should let a patient explore treatments, understand who you are, and book a consultation without ever feeling sold.",
    searchIntent:
      "Searches like 'botox [city],' 'med spa [city],' 'laser hair removal [city]' arrive after weeks of research. The site is part of the trust ladder long before the booking.",
    whatCustomersNeed: [
      "What treatments do you actually offer?",
      "Who performs them (RN, MD, NP)?",
      "How does a first visit work?",
      "What is the pricing posture?",
      "Are consultations free?",
      "Are there before-and-after images, with consent?",
      "Where are you located?",
      "How do they book?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Calm tone. Treatment categories. One clear consultation CTA.",
      },
      {
        title: "Treatments",
        note: "One page per category: injectables, laser, skin, body. Each with what to expect.",
      },
      {
        title: "Treatment detail pages",
        note: "Per treatment, with realistic expectations, downtime, pricing range, and FAQ.",
      },
      {
        title: "About / team",
        note: "Photos of the providers, their credentials, and their training.",
      },
      {
        title: "New-patient guide",
        note: "What the first visit is like, what to expect, what to wear.",
      },
      {
        title: "Pricing",
        note: "At minimum, starting prices for each major treatment.",
      },
      {
        title: "Book a consultation",
        note: "Calendar-integrated booking, or a short form that schedules a follow-up call.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required." },
      { field: "Email", rationale: "Most med spa intake happens by email or text." },
      { field: "Phone", rationale: "Optional, but most patients leave it." },
      { field: "Treatment of interest", rationale: "A select, not free text. Helps the front desk." },
      { field: "Consultation preference", rationale: "In person, virtual, phone." },
      { field: "Preferred days/times", rationale: "Two or three blocks. Avoids ten email rounds." },
      { field: "New vs returning", rationale: "A toggle." },
    ],
    trustSignals: [
      "Provider credentials (RN, MD, NP) listed plainly",
      "Real photos of the space and the providers",
      "Before-and-after photos only with documented patient consent",
      "Honest 'results vary' language; no guarantees",
      "Membership in real associations where applicable",
      "Privacy and HIPAA statement, in clear language",
    ],
    localSeoIdeas: [
      "Title tag: '[City] med spa and aesthetics · [Business Name].'",
      "Treatment pages with city in the title and natural body copy ('Botox in [City]').",
      "Patient FAQs on each treatment page (downtime, cost range, what to avoid before / after).",
      "Google Business Profile photos updated quarterly via the monthly care plan.",
    ],
    commonMistakes: [
      "Stock photos of models who clearly do not work at your med spa",
      "Vague treatment descriptions with no expected results or downtime",
      "Before-and-after images used without consent",
      "Pricing hidden behind a form",
      "Booking flow that requires creating an account before scheduling",
      "Generic 'rejuvenate your look' copy across every treatment page",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most med spas need real treatment pages, a new-patient page, pricing transparency, and a booking flow. Growth Website handles that. Authority is right if you have multiple locations or offer surgical procedures alongside aesthetic treatments.",
    },
    suggestedFeatures: [
      "One page per treatment, with FAQ",
      "Provider biographies with credentials",
      "New-patient flow page",
      "Booking form connected to your scheduling tool",
      "Reviews section",
      "Privacy / HIPAA statement",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site handle before-and-after images legally?",
        answer:
          "Yes, but only with documented patient consent. We build a private upload-and-tag flow if needed, and we never publish anything without a signed release in your records.",
      },
      {
        question: "Should treatment pricing be on the site?",
        answer:
          "Yes, at least as starting prices. Patients who see honest pricing book higher-quality consultations. Hidden pricing increases form abandonment and the back-and-forth that follows.",
      },
      {
        question: "Can we integrate a real booking system?",
        answer:
          "Yes. We connect to Vagaro, Boulevard, Square Appointments, Aesthetic Record, or a similar tool. We do not replace your booking software; we make sure the website hands off to it cleanly.",
      },
    ],
    relatedIndustries: ["law-firms", "auto-detailers", "contractors"],
    relatedResources: [
      "get-more-quote-requests",
      "local-business-website-checklist",
      "quote-form-best-practices",
      "wix-vs-web-designer",
    ],
    mockup: {
      domain: "harborlightaesthetics.com",
      brandLabel: "Harborlight Aesthetics",
      navItems: ["Treatments", "Providers", "Pricing", "About", "Book"],
      heroHeadline: "Aesthetic care, calm and clinical, in Old Town Alexandria.",
      heroSubhead:
        "Injectables, laser, skin, and body treatments. RN- and NP-led, with honest pricing.",
      primaryAction: "Book a Consultation",
      secondaryAction: "Explore Treatments",
      services: [
        { label: "Injectables", note: "Botox, Dysport, fillers, Kybella." },
        { label: "Laser", note: "Hair removal, vein, pigment, skin." },
        { label: "Skin and body", note: "HydraFacial, microneedling, CoolSculpting." },
      ],
      trustStrip: ["Provider-led", "MD oversight", "Real results"],
      formTitle: "Book a consultation",
      formRows: ["Name and email", "Treatment of interest", "Preferred days"],
      formNote: "Free 30-minute consult with an RN or NP.",
    },
    ctaHeadline:
      "Want a med spa website that earns a patient's trust before they ever fill out a booking form?",
  },

  /* ---------- Law Firms (published) ---------- */
  {
    slug: "law-firms",
    industryName: "Law Firm",
    pluralName: "Law Firms",
    metaTitle: "Websites for Small Law Firms",
    metaDescription:
      "Law firm websites that explain practice areas clearly, build credibility before a consultation, and turn careful research into booked calls.",
    heroHeadline:
      "Websites for small law firms that turn careful research into booked consultations.",
    heroSubtext:
      "Legal decisions are slow, comparative, and high-stakes. Your website should explain practice areas in plain English, prove credibility, and let the right person book a conversation.",
    searchIntent:
      "Searches like 'estate planning attorney [city],' 'personal injury lawyer [city],' 'small business lawyer [city]' arrive after several days of research. The site is a screening tool more than a sales page.",
    whatCustomersNeed: [
      "What practice areas do you actually handle?",
      "Who are the attorneys, and where did they train?",
      "What does a first consultation cost and include?",
      "How does the firm communicate during a case?",
      "What is the typical timeline and process?",
      "Where are you located?",
      "How do they get in touch?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "One clear positioning statement. Practice areas. One consultation CTA.",
      },
      {
        title: "Practice area overview",
        note: "Short paragraphs on each practice area, linking to detail pages.",
      },
      {
        title: "Individual practice-area pages",
        note: "What the firm actually handles, what the process looks like, who handles the matter.",
      },
      {
        title: "Attorneys",
        note: "Professional photos, bar admissions, education, areas of focus, and a short bio.",
      },
      {
        title: "About the firm",
        note: "How long the firm has been around, how it is structured, where the office is.",
      },
      {
        title: "FAQs",
        note: "Plain-English answers to the questions clients ask in the first call.",
      },
      {
        title: "Schedule a consultation",
        note: "Short intake form, with conflict-check fields handled carefully.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required." },
      { field: "Email", rationale: "Legal intake is almost always email-first." },
      { field: "Phone", rationale: "Optional." },
      { field: "Practice area", rationale: "Short select. Helps route the lead to the right attorney." },
      { field: "Short description", rationale: "Open text field with a clear disclaimer that submitting does not create an attorney-client relationship." },
      { field: "Preferred consultation time", rationale: "Two or three windows. Or a real scheduler." },
      { field: "Opposing party (where relevant)", rationale: "Conflict-of-interest field, handled privately. Never displayed back to the user." },
    ],
    trustSignals: [
      "Attorney bar numbers and admissions, where applicable",
      "Professional headshots (real)",
      "Memberships in real bar sections and associations",
      "Honest practice-area boundaries (what you do and what you refer out)",
      "Office address and phone",
      "Clear disclaimer that submitting a form does not create an attorney-client relationship",
      "No guaranteed outcomes; no past-results comparisons that imply future ones",
    ],
    localSeoIdeas: [
      "Title tag: '[Practice area] attorney in [City] · [Firm Name].'",
      "One practice-area page per real focus area, with city-aware copy.",
      "Watch your jurisdiction language; do not imply representation in states where the firm is not admitted.",
      "Google Business Profile category should match the strongest practice area.",
    ],
    commonMistakes: [
      "Cliché 'aggressive representation' headline that says nothing",
      "Stock photos of gavels, scales of justice, and Greek columns",
      "Long-form copy with no scannable structure",
      "No real disclaimer about attorney-client relationships",
      "Practice-area pages that read like a Wikipedia summary instead of a firm-specific narrative",
      "Form fields that ask for case details before the conflict check happens",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most small firms need real practice-area pages, real attorney bios, a clear consultation flow, and disclaimers handled correctly. Growth Website fits cleanly. Authority is right if you have multiple offices, multiple practice areas with sub-practice pages, or a media/PR section.",
    },
    suggestedFeatures: [
      "Practice-area pages",
      "Attorney bio pages with admissions",
      "Consultation intake form with disclaimer",
      "FAQ section",
      "Reviews or recognitions, only where verifiably true",
      "Accessibility-conscious typography (legal audiences skew careful and cautious)",
      "Analytics + Search Console wired in",
    ],
    faqs: [
      {
        question: "How do you handle the attorney-client disclaimer?",
        answer:
          "Every intake form has a short, plain-English disclaimer that submitting does not create an attorney-client relationship. We position it where the user actually reads it, not buried at the bottom in gray text.",
      },
      {
        question: "Can the site avoid the standard 'aggressive representation' clichés?",
        answer:
          "Yes. That is the point. The strongest firm sites read like a firm answering a careful client's question in plain English, not like a billboard at a courthouse exit.",
      },
      {
        question: "Should we publish past results?",
        answer:
          "Carefully. Many state bars require specific disclaimers around past results. We follow what your bar requires and avoid implying that past outcomes guarantee future ones.",
      },
    ],
    relatedIndustries: ["med-spas", "contractors", "auto-detailers"],
    relatedResources: [
      "wix-vs-web-designer",
      "get-more-quote-requests",
      "local-business-website-checklist",
      "quote-form-best-practices",
    ],
    mockup: {
      domain: "harlowestate.law",
      brandLabel: "Harlow Estate Law",
      navItems: ["Practice areas", "Attorneys", "Process", "About", "Consult"],
      heroHeadline: "Estate planning and small business counsel for the DC region.",
      heroSubhead:
        "Plain-English advice for wills, trusts, business formation, and the in-between matters that affect both.",
      primaryAction: "Schedule a Consultation",
      secondaryAction: "Meet the Attorneys",
      services: [
        { label: "Estate planning", note: "Wills, trusts, healthcare directives, beneficiary review." },
        { label: "Small business", note: "Formation, operating agreements, succession." },
        { label: "Probate", note: "Administration, dispute resolution, executor counsel." },
      ],
      trustStrip: ["VA and DC bar", "Plain English", "Fixed-fee where possible"],
      formTitle: "Schedule a consult",
      formRows: ["Name and email", "Practice area", "Short description"],
      formNote: "Submitting this form does not create an attorney-client relationship.",
    },
    ctaHeadline:
      "Want a law firm website that earns trust without sounding like every other firm in town?",
  },

  /* ---------- Dentists (published) ---------- */
  {
    slug: "dentists",
    industryName: "Dentist",
    pluralName: "Dentists",
    metaTitle: "Websites for Dentists and Dental Practices",
    metaDescription:
      "Dental practice websites that earn patient trust, explain services in plain English, and turn nervous research into booked first appointments. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for dentists that turn careful research into booked first appointments.",
    heroSubtext:
      "Choosing a dentist is personal and slow. Your site should answer the quiet questions every new patient asks before they pick up the phone: is this office calm, is the team experienced, and how do I book a first visit without feeling rushed.",
    searchIntent:
      "Searches like 'dentist [city],' 'family dentist near me,' 'cosmetic dentist [city],' 'pediatric dentist [city]' come from new patients comparing two or three offices. The site is the screening round before any call gets made.",
    whatCustomersNeed: [
      "What services do you offer (general, cosmetic, pediatric, sedation, implants)?",
      "Who are the dentists and how long have they practiced?",
      "Do you accept new patients?",
      "Do you take their insurance, or are you fee-for-service?",
      "What does a first visit cost and include?",
      "How easy is it to book? Is there online booking or a real phone person?",
      "Is the office calm and patient-friendly, or rushed and corporate?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Calm tone, real photo of the office or team, services strip, insurance plain-talk, and one clear new-patient CTA.",
      },
      {
        title: "Services",
        note: "Sections for general, cosmetic, restorative, pediatric, emergency. Each linking to a real detail page.",
      },
      {
        title: "Individual service pages",
        note: "Per major service (cleanings, fillings, crowns, implants, Invisalign, whitening, etc) with what to expect, sedation options, and pricing posture.",
      },
      {
        title: "About / team",
        note: "Real photos of the dentists, hygienists, and front desk. Credentials, training, years in practice.",
      },
      {
        title: "New patient guide",
        note: "What to bring, what the first visit covers, how long it takes, paperwork, insurance posture, expected cost.",
      },
      {
        title: "Insurance and financing",
        note: "Which plans you take, whether you are in-network, payment options, financing partners (CareCredit, etc).",
      },
      {
        title: "Book an appointment",
        note: "Online scheduler or a structured intake form, with a clear path to call the office instead.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required." },
      { field: "Phone", rationale: "Dental practices still call to confirm. Phone matters more than email." },
      { field: "Email", rationale: "Optional, but most new patients leave it." },
      { field: "New or returning", rationale: "A toggle. Routes the lead to the right intake path." },
      { field: "Reason for visit", rationale: "A short select: cleaning, exam, pain, cosmetic consult, second opinion. Helps the front desk." },
      { field: "Insurance carrier (optional)", rationale: "Pre-qualifies the lead and avoids the awkward call later." },
      { field: "Preferred days/times", rationale: "Two or three windows. Saves the email chain." },
    ],
    trustSignals: [
      "Real photos of the office and the team (no stock dentists)",
      "Dentist credentials, schools, and years in practice, plainly stated",
      "Memberships in real associations (ADA, state dental society, AGD, AAID, etc) where applicable",
      "Plain-English language about sedation and patient comfort",
      "Honest insurance posture (in-network plans listed; fee-for-service stated openly)",
      "Reviews quoted with patient consent or a Google review embed",
      "HIPAA-aware contact form copy (no diagnoses or treatment plans sent over open email)",
      "Office hours, address, and a real phone number above the fold",
    ],
    localSeoIdeas: [
      "Title tag: '[City] dentist · [Practice Name].' Plain, not 'best dentist in [city].'",
      "Service pages with city in the title and natural body copy ('Invisalign in [City]').",
      "Patient FAQs on each service page (cost range, what to expect, how long the appointment takes).",
      "Google Business Profile category matches the strongest service (general dentist, pediatric dentist, cosmetic dentist).",
      "Office photos on the Google Business Profile updated quarterly via the monthly care plan.",
    ],
    commonMistakes: [
      "Stock photos of dentists who do not work at the practice",
      "Vague 'comprehensive dental care' copy with no real service detail",
      "Insurance information hidden behind a phone call",
      "Booking flow that requires creating an account before scheduling",
      "Generic 'rejuvenate your smile' copy across every cosmetic page",
      "No real team photos, only icons",
      "Form fields that collect medical history before the first conversation",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most dental practices need real service pages, a new-patient page, an insurance posture page, and a clean booking flow. Growth Website covers that cleanly. Authority is right if you have multiple locations, multiple specialties (general + ortho + oral surgery), or operate a DSO-style group practice.",
    },
    suggestedFeatures: [
      "One page per major service, with patient FAQ",
      "Dentist and team bios with credentials",
      "New-patient flow page",
      "Insurance and financing page",
      "Booking integration with your practice management software",
      "Reviews section (Google embed or quoted with patient consent)",
      "HIPAA-aware contact form copy and privacy statement",
      "Analytics and Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site connect to our scheduling or practice management software?",
        answer:
          "Yes. We integrate with NexHealth, LocalMed, Dentrix Ascend, Open Dental online portals, Weave, and similar tools. We do not replace your practice management software; we make sure the website hands off cleanly so a new patient does not feel like they have just opened a separate vendor.",
      },
      {
        question: "How should we handle HIPAA on the contact form?",
        answer:
          "The website intake form is for first contact: name, contact, and the reason they want to come in. We do not collect medical history, diagnoses, or treatment plans through the public form. The privacy statement is written in plain English so a new patient understands what is and is not shared.",
      },
      {
        question: "Should we put pricing on the site?",
        answer:
          "At least a starting price or a clear posture. Patients researching a new dentist are usually trying to figure out whether they can afford a first visit. Hidden pricing creates abandonment and the back-and-forth that follows. We do not publish a full fee schedule; we write a clear cost-of-first-visit statement and a financing-options paragraph.",
      },
      {
        question: "Do you build sites for specialty practices (pediatric, ortho, oral surgery)?",
        answer:
          "Yes. The structure is the same; the content shifts. A pediatric practice needs a parent-focused tone, a clear first-visit page, and reassurance language. An orthodontic practice needs treatment-by-treatment pages and a clear consultation flow. We adjust the build around what the practice actually does.",
      },
    ],
    relatedIndustries: ["med-spas", "law-firms", "contractors"],
    relatedResources: [
      "get-more-quote-requests",
      "local-business-website-checklist",
      "wix-vs-web-designer",
      "website-not-getting-leads",
    ],
    mockup: {
      domain: "claretreedental.com",
      brandLabel: "Claretree Family Dental",
      navItems: ["Services", "New patients", "Team", "Insurance", "Book"],
      heroHeadline: "Calm, careful dentistry for families in Arlington.",
      heroSubhead:
        "General, cosmetic, and pediatric care. New patients welcome. Most major PPO plans accepted.",
      primaryAction: "Book a First Visit",
      secondaryAction: "New Patient Guide",
      services: [
        { label: "General dentistry", note: "Cleanings, exams, fillings, crowns, sealants." },
        { label: "Cosmetic", note: "Whitening, veneers, bonding, Invisalign consults." },
        { label: "Pediatric", note: "First-visit-friendly care from age 1 onward." },
      ],
      trustStrip: [
        "ADA member",
        "PPO friendly",
        "Saturday hours",
      ],
      formTitle: "Book a first visit",
      formRows: ["Name and phone", "New or returning", "Preferred day"],
      formNote: "We confirm by phone within one business day.",
    },
    ctaHeadline:
      "Want a dental practice website that earns a new patient's trust before they ever walk in the door?",
  },

  /* ---------- Restaurants (published) ---------- */
  {
    slug: "restaurants",
    industryName: "Restaurant",
    pluralName: "Restaurants",
    metaTitle: "Websites for Restaurants",
    metaDescription:
      "Restaurant websites that answer the four questions every guest has in under five seconds: are you open, where are you, what is the food, and how do I get a table. Built and maintained by Martin Web Works.",
    heroHeadline:
      "Websites for restaurants that answer the four questions every guest has in five seconds.",
    heroSubtext:
      "A guest researching dinner does not read. They scan. The site should show hours, location, the kind of food, and how to reserve a table or order, before anyone scrolls.",
    searchIntent:
      "Searches like '[neighborhood] restaurants,' '[cuisine] near me,' '[restaurant name],' '[restaurant name] menu,' '[restaurant name] reservations' arrive on a phone, often within an hour of a decision. The site is a yes/no filter, not a brochure.",
    whatCustomersNeed: [
      "Are you open right now?",
      "Where exactly are you, and is there parking?",
      "What kind of food is it, at what price?",
      "Can I see the menu without downloading a PDF?",
      "How do I reserve, walk in, or order takeout / delivery?",
      "Is there a private room or patio?",
      "What does the place actually look like?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Hours visible above the fold, one strong photo of the room or the food, one-line description, and a reservation / order CTA.",
      },
      {
        title: "Menu",
        note: "A real HTML menu, not a PDF. Sections by course, prices visible, dietary tags where useful. Updated easily.",
      },
      {
        title: "Reservations",
        note: "Embedded reservation widget (OpenTable, Resy, Tock, SevenRooms) or a clear phone-and-walk-in policy.",
      },
      {
        title: "Order online",
        note: "Direct links to your ordering platform (Toast, Square, ChowNow, Olo) or a first-party flow.",
      },
      {
        title: "Private events and parties",
        note: "Capacity, what you offer, a short inquiry form. Photos of the space arranged for events.",
      },
      {
        title: "About",
        note: "Who the chef is, what kind of place this is, how long you have been open. Plain English, not a manifesto.",
      },
      {
        title: "Visit",
        note: "Address, hours by day, parking, public transit, accessibility notes, and a real map.",
      },
    ],
    leadCaptureFields: [
      { field: "Reservation widget", rationale: "Most guests prefer to book a table without a form. Use the platform your floor uses." },
      { field: "Private event inquiry form: name", rationale: "Required." },
      { field: "Event date and party size", rationale: "Two short fields. Pre-qualifies for capacity." },
      { field: "Event type", rationale: "Birthday, business dinner, rehearsal, holiday. A short select." },
      { field: "Budget posture (optional)", rationale: "Avoids the back-and-forth." },
      { field: "Email and phone", rationale: "Both. Event leads expect a same-day reply." },
      { field: "Notes", rationale: "Open text field. Dietary restrictions, special requests, anything." },
    ],
    trustSignals: [
      "Hours of operation visible above the fold, updated weekly via the care plan",
      "Real photos of the food and the room, not stock",
      "Chef and team photos with first names",
      "Reservation widget from a real platform, not a 'call to reserve' line on a busy weekend",
      "Menu published on the site itself, not a PDF that breaks on phones",
      "Address, neighborhood, and parking information in plain language",
      "Review quotes from real critics or guests, with attribution",
      "Allergen, dietary, and accessibility notes in plain English",
    ],
    localSeoIdeas: [
      "Title tag: '[Restaurant Name] · [Neighborhood] [cuisine type].' Plain, not stuffed.",
      "One page per service the kitchen actually does: dinner, lunch, brunch, private events, catering.",
      "Mirror name, address, phone exactly across the site, Google Business Profile, and reservation platforms.",
      "Google Business Profile photos updated monthly via the care plan; new dish photos win local rankings.",
      "Schema markup for the restaurant, menu items, and review snippets.",
    ],
    commonMistakes: [
      "Hours hidden in the footer or 'see Google for hours'",
      "A PDF menu that downloads instead of opening",
      "A landing page with autoplay video and no useful information",
      "Stock food photos from the menu vendor",
      "Reservation system that requires creating an account before booking",
      "No real photos of the room",
      "An 'About' page that reads like a press release",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most restaurants need a real menu page, photos that match the room, a reservation flow, an order-online flow, and a private-events page. The Growth Website handles that cleanly. Authority is right if you operate multiple concepts or multiple locations and need a parent-brand site that funnels to each.",
    },
    suggestedFeatures: [
      "Hours block visible above the fold",
      "Real HTML menu, not a PDF",
      "Reservation widget integration (OpenTable, Resy, Tock, SevenRooms)",
      "Order online integration (Toast, Square, ChowNow, Olo)",
      "Private events inquiry form",
      "Press and review quotes section",
      "Photo gallery of the room and the food",
      "Analytics and Search Console wired in",
    ],
    faqs: [
      {
        question: "Can the site embed our existing reservations or ordering platform?",
        answer:
          "Yes. We connect to OpenTable, Resy, Tock, SevenRooms for reservations, and Toast, Square, ChowNow, Olo for ordering. We do not replace your floor or kitchen tools; we make sure the website hands off cleanly so the guest is not bounced through a separate vendor experience.",
      },
      {
        question: "Should the menu be a real page or a PDF?",
        answer:
          "A real page, almost always. PDFs break on phones, do not get indexed for search, and feel like 2009. We build the menu as structured content so you can update one dish or one price without us, and so Google can read it.",
      },
      {
        question: "We change our menu often. Will the site keep up?",
        answer:
          "Yes. We structure the menu so the front-of-house manager (or whoever owns the menu) can update a dish, a price, or a section in a few minutes. The monthly care plan covers seasonal swaps; daily specials are usually self-service.",
      },
      {
        question: "Do we need a separate site for private events or catering?",
        answer:
          "Usually no. A dedicated page inside the main site is enough, and it lets the same SEO and brand work harder. A separate site is only worth it if catering or events is a distinct brand or revenue line big enough to deserve its own marketing.",
      },
    ],
    relatedIndustries: ["med-spas", "auto-detailers", "law-firms"],
    relatedResources: [
      "local-business-website-checklist",
      "get-more-quote-requests",
      "mobile-website-local-business",
      "website-not-getting-leads",
    ],
    mockup: {
      domain: "northbankkitchen.com",
      brandLabel: "Northbank Kitchen",
      navItems: ["Menu", "Reservations", "Private events", "About", "Visit"],
      heroHeadline: "Seasonal American cooking in Old Town Alexandria.",
      heroSubhead:
        "Open for dinner Tuesday through Sunday. Reservations recommended on weekends.",
      primaryAction: "Reserve a Table",
      secondaryAction: "View the Menu",
      services: [
        { label: "Dinner", note: "Tuesday through Sunday, 5pm to close." },
        { label: "Private events", note: "Up to 40 in the back room, full buyouts on Mondays." },
        { label: "Takeout", note: "Order online, ready in 30 minutes." },
      ],
      trustStrip: [
        "Open Tuesday to Sunday",
        "Reservations recommended",
        "Private events welcome",
      ],
      formTitle: "Private event inquiry",
      formRows: ["Date and party size", "Event type", "Any notes"],
      formNote: "We reply within one business day with availability and a menu starting point.",
    },
    ctaHeadline:
      "Want a restaurant website that turns a phone search into a booked table?",
  },

  /* ---------- Home Services (umbrella, published) ---------- */
  {
    slug: "home-services",
    industryName: "Home Service Business",
    pluralName: "Home Service Businesses",
    metaTitle: "Websites for Home Service Businesses",
    metaDescription:
      "Websites for home service businesses that turn searches into booked jobs. Built for trades, mobile-first, with click-to-call, real service pages, and quote forms that work on a phone in a driveway.",
    heroHeadline:
      "Websites for home service businesses that turn searches into booked jobs.",
    heroSubtext:
      "A homeowner with a leaking pipe, a dead AC, or a broken garage door does not browse. They tap the first site that loads, explains the service, and lets them call or request a visit in under a minute.",
    searchIntent:
      "Owners searching 'websites for home service businesses' or 'website for handyman / HVAC / garage door company' want a structure that works for trades. Real services, real service areas, fast forms, and a phone number above the fold.",
    whatCustomersNeed: [
      "What services do you actually offer?",
      "What service area do you cover?",
      "How fast can you get out for an emergency?",
      "Are you licensed and insured?",
      "Is there a service-call or trip fee?",
      "Can they call you or text you right now?",
      "What does the booking or estimate process look like?",
    ],
    recommendedPages: [
      {
        title: "Homepage",
        note: "Click-to-call in the header, one strong photo of a real job, services strip, service area, and a clear quote button.",
      },
      {
        title: "Services",
        note: "One block per service: what is included, what it costs (range), how long it usually takes.",
      },
      {
        title: "Individual service pages",
        note: "One page per major service. Plain English. Common problems, signs you need it, what a typical job looks like.",
      },
      {
        title: "Service area pages",
        note: "Real cities or zip codes you cover. One page per city; not 50 thin pages with the city swapped.",
      },
      {
        title: "Emergency / same-day",
        note: "If you offer it, give it its own page. Hours of availability, callout fee, what triggers a same-day response.",
      },
      {
        title: "About and licensing",
        note: "Photo of the owner or the crew, license numbers, insurance, years in business.",
      },
      {
        title: "Request a quote / Book a visit",
        note: "Short form: name, address or ZIP, service needed, brief description. Phone number repeated.",
      },
    ],
    leadCaptureFields: [
      { field: "Name", rationale: "Required, first." },
      { field: "Phone", rationale: "Most home-service leads convert by phone. Phone matters more than email." },
      { field: "Address or ZIP", rationale: "Pre-qualifies the lead for service area before you call back." },
      { field: "Service needed", rationale: "A short select. Repair, install, maintenance, not sure. Keep the list short." },
      { field: "Urgency", rationale: "Today, this week, planning ahead. Helps route the lead correctly." },
      { field: "Short description", rationale: "One open text field. Optional on mobile to keep the form fast." },
      { field: "Photo upload (optional)", rationale: "Useful for plumbing leaks, broken units, damaged equipment. Never required." },
    ],
    trustSignals: [
      "License number visible in the footer and on the contact page",
      "Insurance status, stated plainly",
      "Real photos of the crew and real job sites, not stock",
      "Years in business, stated honestly",
      "Service area shown as real cities or a map, not 'tri-state region'",
      "Service-call or trip fee policy, in writing",
      "Reviews quoted with permission, or a Google review embed",
      "Manufacturer or trade-association certifications, where applicable",
    ],
    localSeoIdeas: [
      "Title tag should read like '[Service] in [City] · [Business Name].' Plain, not stuffed.",
      "Build one real page per city you actually cover. Real content per page, not a template with the city swapped in.",
      "Mirror business name, phone, and address exactly across the site, Google Business Profile, and any directory listings.",
      "Add internal links from service-area pages to the relevant service pages (plumbing, HVAC, garage, electric, etc).",
      "Keep hero photos at sensible file sizes; a giant photo hurts mobile speed and local rankings.",
    ],
    commonMistakes: [
      "Phone number buried in the footer instead of pinned to the header on mobile",
      "No quote form, only a generic contact email",
      "Click-to-call not wired, so customers have to copy the number",
      "Service-area page with no real content, just a city name and a stock map",
      "Stock photos of nice-looking trucks that are not yours",
      "Service list copied from a template ('Quality service since 2015')",
      "No mention of license or insurance anywhere on the site",
      "Form fields the homeowner cannot answer at 9pm in their kitchen",
    ],
    recommendedPackage: {
      slug: "growth",
      why: "Most home service businesses need real service pages, service-area pages, a real quote form, reviews, and a clean mobile experience. That is exactly what the Growth Website is shaped for. Starter is too thin once you cover multiple services or multiple cities; Authority is right only if you run multiple trades or operate across several markets.",
    },
    suggestedFeatures: [
      "Sticky click-to-call on mobile",
      "Quote form on every service page",
      "Service-area pages for real cities",
      "Emergency or same-day page if relevant",
      "License and insurance footer block",
      "Reviews section (Google embed or quoted with permission)",
      "Project or before-and-after photos",
      "Analytics and Search Console wired in",
    ],
    faqs: [
      {
        question: "Does the site work if I run multiple services (HVAC and plumbing, electrical and handyman)?",
        answer:
          "Yes. We build one strong homepage that introduces the company, then one page per service so each one can rank on its own. The site does not get confusing; it gets more useful. Most multi-service homes-service companies see better results once each service has its own dedicated page rather than being lumped into one services list.",
      },
      {
        question: "Can the site handle after-hours and emergency calls?",
        answer:
          "The site can. The phone routing is up to you. We make sure the click-to-call works, the form lands in your inbox the moment it is submitted, and your hours and emergency policy are written clearly. Routing after-hours to a partner, a voicemail with a callback note, or a third-party answering service is a decision we help you think through.",
      },
      {
        question: "Do you build sites for trades that book via dispatch software like ServiceTitan or Housecall Pro?",
        answer:
          "Yes. We do not replace your dispatch software. We make sure the website hands off cleanly: the form lands in your inbox or directly into the dispatch tool, depending on what your tool supports, and the booking experience does not feel like the customer just opened a separate vendor.",
      },
      {
        question: "We are small. Is this too much website for us?",
        answer:
          "Probably not. A small home service business is exactly who benefits most from a real website. The work is not the size of the page count; it is the quality of the lead flow. Starter is fine if you have one service in one city. Most multi-service companies are better off with Growth.",
      },
    ],
    relatedIndustries: ["roofers", "contractors", "electricians", "plumbers", "landscapers"],
    relatedResources: [
      "website-not-getting-leads",
      "get-more-quote-requests",
      "small-business-website-cost",
      "wix-vs-web-designer",
    ],
    mockup: {
      domain: "northbeltservicepros.com",
      brandLabel: "Northbelt Service Pros",
      navItems: ["Services", "Areas", "About", "Reviews", "Book"],
      heroHeadline: "Home services for Northern Virginia, done right the first time.",
      heroSubhead:
        "Plumbing, HVAC, electrical, and handyman work for homeowners across Arlington, Alexandria, and Fairfax.",
      primaryAction: "Request a Free Estimate",
      secondaryAction: "Call (703) 555-0102",
      services: [
        { label: "Plumbing", note: "Leaks, water heaters, fixture installs, repairs." },
        { label: "HVAC", note: "Tune-ups, repairs, system installs, indoor air quality." },
        { label: "Electrical", note: "Outlets, panels, lighting, troubleshooting." },
      ],
      trustStrip: [
        "Licensed in VA",
        "Insured",
        "Same-week scheduling",
        "12+ years",
      ],
      formTitle: "Request a free estimate",
      formRows: ["Your name and ZIP", "Service needed", "What is going on?"],
      formNote: "We reply same business day. No drive-by sales pitch.",
    },
    ctaHeadline:
      "Want a home service website built around how your customers actually search and contact you?",
  },

  /* ---------- Drafts (data only, not published) ---------- */
  { slug: "hvac", industryName: "HVAC Company", pluralName: "HVAC Companies", draft: true },
  { slug: "cleaning-companies", industryName: "Cleaning Company", pluralName: "Cleaning Companies", draft: true },
  { slug: "pressure-washing", industryName: "Pressure Washing Business", pluralName: "Pressure Washing Businesses", draft: true },
  { slug: "accountants", industryName: "Accountant", pluralName: "Accountants and CPAs", draft: true },
  { slug: "veterinarians", industryName: "Veterinarian", pluralName: "Veterinarians", draft: true },
  { slug: "locksmiths", industryName: "Locksmith", pluralName: "Locksmiths", draft: true },
];

/* ============================================================
   Helpers
   ============================================================ */

export function getPublishedIndustries(): PublishedIndustry[] {
  return INDUSTRIES.filter(isPublished);
}

export function getPublishedIndustryBySlug(
  slug: string,
): PublishedIndustry | undefined {
  const entry = INDUSTRIES.find((i) => i.slug === slug);
  if (!entry || !isPublished(entry)) return undefined;
  return entry;
}

export function getRelatedIndustries(
  current: PublishedIndustry,
): PublishedIndustry[] {
  return current.relatedIndustries
    .map((slug) => getPublishedIndustryBySlug(slug))
    .filter((i): i is PublishedIndustry => Boolean(i));
}
