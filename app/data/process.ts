export type ProcessStep = {
  step: string;
  title: string;
  durationLabel: string;
  body: string;
  details: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Free Audit",
    durationLabel: "30 minutes, free",
    body: "We review your current site (or your situation if you don't have one) and tell you, plainly, what is working, what is not, and what we would do.",
    details: [
      "Live audit of your existing site or competitors",
      "Honest assessment of what is helping and hurting",
      "Clear next-step recommendation",
      "No obligation. No sales pitch.",
    ],
  },
  {
    step: "02",
    title: "Proposal and Scope",
    durationLabel: "1 to 3 business days",
    body: "If the audit makes sense to move forward, you get a written proposal with a fixed price, a scope, a timeline, and exactly what you provide vs. what we provide.",
    details: [
      "Fixed price (no estimates that creep)",
      "Detailed scope and deliverables",
      "Timeline with milestones",
      "What you need to gather (photos, hours, services)",
    ],
  },
  {
    step: "03",
    title: "Intake and Content",
    durationLabel: "About 1 week",
    body: "We send a simple intake form. You answer plain questions about your business. We gather photos, services, hours, and reviews. If you do not have something, we help with substitutes or workarounds.",
    details: [
      "Plain-English business intake form",
      "Photo guidance (or stock options)",
      "Service and pricing review",
      "Content workshop if needed",
    ],
  },
  {
    step: "04",
    title: "Design and Build",
    durationLabel: "1 to 3 weeks depending on package",
    body: "We build a real, working version of the site. You see it as it comes together, not at the end. We share progress, you give feedback, we adjust.",
    details: [
      "Real working site, not flat mockups",
      "Progress shared at key checkpoints",
      "Revision rounds based on your package",
      "Mobile and desktop tested throughout",
    ],
  },
  {
    step: "05",
    title: "Launch",
    durationLabel: "About 1 day",
    body: "We handle the domain, the hosting, the DNS, the email continuity, and the boring technical setup. You point us at your existing domain registrar and we walk it through.",
    details: [
      "Domain connection and DNS",
      "SSL certificate setup",
      "Email continuity (if applicable)",
      "Search Console and analytics live",
      "Launch checklist completed",
    ],
  },
  {
    step: "06",
    title: "Ongoing Care",
    durationLabel: "Monthly",
    body: "Pick a monthly care plan (or skip it). Care plan customers email what changed, we update it. Hosting, backups, security, and small edits stay handled in the background.",
    details: [
      "Hosting and SSL stay managed",
      "Weekly backups",
      "Edits done by email request",
      "Quarterly site reviews (Growth and Managed plans)",
    ],
  },
];
