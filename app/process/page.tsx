import type { Metadata } from "next";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { ProcessTimeline } from "@/app/components/features/ProcessTimeline";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Our Process · Audit to Launch to Ongoing Care",
  description:
    "Six steps from a free audit to a launched, looked-after website: audit, proposal, intake, design and build, launch, and monthly care. Fixed scope, fixed price, plain English.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Process · Martin Web Works",
    description:
      "Six steps from free audit to launched, looked-after website. Fixed scope, fixed price.",
    url: "/process",
    type: "website",
  },
};

const TRUST_POINTS = [
  "Fixed proposal before any work begins",
  "Review of the real site before launch",
  "You keep your domain and your content",
  "You always know what happens next",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        headline="A six-step process you can actually follow."
        lead="No mystery phases. No agency theater. Clear scope, clear pricing, and clear milestones from first call to launch."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg">
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See Services
            </Button>
          </>
        }
      />

      <Section tone="cream-deep" hairline="bottom" className="!pb-16 sm:!pb-20">
        <ProcessTimeline />
      </Section>

      <Section tone="paper" hairline="bottom">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="max-w-[520px]">
            <p className="t-label">How we work</p>
            <h2 className="t-headline mt-3">No agency theater. No mystery handoff.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Most local business owners have been burned by web work before: vague scopes, surprise invoices, half-finished sites. We work the way you would want to be worked with.
            </p>
          </div>
          <ul className="grid gap-3">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 text-[0.975rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 text-[var(--signal-blue)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        headline="Ready to start with step one?"
        body="The first step is a free audit. Thirty minutes, plain English, no pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
