export type AIPlan = {
  slug: "lead-assistant" | "intake-assistant";
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  blurb: string;
  features: string[];
  bestFor: string;
  featured?: boolean;
};

export const AI_PLANS: AIPlan[] = [
  {
    slug: "lead-assistant",
    name: "AI Lead Assistant",
    setupPrice: "From $1,500 setup",
    monthlyPrice: "$149 / month",
    blurb: "Answers common questions and captures new leads, 24/7.",
    features: [
      "Embedded chat on your site",
      "Trained on your services, hours, areas",
      "Answers FAQs and pricing questions",
      "Captures contact info for serious leads",
      "Emails new leads to you immediately",
      "Monthly performance summary",
    ],
    bestFor:
      "Best if you get a lot of repeat questions, have off-hours traffic, or want to stop missing leads while you are on a job.",
    featured: true,
  },
  {
    slug: "intake-assistant",
    name: "AI Booking and Intake Assistant",
    setupPrice: "From $3,000 setup",
    monthlyPrice: "$399 / month",
    blurb: "Qualifies leads, books appointments, routes to your CRM.",
    features: [
      "Everything in Lead Assistant",
      "Qualifying questions (custom per business)",
      "Booking flow tied to your calendar",
      "Lead scoring and routing rules",
      "CRM or email-list handoff",
      "Quarterly script tuning included",
    ],
    bestFor:
      "Best for appointment-based service businesses (med spa, vet, law, accounting, and similar practices) that want a structured intake before the phone rings.",
  },
];

export type AIBenefit = {
  title: string;
  body: string;
};

export const AI_BENEFITS: AIBenefit[] = [
  {
    title: "Stops missed-lead leakage",
    body: "Customers who land on your site at 9 p.m. get an answer immediately instead of bouncing to a competitor's site that loaded faster.",
  },
  {
    title: "Filters before the phone rings",
    body: "Tire-kickers get their basic questions answered without you spending 15 minutes on the phone. Serious leads come with their context already collected.",
  },
  {
    title: "Speaks your business",
    body: "We train the assistant on your services, hours, service area, and pricing. It does not invent answers; if it does not know, it captures the lead and routes them to you.",
  },
];
