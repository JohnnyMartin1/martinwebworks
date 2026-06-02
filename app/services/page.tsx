import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Card } from "@/app/components/ui/Card";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { SERVICES } from "@/app/data/services";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import { ServiceListJsonLd } from "@/app/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services for Service-Business Websites",
  description:
    "Conversion-focused website builds, search structure, lead capture, booking flows, AI assistants, and ongoing care for service businesses across the U.S. Built as one growth system.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Martin Web Works",
    description:
      "Strategy, conversion-focused design, search structure, lead capture, booking, and ongoing care. What a service-business website actually needs to keep producing leads.",
    url: "/services",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Services · Martin Web Works",
    description:
      "Conversion-focused website services for service businesses, built as a growth system.",
    images: SHARE_IMAGES,
  },
};

/**
 * Growth outcomes — the customer-facing reasons businesses bring us in.
 * Used in the "What every site is built to do" section so service feature
 * lists tie back to a measurable business result instead of design jargon.
 */
const GROWTH_OUTCOMES = [
  "Generate more calls and direct inquiries",
  "Capture quote requests with structured intake",
  "Book more appointments without back-and-forth",
  "Build trust before the first phone call",
  "Show up better in local and service-area searches",
  "Reduce missed opportunities with forms, booking, and AI",
  "Keep the site current and converting after launch",
];

export default function ServicesPage() {
  return (
    <>
      <ServiceListJsonLd services={SERVICES} />
      <PageHero
        eyebrow="Services"
        headline="Website services built around business growth, not deliverables."
        lead="A conversion-focused website is a system, not a screen. We assemble strategy, design, search structure, lead capture, booking, and ongoing care into one accountable engagement."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg" data-cta="book_audit_hero">
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/packages" variant="secondary" size="lg">
              View Packages
            </Button>
          </>
        }
      />

      <Section tone="cream-deep" hairline="bottom">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card key={service.slug}>
              <h2 className="t-title">{service.name}</h2>
              <p className="mt-1 text-[0.95rem] font-medium text-[var(--ink-navy)]">{service.short}</p>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">{service.body}</p>
              <ul className="mt-5 space-y-2 text-[0.95rem]">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--ink-navy)]">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper" hairline="bottom">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="max-w-[460px]">
            <p className="t-label">What every build is for</p>
            <h2 className="t-headline mt-3">Seven outcomes every engagement is measured against.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Different industries need different content. The growth outcomes underneath are the same, and they are how we evaluate whether a build is doing its job.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {GROWTH_OUTCOMES.map((goal) => (
              <li
                key={goal}
                className="flex items-start gap-2.5 rounded-xl bg-[var(--cream-deep)] p-4 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 text-[var(--ink-navy)]" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-[0.95rem] text-[var(--warm-ash)]">
          Looking for the working pieces: quote forms, booking, AI assistants,
          service-area pages, reviews?{" "}
          <Link
            href="/features"
            className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
          >
            See the full features showroom
          </Link>
          .
        </p>
      </Section>

      <CTASection
        headline="Not sure which package fits?"
        body="Book a free website audit. We will review your business and where you want more inquiries, then recommend the right starting point: Starter, Growth, Authority, or honestly tell you a new website is not the right investment yet."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
