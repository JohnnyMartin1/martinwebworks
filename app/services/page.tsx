import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Card } from "@/app/components/ui/Card";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { SERVICES } from "@/app/data/services";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Services for Local Business Websites",
  description:
    "Custom website design, build, hosting, and monthly care for local service businesses. Built around calls, quote requests, mobile speed, and ongoing updates.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Martin Web Works",
    description:
      "Design, build, host, and maintain — what a local-business website actually needs to keep earning.",
    url: "/services",
    type: "website",
  },
};

const SITE_OBJECTIVES = [
  "Load quickly on mobile",
  "Make calls and quote requests obvious",
  "Explain your services clearly",
  "Build trust before customers call",
  "Send form submissions to the right inbox",
  "Stay easy to update after launch",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        headline="What we build, host, and maintain."
        lead="You should not need five vendors and three logins to keep a local business website running. We design it, launch it, and keep it current."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg">
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
            <p className="t-label">Every site we ship</p>
            <h2 className="t-headline mt-3">What every site is built to do.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Different businesses need different content. Every site we ship has the same six commitments underneath it.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SITE_OBJECTIVES.map((goal) => (
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
          Looking for the working pieces — quote forms, booking, AI assistants,
          reviews, service-area pages?{" "}
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
        body="Book a free audit. We will look at your situation and recommend the right starting point: Starter, Growth, Authority, or nothing yet."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
