import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { ExamplesGrid } from "@/app/components/features/ExamplesGrid";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import {
  EXAMPLE_CONCEPTS,
  getBaseExample,
} from "@/app/data/exampleConcepts";

export const metadata: Metadata = {
  title: "Example Websites for Service Businesses",
  description:
    "Concept examples of websites Martin Web Works can build for roofers, electricians, contractors, law firms, med spas, restaurants, and other service businesses across the U.S.",
  alternates: { canonical: "/examples" },
  openGraph: {
    title: "Example Websites · Martin Web Works",
    description:
      "Concept websites for service businesses — roofers, electricians, contractors, law firms, med spas, and more.",
    url: "/examples",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Example Websites · Martin Web Works",
    description:
      "Concept walkthroughs of conversion-focused websites for service businesses.",
    images: SHARE_IMAGES,
  },
};

export default function ExamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Examples"
        headline="Industry-specific concept websites."
        lead="These are concept examples, not real client sites. They show how a website should be structured for different service-business types — what goes above the fold, how trust gets built, and where the leads actually come from."
        actions={
          <>
            <Button
              href={BOOK_AUDIT_HREF}
              external={BOOK_AUDIT_IS_EXTERNAL}
              size="lg"
              data-cta="book_audit_hero"
            >
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Explore Features
            </Button>
          </>
        }
      />

      {/* Feature: three full concept walkthroughs are linked from cards below */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[560px]">
            <p className="t-label text-[var(--warm-ash)]">Full walkthroughs</p>
            <h2 className="t-headline mt-3">
              Open one to see the whole concept.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Three of the concepts below open into a complete walkthrough:
              hero, services, trust, lead-capture flow, and feature breakdown.
            </p>
          </div>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {EXAMPLE_CONCEPTS.map((c) => {
            const base = getBaseExample(c);
            return (
              <li key={c.slug}>
                <Link
                  href={`/examples/${c.slug}`}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-[var(--divider)] bg-[var(--paper-white)] px-5 py-4 transition-colors duration-150 hover:border-[var(--ink-navy)]"
                >
                  <span>
                    <span className="block text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--signal-blue-deep)]">
                      {c.industryLabel}
                    </span>
                    <span className="mt-1 block text-[0.95rem] font-semibold text-[var(--ink-navy)]">
                      {base?.name ?? c.industryLabel}
                    </span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--warm-ash)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--ink-navy)]" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="cream-deep" hairline="top">
        <ExamplesGrid />
      </Section>

      <CTASection
        headline="Want to see what your business website should look like?"
        body="Book a free website audit. We will review your current site (or your situation) and sketch the direction we would take for a conversion-focused build."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
