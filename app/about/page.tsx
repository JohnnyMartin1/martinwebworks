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
  SHARE_IMAGES,
  SITE,
} from "@/app/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Martin Web Works is a conversion-focused website company for service businesses across the U.S. We design, build, and support websites that turn visitors into customers. Strategy, SEO structure, lead capture, booking, analytics, and ongoing care assembled as one system.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Martin Web Works",
    description:
      "Conversion-focused websites for service businesses. Strategy, design, SEO structure, lead capture, booking, analytics, and ongoing care, built as a repeatable system.",
    url: "/about",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Martin Web Works",
    description:
      "A conversion-focused website company for service businesses across the U.S.",
    images: SHARE_IMAGES,
  },
};

const WHY_WORK_WITH_US = [
  "Clear, written process from first call to launch",
  "Fast communication; one specialist owns each discipline",
  "Conversion-first thinking, not template aesthetics",
  "Mobile-first design built around how customers actually search",
  "Practical SEO structure mapped to your services and service area",
  "No bloated agency process or month-long discovery decks",
  "Real ongoing support after launch, not a hand-off and ghost",
  "Decisions tied to leads and analytics, not opinion",
];

const OPERATING_MODEL = [
  {
    label: "Strategy",
    body: "Who the website needs to convert, where they are coming from, and what is sitting between a visit and an inquiry.",
  },
  {
    label: "Conversion-focused design",
    body: "Mobile-first layouts, hierarchy, and CTAs built around how customers in your industry actually choose.",
  },
  {
    label: "Modern development",
    body: "Fast, accessible, secure builds on a stack we keep current. No half-maintained page builders.",
  },
  {
    label: "SEO structure",
    body: "Service pages, service-area pages, schema, and Search Console wired in from day one.",
  },
  {
    label: "Lead capture systems",
    body: "Quote, contact, and intake forms, routed to your inbox or CRM, with confirmations and lead notifications.",
  },
  {
    label: "Booking and quote workflows",
    body: "Appointment scheduling, multi-step intake, and optional AI assistants that capture off-hours leads.",
  },
  {
    label: "Analytics and tracking",
    body: "GA4, event tracking, and form-conversion events so growth is measurable, not guessed at.",
  },
  {
    label: "Ongoing care and updates",
    body: "Hosting, security, monitoring, edits, and quarterly conversion checks built into a single relationship.",
  },
];

const HOW_WE_WORK = [
  {
    n: "01",
    title: "Free website audit",
    body: "We review your current site or your situation and tell you, plainly, where the next leads are sitting on the table. No pitch.",
  },
  {
    n: "02",
    title: "Fixed-price proposal",
    body: "Scope, price, and a written plan before any work begins. No hourly creep and no surprise change orders.",
  },
  {
    n: "03",
    title: "Three to six weeks to launch",
    body: "Strategy, design, build, and review, handled by the specialist each phase belongs to. You see progress on a known schedule.",
  },
  {
    n: "04",
    title: "Ongoing care, on your terms",
    body: "Every build includes a 6-month launch care period so the site stays healthy and tuned during the most important first months. After that, continue month-to-month, change plans, or request a clean handoff.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        headline="A conversion-focused website company built for service businesses ready to grow."
        lead="Martin Web Works designs, builds, and supports modern websites that help service businesses generate more calls, quote requests, bookings, and qualified leads. Strategy, SEO structure, lead capture, and ongoing care assembled as one system."
        actions={
          <>
            <Button
              href={BOOK_AUDIT_HREF}
              external={BOOK_AUDIT_IS_EXTERNAL}
              size="lg"
              data-cta="book_audit_hero"
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

      {/* Thesis statement + studio identity card. No fabricated history;
          the paragraph is a position statement, not a founding story. */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">What we believe</p>
            <h2 className="t-headline mt-3">
              A business website should do more than look presentable.
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.65] text-[var(--ink-navy)]">
              <p>
                Martin Web Works was built around a simple belief: a business website should help create demand, capture inquiries, and make it easier for customers to take the next step. Anything less is a brochure that someone paid to ignore.
              </p>
              <p>
                Most service businesses do not need an agency, and they do not need a freelancer who disappears after launch. They need a website partner with a repeatable process, a real specialist for each part of the build, and the discipline to keep the site producing leads after the launch dust settles.
              </p>
              <p>
                That is the work. We do it remotely for service businesses across the U.S.: owner-led companies that need more calls, quote requests, bookings, and qualified inquiries.
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <StudioIdentityCard />
          </div>
        </div>
      </Section>

      {/* Our operating model — explains the team-of-disciplines framing
          without inventing employee names or bios. Eight focus areas, one
          short sentence each. Visual is a two-column responsive grid. */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          <div className="max-w-[44ch]">
            <p className="t-label text-[var(--warm-ash)]">Our operating model</p>
            <h2 className="t-headline mt-3">
              Built like a growth partner, not a template shop.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Every project moves through a specialist workflow: strategy, design, development, SEO structure, lead capture, booking, analytics, and ongoing care. Different disciplines, one accountable relationship.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
              The result is a website that is treated as a customer-acquisition system from the first conversation, not a portfolio piece.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {OPERATING_MODEL.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper"
              >
                <p className="t-label text-[var(--signal-blue-deep)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-navy)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why businesses work with us — eight reasons, two columns. No fake
          testimonials, no fake client logos; positioning is built from
          process attributes a prospect can verify by reading the site. */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">Why businesses work with us</p>
            <h2 className="t-headline mt-3">
              Lean, systemized, and accountable, without the agency overhead.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              We are large enough to bring a real specialist to each part of the build, and lean enough that decisions still happen in days, not weeks. The work shows up on time, the price does not move after the proposal, and the lead flow is monitored after launch.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY_WORK_WITH_US.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 text-[0.975rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How we work — four steps from audit through ongoing care. */}
      <Section tone="cream-deep" hairline="top">
        <div className="max-w-[560px]">
          <p className="t-label text-[var(--warm-ash)]">How it works</p>
          <h2 className="t-headline mt-3">From website audit to ongoing care, in plain English.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Every step is fixed-scope, fixed-price, and explained before it starts. You always know what is happening next and who is doing it.
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

      {/* Contact card: email always; phone only when configured. */}
      <Section tone="paper" hairline="top">
        <Container size="narrow" className="!px-0">
          <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper">
            <p className="t-label text-[var(--warm-ash)]">Reach the studio</p>
            <h2 className="t-headline mt-3">A real specialist on the other end.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              We answer email within one business day. The free website audit is the fastest path to a real conversation about what your website should be doing.
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
                data-cta="book_audit_section"
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
        headline="Ready to see what your website should be doing?"
        body="Book a free website audit. We will review your current site (or your situation if you do not have one yet) and walk through where the next leads are sitting on the table. No pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}

/* ----------------------------------------------------------
   Studio identity card — finished, customer-facing.
   Typographic mark + neutral positioning line. No fabricated
   founding date and no fake employee headshots.

   TODO: when a real studio photo is available, swap the mark
   for an <Image />. Keep the caption tone — quiet, factual.
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

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cream-paper)] text-[0.78rem] font-mono font-semibold text-[var(--ink-navy)]">
              MW
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--cream-edge)]">
              Conversion-first systems
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
              {SITE.location} · Conversion-focused websites for service businesses.
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
            Model
          </span>
          <span className="mt-1 block text-[var(--ink-navy)]">Specialist workflow</span>
        </span>
        <span>
          <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash-soft)]">
            Focus
          </span>
          <span className="mt-1 block text-[var(--ink-navy)]">Service-business growth</span>
        </span>
      </figcaption>
    </figure>
  );
}
