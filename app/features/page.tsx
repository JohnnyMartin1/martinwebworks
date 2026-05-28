import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

import { FormMockup } from "@/app/components/mockups/FormMockup";
import { LeadFlowMockup } from "@/app/components/mockups/LeadFlowMockup";
import { BookingMockup } from "@/app/components/mockups/BookingMockup";
import { AssistantDemo } from "@/app/components/mockups/AssistantDemo";
import { BeforeAfter } from "@/app/components/mockups/BeforeAfter";
import { CareOpsMockup } from "@/app/components/mockups/CareOpsMockup";
import { LocalSeoMockup } from "@/app/components/mockups/LocalSeoMockup";
import {
  ReviewsMockup,
  FaqMockup,
  TeamMockup,
  CredentialsMockup,
  GalleryMockup,
} from "@/app/components/mockups/TrustMockup";

export const metadata: Metadata = {
  title: "Website Features for Local Businesses",
  description:
    "A showroom of the features local businesses can add to their websites — quote forms, AI lead assistants, online booking, reviews, FAQs, service-area pages, and monthly care. Designed and demonstrated by Martin Web Works.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Website Features · Martin Web Works",
    description:
      "Quote forms, AI assistants, online booking, service-area pages, reviews, FAQs, and monthly care — demonstrated, not just described.",
    url: "/features",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Features · Martin Web Works",
    description:
      "A showroom of website features for local businesses, demonstrated in real component mockups.",
  },
};

/* ----------------------------------------------------------
   Page
   ---------------------------------------------------------- */

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <ShowroomNav />
      <LeadCaptureSection />
      <BookingSection />
      <AISection />
      <TrustSection />
      <LocalSeoSection />
      <CareSection />
      <BeforeAfterSection />
      <FinalCTA />
    </>
  );
}

/* ----------------------------------------------------------
   Hero — sets the showroom tone
   ---------------------------------------------------------- */

function Hero() {
  return (
    <header className="bg-[var(--cream-paper)] pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20 hairline-bottom">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-16">
          <div className="max-w-[640px]">
            <p className="t-label text-[var(--warm-ash)]">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue)] align-middle mr-2"
              />
              The showroom
            </p>
            <h1 className="t-display mt-5">
              Website features your local business can add.
            </h1>
            <p className="t-lead mt-6">
              From quote forms and booking links to AI assistants, service-area
              pages, galleries, reviews, and monthly updates — these are the
              pieces that turn a website into a working business tool.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
              >
                Book Free Audit
                <ArrowRight />
              </Button>
              <Button href="/examples" variant="secondary" size="lg">
                See Example Websites
              </Button>
            </div>
            <p className="mt-6 text-[0.85rem] text-[var(--warm-ash)]">
              Every component on this page is a real working mockup. Some are
              interactive — try them.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <FormMockup variant="quote" />
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ----------------------------------------------------------
   Quick in-page nav strip
   ---------------------------------------------------------- */

const SECTIONS = [
  { id: "lead-capture", label: "Lead capture" },
  { id: "booking", label: "Booking" },
  { id: "ai", label: "AI assistant" },
  { id: "trust", label: "Trust" },
  { id: "local-seo", label: "Local SEO" },
  { id: "care", label: "Monthly care" },
  { id: "before-after", label: "Before / after" },
];

