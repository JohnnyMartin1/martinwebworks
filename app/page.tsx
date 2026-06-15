import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { Stamp } from "@/app/components/ui/Stamp";
import { Reveal } from "@/app/components/ui/Reveal";
import { CTASection } from "@/app/components/ui/CTASection";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BrowserFrame } from "@/app/components/mockups/BrowserFrame";
import { BookingMockup } from "@/app/components/mockups/BookingMockup";
import { FormMockup } from "@/app/components/mockups/FormMockup";
import { GapCompare } from "@/app/components/mockups/GapCompare";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";
import { CARE_PLANS } from "@/app/data/carePlans";
import { PACKAGES } from "@/app/data/packages";
import { OrganizationJsonLd } from "@/app/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Conversion-Focused Websites for Service Businesses · Martin Web Works",
  description:
    "Martin Web Works designs, builds, hosts, and maintains websites that turn local searches into booked jobs for service businesses. See our live demo: 100/100/100/100 on Lighthouse. Free 30-minute website audits.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Martin Web Works · Websites that turn local searches into booked jobs",
    description:
      "We help roofers, dentists, med spas, contractors, and law firms win more calls, quotes, and bookings. Live demo scores 100/100/100/100 on Lighthouse.",
    url: "/",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Web Works · Websites that book the job",
    description:
      "Design, SEO structure, lead capture, booking, and ongoing care for service businesses. Live demo: 100/100/100/100 on Lighthouse.",
    images: SHARE_IMAGES,
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <FeaturedWork />
      <TheGap />
      <PartnerBlock />
      <ModernFeatures />
      <PackagesPreview />
      <CarePreview />
      <ProcessGlance />
      <CTASection
        headline="One free audit. One honest conversation."
        body="Tell us about your business and where you want more inquiries. We will review your current site (or your situation if you do not have one yet), point out what is working, what is not, and where the next leads are sitting on the table."
      />
    </>
  );
}

/* ============================================================
   Signature element: oversized mono section index + label.
   ============================================================ */
