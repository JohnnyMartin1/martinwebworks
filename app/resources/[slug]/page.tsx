import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

import {
  getPublishedResourceBySlug,
  getPublishedResources,
  getRelatedResources,
} from "@/app/data/resources";
import { getPublishedIndustries } from "@/app/data/industries";

import { Breadcrumbs, type Crumb } from "@/app/components/seo/Breadcrumbs";
import { ResourceBody } from "@/app/components/seo/ResourceBody";
import { TableOfContents } from "@/app/components/seo/TableOfContents";
import { InlineCTACard } from "@/app/components/seo/InlineCTACard";
import { RelatedLinks } from "@/app/components/seo/RelatedLinks";
import { SeoFaqList } from "@/app/components/seo/SeoFaqList";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/app/components/seo/JsonLd";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPublishedResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getPublishedResourceBySlug(slug);
  if (!resource) return {};

  const url = `/resources/${resource.slug}`;
  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: resource.metaTitle,
      description: resource.metaDescription,
      url,
      type: "article",
      publishedTime: resource.publishDate,
      modifiedTime: resource.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: resource.metaTitle,
      description: resource.metaDescription,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getPublishedResourceBySlug(slug);
  if (!resource) notFound();

  const related = getRelatedResources(resource);
  const allIndustries = getPublishedIndustries();
  const relatedIndustries = resource.relatedIndustries
    .map((s) => allIndustries.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: resource.category, href: `/resources#${resource.category.toLowerCase().replace(/\s+/g, "-")}` },
    { label: resource.title },
  ];

  const url = `/resources/${resource.slug}`;
  const midSection = resource.sections[Math.floor(resource.sections.length / 2)];

  return (
    <>
      <ArticleJsonLd
        url={url}
        title={resource.title}
        description={resource.metaDescription}
        datePublished={resource.publishDate}
        dateModified={resource.updatedDate}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {resource.faqs ? <FaqJsonLd items={resource.faqs} /> : null}

      {/* Article header */}
      <header className="bg-[var(--cream-paper)] pt-10 pb-12 sm:pt-12 sm:pb-14 hairline-bottom">
        <Container>
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-7 max-w-[760px]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem]">
              <span className="font-medium uppercase tracking-[0.12em] text-[var(--signal-blue-deep)]">
                {resource.category}
              </span>
              <span className="text-[var(--warm-ash)]">
                Updated {formatDate(resource.updatedDate)}
              </span>
              <span className="text-[var(--warm-ash)]">{resource.readingTime}</span>
            </div>
            <h1 className="t-display mt-5">{resource.title}</h1>
            <p className="t-lead mt-6">{resource.intro}</p>
          </div>
        </Container>
      </header>

      {/* Article body with optional sticky TOC on desktop */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article className="min-w-0">
            <TableOfContents sections={resource.sections} variant="inline" />

            {resource.introCallout ? (
              <aside className="mt-10 max-w-[65ch] rounded-2xl border border-[var(--divider)] bg-[var(--signal-blue-soft)] p-6 sm:p-7">
                <p className="t-label text-[var(--signal-blue-deep)]">
                  {resource.introCallout.title}
                </p>
                <p className="mt-2 text-[1.0625rem] leading-[1.6] text-[var(--ink-navy)]">
                  {resource.introCallout.text}
                </p>
              </aside>
            ) : null}

            <div className="mt-14">
              <ResourceBody sections={resource.sections.slice(0, Math.ceil(resource.sections.length / 2))} />
            </div>

            <InlineCTACard
              title="Want me to tell you what I would fix first?"
              body={`A 30-minute audit covers what is working, what is not, and what I would change first on your current site.`}
            />

            <div>
              <ResourceBody sections={resource.sections.slice(Math.ceil(resource.sections.length / 2))} />
            </div>

            {/* In-article FAQ */}
            {resource.faqs?.length ? (
              <div className="mt-20">
                <SeoFaqList items={resource.faqs} />
              </div>
            ) : null}
          </article>

          {/* Desktop sticky TOC sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents sections={resource.sections} variant="sticky" />
            <div className="mt-10 rounded-2xl border border-[var(--divider)] bg-[var(--cream-deep)] p-5">
              <p className="t-label text-[var(--warm-ash)]">Free 30-min audit</p>
              <p className="mt-2 text-[0.95rem] leading-snug text-[var(--ink-navy)]">
                We will review your current site (or your situation if you do not have one yet).
              </p>
              <div className="mt-4">
                <Button
                  href={BOOK_AUDIT_HREF}
                  external={BOOK_AUDIT_IS_EXTERNAL}
                  size="md"
                  variant="primary"
                  className="w-full"
                >
                  Book a Slot
                  <ArrowRight />
                </Button>
              </div>
            </div>
            {midSection ? (
              <p className="mt-8 text-[0.78rem] text-[var(--warm-ash)]">
                Jump to{" "}
                <a
                  href={`#${midSection.id}`}
                  className="text-[var(--ink-navy)] underline underline-offset-4 hover:text-[var(--signal-blue)]"
                >
                  {midSection.heading.replace(/^\d+\.\s*/, "")}
                </a>
              </p>
            ) : null}
          </aside>
        </div>
      </Section>

      {/* Related */}
      {(related.length || relatedIndustries.length) ? (
        <Section tone="cream-deep" hairline="top">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {related.length ? (
              <RelatedLinks
                title="Keep reading"
                variant="cards"
                items={related.map((r) => ({
                  title: r.title,
                  href: `/resources/${r.slug}`,
                  meta: r.category,
                }))}
              />
            ) : null}
            {relatedIndustries.length ? (
              <div>
                <p className="t-label text-[var(--warm-ash)]">For a specific trade</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedIndustries.map((i) => (
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
            ) : null}
          </div>
        </Section>
      ) : null}

      <CTASection
        headline={resource.ctaHeadline}
        body="A free 30-minute audit. No pitch. We will look at what is working, what is not, and what we would do first."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
