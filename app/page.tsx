import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { Stamp } from "@/app/components/ui/Stamp";
import { Reveal } from "@/app/components/ui/Reveal";
import { ScoreRings } from "@/app/components/features/ScoreRings";
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
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import { EXAMPLES } from "@/app/data/examples";
import { CARE_PLANS } from "@/app/data/carePlans";
import { CONCEPT_SLUG_BY_BASE } from "@/app/data/exampleConcepts";
import { OrganizationJsonLd } from "@/app/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Conversion-Focused Websites for Service Businesses · Martin Web Works",
  description:
    "Martin Web Works designs, builds, and supports modern websites that turn visitors into customers. Strategy, SEO structure, lead capture, booking flows, and ongoing care built in. Free 30-minute website audits.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Martin Web Works · Conversion-focused websites for service businesses",
    description:
      "We help service businesses generate more calls, quote requests, bookings, and qualified leads — through better design, SEO structure, lead capture, and ongoing care.",
    url: "/",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Web Works · Conversion-focused websites for service businesses",
    description:
      "Strategy, design, SEO structure, lead capture, booking, and ongoing care — built as a system.",
    images: SHARE_IMAGES,
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
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
        body="Tell us about your business and where you want more inquiries. We will review your current site (or your situation if you do not have one yet), identify what is working, what is not, and where the next leads are sitting on the table."
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
              Accepting new service-business builds
            </p>
            <h1 className="t-display mt-5">
              Websites that bring service businesses more calls, quote requests, and booked jobs.
            </h1>
            <p className="t-lead mt-6">
              Custom-built websites for roofers, contractors, dentists, med spas, law firms, restaurants, and other service businesses. Strategy, SEO structure, lead capture, booking, and ongoing care assembled as one system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
                variant="primary"
                data-cta="book_audit_hero"
              >
                Book Free Website Audit
                <ArrowRight />
              </Button>
              <Button href="/packages" size="lg" variant="secondary">
                View Packages
              </Button>
            </div>
            <p className="mt-4 text-[0.85rem] text-[var(--warm-ash)]">
              No sales sequence. No automated drip. One real reply within one business day.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Strategy, design, SEO, and lead capture as one system",
                "Quote, booking, and AI-assistant flows built in",
                "Service-area SEO structure that maps your services to cities",
                "Ongoing care after launch, never a hand-off and ghost",
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
            title="Sarah K., Roof replacement"
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
   2. Purpose block — full-bleed dark, numbered editorial list.
   ============================================================ */
