/**
 * Centralized JSON-LD builders. One file so we can audit the structured data
 * we ship without grepping ten components.
 *
 * Hard rules (also enforced in SEO_CONTENT.md):
 *  - Article schema: only on /resources/[slug] pages.
 *  - FAQ schema: only when the FAQ is actually visible to the user.
 *  - BreadcrumbList schema: only when breadcrumbs are visible.
 *  - No Review, AggregateRating, or LocalBusiness schemas (until real data exists).
 */

import type { Crumb } from "./Breadcrumbs";

const SITE_URL = "https://martinwebworks.com";

function toJson(data: unknown): string {
  return JSON.stringify(data);
}

/* ---------- Article ---------- */

export type ArticleJsonLdProps = {
  url: string; // path or full
  title: string;
  description: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified: string; // ISO yyyy-mm-dd
};

export function ArticleJsonLd({
  url,
  title,
  description,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Martin Web Works",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Martin Web Works",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJson(data) }}
    />
  );
}

/* ---------- FAQ ---------- */

export type FaqJsonLdProps = {
  items: { question: string; answer: string }[];
};

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  if (!items?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJson(data) }}
    />
  );
}

/* ---------- Breadcrumb ---------- */

export type BreadcrumbJsonLdProps = {
  crumbs: Crumb[];
};

export function BreadcrumbJsonLd({ crumbs }: BreadcrumbJsonLdProps) {
  if (!crumbs?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href
        ? c.href.startsWith("http")
          ? c.href
          : `${SITE_URL}${c.href}`
        : undefined,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJson(data) }}
    />
  );
}