function Kicker({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`t-index text-[1.6rem] ${
          dark ? "text-[var(--cream-paper)]" : "text-[var(--ink-navy)]"
        }`}
      >
        {index}
      </span>
      <span
        aria-hidden
        className={`h-5 w-px ${dark ? "bg-white/25" : "bg-[var(--divider)]"}`}
      />
      <span
        className={`t-label ${dark ? "text-[var(--warm-ash-soft)]" : ""}`}
      >
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   1. Hero — tighter headline, real demo screenshot laid askew.
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden hairline-bottom">
      <Container size="wide">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.02fr_1fr] lg:gap-20 lg:py-28">
          <div className="max-w-[640px]">
            <p className="t-label text-[var(--warm-ash)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)] align-middle" />
              Accepting new service-business builds
            </p>
            <h1 className="t-display mt-5">
              Websites that turn local searches into booked jobs.
            </h1>
            <p className="t-lead mt-6">
              For roofers, dentists, med spas, contractors, and law firms. We
              design, build, host, and keep tuning the site so the calls,
              quotes, and bookings keep coming in long after launch.
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
              No sales sequence. No automated drip. One real reply within one
              business day.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Built for calls, quotes, and bookings, not just looks",
                "Service-area SEO mapped to how customers actually search",
                "Hosting, security, and edits handled long after launch",
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
  return (
    <div className="relative">
      {/* A second sheet behind, tilted the other way: photos on a desk. */}
      <div
        aria-hidden
        className="absolute -inset-2 hidden rounded-[28px] bg-[var(--cream-deep)] lg:block lg:-rotate-[3deg]"
      />
      <div className="relative lg:rotate-[1.6deg]">
        <BrowserFrame url="demo-dental.martinwebworks.com" className="relative z-10">
          <Image
            src="/images/demo-dental.jpeg"
            alt="The Brightline Dental live demo homepage: a clear headline, a Book Appointment button, and a calm, fast layout."
            width={2560}
            height={1500}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full"
            priority
          />
        </BrowserFrame>

        <div className="absolute -bottom-5 left-4 z-20 inline-flex items-center gap-3 rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-4 py-2 shadow-paper">
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#047857]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)]" />
            Live demo
          </span>
          <span className="t-stat text-[0.95rem] text-[var(--ink-navy)]">
            100·100·100·100
          </span>
          <span className="text-[0.68rem] uppercase tracking-[0.08em] text-[var(--warm-ash)]">
            Lighthouse
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   2. Featured Work — the centerpiece. Real proof, asymmetric.
   ============================================================ */
function FeaturedWork() {
  return (
    <Section tone="navy" hairline="none">
      <div className="max-w-[680px]">
        <Kicker index="01" label="Featured work" dark />
        <Reveal
          as="h2"
          className="mt-5 text-[var(--cream-paper)] text-[clamp(2rem,2.6vw+1rem,3.1rem)] font-semibold leading-[1.06] tracking-[-0.028em]"
        >
          The strongest proof we have is a site you can open right now.
        </Reveal>
        <p className="t-lead mt-5 text-[var(--cream-edge)]">
          Not a slideshow of logos. Two live demos hosted and running: a dental
          practice and a family-owned spa that has served Annapolis for 18
          years. Open either one.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        {/* Brightline — live, measured, the lead. */}
        <div>
          <div className="lg:rotate-[-0.6deg]">
            <BrowserFrame url="demo-dental.martinwebworks.com">
              <Image
                src="/images/demo-dental.jpeg"
                alt="Brightline Dental live demo homepage: a brighter, healthier smile headline with a clear Book Appointment call to action."
                width={2560}
                height={1500}
                sizes="(min-width: 1024px) 760px, 100vw"
                className="h-auto w-full"
              />
            </BrowserFrame>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Stamp tone="emerald">Live demo</Stamp>
            <p className="text-[0.95rem] text-[var(--cream-edge)]">
              Brightline Dental. Real site, real scores, not a mockup.
            </p>
          </div>

          {/* Lighthouse callout strip — the single strongest proof point. */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {[
                { label: "Performance", v: 100 },
                { label: "Accessibility", v: 100 },
                { label: "Best practices", v: 100 },
                { label: "SEO", v: 100 },
              ].map((s) => (
                <div key={s.label}>
                  <dd className="t-stat text-[clamp(2.75rem,5vw,3.75rem)] text-[var(--success-emerald)]">
                    {s.v}
                  </dd>
                  <dt className="mt-2.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[var(--warm-ash-soft)]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-white/10 pt-4 text-[0.8rem] text-[var(--warm-ash-soft)]">
              Google Lighthouse, measured on the live page. Most small-business
              sites score in the 40s to 70s.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="https://demo-dental.martinwebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[var(--cream-paper)] underline decoration-[var(--success-emerald)] decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              Open the live demo
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Healing Asian Spa — also live, framed warm so it doesn't rhyme. */}
        <div className="flex flex-col rounded-3xl bg-[var(--cream-paper)] p-6 text-[var(--ink-navy)] sm:p-7">
          <div className="lg:rotate-[0.8deg]">
            <BrowserFrame url="demo-healingasianspa.vercel.app">
              <Image
                src="/images/demo-healingasianspa.jpeg"
                alt="Healing Asian Spa live demo homepage: a warm close-up of healing hands during a treatment, with an Eighteen years of healing hands headline and a Book a Visit button."
                width={2400}
                height={1500}
                sizes="(min-width: 1024px) 460px, 100vw"
                className="h-auto w-full"
              />
            </BrowserFrame>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Stamp tone="emerald">Live demo</Stamp>
            <span className="t-mono text-[var(--warm-ash)]">Day spa</span>
          </div>
          <h3 className="t-title mt-4 text-[1.3rem]">Healing Asian Spa</h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
            A real, family-owned spa inside Annapolis Mall, 18 years in
            business. Real services, hours, and booking, with one bundled offer
            doing the selling.
          </p>

          {/* Real "Guest Favorite" pricing block: a working conversion element. */}
          <div className="mt-5 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="t-label">Guest favorite</span>
              <span className="t-mono text-[0.7rem] text-[var(--warm-ash)]">
                Member rate
              </span>
            </div>
            <p className="mt-2 text-[0.95rem] font-semibold leading-snug text-[var(--ink-navy)]">
              Body Relief + Lymphatic Facial + Foot Reflexology
            </p>
            <ul className="mt-3 grid gap-2">
              {[
                ["45 + 45 min", "$159", "$149"],
                ["30 + 45 + 30 min", "$188", "$178"],
                ["60 + 45 + 30 min", "$219", "$209"],
              ].map(([dur, list, member]) => (
                <li
                  key={dur}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-3 text-[0.9rem]"
                >
                  <span className="text-[var(--warm-ash)]">{dur}</span>
                  <span className="t-mono text-[0.85rem] text-[var(--ink-navy)]">
                    <span className="text-[var(--warm-ash-soft)] line-through">
                      {list}
                    </span>{" "}
                    <span className="font-semibold text-[#047857]">{member}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            <a
              href="https://demo-healingasianspa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--success-emerald)] decoration-2 underline-offset-4 transition-colors hover:text-[#047857]"
            >
              View live site
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-[0.85rem] text-[var(--warm-ash-soft)]">
        More concept builds, honestly labeled, live on the{" "}
        <Link href="/examples" className="underline underline-offset-4 hover:text-[var(--cream-paper)]">
          examples page
        </Link>
        .
      </p>
    </Section>
  );
}

/* ============================================================
   3. The Gap — interactive before/after instead of two lists.
   ============================================================ */
function TheGap() {
  return (
    <Section tone="paper" hairline="bottom">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="max-w-[460px]">
          <Kicker index="02" label="The gap" />
          <Reveal as="h2" className="t-headline mt-5">
            Most work is lost to a slightly-less-bad site down the street.
          </Reveal>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Someone searching for a plumber or a contractor does not compare ten
            sites. They tap the first one that loads fast, says what it does, and
            makes it obvious how to call or quote. Drag the divider to see the
            difference.
          </p>
          <div className="mt-7">
            <Button href="/features" variant="secondary" size="md">
              See how we build
              <ArrowRight />
            </Button>
          </div>
        </div>

        <GapCompare className="h-[340px] sm:h-[420px]" />
      </div>
    </Section>
  );
}

/* ============================================================
   4. Partner block — how we work, tightened, numbered list.
   ============================================================ */
function PartnerBlock() {
  const commitments = [
    {
      title: "We build the site.",
      body: "Strategy, design, and development handled by the people who do each one well. A site built to bring in work, not just to look good.",
    },
    {
      title: "We host and harden it.",
      body: "Managed hosting, SSL, backups, monitoring, and patching stay handled. One specialist to email, not a ticket queue.",
    },
    {
      title: "We keep tuning it.",
      body: "New services, new locations, new offers. Edits, analytics reviews, and lead-flow checks are part of ongoing care.",
    },
  ];

  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="max-w-[480px]">
          <Kicker index="03" label="How we work" />
          <Reveal as="h2" className="t-headline mt-5">
            A website partner, not a one-off build.
          </Reveal>
          <p className="t-lead mt-5">
            Most service-business sites get built once, handed off, and quietly
            stop earning by year two. We stay on after launch and keep the site
            bringing in calls and quotes.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--divider)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--ink-navy)]"
          >
            See what we build, host, and grow
            <ArrowRight />
          </Link>
        </div>

        <ol className="divide-y divide-[var(--divider)]">
          {commitments.map((c, i) => (
            <li
              key={c.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 py-7 first:pt-0 last:pb-0 sm:gap-x-10"
            >
              <span className="t-index text-[1.6rem] text-[var(--warm-ash-soft)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.35rem] font-semibold tracking-[-0.018em] text-[var(--ink-navy)]">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[1.0625rem] leading-relaxed text-[var(--warm-ash)]">
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
   5. Features — thematic rows with real UI, not an icon grid.
   ============================================================ */
function ModernFeatures() {
  return (
    <Section tone="paper" hairline="bottom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <Kicker index="04" label="What's built in" />
          <Reveal as="h2" className="t-headline mt-5">
            The working parts that turn a visitor into a customer.
          </Reveal>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Not icons in circles. These are the actual flows we ship. Try them.
          </p>
        </div>
        <Button href="/features" variant="secondary" size="md">
          Explore website features
          <ArrowRight />
        </Button>
      </div>

      <div className="mt-14 flex flex-col gap-16 lg:gap-20">
        <FeatureRow
          eyebrow="Booking"
          title="Book the appointment while the interest is hot."
          body="A service-to-time-to-confirmation flow that ends the phone tag. It works with Cal.com, Calendly, or similar, and the confirmation lands in their inbox and yours."
          points={[
            "Service, time, details, done",
            "No app, no account, no redirect",
            "Confirmation to both inboxes",
          ]}
          visual={<BookingMockup variant="roofing" business="Northgate Roofing" domain="northgateroofing.com" />}
        />
        <FeatureRow
          reverse
          eyebrow="Lead capture"
          title="Catch the quote request the second it lands."
          body="Mobile-first quote and contact forms, spam-protected, routed straight to your inbox or CRM. No dead form on a page nobody checks."
          points={[
            "Mobile-first, fast to fill",
            "Spam-protected by default",
            "Routed to inbox or CRM",
          ]}
          visual={<FormMockup variant="quote" business="Northgate Roofing" />}
        />
      </div>

      <p className="mt-14 max-w-[var(--measure-body)] text-[1.0625rem] leading-relaxed text-[var(--warm-ash)]">
        Also built in: an AI lead assistant for off-hours questions,
        service-area pages mapped to each city you serve, review and warranty
        blocks, and before/after galleries grouped by project.
      </p>
    </Section>
  );
}

function FeatureRow({
  eyebrow,
  title,
  body,
  points,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="t-label">{eyebrow}</p>
        <h3 className="mt-3 text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--ink-navy)]">
          {title}
        </h3>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-[var(--warm-ash)]">
          {body}
        </p>
        <ul className="mt-5 grid gap-2.5">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
            >
              <CheckIcon className="mt-1 text-[var(--success-emerald)]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{visual}</div>
    </div>
  );
}

/* ============================================================
   6. Packages — three tiers, the middle one made dominant.
   ============================================================ */
function PackagesPreview() {
  return (
    <Section tone="cream-deep" hairline="bottom">
      <div className="max-w-[560px]">
        <Kicker index="05" label="Packages" />
        <Reveal as="h2" className="t-headline mt-5">
          Three packages. Fixed pricing. No estimates that creep.
        </Reveal>
        <p className="t-body mt-4 text-[var(--warm-ash)]">
          Pick the one that matches how much lead generation your business needs
          this year. Full comparison and add-ons live on the packages page.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-center">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      <div className="mt-10">
        <Button href="/packages" variant="primary" size="md">
          Compare packages and add-ons
          <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}

function PackageCard({ pkg }: { pkg: (typeof PACKAGES)[number] }) {
  const featured = !!pkg.featured;
  const features = pkg.features.slice(0, 5);

  if (featured) {
    return (
      <div className="relative rounded-3xl bg-[var(--ink-navy)] p-7 text-[var(--cream-paper)] shadow-cta lg:-my-6 lg:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="t-label text-[var(--cream-edge)]">{pkg.name}</span>
          <span className="inline-flex items-center rounded-full bg-[var(--success-emerald)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-navy)]">
            {pkg.badge ?? "Most popular"}
          </span>
        </div>
        <p className="t-stat mt-4 text-[2.5rem] text-[var(--cream-paper)]">
          {pkg.price}
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--cream-edge)]">
          {pkg.blurb}
        </p>
        <ul className="mt-6 grid gap-2.5 border-t border-white/10 pt-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[0.92rem] text-[var(--cream-edge)]">
              <CheckIcon className="mt-1 text-[var(--success-emerald)]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Button href="/packages" variant="primary-on-dark" size="md" className="w-full justify-center">
            Start with {pkg.name.replace(" Website", "")}
            <ArrowRight />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-3xl border border-[var(--divider)] bg-[var(--paper-white)] p-7">
      <span className="t-label">{pkg.name}</span>
      <p className="t-stat mt-4 text-[1.9rem] text-[var(--ink-navy)]">{pkg.price}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
        {pkg.blurb}
      </p>
      <ul className="mt-6 grid gap-2.5 border-t border-[var(--divider)] pt-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.92rem] text-[var(--warm-ash)]">
            <CheckIcon className="mt-1 text-[var(--ink-navy)]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-[var(--ink-navy)] underline decoration-[var(--divider)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--ink-navy)]"
        >
          See what&apos;s included
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

/* ============================================================
   7. Monthly care drench band.
   ============================================================ */
function CarePreview() {
  return (
    <Section tone="navy" hairline="none">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="max-w-[480px]">
          <Kicker index="06" label="Monthly care" dark />
          <Reveal as="h2" className="t-headline mt-5 text-[var(--cream-paper)]">
            Your site stays current. You stay on the job.
          </Reveal>
          <p className="t-lead mt-5 text-[var(--cream-edge)]">
            Hosting, security, backups, and small edits done by email request.
            Every build includes a 6-month launch care period. After that,
            continue month-to-month or request a clean handoff. You always keep
            your domain and content.
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
              className={`rounded-2xl p-5 ring-1 ring-inset ${
                plan.featured
                  ? "bg-white/[0.08] ring-white/15"
                  : "bg-white/[0.04] ring-white/8"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="t-title text-[var(--cream-paper)]">{plan.name}</h3>
                {plan.featured ? (
                  <span className="inline-flex items-center rounded-full bg-[var(--success-emerald)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-navy)]">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="t-stat mt-2 text-[1.5rem] text-[var(--cream-paper)]">
                {plan.price}
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--cream-edge)]">
                {plan.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ============================================================
   8. Process — connected timeline, distinct per step.
   ============================================================ */
function ProcessGlance() {
  const steps = [
    { n: "01", t: "Free audit", cap: "30 minutes", d: "We find where leads leak." },
    { n: "02", t: "Proposal", cap: "1 to 3 days", d: "Fixed scope, fixed price." },
    { n: "03", t: "Intake", cap: "About 1 week", d: "Content and access in one place." },
    { n: "04", t: "Design + build", cap: "1 to 3 weeks", d: "Built to convert, reviewed with you." },
    { n: "05", t: "Launch", cap: "About 1 day", d: "Live, secure, and tracked." },
    { n: "06", t: "Ongoing care", cap: "Monthly", d: "Edits and lead-flow checks." },
  ];
  return (
    <Section tone="paper" hairline="bottom">
      <div className="max-w-[640px]">
        <Kicker index="07" label="Operating model" />
        <Reveal as="h2" className="t-headline mt-5">
          A repeatable process, handled by the right specialist at each step.
        </Reveal>
        <p className="t-body mt-4 text-[var(--warm-ash)]">
          From the first conversation to ongoing care, every step is
          fixed-scope, fixed-price, and you always know what happens next.
        </p>
      </div>

      {/* Desktop: connected horizontal timeline. */}
      <ol className="relative mt-16 hidden grid-cols-6 lg:grid">
        <span
          aria-hidden
          className="absolute left-[8.333%] right-[8.333%] top-[26px] h-px bg-[var(--cream-edge)]"
        />
        {steps.map((s, i) => (
          <li key={s.n} className="relative flex flex-col px-3">
            <span className="relative z-10 inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[var(--ink-navy)] t-index text-[1.15rem] text-[var(--cream-paper)]">
              {s.n}
            </span>
            <span className="mt-5 text-[1rem] font-semibold text-[var(--ink-navy)]">
              {s.t}
            </span>
            <span className="mt-1 t-mono text-[0.72rem] text-[var(--warm-ash)]">
              {s.cap}
            </span>
            <span className="mt-2 text-[0.85rem] leading-snug text-[var(--warm-ash)]">
              {s.d}
            </span>
            {i === 0 ? (
              <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[var(--success-emerald-soft)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#047857]">
                Start here
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Mobile / tablet: connected vertical timeline. */}
      <ol className="relative mt-12 lg:hidden">
        <span
          aria-hidden
          className="absolute left-[25px] top-4 bottom-4 w-px bg-[var(--cream-edge)]"
        />
        {steps.map((s) => (
          <li key={s.n} className="relative flex items-start gap-4 pb-8 last:pb-0">
            <span className="relative z-10 inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[var(--ink-navy)] t-index text-[1.1rem] text-[var(--cream-paper)]">
              {s.n}
            </span>
            <div className="pt-1">
              <span className="block text-[1.05rem] font-semibold text-[var(--ink-navy)]">
                {s.t}
              </span>
              <span className="t-mono text-[0.72rem] text-[var(--warm-ash)]">
                {s.cap}
              </span>
              <span className="mt-1 block text-[0.9rem] text-[var(--warm-ash)]">
                {s.d}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <Button href="/process" variant="secondary" size="md">
          Read the full process
          <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
