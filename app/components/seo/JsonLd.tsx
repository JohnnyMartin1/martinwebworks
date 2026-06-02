/**
 * Centralized JSON-LD builders. One file so we can audit the structured data
 * we ship without grepping ten components.
 *
 * Hard rules (also enforced in SEO_CONTENT.md):
 *  - Article schema: only on /resources/[slug] pages.
 *  - FAQ schema: only when the FAQ is actually visible to the user.
 *  - BreadcrumbList schema: only when breadcrumbs are visible.
 *  - Organization schema: rendered on `/` only (single canonical place).
 *  - Service / ItemList of Service: on /services where the same services are
 *    visible to the user, and shaped from the SERVICES data so the schema and
 *    the page can never drift.
 *  - Product / Offer: on /packages where the same packages and prices are
 *    visible to the user, and shaped from the PACKAGES data for the same
 *    reason.
 *  - No Review, AggregateRating, or LocalBusiness schemas (until real data
 *    exists). LocalBusiness in particular implies a verifiable storefront we
 *    do not operate as a customer-facing physical location.
 */

import type { Crumb } from "./Breadcrumbs";
import type { Service } from "@/app/data/services";
import type { WebsitePackage } from "@/app/data/packages";

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

/* ---------- Organization ----------
 *
 * Single, canonical Organization node for Martin Web Works. Rendered once on
 * the homepage. Intentionally minimal — `name`, `url`, `logo` (the OG image
 * acts as the brand mark on most surfaces), `description`, and `sameAs` if /
 * when social profiles exist. We do not emit address, telephone, or
 * geo-coordinates because we do not operate a customer-facing storefront,
 * and the LocalBusiness implication would be misleading.
 */

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Martin Web Works",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Conversion-focused websites for service businesses ready to grow. Strategy, design, SEO structure, lead capture, booking flows, and ongoing care — built as a system.",
    areaServed: { "@type": "Country", name: "United States" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "team@martinwebworks.com",
        availableLanguage: ["English"],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJson(data) }}
    />
  );
}

/* ---------- Service / ItemList of Service ----------
 *
 * Emits an ItemList where each item is a Service node, shaped from the same
 * SERVICES data the /services page renders to the user. Keeping schema and
 * UI from the same source prevents drift and keeps Search from indexing
 * services we have quietly removed.
 */

export function ServiceListJsonLd({ services }: { services: Service[] }) {
  if (!services?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Martin Web Works · Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.body,
        serviceType: s.name,
        provider: {
          "@type": "Organization",
          name: "Martin Web Works",
          url: SITE_URL,
        },
        areaServed: { "@type": "Country", name: "United States" },
        url: `${SITE_URL}/services#${s.slug}`,
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

/* ---------- Product / Offer list for packages ----------
 *
 * Emits an ItemList of Products, each with a single Offer that carries the
 * package's lowest published price. Prices use `priceSpecification` instead
 * of a single `price` field because every package is "From $X" — a price
 * range, not a fixed amount. The `priceCurrency` is USD; the
 * `priceValidUntil` is intentionally omitted to avoid implying a sale.
 */

const PRICE_RE = /\$([\d,]+)/;

function parsePriceLowerBound(label: string): number | null {
  const m = PRICE_RE.exec(label);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
}

export function PackageOfferListJsonLd({
  packages,
}: {
  packages: WebsitePackage[];
}) {
  if (!packages?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Martin Web Works · Website Packages",
    itemListElement: packages.map((p, i) => {
      const lower = parsePriceLowerBound(p.price);
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.bestFor || p.blurb,
          brand: {
            "@type": "Organization",
            name: "Martin Web Works",
            url: SITE_URL,
          },
          url: `${SITE_URL}/packages#${p.slug}`,
          ...(lower != null
            ? {
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: lower,
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: lower,
                    valueAddedTaxIncluded: false,
                  },
                  availability: "https://schema.org/InStock",
                  url: `${SITE_URL}/packages#${p.slug}`,
                  seller: {
                    "@type": "Organization",
                    name: "Martin Web Works",
                    url: SITE_URL,
                  },
                },
              }
            : {}),
        },
      };
    }),
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
