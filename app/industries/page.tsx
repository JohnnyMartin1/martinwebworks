import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import { getPublishedIndustries } from "@/app/data/industries";
import { IndustryCard } from "@/app/components/seo/IndustryCard";
import { Checklist } from "@/app/components/seo/Checklist";

export const metadata: Metadata = {
  title: "Industry-Specific Websites for Service Businesses",
  description:
    "Website growth guides for service businesses across the U.S. — roofers, contractors, electricians, plumbers, landscapers, med spas, law firms, and other quote- or appointment-driven companies.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industry-Specific Websites for Service Businesses",
    description:
      "Website growth guides built around how customers actually search and contact service businesses — roofers, contractors, med spas, law firms, and more.",
    url: "/industries",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Websites for Service Businesses",
    description:
      "Growth-focused website guides for service businesses across the U.S.",
    images: SHARE_IMAGES,
  },
};

const FEATURED_SLUGS = ["roofers", "contractors", "electricians", "med-spas"];

const ESSENTIALS = [
  "Fast mobile layout",
  "Phone number visible without scrolling",
  "One clear quote or contact path",
  "Real service pages, not one services section",
  "Service-area or location pages",
  "Reviews or trust signals",
  "Photo or project proof",
  "Form that lands in the right inbox",
  "Basic local SEO setup, done once and done right",
  "Monthly updates that keep the site from going stale",
];

export default function IndustriesIndexPage() {
  const all = getPublishedIndustries();
  const featured = FEATURED_SLUGS.map((slug) =>
    all.find((i) => i.slug === slug),
  ).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const rest = all.filter((i) => !FEATURED_SLUGS.includes(i.slug));

  return (
    <>
      <PageHero
        eyebrow="Industries"
        headline="Website builds for service businesses across the U.S."
        lead="We build conversion-focused websites for roofers, contractors, electricians, plumbers, landscapers, med spas, law firms, and other quote- or appointment-driven service businesses — remotely, with a process built to scale across industries."
        actions={
          <>
            <Button
              href={BOOK_AUDIT_HREF}
              external={BOOK_AUDIT_IS_EXTERNAL}
              size="lg"
            >
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/packages" variant="secondary" size="lg">
              View Website Packages
            </Button>
          </>
        }
      />

      {/* Featured industries: editorial pair-up. First card is taller; the
          others sit below in a two-up grid. Avoids the four-identical-cards
          AI tell. */}
      <Section tone="cream-deep">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="t-label text-[var(--warm-ash)]">Start here</p>
            <h2 className="t-headline mt-3 max-w-[640px]">
              Four guides we get asked about most.
            </h2>
          </div>
          <Link
            href="/resources"
            className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[0.85rem] font-medium text-[var(--ink-navy)] hover:text-[var(--signal-blue)]"
          >
            See written guides
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
          <IndustryCard industry={featured[0]} variant="featured" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {featured.slice(1).map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </Section>

      {/* The full grid: a single 3-up grid below, no nested cards, no eyebrow. */}
      <Section tone="paper" hairline="top">
        <div className="mb-10">
          <p className="t-label text-[var(--warm-ash)]">All industries</p>
          <h2 className="t-headline mt-3 max-w-[640px]">
            Every published industry guide.
          </h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Each guide is shaped around how customers in that industry actually search, compare, and book. We publish a guide when we have something specific to say about it — the rest we are still drafting.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rest.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </Section>

      {/* Essentials checklist + cross-link to resources. Two-column split,
          not another card grid. */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <p className="t-label text-[var(--warm-ash)]">The essentials</p>
            <h2 className="t-headline mt-3 max-w-[440px]">
              What most service-business websites need, regardless of industry.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              The industry-specific details matter, but the shared list is short. Most service-business websites win or lose on these ten things.{" "}
              <Link
                href="/resources/website-not-getting-leads"
                className="text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
              >
                The guide on why sites stop producing leads
              </Link>{" "}
              walks through them in detail.
            </p>
          </div>
          <Checklist items={ESSENTIALS} tone="paper" />
        </div>
      </Section>

      <CTASection
        headline="Not sure what your business website needs?"
        body="Book a free website audit. We will review your current site (or your situation if you do not have one yet) and walk through where the next leads are sitting on the table. Plainly, with no pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
