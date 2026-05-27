import type { Metadata } from "next";
import Link from "next/link";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { Card } from "@/app/components/ui/Card";
import { Stamp } from "@/app/components/ui/Stamp";
import { CTASection } from "@/app/components/ui/CTASection";
import {
  CheckIcon,
  CalendarIcon,
  GlobeIcon,
  WrenchIcon,
  ChatIcon,
  FormIcon,
  MapIcon,
  StarIcon,
} from "@/app/components/ui/Icons";
import { BrowserFrame } from "@/app/components/mockups/BrowserFrame";
import { LeadNotification } from "@/app/components/mockups/LeadNotification";
import { SiteMockup } from "@/app/components/mockups/SiteMockup";
import { PricingPreviewCards } from "@/app/components/pricing/PricingPreviewCards";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";
import { EXAMPLES } from "@/app/data/examples";
import { CARE_PLANS } from "@/app/data/carePlans";
import { CONCEPT_SLUG_BY_BASE } from "@/app/data/exampleConcepts";

export const metadata: Metadata = {
  title: "Custom Local Business Websites · Martin Web Works",
  description:
    "Martin Web Works builds, hosts, and maintains custom websites for local service businesses — roofers, electricians, dentists, law firms, med spas, and more. Free 30-minute website audits.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Martin Web Works · Websites for Local Businesses",
    description:
      "Custom websites that earn more calls and quote requests for local service businesses. Free 30-minute audit.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Web Works",
    description:
      "Custom websites that earn local service businesses more calls and quote requests.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PurposeBlock />
      <ProblemSolution />
      <ModernFeatures />
      <PackagesPreview />
      <CarePreview />
      <ExamplesStrip />
      <ProcessGlance />
      <CTASection
        headline="One free audit. One honest conversation."
        body="Tell us about your business. We will look at your current site (or your situation if you don't have one) and give you a plain assessment in 30 minutes."
      />
    </>
  );
}

/* ============================================================
   1. Hero — split layout, single lead paragraph, one CTA pair.
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden hairline-bottom">
      <Container size="wide">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-28">
          <div className="max-w-[640px]">
            <p className="t-label text-[var(--warm-ash)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)] align-middle mr-2" />
              Booking free audits this month
            </p>
            <h1 className="t-display mt-5">
              Websites that earn your business more calls and quote requests.
            </h1>
            <p className="t-lead mt-6">
              A local web studio that builds, hosts, updates, and maintains websites for service businesses. Simple pricing. Clear ownership. No confusing handoff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
                variant="primary"
              >
                Book Free Website Audit
                <ArrowRight />
              </Button>
              <Button href="/packages" size="lg" variant="secondary">
                View Packages
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Custom website builds from $1,995",
                "Managed hosting and care from $99/month",
                "Built for mobile, calls, and quote requests",
                "Direct work, not an agency funnel",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[0.95rem] text-[var(--warm-ash)]"
                >
                  <CheckIcon className="mt-1 text-[var(--ink-navy)]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <HeroComposition />
        </div>
      </Container>
    </section>
  );
}

function HeroComposition() {
  const sample = EXAMPLES[0];
  return (
    <div className="relative">
      <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-3xl bg-[var(--cream-deep)] lg:block" aria-hidden />
      <div className="absolute -right-6 -bottom-10 hidden h-40 w-40 rounded-3xl bg-[var(--cream-deep)] lg:block" aria-hidden />

      <BrowserFrame url={sample.domain} className="relative z-10">
        <SiteMockup
          businessName={sample.name}
          tagline="Built for storm-damage calls and quote requests."
          primaryCta="Get a free quote"
          serviceLabels={["Roof Repair", "Replacement", "Inspections"]}
          palette={sample.palette}
        />
      </BrowserFrame>

      <div className="pointer-events-none">
        <div className="absolute left-[-3rem] top-[6rem] z-20 hidden md:block">
          <LeadNotification
            tone="lead"
            label="New quote request"
            title="Sarah K. — Roof replacement"
            time="2 minutes ago"
          />
        </div>
        <div className="absolute -right-6 bottom-12 z-20 hidden md:block">
          <LeadNotification
            tone="uptime"
            label="Site live + secure"
            title="SSL active. Backups complete."
            time="Last check: 3 minutes ago"
          />
        </div>
        <div className="absolute -bottom-6 left-[40%] z-20 hidden lg:block">
          <LeadNotification
            tone="update"
            label="Update handled"
            title="July hours updated and live."
            time="Yesterday, 4:12 PM"
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   2. Purpose block — Lead paragraph + three commitments.
   ============================================================ */