function PurposeBlock() {
  const commitments = [
    {
      title: "We build the system.",
      body: "Strategy, design, and development assembled into a conversion-focused website. Not a brochure that sits there looking pretty.",
    },
    {
      title: "We host and harden it.",
      body: "Managed hosting, SSL, backups, monitoring, and patching stay handled. One specialist email, not a ticket queue.",
    },
    {
      title: "We tune it after launch.",
      body: "New services, new locations, new offers. Edits, analytics review, and lead-flow checks are built into ongoing care.",
    },
  ];

  return (
    <Section tone="navy" hairline="none">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="max-w-[520px]">
          <Reveal
            as="h2"
            className="text-[var(--cream-paper)] text-[clamp(2rem,2.4vw+1rem,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]"
          >
            A website growth partner, not a one-off build.
          </Reveal>
          <p className="t-lead mt-6 text-[var(--cream-edge)]">
            Most service-business websites get built once, handed off, and quietly stop earning by year two. We treat the website as a customer-acquisition system. Designed, measured, and maintained so it keeps producing inquiries long after launch.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 font-medium text-[var(--cream-paper)] underline decoration-white/30 decoration-2 underline-offset-4 transition-colors hover:decoration-white"
          >
            See what we build, host, and grow
            <ArrowRight />
          </Link>
        </div>

        <ol className="divide-y divide-white/10">
          {commitments.map((c, i) => (
            <li
              key={c.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 py-8 first:pt-0 last:pb-0 sm:gap-x-10"
            >
              <span className="font-mono text-[0.9rem] font-medium text-[var(--warm-ash-soft)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.35rem] font-semibold tracking-[-0.01em] text-[var(--cream-paper)]">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[1.0625rem] leading-relaxed text-[var(--cream-edge)]">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ============================================================
   3. The Gap — single split-panel comparison, vertical divider.
   ============================================================ */
function ProblemSolution() {
  return (
    <Section tone="paper" hairline="bottom">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start">
        <div>
          <p className="t-label">The gap</p>
          <Reveal as="h2" className="t-headline mt-3">
            Most service businesses lose work to a slightly less-bad website down the street.
          </Reveal>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Customers searching for a roofer, an electrician, a med spa, or a contractor do not compare ten sites. They click the first one that loads fast, explains the service clearly, and tells them how to call, quote, or book.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper">
          <div className="grid divide-y divide-[var(--divider)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <ComparePanel
              tone="rose"
              title="What an outdated site does"
              items={[
                "Slow on mobile, hard to tap",
                "Hours, services, and pricing out of date",
                "Phone number buried below the fold",
                "No quote form, or it goes to a dead inbox",
                "No analytics, no idea what is working",
              ]}
            />
            <ComparePanel
              tone="emerald"
              title="What we build instead"
              items={[
                "Fast, mobile-first layout designed for conversion",
                "Service pages mapped to how customers search",
                "Click-to-call, quote, and booking always one tap away",
                "Lead capture that routes straight to your inbox or CRM",
                "Analytics wired in so you can see what is producing leads",
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ComparePanel({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "rose" | "emerald";
}) {
  const isGood = tone === "emerald";
  return (
    <div className={`p-6 sm:p-7 ${isGood ? "bg-[var(--success-emerald-soft)]/35" : "bg-[var(--alert-rose-soft)]/40"}`}>
      <div className="flex items-center gap-2.5">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
            isGood
              ? "bg-[var(--success-emerald-soft)] text-[#065f46]"
              : "bg-[var(--alert-rose-soft)] text-[#9f1239]"
          }`}
          aria-hidden
        >
          {isGood ? (
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
        <h3 className="t-title text-[var(--ink-navy)]">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3 text-[0.95rem] text-[var(--warm-ash)]">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              aria-hidden
              className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                isGood ? "bg-[var(--success-emerald)]" : "bg-[#e3829a]"
              }`}
            />
            {i}
          </li>
        ))}
      </ul>
    </div>
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
      body: "One URL per city, what Google needs to surface you locally.",
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
          <Reveal as="h2" className="t-headline mt-3">
            The components that turn a website into a growth system.
          </Reveal>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Booking, quote flows, AI assistants, service-area SEO, reviews,
            and proof. The working pieces a service business needs to convert
            visitors into customers, not just present itself online.
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
  const tiers = [
    { name: "Starter", price: "From $1,995", fit: "A clean professional foundation" },
    { name: "Growth", price: "From $3,995", fit: "Real lead generation, most common" },
    { name: "Authority", price: "From $6,995", fit: "Multi-service, multi-location, advanced" },
  ];
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div className="max-w-[480px]">
          <p className="t-label">Packages</p>
          <Reveal as="h2" className="t-headline mt-3">
            Three packages. Fixed pricing. No estimates that creep.
          </Reveal>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Pick the package that matches how much lead-generation muscle your business actually needs this year. Full comparison and add-ons live on the packages page.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/packages" variant="primary" size="md">
              Compare packages and add-ons
              <ArrowRight />
            </Button>
          </div>
        </div>
        <ul className="divide-y divide-[var(--divider)] rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper">
          {tiers.map((t) => (
            <li
              key={t.name}
              className="grid grid-cols-[1fr_auto] items-baseline gap-4 px-5 py-4 sm:px-6 sm:py-5"
            >
              <div>
                <p className="text-[1rem] font-semibold tracking-[-0.01em] text-[var(--ink-navy)]">
                  {t.name}
                </p>
                <p className="mt-1 text-[0.9rem] text-[var(--warm-ash)]">{t.fit}</p>
              </div>
              <span className="font-mono text-[0.92rem] font-medium text-[var(--ink-navy)]">
                {t.price}
              </span>
            </li>
          ))}
        </ul>
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
          <Reveal as="h2" className="t-headline mt-3 text-[var(--cream-paper)]">
            Your site stays current. You stay on the job.
          </Reveal>
          <p className="t-lead mt-5 text-[var(--cream-edge)]">
            Hosting, security, backups, and small edits done by email request. Every build includes a 6-month launch care period. After that, continue month-to-month or request a clean handoff. You always keep your domain and content.
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
   6. Examples — featured live demo + concept-card grid.
   ============================================================ */
function ExamplesStrip() {
  const featured = [
    EXAMPLES.find((e) => e.slug === "summit-ridge-roofing")!,
    EXAMPLES.find((e) => e.slug === "luma-aesthetics")!,
    EXAMPLES.find((e) => e.slug === "harbor-slate-law")!,
  ];
  return (
    <Section tone="paper" hairline="bottom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[520px]">
          <p className="t-label">Concept examples</p>
          <Reveal as="h2" className="t-headline mt-3">
            A few of the service businesses we are built to grow.
          </Reveal>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Roofers, med spas, contractors, law firms, and other appointment- or quote-driven businesses. These are concept examples designed by us, not real client work. The full set lives on the examples page.
          </p>
        </div>
        <div>
          <Button href="/examples" variant="secondary" size="md">
            See all examples
            <ArrowRight />
          </Button>
        </div>
      </div>

      <LiveDemoBlock />

      <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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

function LiveDemoBlock() {
  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper ring-1 ring-inset ring-[var(--success-emerald-soft)]">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
        <div className="border-b border-[var(--divider)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <BrowserFrame url="demo-dental.martinwebworks.com" className="!shadow-none">
            <Image
              src="/images/demo-dental.jpeg"
              alt="Screenshot of the Brightline Dental live demo homepage, showing a brighter, healthier smile headline with a Book Appointment button."
              width={2560}
              height={1500}
              sizes="(min-width: 1024px) 620px, 100vw"
              className="h-auto w-full"
              priority={false}
            />
          </BrowserFrame>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Stamp tone="emerald">Live demo</Stamp>
            <span className="text-[11px] font-mono text-[var(--warm-ash)]">
              Dental practice
            </span>
          </div>
          <h3 className="t-title mt-4 text-[1.45rem]">
            Brightline Dental, a live demo we build and host.
          </h3>
          <p className="mt-2.5 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">
            A real working site on our own infrastructure. The four Lighthouse scores below are measured on the live page, not a mockup.
          </p>

          <div className="mt-7 rounded-2xl border border-[var(--divider)] bg-[var(--cream-paper)] p-5">
            <ScoreRings
              scores={{ performance: 100, accessibility: 100, bestPractices: 100, seo: 100 }}
            />
          </div>

          <div className="mt-7">
            <a
              href="https://demo-dental.martinwebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--success-emerald)] decoration-2 underline-offset-4 hover:text-[#047857]"
            >
              View live site
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   7. Process — numbered timeline (horizontal desktop, vertical mobile).
   ============================================================ */
function ProcessGlance() {
  const steps = [
    { n: "01", t: "Free audit", cap: "30 minutes" },
    { n: "02", t: "Proposal", cap: "1 to 3 days" },
    { n: "03", t: "Intake", cap: "About 1 week" },
    { n: "04", t: "Design and build", cap: "1 to 3 weeks" },
    { n: "05", t: "Launch", cap: "About 1 day" },
    { n: "06", t: "Ongoing care", cap: "Monthly" },
  ];
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="max-w-[640px]">
        <p className="t-label">Operating model</p>
        <Reveal as="h2" className="t-headline mt-3">
          A repeatable process built around a specialist workflow.
        </Reveal>
        <p className="t-body mt-4 text-[var(--warm-ash)]">
          From the first conversation to ongoing care, every step is fixed-scope, fixed-price, and handled by the discipline it belongs to. Strategy, design, development, SEO structure, lead capture, launch, and care. You always know what is happening next.
        </p>
      </div>

      {/* Desktop: horizontal numbered timeline. */}
      <ol className="relative mt-14 hidden grid-cols-6 lg:grid">
        <span
          aria-hidden
          className="absolute left-[8.333%] right-[8.333%] top-[22px] h-px bg-[var(--cream-edge)]"
        />
        {steps.map((s) => (
          <li key={s.n} className="relative flex flex-col items-center px-3 text-center">
            <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.85rem] font-medium text-[var(--cream-paper)]">
              {s.n}
            </span>
            <span className="mt-4 text-[0.95rem] font-semibold text-[var(--ink-navy)]">
              {s.t}
            </span>
            <span className="mt-1 text-[0.8rem] text-[var(--warm-ash)]">{s.cap}</span>
          </li>
        ))}
      </ol>

      {/* Mobile / tablet: vertical numbered timeline. */}
      <ol className="relative mt-10 lg:hidden">
        <span
          aria-hidden
          className="absolute left-[21px] top-3 bottom-3 w-px bg-[var(--cream-edge)]"
        />
        {steps.map((s) => (
          <li key={s.n} className="relative flex items-center gap-4 pb-7 last:pb-0">
            <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.85rem] font-medium text-[var(--cream-paper)]">
              {s.n}
            </span>
            <div>
              <span className="block text-[1rem] font-semibold text-[var(--ink-navy)]">
                {s.t}
              </span>
              <span className="text-[0.85rem] text-[var(--warm-ash)]">{s.cap}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <Button href="/process" variant="secondary" size="md">
          Read the full process
          <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
