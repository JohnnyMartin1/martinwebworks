import type { Metadata } from "next";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Card } from "@/app/components/ui/Card";
import { CarePlanCards } from "@/app/components/pricing/CarePlanCards";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon, ShieldIcon, WrenchIcon, InboxIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Monthly Care Plans for Local Business Websites",
  description:
    "Managed hosting, SSL, backups, security updates, monthly edits, and a real person on email — from $99/month. Care plans built so a small business does not have to maintain its own website.",
  alternates: { canonical: "/monthly-care" },
  openGraph: {
    title: "Monthly Care · Martin Web Works",
    description:
      "Hosting, security, backups, and monthly edits handled by a real person. From $99/month.",
    url: "/monthly-care",
    type: "website",
  },
};

const CARE_COVERS = [
  {
    icon: <ShieldIcon className="text-[var(--ink-navy)]" />,
    title: "Hosting, SSL, and backups",
    body: "Managed hosting, weekly backups, uptime monitoring, and security updates stay handled in the background.",
  },
  {
    icon: <WrenchIcon className="text-[var(--ink-navy)]" />,
    title: "Edits done by email",
    body: "Hours, prices, photos, service descriptions. Email what changed; we update it. No portals to learn.",
  },
  {
    icon: <InboxIcon className="text-[var(--ink-navy)]" />,
    title: "One support contact",
    body: "Email a real person, get a real reply. Not a ticket queue. Not a contractor handoff.",
  },
];

const WHY_STALE = [
  "Hours and services drift after every season",
  "Phones, browsers, and devices keep changing",
  "Security patches stop arriving on abandoned sites",
  "Photos get older while competitors keep updating",
  "Forms quietly break and you stop getting leads",
];

const OWNERSHIP_POINTS = [
  "You own your domain name and your content",
  "Cancel with 30 days notice, no exit fee",
  "Take your site with you if you ever leave",
  "We help with the transition if it ever comes to that",
];

export default function MonthlyCarePage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="Monthly Care"
        headline="Hosting and updates handled for you."
        lead="If your business changes every month, your site should too. We handle hosting, security, backups, and edits while you stay focused on customers."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} variant="primary-on-dark" size="lg">
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/packages" variant="secondary-on-dark" size="lg">
              View Website Packages
            </Button>
          </>
        }
      />

      <Section tone="navy" className="!pt-12 !pb-24">
        <CarePlanCards />
      </Section>

      <Section tone="paper" hairline="bottom">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-[460px]">
            <p className="t-label">What care covers</p>
            <h2 className="t-headline mt-3">The boring stuff that keeps a site healthy.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Care plans cover everything that needs to happen between launch days. You answer the phone and run the business; we keep the site in good shape.
            </p>
          </div>
          <ul className="grid gap-4">
            {CARE_COVERS.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--cream-deep)]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="t-title">{item.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="cream-deep" hairline="bottom">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="t-label">Why this matters</p>
            <h2 className="t-headline mt-3">Local business websites go stale for the same five reasons.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Most sites do not fail at launch. They fail six months later, quietly, while everyone is busy. Monthly care exists to prevent that.
            </p>
          </div>
          <Card tone="paper">
            <ul className="space-y-3 text-[0.975rem]">
              {WHY_STALE.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5 text-[var(--ink-navy)]">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal-blue)]"
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="paper" hairline="bottom">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="max-w-[440px]">
            <p className="t-label">Ownership</p>
            <h2 className="t-headline mt-3">No lock-in. Ever.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Your domain, your content, your decisions. Care is a service you choose to keep; it is never something we use to keep you.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {OWNERSHIP_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 rounded-xl bg-[var(--cream-deep)] p-4 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 text-[var(--ink-navy)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        headline="Need a site first, then care?"
        body="Care plans start at launch. If you do not have a site yet, start with a website package."
        tone="cream-deep"
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
