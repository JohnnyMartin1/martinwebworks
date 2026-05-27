import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/app/components/ui/Container";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import {
  BOOK_AUDIT_HREF,
  BOOK_AUDIT_IS_EXTERNAL,
  HAS_PHONE,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE,
} from "@/app/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Martin Web Works is a small web studio that builds, hosts, and maintains websites for local service businesses. Based in the Arlington, VA and Washington, DC area.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Martin Web Works",
    description:
      "A small web studio that builds, hosts, and maintains websites for local service businesses.",
    url: "/about",
    type: "website",
  },
};

const COMMITMENTS = [
  "Based in the Arlington / Washington, DC area",
  "Built for local service businesses",
  "Plain-English process and proposals",
  "No confusing technical handoff",
  "You keep your domain, your content, and your leverage",
];

const HOW_WE_WORK = [
  {
    n: "01",
    title: "Free 30-minute audit",
    body: "We look at your current site or your situation, plainly. No pitch.",
  },
  {
    n: "02",
    title: "Fixed-price proposal",
    body: "Scope and price are written down before any work begins. No hourly creep.",
  },
  {
    n: "03",
    title: "Three to six weeks to launch",
    body: "We design, build, and review with you before anything goes live.",
  },
  {
    n: "04",
    title: "Ongoing care, on your terms",
    body: "Monthly care plans handle hosting, security, edits, and the boring stuff. Cancel any time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        headline="A small web studio for local businesses that need a site customers can actually use."
        lead="Martin Web Works helps local service businesses turn outdated or missing websites into clear, mobile-friendly sites built around calls, quote requests, booking, trust, and ongoing updates."
        actions={
          <>
            <Button
              href={BOOK_AUDIT_HREF}
              external={BOOK_AUDIT_IS_EXTERNAL}
              size="lg"
            >
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </>
        }
      />

      {/* Story + photo placeholder */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">The studio</p>
            <h2 className="t-headline mt-3">
              Small, deliberate, and on the phone when you need us.
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.65] text-[var(--ink-navy)]">
              <p>
                Most local businesses do not need an agency. They need a small studio that builds a real website, keeps it current, and answers the phone when something needs attention.
              </p>
              <p>
                We started Martin Web Works because too many roofers, electricians, dentists, and contractors were paying for sites that quietly stopped working a year after launch. The work itself is not complicated; the discipline of doing it well, every month, is.
              </p>
              <p>
                We are based in the {SITE.location} and work with local service businesses across the country.
              </p>
            </div>
          </div>

          {/* Studio identity card (finished, customer-facing — not a placeholder) */}
          <div className="lg:justify-self-end">
            <StudioIdentityCard />
          </div>
        </div>
      </Section>

      {/* What we do + why local */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">Why local</p>
            <h2 className="t-headline mt-3">
              Built for the businesses Google maps people to.
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.65] text-[var(--ink-navy)]">
              <p>
                Local service businesses live or die on calls and quote requests. The website is not a brochure, it is a lead funnel. We treat it that way.
              </p>
              <p>
                We do not chase startups, e-commerce stores, or agencies. The work has been on roofers, contractors, plumbers, med spas, dentists, vet clinics, law firms, accountants, and restaurants. Industries where mobile, trust, and a clean quote form decide the month.
              </p>
            </div>
          </div>

          <ul className="grid gap-3">
            {COMMITMENTS.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 text-[0.975rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How we work, in four steps */}
      <Section tone="paper" hairline="top">
        <div className="max-w-[560px]">
          <p className="t-label text-[var(--warm-ash)]">How it works</p>
          <h2 className="t-headline mt-3">From audit to ongoing care, in plain English.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Every step is fixed-scope, fixed-price, and explained before it starts. You always know what is happening next.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {HOW_WE_WORK.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.78rem] font-medium text-[var(--cream-paper)]">
                {s.n}
              </span>
              <div>
                <h3 className="t-title">{s.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact card: email always; phone only when configured */}
      <Section tone="cream-deep" hairline="top">
        <Container size="narrow" className="!px-0">
          <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper">
            <p className="t-label text-[var(--warm-ash)]">Reach the studio</p>
            <h2 className="t-headline mt-3">A real person on the other end.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              We answer email within one business day. The free audit is the fastest path to a real conversation.
            </p>

            <ul className="mt-7 space-y-3 text-[1rem]">
              <li className="flex items-start gap-3">
                <span className="t-label shrink-0 mt-1 w-16 text-[var(--warm-ash)]">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
                >
                  {SITE.email}
                </a>
              </li>
              {HAS_PHONE ? (
                <li className="flex items-start gap-3">
                  <span className="t-label shrink-0 mt-1 w-16 text-[var(--warm-ash)]">Phone</span>
                  <a
                    href={`tel:${PHONE_HREF}`}
                    className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
                  >
                    {PHONE_NUMBER}
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-3">
                <span className="t-label shrink-0 mt-1 w-16 text-[var(--warm-ash)]">Studio</span>
                <span className="text-[var(--ink-navy)]">{SITE.location}</span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
              >
                Book Free Website Audit
                <ArrowRight />
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 self-center text-[0.95rem] font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
              >
                Or use the contact page
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Ready to see what your business website should look like?"
        body="Book a free 30-minute audit. We will look at your current site (or your situation if you do not have one) and tell you what we would do, plainly. No pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}

/* ----------------------------------------------------------
   Studio identity card — finished, customer-facing.
   No photo today; a typographic mark and a short studio note do the
   work without any "coming soon" language.

   TODO: when a real studio photo is available, swap the mark for the
   <Image /> here. Keep the caption tone — quiet, factual.
   ---------------------------------------------------------- */
function StudioIdentityCard() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[420px] rounded-3xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 shadow-paper"
      aria-labelledby="studio-identity-caption"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(155deg, var(--ink-navy) 0%, var(--ink-navy-deep) 55%, #143055 100%)",
        }}
      >
        {/* Quiet grid lattice — keeps the surface from feeling flat */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.9), transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.9), transparent 75%)",
          }}
        />

        {/* Studio mark */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cream-paper)] text-[0.78rem] font-mono font-semibold text-[var(--ink-navy)]">
              MW
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--cream-edge)]">
              Est. 2024
            </span>
          </div>

          <div className="leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--cream-edge)]">
              The studio
            </p>
            <p className="mt-2 text-[1.85rem] sm:text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--cream-paper)]">
              Martin
              <br />
              Web Works
            </p>
            <p className="mt-3 max-w-[28ch] text-[0.85rem] leading-snug text-[var(--cream-edge)]">
              {SITE.location} · Sites for local service businesses.
            </p>
          </div>
        </div>
      </div>

      <figcaption
        id="studio-identity-caption"
        className="mt-4 grid grid-cols-2 gap-3 px-1 pb-1 text-[0.78rem] text-[var(--warm-ash)]"
      >
        <span>
          <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash-soft)]">
            Studio
          </span>
          <span className="mt-1 block text-[var(--ink-navy)]">Independent</span>
        </span>
        <span>
          <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash-soft)]">
            Focus
          </span>
          <span className="mt-1 block text-[var(--ink-navy)]">Local business</span>
        </span>
      </figcaption>
    </figure>
  );
}