function ShowroomNav() {
  return (
    <div className="bg-[var(--cream-deep)] hairline-bottom">
      <Container>
        <nav
          aria-label="Showroom sections"
          className="-mx-2 flex gap-1 overflow-x-auto px-2 py-4"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex shrink-0 items-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-3.5 py-1.5 text-[0.8rem] font-medium text-[var(--ink-navy)] hover:border-[var(--ink-navy)]"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}

/* ----------------------------------------------------------
   Lead capture
   ---------------------------------------------------------- */

const LEAD_CAPTURE_POINTS = [
  "Quote forms tuned for the specific service",
  "Multi-step intake for higher-ticket work",
  "Confirmation email back to the visitor",
  "Plain-text lead notification to your inbox",
  "Honeypot + validation to filter bots",
  "Optional CRM or team-member routing",
];

function LeadCaptureSection() {
  return (
    <Section id="lead-capture" tone="paper">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Lead capture</p>
        <h2 className="t-headline mt-3">
          Forms that earn their place — not contact-us black holes.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          A good form is short, mobile-first, and routes a real lead to the
          right inbox. These are the variants we ship most.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
        <FormMockup variant="quote" />
        <FormMockup variant="contact" business="Verbena Aesthetics" />
        <FormMockup variant="intake" business="Harbor & Slate Law" />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
        <LeadFlowMockup />
        <ul className="grid gap-2.5">
          {LEAD_CAPTURE_POINTS.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-[var(--divider)] bg-[var(--paper-white)] px-4 py-3 text-[0.95rem] text-[var(--ink-navy)]"
            >
              <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Booking / scheduling
   ---------------------------------------------------------- */

const BOOKING_POINTS = [
  "Choose service, pick a time, confirm — in three taps",
  "Works with Cal.com, Calendly, or similar tools",
  "Reminder email + add-to-calendar attached",
  "Mobile-first widget, embedded on the site",
  "Mockup shown — no booking is created",
];

function BookingSection() {
  return (
    <Section id="booking" tone="cream-deep" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
        <div className="max-w-[560px]">
          <p className="t-label text-[var(--warm-ash)]">Booking · interactive</p>
          <h2 className="t-headline mt-3">
            A booking flow customers actually finish.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Try the widget. Pick a service, pick a time, fill in the details —
            it walks through the same three-step pattern we ship on client
            sites.
          </p>
          <ul className="mt-7 grid gap-2.5">
            {BOOKING_POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[0.85rem] text-[var(--warm-ash)]">
            Use this on your site instead of a generic “contact us” form for
            anything that fits an appointment.
          </p>
        </div>

        <div className="lg:justify-self-end lg:w-full lg:max-w-[480px]">
          <BookingMockup />
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   AI assistant
   ---------------------------------------------------------- */

const AI_FACTS = [
  {
    title: "Answers from approved information",
    body: "Hours, services, areas, pricing — we train it on what you actually offer.",
  },
  {
    title: "Captures leads, doesn’t replace humans",
    body: "It collects the contact details, then routes the conversation to you.",
  },
  {
    title: "Updates with your business",
    body: "Email what changed; the assistant’s knowledge updates in the next cycle.",
  },
];

function AISection() {
  return (
    <Section id="ai" tone="paper" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div className="max-w-[520px]">
          <p className="t-label text-[var(--warm-ash)]">AI assistant · interactive</p>
          <h2 className="t-headline mt-3">
            A scripted demo of how the assistant captures a lead.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Pick a question. The assistant answers from approved business
            information, asks a qualifying follow-up, and ends with a captured
            lead in your inbox.
          </p>
          <ul className="mt-7 grid gap-4">
            {AI_FACTS.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-[var(--divider)] bg-[var(--paper-white)] p-4"
              >
                <h3 className="text-[0.95rem] font-semibold text-[var(--ink-navy)]">
                  {f.title}
                </h3>
                <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--warm-ash)]">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Link
              href="/ai-assistant"
              className="inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
            >
              See the full assistant page
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="lg:w-full lg:max-w-[520px] lg:justify-self-end">
          <AssistantDemo />
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Trust building
   ---------------------------------------------------------- */

function TrustSection() {
  return (
    <Section id="trust" tone="cream-deep" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Trust</p>
        <h2 className="t-headline mt-3">
          The blocks that earn a call before the first form.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          Trust is a layout problem before it is a copy problem. These are the
          components we use to make a small business look the size it actually
          is.
        </p>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-2 lg:gap-8">
        <ReviewsMockup />
        <FaqMockup />
        <TeamMockup />
        <CredentialsMockup />
      </div>

      <div className="mt-7">
        <GalleryMockup />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Local SEO
   ---------------------------------------------------------- */

const SEO_POINTS = [
  "Service pages — one URL per service",
  "Service-area pages — one URL per city / neighborhood",
  "Location pages for multi-location businesses",
  "FAQ + breadcrumb schema for rich results",
  "Google Business Profile aligned with site NAP",
  "Search Console + analytics wired before launch",
];

function LocalSeoSection() {
  return (
    <Section id="local-seo" tone="paper" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
        <div className="max-w-[520px]">
          <p className="t-label text-[var(--warm-ash)]">Local SEO</p>
          <h2 className="t-headline mt-3">
            Structure Google can actually understand.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            The site map, schema, and Google Business Profile work as one
            system. Search engines map your services to the places you serve;
            visitors land on the right page first.
          </p>
          <ul className="mt-7 grid gap-2.5">
            {SEO_POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <LocalSeoMockup />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Monthly care / operations
   ---------------------------------------------------------- */

const CARE_POINTS = [
  "Managed hosting + SSL + weekly backups",
  "Uptime monitoring with same-day response",
  "Plugin and security patching on a schedule",
  "Monthly edits done by email request",
  "Seasonal pages and holiday hours kept current",
  "Form testing and lead routing checks every month",
];

function CareSection() {
  return (
    <Section id="care" tone="cream-deep" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
        <CareOpsMockup />
        <div className="max-w-[520px]">
          <p className="t-label text-[var(--warm-ash)]">Monthly care</p>
          <h2 className="t-headline mt-3">
            The site stays current. You stay on the job.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Care plans handle hosting, security, monitoring, edits, and the
            slow drift that quietly degrades most local-business sites.
          </p>
          <ul className="mt-7 grid gap-2.5">
            {CARE_POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Link
              href="/monthly-care"
              className="inline-flex items-center gap-2 font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] decoration-2 underline-offset-4 hover:text-[var(--signal-blue)]"
            >
              See care plans
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Before / after
   ---------------------------------------------------------- */

function BeforeAfterSection() {
  return (
    <Section id="before-after" tone="paper" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Before / after</p>
        <h2 className="t-headline mt-3">
          What changes when a local-business site is built around the visitor.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          The visible difference is layout and tap-targets. The invisible
          difference is the rest of this page.
        </p>
      </div>
      <div className="mt-12">
        <BeforeAfter />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Final CTA
   ---------------------------------------------------------- */

function FinalCTA() {
  return (
    <CTASection
      headline="Not sure which features your business actually needs?"
      body="Book a free 30-minute audit. We will look at your current site (or your situation) and tell you which of these features would move the needle for you — and which can wait."
      primaryLabel="Book Free Audit"
      secondary={{ label: "See Example Websites", href: "/examples" }}
    />
  );
}
