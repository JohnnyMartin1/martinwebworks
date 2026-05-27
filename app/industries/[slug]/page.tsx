import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

import {
  getPublishedIndustries,
  getPublishedIndustryBySlug,
  getRelatedIndustries,
} from "@/app/data/industries";
import { getPublishedResources } from "@/app/data/resources";

import { Breadcrumbs, type Crumb } from "@/app/components/seo/Breadcrumbs";
import { Checklist } from "@/app/components/seo/Checklist";
import { IndustryMockup } from "@/app/components/seo/IndustryMockup";
import { InlineCTACard } from "@/app/components/seo/InlineCTACard";
import { RelatedLinks } from "@/app/components/seo/RelatedLinks";
import { SeoFaqList } from "@/app/components/seo/SeoFaqList";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/app/components/seo/JsonLd";

/* ============================================================
   Static params + dynamicParams (drafts → 404)
   ============================================================ */

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPublishedIndustries().map((i) => ({ slug: i.slug }));
}

/* ============================================================
   Metadata
   ============================================================ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getPublishedIndustryBySlug(slug);
  if (!industry) return {};

  const url = `/industries/${industry.slug}`;
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

/* ============================================================
   Helpers
   ============================================================ */

const PACKAGE_LABEL: Record<"starter" | "growth" | "authority", string> = {
  starter: "Starter Website",
  growth: "Growth Website",
  authority: "Authority Website",
};

const PACKAGE_PRICE: Record<"starter" | "growth" | "authority", string> = {
  starter: "From $1,995",
  growth: "From $3,995",
  authority: "From $6,995",
};

