export type Service = {
  slug: string;
  name: string;
  short: string;
  body: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-design-build",
    name: "Website Design and Build",
    short: "A custom site, not a template.",
    body: "Every site is built around how your customers actually buy from you: what they look for, where they get stuck, and how they ultimately call, message, or book. The output is a clean, mobile-first site that looks current and feels obvious to use.",
    bullets: [
      "Custom homepage and service pages",
      "Mobile-first layouts and tap-friendly targets",
      "Clear calls to action: call, quote, book",
      "Photo and content guidance",
      "Reviews, FAQs, and trust signals",
    ],
  },
  {
    slug: "managed-hosting",
    name: "Managed Hosting and Maintenance",
    short: "Hosting, security, backups. Quiet by design.",
    body: "Your site lives on managed hosting designed for small business sites. SSL, backups, uptime monitoring, security patches, and the boring infrastructure stay invisible. You get one line to email when something needs attention.",
    bullets: [
      "Managed hosting with SSL",
      "Weekly backups and disaster recovery",
      "Uptime monitoring",
      "Security updates and patches",
      "One support contact, not a ticket queue",
    ],
  },
  {
    slug: "edits-and-updates",
    name: "Monthly Edits and Updates",
    short: "Edits, photo swaps, content changes. We handle it.",
    body: "Most local businesses do not want to log in and edit a website themselves. With a monthly care plan, you email what changed and we make the change. Hours adjustments, new photos, new services, seasonal pages, all included up to your plan's monthly allowance.",
    bullets: [
      "Hours and contact updates",
      "New photos and content",
      "Add or rewrite service descriptions",
      "Seasonal pages and promotions",
      "Up to 30, 90, or 180 minutes per month",
    ],
  },
  {
    slug: "lead-capture",
    name: "Lead Capture and Forms",
    short: "Forms that go to your inbox, not a black hole.",
    body: "Contact forms, quote forms, intake forms. Designed so customers actually fill them out, routed straight to your email so leads do not get lost.",
    bullets: [
      "Custom quote forms for your services",
      "Multi-step intake when it makes sense",
      "Click-to-call buttons on mobile",
      "Confirmation emails and lead notifications",
      "Spam filtering",
    ],
  },
  {
    slug: "local-seo-foundation",
    name: "Local SEO Foundation",
    short: "The basics, done right.",
    body: "Your site is built so search engines and the customer in the next ZIP can both find you: titles and descriptions tuned to your services, location pages where useful, sitemap, and Google Search Console set up so you can see what is happening.",
    bullets: [
      "Title and description optimization",
      "Schema markup for local business",
      "Sitemap and robots.txt",
      "Google Search Console setup",
      "Analytics setup",
    ],
  },
  {
    slug: "ai-add-on",
    name: "AI Lead Assistant (Optional)",
    short: "A simple website chat that captures leads.",
    body: "Optional add-on. A small, embedded chat assistant that answers common questions about your business and routes serious inquiries to your inbox. Not a chatbot for fun. A lead capture tool.",
    bullets: [
      "Answers common business questions",
      "Sends qualified leads to your inbox",
      "Trained on your services, hours, areas",
      "Available 24/7",
      "Optional intake/booking flow",
    ],
  },
];
