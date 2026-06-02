export type FAQCategory =
  | "Pricing and Packages"
  | "Process and Timeline"
  | "Hosting and Ownership"
  | "Lead Generation"
  | "AI Assistant"
  | "General";

export type FAQ = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const FAQS: FAQ[] = [
  // Pricing
  {
    category: "Pricing and Packages",
    question: "How much does a website cost?",
    answer:
      "Starter builds begin at $1,995. The Growth package, which is what most local businesses choose, begins at $3,995. The Authority package begins at $6,995. Pricing for your specific project is fixed in the proposal before any work begins.",
  },
  {
    category: "Pricing and Packages",
    question: "Is the website price a one-time cost or monthly?",
    answer:
      "The website build is a one-time project cost. Monthly hosting and care plans are optional and start at $99/month. You can also self-host elsewhere if you prefer, though most clients pick a care plan because the value of not thinking about it is worth more than the cost.",
  },
  {
    category: "Pricing and Packages",
    question: "Are there any hidden fees?",
    answer:
      "No. The proposal is fixed-price. The only ongoing costs are the optional care plan you select (or your own hosting if you self-host) and a domain registration (usually $15 to $20 per year).",
  },
  {
    category: "Pricing and Packages",
    question: "Do you offer payment plans?",
    answer:
      "Yes. Most projects are split into two payments: 50% to start, 50% at launch. Larger projects can be split into three payments. We discuss this during the proposal.",
  },

  // Process
  {
    category: "Process and Timeline",
    question: "How long does it take to build a website?",
    answer:
      "Starter websites typically launch in 2 to 3 weeks. Growth websites take 3 to 5 weeks. Authority websites take 5 to 8 weeks. The biggest variable is how quickly you can gather your photos, content, and service descriptions.",
  },
  {
    category: "Process and Timeline",
    question: "What do you need from me to start?",
    answer:
      "A 30-minute conversation, basic information about your business (services, hours, areas served), photos if you have them, and any existing content you want to keep. We send a structured intake form that walks you through everything.",
  },
  {
    category: "Process and Timeline",
    question: "What if I do not have professional photos?",
    answer:
      "Phone photos taken correctly look great. We can give you a short shot list, suggest free stock options, or recommend a local photographer. We never use stock photos that look like stock photos.",
  },

  // Hosting and ownership
  {
    category: "Hosting and Ownership",
    question: "Who owns the website after launch?",
    answer:
      "You do. You own the domain, the content, and the work product. You are free to take the site elsewhere if our relationship ever stops working.",
  },
  {
    category: "Hosting and Ownership",
    question: "Do I own my domain and content?",
    answer:
      "Yes. Your domain stays in your name and your content stays yours. If you ever leave, we can help transfer the site or move the domain to another setup. There is no exit fee.",
  },
  {
    category: "Hosting and Ownership",
    question: "Is monthly care required?",
    answer:
      "Every website build includes a 6-month launch care period so the site stays hosted, secure, updated, and supported during the most important first months after launch. After that, you can continue month-to-month, change plans, or request a clean handoff.",
  },
  {
    category: "Hosting and Ownership",
    question: "What happens after the 6-month launch care period?",
    answer:
      "Three options. Continue month-to-month on the same plan, change to a different care plan that fits how the site is actually being used, or request a clean handoff. There is no auto-renewal trap and no exit fee.",
  },
  {
    category: "Hosting and Ownership",
    question: "Can I cancel monthly care?",
    answer:
      "After the 6-month launch care period, yes — month-to-month with 30 days notice. Your site stays up. You either move it to your own hosting (we help with the transition) or stay on a smaller hosting-only arrangement.",
  },
  {
    category: "Hosting and Ownership",
    question: "Can I update the site myself?",
    answer:
      "Most clients do not want to. With a monthly care plan, you email what changed and we update it. If you really want to do edits yourself, we can structure the build that way during scoping.",
  },

  // Lead generation
  {
    category: "Lead Generation",
    question: "Will my new site get me more calls and quote requests?",
    answer:
      "A clean, mobile-friendly site that loads fast, makes it easy to call, and answers the questions your customers are asking will almost always outperform an outdated one. We can't guarantee a specific number; anyone who does is lying. We can guarantee the site will be built to convert and we will tell you, during the audit, whether your traffic situation is the bottleneck.",
  },
  {
    category: "Lead Generation",
    question: "Do you guarantee leads?",
    answer:
      "No. We guarantee craft, transparency, and a real conversation about whether a new website is the right investment right now. If you need traffic, not a website, we will say so during the audit and you will not waste money.",
  },
  {
    category: "Lead Generation",
    question: "Can you add booking or scheduling?",
    answer:
      "Yes. We can integrate Cal.com, Calendly, Square Appointments, Setmore, or similar tools, or build a custom intake form if your scheduling is more nuanced.",
  },
  {
    category: "Lead Generation",
    question: "Can you build pages for my services and service areas?",
    answer:
      "Yes. Service and location pages are part of the Growth and Authority packages. They are one of the most important things you can have if you want to be found locally.",
  },

  // AI assistant
  {
    category: "AI Assistant",
    question: "Do I need the AI Lead Assistant?",
    answer:
      "No. It is an optional add-on. About half of clients add it. It makes the most sense if you get a lot of off-hours inquiries, if you have a busy phone and miss calls, or if your customers ask the same questions repeatedly.",
  },
  {
    category: "AI Assistant",
    question: "Will the AI assistant respond on its own to customers?",
    answer:
      "Yes, for general questions about hours, services, location, and pricing it answers immediately. For serious inquiries, it captures the lead's contact info and details, then routes the lead to your email so you can follow up personally.",
  },

  // General
  {
    category: "General",
    question: "Where are you based?",
    answer:
      "Arlington, Virginia, in the Washington, DC metro area. We work with local businesses across the country.",
  },
  {
    category: "General",
    question: "Do you only work with certain industries?",
    answer:
      "We work with service businesses across the U.S.: home services, trades, auto, medical practices, vet clinics, med spas, law and accounting offices, and restaurants — owner-led companies where calls, quote requests, and bookings drive the month. If you are a national e-commerce brand or a venture-backed startup, we are not the right fit.",
  },
];

export const FAQ_CATEGORIES: FAQCategory[] = [
  "Pricing and Packages",
  "Process and Timeline",
  "Hosting and Ownership",
  "Lead Generation",
  "AI Assistant",
  "General",
];