/* ============================================================
   Page
   ============================================================ */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getPublishedIndustryBySlug(slug);
  if (!industry) notFound();

  const related = getRelatedIndustries(industry);
  const allResources = getPublishedResources();
  const relatedResources = industry.relatedResources
    .map((s) => allResources.find((r) => r.slug === s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: industry.pluralName },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <FaqJsonLd items={industry.faqs} />

      {/* Hero with breadcrumbs + mockup */}
      <header className="bg-[var(--cream-paper)] pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 hairline-bottom">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:items-center">
            <div className="max-w-[640px]">
              <p className="t-label text-[var(--warm-ash)]">
                For {industry.pluralName.toLowerCase()}
              </p>
              <h1 className="t-display mt-4">{industry.heroHeadline}</h1>
              <p className="t-lead mt-6">{industry.heroSubtext}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={BOOK_AUDIT_HREF}
                  external={BOOK_AUDIT_IS_EXTERNAL}
                  size="lg"
                >
                  Book Free Website Audit
                  <ArrowRight />
                </Button>
                <Button href="/packages" variant="secondary" size="lg">
                  View Packages
                </Button>
              </div>
            </div>

            {/* Mockup */}
            <div className="lg:justify-self-end">
              <IndustryMockup mockup={industry.mockup} />
              <p className="mt-3 text-[0.78rem] text-[var(--warm-ash-soft)]">
                Concept example. Not a real client site.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What customers need: editorial two-column split, not a card grid */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <p className="t-label text-[var(--warm-ash)]">
              Before they contact you
            </p>
            <h2 className="t-headline mt-3 max-w-[440px]">
              What {industry.pluralName.toLowerCase()} customers need to see first.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              These are the questions a real customer is answering in the first
              thirty seconds on your site. Most of the work of a good{" "}
              {industry.industryName.toLowerCase()} website is making the answers obvious.
            </p>
          </div>
          <Checklist items={industry.whatCustomersNeed} tone="paper" />
        </div>
      </Section>

      {/* Recommended structure: numbered editorial list, no card grid */}
      <Section tone="cream-deep" hairline="top">
        <div className="max-w-[760px]">
          <p className="t-label text-[var(--warm-ash)]">Website structure</p>
          <h2 className="t-headline mt-3">
            Pages a {industry.industryName.toLowerCase()} website usually needs.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Not every site needs every page. This is the realistic working
            shape for a {industry.industryName.toLowerCase()} site, drawn from
            what actually produces calls and quote requests.
          </p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--divider)] sm:grid-cols-2">
          {industry.recommendedPages.map((page, i) => (
            <li
              key={page.title}
              className="flex gap-5 bg-[var(--paper-white)] p-6"
            >
              <span className="t-mono mt-1 shrink-0 text-[var(--signal-blue-deep)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1rem] font-semibold text-[var(--ink-navy)]">
                  {page.title}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--warm-ash)]">
                  {page.note}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Lead capture: structured table of field + rationale */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:items-start">
          <div>
            <p className="t-label text-[var(--warm-ash)]">Lead capture</p>
            <h2 className="t-headline mt-3 max-w-[440px]">
              What the {industry.industryName.toLowerCase()} form should actually ask.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Every form field is a small cost the visitor pays. These are the
              fields that earn their place for a {industry.industryName.toLowerCase()}.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
              <Link
                href="/resources/get-more-quote-requests"
                className="text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
              >
                More on quote-request strategy
              </Link>{" "}
              in the resources section.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper">
            <ul>
              {industry.leadCaptureFields.map((row, i) => (
                <li
                  key={row.field}
                  className={`grid grid-cols-[140px_1fr] gap-5 px-5 py-4 sm:grid-cols-[180px_1fr] sm:px-6 ${
                    i !== industry.leadCaptureFields.length - 1
                      ? "border-b border-[var(--divider)]"
                      : ""
                  }`}
                >
                  <span className="text-[0.9rem] font-semibold text-[var(--ink-navy)]">
                    {row.field}
                  </span>
                  <span className="text-[0.9rem] leading-relaxed text-[var(--warm-ash)]">
                    {row.rationale}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Inline CTA card between heavy content blocks */}
      <Section tone="cream-deep" hairline="top" className="!py-12">
        <InlineCTACard
          title={`Want a working ${industry.industryName.toLowerCase()} website by next month?`}
          body={`We can review your current site (or your situation if you do not have one yet) and tell you what we would build first.`}
        />
      </Section>

      {/* Trust signals + Local SEO: two checklists side by side, varied tones */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="t-label text-[var(--warm-ash)]">Trust signals</p>
            <h2 className="t-headline mt-3">
              What proves you are real to a {industry.industryName.toLowerCase()} customer.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              These are the things a careful customer scans for before they
              fill out the form. The site should make them easy to find, in
              order.
            </p>
            <div className="mt-8">
              <Checklist items={industry.trustSignals} tone="cream-deep" />
            </div>
          </div>
          <div>
            <p className="t-label text-[var(--warm-ash)]">Local SEO basics</p>
            <h2 className="t-headline mt-3">
              How a {industry.industryName.toLowerCase()} site earns local visibility.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              No tricks. No promises about rankings. These are the simple
              choices that compound for a {industry.industryName.toLowerCase()} site over
              time.
            </p>
            <div className="mt-8">
              <Checklist items={industry.localSeoIdeas} tone="cream-deep" />
            </div>
          </div>
        </div>
      </Section>

      {/* Common mistakes: drench navy with a contrast tone for emphasis */}
      <Section tone="navy" hairline="none">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <div>
            <p className="t-label text-[var(--cream-edge)]">Avoid these</p>
            <h2 className="t-headline mt-3 max-w-[460px] text-[var(--cream-paper)]">
              Mistakes that quietly kill {industry.pluralName.toLowerCase()} websites.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[var(--cream-edge)] text-[1.0625rem] leading-relaxed">
              Most of these are not bad design. They are decisions made by
              someone who never sat in a truck cab or treatment room. The fix
              is usually obvious once you see the list.
            </p>
          </div>
          <Checklist items={industry.commonMistakes} tone="navy-card" />
        </div>
      </Section>

      {/* Recommended package: structured callout, not another card grid */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-center">
          <div>
            <p className="t-label text-[var(--warm-ash)]">Recommended package</p>
            <h2 className="t-headline mt-3">
              The right tier for a {industry.industryName.toLowerCase()}.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Most {industry.pluralName.toLowerCase()} land on the same tier, with the
              same reasoning. Here is why.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[1.5rem] font-semibold tracking-[-0.012em] text-[var(--ink-navy)]">
                {PACKAGE_LABEL[industry.recommendedPackage.slug]}
              </h3>
              <span className="text-[0.95rem] font-medium text-[var(--warm-ash)]">
                {PACKAGE_PRICE[industry.recommendedPackage.slug]}
              </span>
            </div>
            <p className="mt-4 text-[1rem] leading-relaxed text-[var(--ink-navy)]">
              {industry.recommendedPackage.why}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {industry.suggestedFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[0.9rem] text-[var(--warm-ash)]"
                >
                  <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--signal-blue)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/packages" variant="primary">
                See full {PACKAGE_LABEL[industry.recommendedPackage.slug]}
              </Button>
              <Button href="/services" variant="ghost">
                What we actually build
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related resources / industries */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {relatedResources.length ? (
            <RelatedLinks
              title="Related guides"
              items={relatedResources.map((r) => ({
                title: r.title,
                href: `/resources/${r.slug}`,
                meta: r.category,
              }))}
            />
          ) : null}
          {related.length ? (
            <RelatedLinks
              title="Other industries"
              items={related.map((r) => ({
                title: r.pluralName,
                href: `/industries/${r.slug}`,
              }))}
            />
          ) : null}
        </div>
      </Section>

      {/* FAQ (visible -> FAQ JSON-LD) */}
      <Section tone="paper" hairline="top">
        <SeoFaqList
          items={industry.faqs}
          heading={`Questions from ${industry.pluralName.toLowerCase()} we have talked to.`}
        />
      </Section>

      {/* Final CTA */}
      <CTASection
        headline={industry.ctaHeadline}
        body="A free 30-minute audit. We will look at what is working, what is not, and what we would build first. No pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
