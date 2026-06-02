import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { PricingCards } from "@/app/components/pricing/PricingCards";
import { ComparisonTable } from "@/app/components/pricing/ComparisonTable";
import { ADD_ONS, PACKAGES } from "@/app/data/packages";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import { CalendarIcon } from "@/app/components/ui/Icons";
import { PackageOfferListJsonLd } from "@/app/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Website Packages and Pricing for Service Businesses",
  description:
    "Three fixed-price website packages built as scalable business solutions, from a professional foundation ($1,995) to advanced service-area conversion systems ($6,995+). Compare features side-by-side. No hidden line items.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages · Martin Web Works",
    description:
      "Fixed-price website packages for service businesses, $1,995–$6,995+. Scalable from professional foundation to advanced service-area conversion systems.",
    url: "/packages",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages · Martin Web Works",
    description:
      "Scalable, fixed-price website packages for service businesses: Starter, Growth, and Authority.",
    images: SHARE_IMAGES,
  },
};

/**
 * "Best for" matrix — surfaces the customer-fit cue users actually scan for
 * before scrolling into the full feature comparison. Mirrors the package
 * slugs in `PACKAGES`.
 */
const BEST_FOR = [
  {
    slug: "starter",
    label: "Starter",
    body: "Best for service businesses that need a professional foundation fast: a clean, mobile-first site that explains the services and makes contact obvious.",
  },
  {
    slug: "growth",
    label: "Growth",
    body: "Best for businesses that want a stronger lead-generation website: dedicated service pages, reviews, galleries, FAQ, and structured quote requests.",
  },
  {
    slug: "authority",
    label: "Authority / Scale",
    body: "Best for businesses that want advanced conversion systems, service-area SEO structure, multi-location architecture, and stronger lead routing or CRM handoff.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PackageOfferListJsonLd packages={PACKAGES} />
      <PageHero
        eyebrow="Packages"
        headline="Scalable website packages for service businesses."
        lead="Pick the package that matches how much lead-generation muscle your business actually needs this year. From a professional foundation to an advanced service-area conversion system. Fixed pricing. No hidden line items."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg" data-cta="book_audit_hero">
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
        <BestForPanel />
        <LaunchCareCallout />
      </Section>

      <Section tone="paper" hairline="bottom">
        <h2 className="t-headline">Package comparison</h2>
        <p className="t-body mt-4 text-[var(--warm-ash)]">
          If you are unsure, most service businesses choose Growth. It is the right middle ground for serious lead generation without over-investing on day one.
        </p>
        <div className="mt-8">
          <ComparisonTable />
        </div>
        <p className="mt-8 text-[0.95rem] text-[var(--warm-ash)]">
          For a deeper look at what each line item includes, like quote forms,
          booking, AI assistant, and service-area pages, visit the{" "}
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
        body="Book a free website audit. We will review your business, where you want more inquiries, and recommend a starting point, or honestly tell you a new website is not the right investment yet."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "See Examples", href: "/examples" }}
      />
    </>
  );
}

/* ----------------------------------------------------------
   Best-for panel — three short "this is who it's for" cards
   tied to the package slugs. Sits between the price cards and
   the launch care callout so customer-fit is the next thing
   a prospect reads after the prices.
   ---------------------------------------------------------- */
function BestForPanel() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {BEST_FOR.map((b) => (
        <div
          key={b.slug}
          className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper"
        >
          <p className="t-label text-[var(--signal-blue-deep)]">Best for</p>
          <h3 className="mt-2 text-[1rem] font-semibold tracking-[-0.01em] text-[var(--ink-navy)]">
            {b.label}
          </h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--warm-ash)]">
            {b.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------
   Launch care callout — sits under the pricing cards so the
   business-model framing is the next thing a prospect reads
   after pricing and best-for. Quiet, factual, professional
   ongoing-support language — not a lock-in framing.
   ---------------------------------------------------------- */
function LaunchCareCallout() {
  return (
    <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-6 shadow-paper sm:flex-row sm:items-start sm:gap-6 sm:p-7">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--cream-deep)]">
        <CalendarIcon className="text-[var(--ink-navy)]" />
      </span>
      <div>
        <p className="t-label text-[var(--signal-blue-deep)]">
          Every build includes a 6-month launch care period
        </p>
        <p className="mt-2 text-[0.975rem] leading-relaxed text-[var(--ink-navy)]">
          Launch care keeps your site monitored, updated, and supported during
          the most important first months after it goes live. Hosting, SSL,
          backups, form testing, and small updates stay covered. After six
          months, you continue month-to-month, change plans, or request a clean
          handoff. You keep your domain and content.
        </p>
      </div>
    </div>
  );
}
