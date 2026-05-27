/**
 * Resource articles.
 *
 * See SEO_CONTENT.md for the full content system, voice rules, and rules
 * about draft entries.
 *
 * Drafts:
 *  - `draft: true` entries are not rendered at their URL (404)
 *  - not included in the sitemap
 *  - not linked from /resources
 *  - not shown in related-resource blocks
 */

export type ResourceCategory =
  | "Website Costs"
  | "Lead Generation"
  | "Local SEO"
  | "Website Maintenance"
  | "Website Mistakes"
  | "Comparisons";

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Website Costs",
  "Lead Generation",
  "Local SEO",
  "Website Maintenance",
  "Website Mistakes",
  "Comparisons",
];

/* ============================================================
   Section block types: a small editorial DSL
   ============================================================ */

export type ParagraphBlock = { kind: "paragraph"; text: string };
export type ChecklistBlock = {
  kind: "checklist";
  title?: string;
  items: string[];
};
export type ListBlock = { kind: "list"; items: string[] };
export type CalloutBlock = { kind: "callout"; title: string; text: string };
export type ComparisonBlock = {
  kind: "comparison";
  /** e.g. ["Wix", "Hired designer"] */
  columns: [string, string];
  rows: { label: string; a: string; b: string }[];
};

export type ResourceBlock =
  | ParagraphBlock
  | ChecklistBlock
  | ListBlock
  | CalloutBlock
  | ComparisonBlock;

export type ResourceSection = {
  /** Used for table-of-contents anchor links. */
  id: string;
  heading: string;
  body: ResourceBlock[];
};

export type ResourceFaq = { question: string; answer: string };

type BaseResource = {
  slug: string;
  title: string;
};

export type DraftResource = BaseResource & {
  draft: true;
  category: ResourceCategory;
  description: string;
};

export type PublishedResource = BaseResource & {
  draft?: false;
  category: ResourceCategory;
  metaTitle: string;
  metaDescription: string;
  description: string;
  publishDate: string; // ISO yyyy-mm-dd
  updatedDate: string; // ISO yyyy-mm-dd
  readingTime: string; // e.g. "8 min read"
  keywords: string[];
  intro: string;
  /** Optional second intro paragraph; rendered as a callout when present. */
  introCallout?: { title: string; text: string };
  sections: ResourceSection[];
  faqs?: ResourceFaq[];
  relatedResources: string[];
  relatedIndustries: string[];
  ctaHeadline: string;
};

export type ResourceEntry = DraftResource | PublishedResource;

export function isPublishedResource(
  entry: ResourceEntry,
): entry is PublishedResource {
  return entry.draft !== true;
}

/* ============================================================
   Entries
   ============================================================ */

