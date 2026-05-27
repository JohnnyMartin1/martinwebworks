import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { PricingCards } from "@/app/components/pricing/PricingCards";
import { ComparisonTable } from "@/app/components/pricing/ComparisonTable";
import { ADD_ONS } from "@/app/data/packages";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Website Packages and Pricing",
  description:
    "Three fixed-price website packages for local businesses, from $1,995 to $6,995+. Compare features side-by-side. No hidden line items, no estimates that creep.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages · Martin Web Works",
    description:
      "Fixed-price website packages for local businesses, $1,995–$6,995+. Compare features and pick what fits.",
    url: "/packages",
    type: "website",
  },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        headline="Transparent website pricing for local businesses."
        lead="Pick the package that matches how serious you are about your website this year. Fixed pricing. No hidden line items."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg">
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/examples" variant="secondary" size="lg">
              See Example Websites
            </Button>
          </>
        }
      />

      <Section tone="cream-deep" hairline="bottom">
        <PricingCards />
      </Section>

      <Section tone="paper" hairline="bottom">
        <h2 className="t-headline">Package comparison</h2>
        <p className="t-body mt-4 text-[var(--warm-ash)]">
          If you are unsure, most businesses choose Growth. It is the right middle ground for serious local lead generation.
        </p>
        <div className="mt-8">
          <ComparisonTable />
        </div>
        <p className="mt-8 text-[0.95rem] text-[var(--warm-ash)]">
          For a deeper look at what each line item includes — quote forms,
          booking, AI assistant, service-area pages — visit the{" "}
          <Link
            href="/features"
            className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
          >
            features showroom
          </Link>{" "}
          or browse{" "}
          <Link
            href="/examples"
            className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
          >
            full concept walkthroughs
          </Link>
          .
        </p>
      </Section>

      <Section tone="cream-deep" hairline="bottom">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[520px]">
            <p className="t-label">Add-ons</p>
            <h2 className="t-headline mt-3">Popular add-ons.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Add what you need to any package. Pricing is fixed at proposal.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ADD_ONS.map((addOn) => (
            <article
              key={addOn.name}
              className="rounded-2xl border border-[var(--cream-edge)] bg-[var(--paper-white)] p-6"
            >
              <h3 className="t-title">{addOn.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--ink-navy)]">{addOn.price}</p>
              <p className="mt-3 text-[0.95rem] text-[var(--warm-ash)]">{addOn.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Not sure which package fits?"
        body="Book a free audit. We will look at your business and recommend a starting point, or tell you honestly that a new website is not the right investment yet."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "See Examples", href: "/examples" }}
      />
    </>
  );
}
