import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SHARE_IMAGES } from "@/app/data/site";

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
  title: "Website Features for Service Businesses",
  description:
    "The working components that turn a website into a customer-acquisition system. Quote and lead capture, online booking, AI assistants, service-area SEO, trust blocks, before/after, and ongoing care. Demonstrated in working mockups, not just described.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Website Features · Martin Web Works",
    description:
      "Quote flows, AI assistants, online booking, service-area SEO, reviews, and ongoing care. The components that turn a website into a growth system.",
    url: "/features",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Features · Martin Web Works",
    description:
      "The components that turn a service-business website into a growth system, demonstrated in working mockups.",
    images: SHARE_IMAGES,
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
              The components that turn a website into a growth system.
            </h1>
            <p className="t-lead mt-6">
              Quote and lead capture, online booking, AI assistants, service-area SEO, trust blocks, before/after, and ongoing care. Each feature is here for a single reason: to take a visitor closer to becoming a customer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
                data-cta="book_audit_hero"
              >
                Book Free Website Audit
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
        <p className="t-label text-[var(--warm-ash)]">Lead capture · quote & contact</p>
        <h2 className="t-headline mt-3">
          Forms that earn their place — not contact-us black holes.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          A good form is short, mobile-first, and routes a real lead to the
          right inbox. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> for most service businesses, the form is the single largest source of qualified inquiries — so the difference between a good one and a bad one is measured in monthly revenue, not pixels.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
        <FormMockup variant="quote" />
        <FormMockup variant="contact" business="Luma Aesthetics" />
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
          <p className="t-label text-[var(--warm-ash)]">Online booking · interactive</p>
          <h2 className="t-headline mt-3">
            A booking flow customers actually finish.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Try the widget. Pick a service, pick a time, fill in the details — the same three-step pattern we ship on client sites. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> for appointment-based businesses, replacing a &ldquo;contact us&rdquo; form with a real booking flow removes the back-and-forth that quietly kills a meaningful share of inquiries.
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
          <p className="t-label text-[var(--warm-ash)]">AI lead assistant · interactive</p>
          <h2 className="t-headline mt-3">
            A scripted demo of how the assistant captures a lead.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Pick a question. The assistant answers from approved business information, asks a qualifying follow-up, and ends with a captured lead in your inbox. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> a meaningful portion of website traffic arrives outside business hours — the assistant turns those visits into qualified leads in your inbox instead of someone bouncing to a competitor.
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
        <p className="t-label text-[var(--warm-ash)]">Reviews, trust, and proof</p>
        <h2 className="t-headline mt-3">
          The blocks that earn the call before the form is filled out.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          Trust is a layout problem before it is a copy problem. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> customers rarely call a business they do not believe in yet — reviews, credentials, team detail, and visible proof are how a website earns belief in the seconds before the decision.
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
          <p className="t-label text-[var(--warm-ash)]">Service-area SEO structure</p>
          <h2 className="t-headline mt-3">
            Structure Google can actually understand.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Service pages, service-area pages, schema, and Google Business Profile work as one system. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> a business that wins searches for &ldquo;service + city&rdquo; wins the searches that actually convert. Generic service pages do not rank for the work people are about to pay for.
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
          <p className="t-label text-[var(--warm-ash)]">Ongoing care & growth support</p>
          <h2 className="t-headline mt-3">
            The site keeps converting. You keep running the business.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Care covers hosting, security, monitoring, monthly edits, and the slow drift that quietly degrades most service-business sites. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> the difference between a website that produces leads in year three and one that does not is almost always whether anyone was paying attention after launch.
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
          What changes when a service-business site is built around conversion.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          The visible difference is layout, hierarchy, and tap-targets. <strong className="font-semibold text-[var(--ink-navy)]">Why it matters:</strong> the same monthly visitor count produces a meaningfully different number of inquiries depending on how the page is structured. That delta is the entire reason to redesign at all.
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
      headline="Not sure which growth features your business actually needs?"
      body="Book a free website audit. We will review your site (or your situation), tell you which of these features would move the needle for your business, and which can wait."
      primaryLabel="Book Free Website Audit"
      secondary={{ label: "See Example Websites", href: "/examples" }}
    />
  );
}