export const RESOURCES: ResourceEntry[] = [
  /* ---------- 1. small-business-website-cost (published) ---------- */
  {
    slug: "small-business-website-cost",
    category: "Website Costs",
    title: "How Much Does a Small Business Website Cost?",
    metaTitle: "How Much Does a Small Business Website Cost?",
    metaDescription:
      "Realistic website costs for small local businesses: starter sites, full lead-gen builds, monthly hosting, what affects price, and where hidden costs come from.",
    description:
      "Realistic ranges for small business websites, what each tier actually includes, and where the hidden costs come from.",
    publishDate: "2026-05-27",
    updatedDate: "2026-05-27",
    readingTime: "9 min read",
    keywords: [
      "small business website cost",
      "how much does a website cost",
      "local business website pricing",
    ],
    intro:
      "Most local business owners ask the same question first: what does a website actually cost? The honest answer has three parts. There is a one-time build cost, an ongoing hosting and care cost, and a set of hidden costs nobody mentions on a pricing page. This guide walks through all three.",
    introCallout: {
      title: "The short version",
      text: "For most small local service businesses, a real lead-generating website costs $2,000 to $7,000 to build, plus $30 to $200 per month to host and maintain. Anything radically cheaper or more expensive comes with trade-offs worth understanding.",
    },
    sections: [
      {
        id: "one-time-build",
        heading: "1. The one-time build cost",
        body: [
          {
            kind: "paragraph",
            text: "The first number on any website quote is what it costs to build the site. For local businesses, three ranges cover almost every honest situation.",
          },
          {
            kind: "list",
            items: [
              "Under $500: usually a template you set up yourself on Wix, Squarespace, or GoDaddy. Cheap because you are doing the work.",
              "$500 to $1,500: a freelancer or family member assembling a template. Works for a placeholder, rarely for a real lead engine.",
              "$1,995 to $4,000: a small studio building a 3-to-10 page site with real service pages, a quote form, mobile-first layout, and a basic local SEO setup. This is where most local service businesses should land.",
              "$4,000 to $10,000: a more complete build with multiple service pages, location or service-area pages, a stronger lead form, content polishing, and analytics wired in.",
              "$10,000 and above: multi-location, multi-service, or compliance-heavy businesses (med spas, law firms, multi-state contractors).",
            ],
          },
          {
            kind: "paragraph",
            text: "Where a price sits in those ranges depends mostly on how many service pages, location pages, and trust elements (galleries, reviews, FAQs) the site needs to do its job.",
          },
        ],
      },
      {
        id: "monthly-cost",
        heading: "2. The monthly hosting and care cost",
        body: [
          {
            kind: "paragraph",
            text: "The build is one number. The monthly is the other. This is where most cheap websites quietly become expensive.",
          },
          {
            kind: "list",
            items: [
              "$0 to $20 per month: DIY hosting (your Wix or Squarespace plan). The site stays up, but nobody updates it.",
              "$30 to $80 per month: hosting, SSL, backups, security monitoring, and a few minor edits per month. Right for stable sites that change rarely.",
              "$120 to $250 per month: full care, including content edits, photo swaps, security, performance monitoring, and a real human responding to your requests in one business day.",
              "$300+ per month: appointment-based or revenue-critical businesses where downtime equals lost bookings.",
            ],
          },
          {
            kind: "paragraph",
            text: "If a quote does not include a clear monthly number, ask. Building a site without a plan for the next two years is what produces those 2019 websites you see when you scroll past most local businesses on Google.",
          },
        ],
      },
      {
        id: "why-cheap-is-cheap",
        heading: "3. Why cheap builders are cheaper",
        body: [
          {
            kind: "paragraph",
            text: "A $400 website is not a $4,000 website missing a few features. It is a different category of artifact. Here is what you usually trade away when the price drops.",
          },
          {
            kind: "list",
            items: [
              "Custom structure. Cheap sites use a stock template that fits a salon, a roofer, and a yoga studio equally badly.",
              "Real service pages. Cheap sites have one services section, not individual service pages.",
              "Mobile-first thinking. Cheap sites look fine on desktop and ignore that 75% of your visitors are on phones.",
              "Lead form discipline. Cheap sites have either no form, or a fourteen-field form that no real customer fills out.",
              "Speed. Cheap sites load slow because of one giant hero image nobody compressed.",
              "Ownership. Cheap sites often live inside a builder you cannot leave without losing the design.",
              "A real person who will answer the phone when something breaks at 8pm on a Friday.",
            ],
          },
        ],
      },
      {
        id: "when-starter",
        heading: "4. When a $1,995 starter site makes sense",
        body: [
          {
            kind: "paragraph",
            text: "A starter site (3 to 5 pages, mobile-first, one contact form, click-to-call) is the right fit when you mostly need a credible online presence and a simple way to be contacted. The decision usually comes down to two questions.",
          },
          {
            kind: "checklist",
            title: "Starter is the right tier if:",
            items: [
              "You serve one main service or product type, not a long list.",
              "You have one or two real photos and a clear short description of what you do.",
              "You do not get a lot of search-driven leads today, and your goal is to look professional to people who already know your name.",
              "You are starting out and the site needs to ship in two to three weeks.",
            ],
          },
        ],
      },
      {
        id: "when-growth",
        heading: "5. When a $3,995 growth site makes sense",
        body: [
          {
            kind: "paragraph",
            text: "Most local service businesses should land here. The Growth tier is what produces real quote-request volume. You get individual service pages, a reviews section, a project gallery, a real intake form, and a clean local SEO structure.",
          },
          {
            kind: "checklist",
            title: "Growth is the right tier if:",
            items: [
              "You have three or more services and want each one to have its own page.",
              "Your prospects compare you to other businesses before they call.",
              "You want quote requests to come in steadily, not just from referrals.",
              "You want to be findable when someone searches '[your trade] near me.'",
              "You can commit to a small monthly care plan after launch.",
            ],
          },
        ],
      },
      {
        id: "when-authority",
        heading: "6. When a $6,995+ authority site makes sense",
        body: [
          {
            kind: "paragraph",
            text: "An authority site is for businesses where the website is supposed to do real work, not just look professional. That usually means several services, several service areas, higher-ticket clients, or compliance-aware industries (law, healthcare).",
          },
          {
            kind: "checklist",
            title: "Authority is the right tier if:",
            items: [
              "You serve multiple cities or service areas and want a real page for each.",
              "Your average customer value is high enough that one extra lead per month pays for the upgrade.",
              "You have multiple practice areas, treatment categories, or service lines.",
              "You want copy polishing or partial copywriting included.",
              "You want a real lead-routing or CRM-handoff plan, not just a contact form.",
            ],
          },
        ],
      },
      {
        id: "hidden-costs",
        heading: "7. The hidden costs nobody mentions",
        body: [
          {
            kind: "paragraph",
            text: "Most pricing pages skip these. They are real and they add up.",
          },
          {
            kind: "list",
            items: [
              "Domain renewal: $15 to $25 per year. Easy to forget; not optional.",
              "Domain email: $6 to $12 per user per month if you want a real you@yourbusiness.com address.",
              "Stock photography or product photography: $0 to $1,500. Almost always worth the photography line item.",
              "Logo design: $0 to $1,500 if you do not already have one.",
              "Booking software: $20 to $80 per month for tools like Calendly, Cal.com, Vagaro, Boulevard.",
              "Email marketing: $20 to $80 per month if and when you start sending newsletters.",
              "Paid ads: a separate budget entirely. Do not start ads until the website is producing leads organically.",
            ],
          },
          {
            kind: "callout",
            title: "The honest takeaway",
            text: "A real lead-generating website for a small local business is a $3,000 to $5,000 first-year investment, all-in, with a $50 to $200 monthly ongoing cost. Sites that cost much less almost always have a hidden cost in the form of leads that never came.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why are some website quotes 10x cheaper than others?",
        answer:
          "Different artifacts. A $400 template assembled by a freelancer is not a $4,000 build with real service pages and a custom intake form. Both might look passable to an owner on a phone for five seconds, but they perform very differently when a customer actually compares you to two other businesses.",
      },
      {
        question: "Do I need to pay monthly forever?",
        answer:
          "No. You can own your site outright and host it yourself for $20 to $40 per month at any major host. Most owners choose a monthly care plan because they do not want to be the one calling support when the SSL certificate breaks at 6am on a Saturday.",
      },
      {
        question: "What is the cheapest honest option?",
        answer:
          "A Starter Website at $1,995, plus $30 to $50 per month for hosting and minor edits. Honest does not mean expensive; it means the price covers the actual work.",
      },
    ],
    relatedResources: [
      "wix-vs-web-designer",
      "website-maintenance-small-business",
      "website-not-getting-leads",
    ],
    relatedIndustries: ["roofers", "contractors", "med-spas"],
    ctaHeadline:
      "Not sure which tier fits your business? Book a free 30-minute audit.",
  },

  /* ---------- 2. website-not-getting-leads (published) ---------- */
  {
    slug: "website-not-getting-leads",
    category: "Lead Generation",
    title: "Why Your Website Is Not Getting Leads",
    metaTitle: "Why Your Website Is Not Getting Leads",
    metaDescription:
      "The real reasons small business websites stop producing calls and quote requests. A plain-English diagnostic walkthrough you can run on your own site in 20 minutes.",
    description:
      "A diagnostic walkthrough for owners whose website has stopped producing calls and quote requests.",
    publishDate: "2026-05-27",
    updatedDate: "2026-05-27",
    readingTime: "11 min read",
    keywords: [
      "website not getting leads",
      "small business website leads",
      "why no quote requests",
    ],
    intro:
      "If your website is up, indexed, and not producing calls or quote requests, the cause is almost always one of seven things. None of them are mysterious. Walk through this list in order; stop at the first one that is true for you.",
    introCallout: {
      title: "Before you blame the website",
      text: "First check the obvious: is the contact form actually working, and is the submission landing somewhere you read? Send yourself a test submission today. About one in ten 'broken' websites is just a form pointing at an inbox nobody checks.",
    },
    sections: [
      {
        id: "unclear-cta",
        heading: "1. The next step is not obvious",
        body: [
          {
            kind: "paragraph",
            text: "Open your homepage on a phone. Count how many seconds it takes to find the way to contact you. If it is more than three, you have your answer.",
          },
          {
            kind: "checklist",
            title: "What a working homepage looks like on mobile:",
            items: [
              "Phone number visible without scrolling.",
              "One clear button: 'Request a Quote' or 'Book a Consultation' or 'Get an Estimate.'",
              "No more than two competing actions above the fold.",
              "Click-to-call wired on every phone number.",
            ],
          },
        ],
      },
      {
        id: "weak-mobile",
        heading: "2. The mobile layout is hostile",
        body: [
          {
            kind: "paragraph",
            text: "75% to 90% of your local search traffic is on a phone. If the site feels designed for a 27-inch monitor with a long scroll past a giant slider, you are losing leads at the top of the funnel.",
          },
          {
            kind: "list",
            items: [
              "Buttons should be at least 44px tall and easy to tap with a thumb.",
              "Form fields should be one column on mobile, not two.",
              "Text should be at least 16px without zoom.",
              "The phone number in the header should be tappable, not just visible.",
            ],
          },
        ],
      },
      {
        id: "confusing-services",
        heading: "3. The services are confusing",
        body: [
          {
            kind: "paragraph",
            text: "Most local websites list services in one of two failing ways. Either they have one long 'Services' section that mixes everything together, or they have a generic six-card grid where every service gets one line of marketing copy.",
          },
          {
            kind: "paragraph",
            text: "What works is a real page per service. Even short pages. A two-paragraph page on 'water heater installation' will outperform a four-line section on 'plumbing services' every time.",
          },
        ],
      },
      {
        id: "no-trust",
        heading: "4. There is no proof",
        body: [
          {
            kind: "paragraph",
            text: "If a customer cannot tell whether you are a one-person operation or a fly-by-night, they will not submit the form. Real proof is not stock photos or 'we have served the community for years.'",
          },
          {
            kind: "checklist",
            title: "Trust signals that actually work:",
            items: [
              "Real photos of your work, your trucks, or your team.",
              "License and insurance numbers, where applicable.",
              "Real reviews quoted with attribution, or a Google reviews embed.",
              "A real about page with at least one name and one photo.",
              "An honest service area, not 'the entire metro region.'",
            ],
          },
        ],
      },
      {
        id: "slow-site",
        heading: "5. The site is slow",
        body: [
          {
            kind: "paragraph",
            text: "Speed is the most underrated SEO signal and the most underrated conversion signal. A site that takes four seconds to load on a mid-range phone loses about 25% of its visitors before they see the headline.",
          },
          {
            kind: "list",
            items: [
              "Use PageSpeed Insights (pagespeed.web.dev) and run your homepage on the 'mobile' tab.",
              "Anything under a Performance score of 70 is leaving leads on the table.",
              "Common culprits: oversized hero images, autoplay videos, eight tracking scripts, and old plugin bloat.",
            ],
          },
        ],
      },
      {
        id: "poor-local-seo",
        heading: "6. Local SEO basics are missing",
        body: [
          {
            kind: "paragraph",
            text: "Search engines rank local businesses partly by how clearly the site says 'I serve this place and I do this kind of work.' If the homepage title tag says 'Home | My Business,' Google has nothing to anchor your ranking to.",
          },
          {
            kind: "checklist",
            title: "Local SEO basics to check today:",
            items: [
              "Title tag: '[Service] in [City] · [Business Name].'",
              "Service-area pages for the cities you actually serve.",
              "Business name, address, and phone match across the site, the Google Business Profile, and any directory listing.",
              "Each service has its own page, not a section.",
              "Google Business Profile is verified and active.",
            ],
          },
        ],
      },
      {
        id: "bad-form",
        heading: "7. The form asks too much",
        body: [
          {
            kind: "paragraph",
            text: "A contact form is a transaction. Every field is a small cost the visitor pays. Most local-business forms ask for far too much information up front.",
          },
          {
            kind: "list",
            items: [
              "Three to five fields convert about twice as well as nine to twelve.",
              "Required: name, way to reach them, what they need.",
              "Optional and labeled as such: everything else.",
              "Photo upload should never be required on first contact.",
              "The submit button should say what happens, not 'Submit.' 'Request My Estimate' is better.",
            ],
          },
          {
            kind: "callout",
            title: "A working diagnostic order",
            text: "Run through these seven in order. About 80% of 'my website is not getting leads' problems are #1, #2, or #5. Fix them first; everything else moves faster once those are right.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long should I wait before deciding the website is broken?",
        answer:
          "If you have meaningful local search traffic and a clean Google Business Profile, two to four weeks is usually enough to tell. If you have almost no traffic, the problem is upstream (local SEO and visibility) rather than the website itself, and the fix is different.",
      },
      {
        question: "What is the cheapest fix that usually works?",
        answer:
          "Replacing the homepage CTA. Most of the time, simply making the phone number sticky on mobile and adding one clear 'Request a Quote' button above the fold lifts conversion meaningfully in a single afternoon of work.",
      },
      {
        question: "Should I run paid ads to fix the lead problem?",
        answer:
          "Not yet. Ads on a weak website pour money into a leaking funnel. Fix the seven things above first. Then, if you want to scale, ads work.",
      },
    ],
    relatedResources: [
      "get-more-quote-requests",
      "mobile-website-local-business",
      "website-checklist-before-ads",
    ],
    relatedIndustries: ["roofers", "electricians", "plumbers"],
    ctaHeadline:
      "Want a free 30-minute audit of why your site is not producing leads?",
  },

  /* ---------- 3. get-more-quote-requests (published) ---------- */
  {
    slug: "get-more-quote-requests",
    category: "Lead Generation",
    title: "How to Get More Quote Requests From Your Website",
    metaTitle: "How to Get More Quote Requests From Your Website",
    metaDescription:
      "What actually moves quote-request volume on a small business website: homepage CTA, form fields, click-to-call, trust signals, and a few tactics most sites ignore.",
    description:
      "What actually moves quote-request volume on small business websites: CTA, form fields, click-to-call, and the tactics most owners ignore.",
    publishDate: "2026-05-27",
    updatedDate: "2026-05-27",
    readingTime: "10 min read",
    keywords: [
      "more quote requests",
      "increase contact form submissions",
      "small business website conversion",
    ],
    intro:
      "Most small business websites do not need more traffic. They need the visitors they already have to fill out the form. This guide is about that, in plain English, with no jargon about 'conversion rate optimization.'",
    sections: [
      {
        id: "primary-cta",
        heading: "Get the primary CTA right",
        body: [
          {
            kind: "paragraph",
            text: "Every page on your site should have one obvious next step. For most local businesses, that next step is 'Request a Quote,' 'Book a Consultation,' or 'Get an Estimate.'",
          },
          {
            kind: "list",
            items: [
              "Pick one CTA. Use the same language everywhere.",
              "Put it in the sticky header.",
              "Put it at the end of every service page.",
              "Put it at the end of every project example.",
              "Do not compete with it. 'Subscribe to our newsletter' is not a CTA for a roofer.",
            ],
          },
        ],
      },
      {
        id: "form-fields",
        heading: "Use fewer form fields",
        body: [
          {
            kind: "paragraph",
            text: "Every field is a cost. Most local business forms charge the visitor too much for what they get in return.",
          },
          {
            kind: "list",
            items: [
              "Three to five fields convert about twice as well as nine to twelve.",
              "Required: name, contact, and one short field for what they need.",
              "Optional: everything else.",
              "Move 'address,' 'budget,' 'timeline' to optional unless you cannot operate without them.",
              "The submit button label should describe the action. 'Request My Estimate' beats 'Submit' every time.",
            ],
          },
        ],
      },
      {
        id: "click-to-call",
        heading: "Make click-to-call obvious",
        body: [
          {
            kind: "paragraph",
            text: "For trades, urgent service, and any business where speed matters, the phone often beats the form. Most websites bury the phone number on a contact page.",
          },
          {
            kind: "list",
            items: [
              "Phone number sticky on the mobile header.",
              "Phone number wrapped in a tel: link so one tap dials it.",
              "Phone number repeated at the bottom of every long page.",
              "Phone number in the footer, not as text but as a callable link.",
            ],
          },
        ],
      },
      {
        id: "trust",
        heading: "Front-load trust",
        body: [
          {
            kind: "paragraph",
            text: "A visitor decides whether to trust you in the first 30 seconds. Put the proof where they will actually see it.",
          },
          {
            kind: "checklist",
            title: "Above-the-fold trust elements:",
            items: [
              "One real photo of your work or your team.",
              "One short trust strip (license, insurance, years, certifications).",
              "Service area in plain language.",
            ],
          },
          {
            kind: "callout",
            title: "Stock photos undo trust",
            text: "If the hero photo is clearly a stock photo of a model you do not know, every other trust signal on the page gets discounted. Real photos of real work convert better than the most polished stock image you can buy.",
          },
        ],
      },
      {
        id: "service-pages",
        heading: "Write real service pages",
        body: [
          {
            kind: "paragraph",
            text: "Each service should have its own page. Even short ones. A two-paragraph page about 'commercial pressure washing' will produce more quote requests than a one-line bullet inside a generic services section.",
          },
          {
            kind: "list",
            items: [
              "One page per service.",
              "Plain English explanation of what it includes.",
              "Pricing posture: starting price, hourly, flat-rate, or quote-only. State it.",
              "FAQ for the questions you answer on every first call.",
              "One CTA at the end of each page.",
            ],
          },
        ],
      },
      {
        id: "expectations",
        heading: "Set expectations after submit",
        body: [
          {
            kind: "paragraph",
            text: "Most local business forms thank the visitor and disappear. That is a missed opportunity. The thank-you screen is where you reduce buyer anxiety and start the relationship.",
          },
          {
            kind: "list",
            items: [
              "Confirm the message was received.",
              "Say when they will hear back ('within one business day').",
              "Give them a phone number for urgent questions.",
              "Send a real confirmation email, not a no-reply autoresponder.",
            ],
          },
        ],
      },
      {
        id: "by-business-type",
        heading: "Form fields by business type",
        body: [
          {
            kind: "paragraph",
            text: "Forms should be tuned to the work. A few examples of fields that actually carry their weight.",
          },
          {
            kind: "list",
            items: [
              "Roofers: name, phone, address or ZIP, repair vs replacement vs storm, short description.",
              "Electricians: name, phone, address, service type, urgency, short description.",
              "Med spas: name, email, treatment of interest, consultation preference, preferred days.",
              "Law firms: name, email, practice area, short description with disclaimer.",
              "Landscapers: name, email, address, maintenance vs install, frequency.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How fast should I respond to a form submission?",
        answer:
          "Same day, ideally within a few hours during business hours. Studies and our own experience say response time is the single biggest factor in whether a quote request becomes a customer. A fast 'we received your message and will reply in detail by tomorrow morning' beats a slow, perfect response every time.",
      },
      {
        question: "Should I require a phone number?",
        answer:
          "For trades and urgent services, yes. For research-mode businesses (med spa, law firm, landscape design), make it optional. Different audiences are more or less comfortable being called by a stranger.",
      },
      {
        question: "Will adding live chat increase quote requests?",
        answer:
          "Sometimes, but only when there is a real person on the other end answering within minutes. An empty chat window or a bot pretending to be a human usually reduces trust. We recommend a faster contact path before a chat widget.",
      },
    ],
    relatedResources: [
      "website-not-getting-leads",
      "quote-form-best-practices",
      "mobile-website-local-business",
    ],
    relatedIndustries: ["roofers", "plumbers", "electricians", "landscapers"],
    ctaHeadline:
      "Want a 30-minute audit of how your current site captures leads?",
  },

  /* ---------- 4. wix-vs-web-designer (published) ---------- */
  {
    slug: "wix-vs-web-designer",
    category: "Comparisons",
    title: "Wix vs Hiring a Web Designer for a Local Business",
    metaTitle: "Wix vs Hiring a Web Designer for a Local Business",
    metaDescription:
      "An honest comparison of Wix vs hiring a web designer for a small local business. When DIY is enough, when it stops being enough, and how to decide.",
    description:
      "An honest comparison of Wix versus hiring a web designer for a small local business, with no bashing.",
    publishDate: "2026-05-27",
    updatedDate: "2026-05-27",
    readingTime: "8 min read",
    keywords: [
      "wix vs web designer",
      "diy website vs hire web designer",
      "should I use wix",
    ],
    intro:
      "This is not a Wix bashing piece. Wix is a real product, and for a real set of businesses, it is the right answer. The honest question is when it stops being the right answer. The same logic applies to Squarespace, GoDaddy, and any other DIY builder.",
    sections: [
      {
        id: "when-wix-is-fine",
        heading: "When Wix is fine",
        body: [
          {
            kind: "paragraph",
            text: "If most of the following are true, building it yourself on Wix or Squarespace is probably the right call. Spend the saved money on photography, ads, or a better truck wrap.",
          },
          {
            kind: "checklist",
            title: "DIY is enough if:",
            items: [
              "Your business is small and predictable.",
              "You have one or two services, not a long list.",
              "Most of your business comes from referrals.",
              "You have a few hours per month to update the site yourself.",
              "You are okay with a template that looks like many other templates.",
              "You do not depend on the website to produce new leads.",
            ],
          },
        ],
      },
      {
        id: "when-wix-stops",
        heading: "When Wix stops being enough",
        body: [
          {
            kind: "paragraph",
            text: "The cracks usually show up in the second year, not the first. The site shipped fine, but it is not producing leads and you cannot quite tell why.",
          },
          {
            kind: "checklist",
            title: "DIY is no longer the right tool if:",
            items: [
              "You have grown to three or more services that each need their own page.",
              "You serve multiple cities or service areas.",
              "You want to be found in local search, not just by people who already know you.",
              "Your conversion rate is low and you cannot diagnose why on your own.",
              "You are paying for ads and the site is not converting them well.",
              "You are spending more than two hours a month wrestling the builder.",
            ],
          },
        ],
      },
      {
        id: "comparison",
        heading: "A head-to-head comparison",
        body: [
          {
            kind: "comparison",
            columns: ["DIY builder (Wix, Squarespace)", "Small studio build"],
            rows: [
              {
                label: "Setup time",
                a: "1 to 4 weekends",
                b: "3 to 6 weeks",
              },
              {
                label: "Up-front cost",
                a: "$0 to $300",
                b: "$1,995 to $7,000",
              },
              {
                label: "Monthly cost",
                a: "$15 to $50",
                b: "$30 to $250 (with care)",
              },
              {
                label: "Custom structure",
                a: "Template only",
                b: "Built for your services",
              },
              {
                label: "Local SEO setup",
                a: "Generic",
                b: "Per service, per area",
              },
              {
                label: "Speed",
                a: "Depends on template",
                b: "Tuned per page",
              },
              {
                label: "Ownership",
                a: "Locked to platform",
                b: "Yours; portable",
              },
              {
                label: "Updates",
                a: "You do them",
                b: "We do them",
              },
              {
                label: "When something breaks at 8pm",
                a: "Support chat",
                b: "A person you know",
              },
            ],
          },
        ],
      },
      {
        id: "ownership",
        heading: "Ownership matters more than people realize",
        body: [
          {
            kind: "paragraph",
            text: "On a hosted builder, the design lives inside the builder. Leaving Wix usually means rebuilding from scratch. That is fine when the business is small and the site is simple. It is expensive once the site has grown into a real lead engine.",
          },
          {
            kind: "paragraph",
            text: "A studio build on a portable foundation (Next.js, WordPress, or a comparable stack) means the site is yours. You own the code, the domain, and the email. If you ever want to move studios, you can.",
          },
        ],
      },
      {
        id: "conversion",
        heading: "Conversion is the real difference",
        body: [
          {
            kind: "paragraph",
            text: "Most DIY builders are fine at hosting a website. They are not fine at building a website that converts. The forms are generic, the service pages are template-shaped, and the local SEO setup is whatever the builder defaults to.",
          },
          {
            kind: "paragraph",
            text: "If your website is supposed to bring you customers, that gap matters. If it is supposed to be a digital business card, it does not.",
          },
        ],
      },
      {
        id: "how-to-decide",
        heading: "How to decide today",
        body: [
          {
            kind: "callout",
            title: "Two honest questions",
            text: "Question one: do you need the website to produce new customers, or just to confirm that you are real? Question two: do you have two hours per month to maintain it yourself? If the answers are 'yes, produce customers' and 'no, I do not,' a real studio build is usually the better answer. Otherwise, Wix is fine.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I start on Wix and move later?",
        answer:
          "Yes. Many of our customers started on Wix or Squarespace. The migration to a real build is not painful when there is a real reason for it, and the data you gathered on the Wix site (which pages got traffic, what people clicked, what they ignored) is useful when designing the next version.",
      },
      {
        question: "What about Squarespace, GoDaddy, or Webflow?",
        answer:
          "Squarespace and GoDaddy are in the same category as Wix; the trade-offs are similar. Webflow is a more capable builder; it sits closer to a real custom build in cost and complexity, and is the right answer for some businesses. The same decision logic applies: who builds it, who maintains it, and what does it have to do for you.",
      },
      {
        question: "Will Wix hurt my SEO?",
        answer:
          "Not directly. A well-maintained Wix site can rank fine for low-competition local searches. The problem is usually that no one is maintaining it, not that Wix is technically bad.",
      },
    ],
    relatedResources: [
      "small-business-website-cost",
      "website-not-getting-leads",
      "website-maintenance-small-business",
    ],
    relatedIndustries: ["contractors", "med-spas", "law-firms"],
    ctaHeadline:
      "Not sure whether to stay on Wix or move? Book a free 30-minute audit.",
  },

  /* ---------- 5. website-maintenance-small-business (published) ---------- */
  {
    slug: "website-maintenance-small-business",
    category: "Website Maintenance",
    title: "Website Maintenance for Small Businesses: What Is Actually Included?",
    metaTitle: "Website Maintenance for Small Businesses",
    metaDescription:
      "What 'website maintenance' actually means for a small local business, what is and is not included in a typical monthly plan, and what to ask before paying for one.",
    description:
      "What website maintenance actually includes for a small business, and what to ask before paying for it.",
    publishDate: "2026-05-27",
    updatedDate: "2026-05-27",
    readingTime: "7 min read",
    keywords: [
      "website maintenance small business",
      "what is included in website maintenance",
      "monthly website care",
    ],
    intro:
      "Most websites do not fail because they were built badly. They fail because nobody updated them after launch. 'Website maintenance' is a vague phrase that hides very different things behind one number. This guide is about what the phrase should actually mean.",
    sections: [
      {
        id: "what-is-included",
        heading: "What every real maintenance plan should include",
        body: [
          {
            kind: "checklist",
            title: "Non-negotiable monthly basics:",
            items: [
              "Hosting fees, included in the monthly number, not a surprise line item.",
              "SSL certificate renewal and monitoring.",
              "Daily or weekly off-site backups.",
              "Uptime monitoring with a real alerting channel.",
              "Software and dependency updates.",
              "Security patches applied within a sensible window.",
              "Form testing at least once a month, end to end.",
            ],
          },
        ],
      },
      {
        id: "what-should-be-included",
        heading: "What good plans add",
        body: [
          {
            kind: "list",
            items: [
              "A monthly allowance for content edits (new service, new hours, new photos).",
              "Photo optimization for new images you send.",
              "Minor copy updates without a per-change charge.",
              "Quarterly performance check.",
              "Analytics and Search Console review.",
              "A real person who responds in one business day.",
            ],
          },
        ],
      },
      {
        id: "what-is-not",
        heading: "What is not included",
        body: [
          {
            kind: "paragraph",
            text: "Most plans have a clear edge. It helps to know it up front, before you ask for something that costs more than you expected.",
          },
          {
            kind: "list",
            items: [
              "Full redesigns or new page builds (separate project).",
              "Brand new service lines (separate project).",
              "E-commerce store builds.",
              "Custom development beyond the monthly allowance.",
              "Logo design or photography.",
              "SEO content writing (separate retainer where applicable).",
              "Paid advertising management.",
            ],
          },
        ],
      },
      {
        id: "what-to-ask",
        heading: "Questions to ask before signing",
        body: [
          {
            kind: "checklist",
            title: "Before you pay anyone anything monthly:",
            items: [
              "What is the monthly allowance, in minutes or in number of edits?",
              "How quickly do you respond to requests?",
              "Where are backups stored, and how do I get them if you disappear?",
              "Who owns the domain (it should be you)?",
              "Who owns the code or design (it should be you, unless it's a builder)?",
              "Is there a contract minimum?",
              "What does cancellation look like?",
            ],
          },
          {
            kind: "callout",
            title: "Ownership is the most important question",
            text: "If the answer to 'who owns the domain and code' is anything other than 'you do,' walk away. Hostage situations are common in this industry. Real studios make ownership a non-negotiable starting condition.",
          },
        ],
      },
      {
        id: "honest-pricing",
        heading: "Honest pricing ranges",
        body: [
          {
            kind: "list",
            items: [
              "$30 to $60 per month: hosting and SSL only. Right for stable sites that rarely change.",
              "$80 to $150 per month: hosting plus a real monthly allowance for edits and minor updates. Right for most small local businesses.",
              "$200 to $400 per month: appointment-based businesses or revenue-critical sites that need fast turnaround on changes.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I really need maintenance?",
        answer:
          "If you built the site yourself on Wix or Squarespace and you keep up with it, probably not. If a studio built it and you do not want to be the person managing certificates, plugin updates, and weekly form testing, yes.",
      },
      {
        question: "What happens if my site goes down?",
        answer:
          "A real maintenance plan includes uptime monitoring. We get an alert the moment your site is down, often before you do. Most downtime resolves in minutes; serious incidents are rare.",
      },
      {
        question: "Can I move my site to someone else later?",
        answer:
          "Yes. You own your domain, your hosting account, your code, and your design. Migration is straightforward. Honest studios do not lock you in.",
      },
    ],
    relatedResources: [
      "small-business-website-cost",
      "wix-vs-web-designer",
      "website-not-getting-leads",
    ],
    relatedIndustries: ["contractors", "law-firms", "med-spas"],
    ctaHeadline:
      "Want help making sense of your current maintenance plan? Book a free audit.",
  },

  /* ---------- Drafts (data only) ---------- */
  {
    slug: "service-area-pages-local-seo",
    category: "Local SEO",
    title: "Do Service Area Pages Help Local SEO?",
    description:
      "When service-area pages help local rankings, when they become spammy, and how to do them right for trades and home services.",
    draft: true,
  },
  {
    slug: "mobile-website-local-business",
    category: "Local SEO",
    title: "How to Make Your Website Better on Mobile",
    description:
      "What actually matters for mobile-first design on a local business website: click-to-call, sticky CTAs, image sizes, and short forms.",
    draft: true,
  },
  {
    slug: "website-checklist-before-ads",
    category: "Website Mistakes",
    title: "Website Checklist Before You Spend Money on Ads",
    description:
      "A pre-flight checklist for owners about to spend on Google or Facebook ads. Fixes a leaking funnel before you turn on the tap.",
    draft: true,
  },
  {
    slug: "local-business-website-checklist",
    category: "Local SEO",
    title: "What Every Local Business Website Should Include",
    description:
      "A plain-English checklist for what a small local business website should include at minimum to produce calls and quote requests.",
    draft: true,
  },
  {
    slug: "quote-form-best-practices",
    category: "Lead Generation",
    title: "Quote Form Best Practices for Local Service Businesses",
    description:
      "What fields to ask, what fields to skip, how to handle spam, and how to set expectations after submission.",
    draft: true,
  },
];

/* ============================================================
   Helpers
   ============================================================ */

export function getPublishedResources(): PublishedResource[] {
  return RESOURCES.filter(isPublishedResource);
}

export function getPublishedResourceBySlug(
  slug: string,
): PublishedResource | undefined {
  const entry = RESOURCES.find((r) => r.slug === slug);
  if (!entry || !isPublishedResource(entry)) return undefined;
  return entry;
}

export function getRelatedResources(
  current: PublishedResource,
): PublishedResource[] {
  return current.relatedResources
    .map((slug) => getPublishedResourceBySlug(slug))
    .filter((r): r is PublishedResource => Boolean(r));
}
