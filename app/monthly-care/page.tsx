import type { Metadata } from "next";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Card } from "@/app/components/ui/Card";
import { CarePlanCards } from "@/app/components/pricing/CarePlanCards";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon, ShieldIcon, WrenchIcon, InboxIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Monthly Care Plans for Service-Business Websites",
  description:
    "Professional ongoing website support — managed hosting, SSL, backups, monitoring, security updates, monthly edits, and a real specialist on email. From $99/month. Built around launch care that keeps your site monitored, updated, and supported after it goes live.",
  alternates: { canonical: "/monthly-care" },
  openGraph: {
    title: "Monthly Care · Martin Web Works",
    description:
      "Professional ongoing website support — hosting, security, backups, monitoring, and monthly edits handled by a real specialist. From $99/month.",
    url: "/monthly-care",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Care · Martin Web Works",
    description:
      "Professional ongoing website support for service businesses. From $99/month.",
    images: SHARE_IMAGES,
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
  "You own your domain name, your content, and the work product",
  "After launch care, continue month-to-month with 30 days notice — no exit fee",
  "Take your site with you if you ever leave; we help with the transition",
  "Move to a smaller hosting-only arrangement when that fits better",
];

const LAUNCH_CARE_REASONS = [
  {
    title: "Most issues happen after launch",
    body: "Forms break quietly. Hours and prices drift. Photos age. Service descriptions stop matching what you actually offer. Launch is not the finish line.",
  },
  {
    title: "The first six months are the most important",
    body: "Real customers run into real edge cases. We catch the problems, edit what changed, and tune the lead-capture flow before they cost you a quarter of bookings.",
  },
  {
    title: "Then it becomes your choice",
    body: "After six months you can continue month-to-month, move to a smaller hosting-only arrangement, change plans, or request a clean handoff. No auto-renewal trap. No exit fee.",
  },
];

export default function MonthlyCarePage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="Monthly Care"
        headline="Professional ongoing website support."
        lead="Launch care keeps your site monitored, updated, and supported after it goes live — hosting, security, backups, edits, and a real specialist on email. Built around how service businesses actually use a website over time."
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

      {/* Launch care explainer — sits above "What care covers" because it
          explains the business-model framing every prospect asks about
          before reading the feature list. */}
      <Section tone="cream-deep" hairline="bottom">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <div className="max-w-[480px]">
            <p className="t-label">Why launch care is included</p>
            <h2 className="t-headline mt-3">
              Every build includes a 6-month launch care period.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Most local-business websites do not fail at launch. They fail six
              months later, quietly, while everyone is busy. Launch care is
              there to keep the site healthy during the most important first
              months — not to lock you in.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
              After six months, you choose how to continue. Continue
              month-to-month, change plans, or request a clean handoff.
            </p>
          </div>
          <ol className="grid gap-4">
            {LAUNCH_CARE_REASONS.map((r, i) => (
              <li
                key={r.title}
                className="flex gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.78rem] font-medium text-[var(--cream-paper)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-title">{r.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                    {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
            <p className="t-label">The five failure modes</p>
            <h2 className="t-headline mt-3">Local business websites go stale for the same five reasons.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              The drift always looks the same shape. Care plans exist to head these off before they cost you bookings.
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
            <h2 className="t-headline mt-3">You own the work. Always.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Your domain, your content, your decisions. Care is professional ongoing support you choose to keep — never something we use to keep you. After the launch care period, you continue, change plans, or hand the site off cleanly.
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
        body="Care begins at launch and runs as a 6-month launch care period included with every build. If you do not have a site yet, start with a website package."
        tone="cream-deep"
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
