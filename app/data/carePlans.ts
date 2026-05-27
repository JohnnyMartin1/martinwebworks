export type CarePlan = {
  slug: "essential" | "growth" | "managed";
  name: string;
  price: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const CARE_PLANS: CarePlan[] = [
  {
    slug: "essential",
    name: "Essential Care",
    price: "$99 / month",
    blurb: "Hosting, security, backups, and small monthly edits.",
    features: [
      "Managed hosting and SSL",
      "Weekly backups",
      "Uptime monitoring",
      "Up to 30 minutes of small edits monthly",
      "Email support",
    ],
  },
  {
    slug: "growth",
    name: "Growth Care",
    price: "$199 / month",
    blurb: "Hosting plus regular updates and content help.",
    featured: true,
    features: [
      "Everything in Essential",
      "Up to 90 minutes of edits monthly",
      "Quarterly site review and recommendations",
      "Replace or update photos and content",
      "Basic SEO check-ins",
      "Priority email support",
    ],
  },
  {
    slug: "managed",
    name: "Managed Care",
    price: "$399 / month",
    blurb: "Treat your site like a real marketing asset.",
    features: [
      "Everything in Growth",
      "Up to 3 hours of edits monthly",
      "New page or section every quarter",
      "Lead form and conversion review",
      "Performance and SEO maintenance",
      "Phone + email support",
    ],
  },
];
