import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";

import {
  getPublishedResources,
  RESOURCE_CATEGORIES,
} from "@/app/data/resources";
import { getPublishedIndustries } from "@/app/data/industries";
import { ResourceCard } from "@/app/components/seo/ResourceCard";

export const metadata: Metadata = {
  title: "Resources for Service-Business Websites",
  description:
    "Plain-English guides for service-business owners on website costs, lead generation, local SEO, and what to fix before spending on ads. Written by Martin Web Works.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources for Service-Business Websites",
    description:
      "Plain-English guides on website costs, lead generation, local SEO, and what to fix before spending on ads.",
    url: "/resources",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources for Service-Business Websites",
    description:
      "Plain-English guides for service-business owners on websites that actually produce leads.",
    images: SHARE_IMAGES,
  },
};

const FEATURED_SLUG = "website-not-getting-leads";

const STARTING_POINTS = [
  "small-business-website-cost",
  "get-more-quote-requests",
  "wix-vs-web-designer",
  "website-maintenance-small-business",
];

export default function ResourcesIndexPage() {
  const all = getPublishedResources();
  const featured = all.find((r) => r.slug === FEATURED_SLUG);
  const starting = STARTING_POINTS.map((slug) =>
    all.find((r) => r.slug === slug),
  ).filter((r): r is NonNullable<typeof r> => Boolean(r) && r?.slug !== FEATURED_SLUG);

  const industries = getPublishedIndustries().slice(0, 6);

  // Group all published resources by category for the article-grid section.
  const byCategory = RESOURCE_CATEGORIES.map((cat) => ({
    category: cat,
    items: all.filter((r) => r.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        headline="Website guides for service businesses that want more inquiries."
        lead="Plain-English advice on what your website should include, what hurts trust, and how to turn more visitors into calls, quote requests, and bookings."
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
            <Button href="/industries" variant="secondary" size="lg">
              See Industry Guides
            </Button>
          </>
        }
      />

      {/* Featured guide: a wide hero card. Editorial scale, single column. */}
      {featured ? (
        <Section tone="cream-deep">
          <div className="flex items-end justify-between gap-6 mb-8">
            <p className="t-label text-[var(--warm-ash)]">Featured guide</p>
            <Link
              href={`/resources/${featured.slug}`}
              className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[0.85rem] font-medium text-[var(--ink-navy)] hover:text-[var(--signal-blue)]"
            >
              Read this first
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ResourceCard resource={featured} variant="featured" />
        </Section>
      ) : null}

      {/* Best starting points: 2x2 grid that feels editorial */}
      <Section tone="paper" hairline="top">
        <div className="max-w-[640px] mb-10">
          <p className="t-label text-[var(--warm-ash)]">Best starting points</p>
          <h2 className="t-headline mt-3">If you only have time for four.</h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Most owners we talk to land on the same four questions first. These
            are the guides we recommend in roughly this order.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {starting.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      </Section>

      {/* Category chips + article grid. Single column groups, not bento. */}
      <Section tone="cream-deep" hairline="top">
        <div className="max-w-[640px] mb-12">
          <p className="t-label text-[var(--warm-ash)]">By topic</p>
          <h2 className="t-headline mt-3">Browse by what you are looking for.</h2>
        </div>

        <ul className="flex flex-wrap gap-2 mb-10">
          {RESOURCE_CATEGORIES.filter(
            (cat) => all.filter((r) => r.category === cat).length > 0,
          ).map((cat) => {
            const count = all.filter((r) => r.category === cat).length;
            const id = cat.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={cat}>
                <a
                  href={`#${id}`}
                  className="inline-flex items-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--ink-navy)] hover:border-[var(--ink-navy)] hover:bg-[var(--ink-navy)] hover:text-[var(--cream-paper)]"
                >
                  {cat}
                  <span className="ml-2 text-[var(--warm-ash)] group-hover:text-[var(--cream-edge)]">
                    {count}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="space-y-14">
          {byCategory.map(({ category, items }) => {
            // Tighten layout when a category is sparse so a lone card doesn't
            // sit alone in a 3-column row with two-thirds dead space.
            const gridCols =
              items.length === 1
                ? "sm:grid-cols-1 lg:grid-cols-2"
                : items.length === 2
                  ? "sm:grid-cols-2 lg:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3";
            return (
              <section
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex items-end justify-between gap-4 mb-5">
                  <h3 className="text-[1.25rem] font-semibold text-[var(--ink-navy)]">
                    {category}
                  </h3>
                  <span className="text-[0.78rem] text-[var(--warm-ash)]">
                    {items.length} guide{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className={`grid gap-5 ${gridCols} lg:gap-6`}>
                  {items.map((r) => (
                    <ResourceCard key={r.slug} resource={r} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      {/* Cross-link to industries: editorial split, no card grid */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <p className="t-label text-[var(--warm-ash)]">Industry-specific guides</p>
            <h2 className="t-headline mt-3 max-w-[440px]">
              Looking for advice for a specific trade?
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              The industry section walks through how a website should be
              structured for roofers, electricians, contractors, med spas, and
              other local service businesses.
            </p>
            <div className="mt-8">
              <Button href="/industries" variant="primary">
                See industry guides
                <ArrowRight />
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="flex items-center justify-between rounded-xl border border-[var(--divider)] bg-[var(--paper-white)] px-5 py-4 text-[0.95rem] font-medium text-[var(--ink-navy)] hover:border-[var(--ink-navy)]"
                >
                  <span>{i.pluralName}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        headline="Want me to review your current site?"
        body="A free 30-minute audit. We will look at what is working, what is not, and what we would do first."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