function PurposeBlock() {
  const commitments = [
    {
      icon: <GlobeIcon className="text-[var(--ink-navy)]" />,
      title: "We build the site.",
      body: "A custom, mobile-first website designed around how your customers actually find you and decide to call.",
    },
    {
      icon: <WrenchIcon className="text-[var(--ink-navy)]" />,
      title: "We host and maintain it.",
      body: "Hosting, SSL, backups, security, and updates stay handled. One email to one person, not a ticket queue.",
    },
    {
      icon: <CalendarIcon className="text-[var(--ink-navy)]" />,
      title: "We change it when you do.",
      body: "New hours, new photos, a new service. Email what changed. We update it. Included with care plans.",
    },
  ];

  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="max-w-[560px]">
          <h2 className="t-headline">
            A small studio that builds, hosts, and looks after the whole thing.
          </h2>
          <p className="t-lead mt-5">
            Most local business websites get built once, abandoned, and quietly stop earning. We build sites that work and stay current. You answer the phone; we handle the website.
          </p>
          <div className="mt-7">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
            >
              See what we build and maintain
              <ArrowRight />
            </Link>
          </div>
        </div>

        <ul className="grid gap-4">
          {commitments.map((c) => (
            <li
              key={c.title}
              className="flex gap-4 rounded-2xl border border-[var(--cream-edge)] bg-[var(--paper-white)] p-5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--cream-deep)]">
                {c.icon}
              </span>
              <div>
                <h3 className="t-title">{c.title}</h3>
                <p className="mt-1 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ============================================================
   3. Problem and solution — quiet two-column comparison.
   ============================================================ */
function ProblemSolution() {
  return (
    <Section tone="paper" hairline="bottom">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="t-label">The gap</p>
          <h2 className="t-headline mt-3">
            Most local businesses lose work to a slightly less-bad website next door.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Customers searching for a roofer, a dentist, an electrician, or a vet do not compare ten sites. They click the first one that loads fast, looks current, and tells them how to call.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <PainCard
            title="What an outdated site does"
            tone="rose"
            items={[
              "Slow on mobile, hard to tap",
              "Hours and services out of date",
              "Phone number buried below the fold",
              "No quote form or it goes nowhere",
              "Reads like a 2014 template",
            ]}
          />
          <PainCard
            title="What we build instead"
            tone="signal"
            items={[
              "Fast, mobile-first layout",
              "Hours, services, and pricing accurate",
              "Click-to-call always visible",
              "Quote forms that land in your inbox",
              "Looks current today and a year from now",
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

function PainCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "rose" | "signal";
}) {
  const isSignal = tone === "signal";
  return (
    <Card tone="paper" className="!p-6">
      <div className="flex items-center gap-2.5">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
            isSignal
              ? "bg-[var(--signal-blue-soft)] text-[var(--signal-blue-deep)]"
              : "bg-[var(--alert-rose-soft)] text-[#9f1239]"
          }`}
          aria-hidden
        >
          {isSignal ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 3l8 8M11 3l-8 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        <h3 className="t-title text-[var(--ink-navy)]">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-2 text-[0.95rem] text-[var(--warm-ash)]">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden className="mt-2 inline-block h-1 w-1 rounded-full bg-[var(--warm-ash-soft)]" />
            {i}
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ============================================================
   3b. Modern features — compact teaser into /features.
   ============================================================ */
function ModernFeatures() {
  const features = [
    {
      icon: <ChatIcon className="text-[var(--ink-navy)]" />,
      title: "AI lead assistant",
      body: "Captures off-hours questions and hands the lead to your inbox.",
    },
    {
      icon: <CalendarIcon className="text-[var(--ink-navy)]" />,
      title: "Online booking",
      body: "Service → time → confirmation. Works with Cal.com or Calendly.",
    },
    {
      icon: <FormIcon className="text-[var(--ink-navy)]" />,
      title: "Quote request forms",
      body: "Mobile-first, spam-protected, routed straight to your inbox.",
    },
    {
      icon: <MapIcon className="text-[var(--ink-navy)]" />,
      title: "Service-area pages",
      body: "One URL per city — what Google needs to surface you locally.",
    },
    {
      icon: <StarIcon className="text-[var(--ink-navy)]" />,
      title: "Reviews and trust",
      body: "Verified review embeds, credentials, and warranty in one block.",
    },
    {
      icon: <GlobeIcon className="text-[var(--ink-navy)]" />,
      title: "Before / after galleries",
      body: "Real project proof, grouped by neighborhood or case type.",
    },
  ];
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <p className="t-label">Features</p>
          <h2 className="t-headline mt-3">
            Modern features your website can include.
          </h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Beyond a brochure. These are the features that turn a local
            business website into a working lead system.
          </p>
        </div>
        <div>
          <Button href="/features" variant="secondary" size="md">
            Explore website features
            <ArrowRight />
          </Button>
        </div>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex gap-4 rounded-2xl border border-[var(--cream-edge)] bg-[var(--paper-white)] p-5"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--cream-deep)]">
              {f.icon}
            </span>
            <div>
              <h3 className="t-title">{f.title}</h3>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                {f.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ============================================================
   4. Packages preview — three cards (the real prices).
   ============================================================ */
function PackagesPreview() {
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <p className="t-label">Packages</p>
          <h2 className="t-headline mt-3">Transparent pricing. No estimates that creep.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Three packages that cover most local businesses. Pricing is fixed in the proposal before any work begins.
          </p>
        </div>
        <div>
          <Button href="/packages" variant="secondary" size="md">
            Compare full features
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <PricingPreviewCards />
      </div>
    </Section>
  );
}

/* ============================================================
   5. Monthly care drench band.
   ============================================================ */
function CarePreview() {
  return (
    <Section tone="navy" hairline="none" className="!py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="max-w-[480px]">
          <p className="t-label text-[var(--cream-edge)]">Monthly Care</p>
          <h2 className="t-headline mt-3 text-[var(--cream-paper)]">
            Your site stays current. You stay on the job.
          </h2>
          <p className="t-lead mt-5 text-[var(--cream-edge)]">
            Hosting, security, backups, and small edits done by email request. Cancel anytime, keep your domain, take your site if you ever leave.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/monthly-care" variant="primary-on-dark" size="md">
              See care plans
              <ArrowRight />
            </Button>
            <Button href="/services" variant="secondary-on-dark" size="md">
              What&apos;s included
            </Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {CARE_PLANS.map((plan) => (
            <li
              key={plan.slug}
              className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-inset ring-white/8"
            >
              <h3 className="t-title text-[var(--cream-paper)]">{plan.name}</h3>
              <p className="mt-1 text-[1.5rem] font-semibold tracking-[-0.018em] text-[var(--cream-paper)]">
                {plan.price}
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--cream-edge)]">{plan.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ============================================================
   6. Examples strip — three concept cards, link to full gallery.
   ============================================================ */
function ExamplesStrip() {
  // Feature the three businesses that have full concept walkthroughs.
  const featured = [
    EXAMPLES.find((e) => e.slug === "summit-ridge-roofing")!,
    EXAMPLES.find((e) => e.slug === "lumen-dental")!,
    EXAMPLES.find((e) => e.slug === "rivermark-law")!,
  ];
  return (
    <Section tone="paper" hairline="bottom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[520px]">
          <p className="t-label">Concept examples</p>
          <h2 className="t-headline mt-3">A few of the kinds of businesses we build for.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            These are concept examples designed by us, not real client work. The full set lives on the examples page.
          </p>
        </div>
        <div>
          <Button href="/examples" variant="secondary" size="md">
            See all examples
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ex) => {
          const conceptSlug = CONCEPT_SLUG_BY_BASE[ex.slug];
          const href = conceptSlug ? `/examples/${conceptSlug}` : "/examples";
          const ctaLabel = conceptSlug ? "View concept" : "See examples";
          return (
            <Link
              key={ex.slug}
              href={href}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper transition-shadow duration-200 hover:shadow-paper-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream-paper)]"
            >
              <div className="flex items-center justify-between">
                <Stamp tone="cream">Concept example</Stamp>
                <span className="text-[11px] text-[var(--warm-ash-soft)] font-mono">
                  {ex.industry}
                </span>
              </div>
              <BrowserFrame url={ex.domain} className="!shadow-none">
                <SiteMockup
                  businessName={ex.name}
                  tagline={ex.tagline}
                  primaryCta="Get a free quote"
                  serviceLabels={[
                    ex.features[0]?.slice(0, 18) ?? "Services",
                    ex.features[1]?.slice(0, 18) ?? "Quote",
                    ex.features[2]?.slice(0, 18) ?? "Reviews",
                  ]}
                  palette={ex.palette}
                />
              </BrowserFrame>
              <div className="px-1">
                <h3 className="t-title">{ex.name}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                  {ex.pitch}
                </p>
              </div>
              <div className="mt-auto grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[var(--divider)] pt-4">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--warm-ash-soft)]">
                  Concept example · Not a real client
                </span>
                <span
                  aria-hidden
                  className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[var(--ink-navy)] transition-colors duration-150 group-hover:text-[var(--signal-blue)]"
                >
                  {ctaLabel}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================================================
   7. Process glance — six-step strip, link to full /process.
   ============================================================ */
function ProcessGlance() {
  const steps = [
    { n: "01", t: "Free audit" },
    { n: "02", t: "Proposal" },
    { n: "03", t: "Intake" },
    { n: "04", t: "Design and build" },
    { n: "05", t: "Launch" },
    { n: "06", t: "Ongoing care" },
  ];
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="max-w-[460px]">
          <p className="t-label">How we work</p>
          <h2 className="t-headline mt-3">Six steps. Fixed pricing. Plain English.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            From the first conversation to ongoing care, every step is fixed-scope and fixed-price. You always know what is happening next.
          </p>
          <div className="mt-7">
            <Button href="/process" variant="secondary" size="md">
              Read the full process
              <ArrowRight />
            </Button>
          </div>
        </div>
        <ol className="relative grid gap-3 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex items-center gap-4 rounded-2xl border border-[var(--cream-edge)] bg-[var(--paper-white)] p-4 ${
                i === 0 ? "sm:col-span-1" : ""
              }`}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.8rem] font-medium text-[var(--cream-paper)]">
                {s.n}
              </span>
              <span className="text-[0.95rem] font-medium text-[var(--ink-navy)]">{s.t}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
