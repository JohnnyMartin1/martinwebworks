import type { Metadata } from "next";

import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { AuditForm } from "@/app/components/features/AuditForm";
import { SITE, SCHEDULING_URL, HAS_SCHEDULING } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Free Website Audit for Local Businesses",
  description:
    "Book a free 30-minute website audit. Pick a time on the calendar or send the form and we'll reply by email within one business day. Plain English. No pitch.",
  alternates: { canonical: "/free-audit" },
  openGraph: {
    title: "Free Website Audit · Martin Web Works",
    description:
      "Free 30-minute website audit for local service businesses. Book a time or send the form. Plain English. No pitch.",
    url: "/free-audit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit · Martin Web Works",
    description:
      "A free 30-minute review of your local-business website. Book a time or send the form.",
  },
};

const SCHEDULE_BULLETS = [
  "30-minute website audit",
  "Review your current site or business needs",
  "Plain-English recommendations",
  "No pressure and no automated sales sequence",
];

const FORM_BULLETS = [
  "Better if you want to explain your business first",
  "We'll review and reply within one business day",
  "Confirmation email sent after submission",
];

const NEXT_STEPS = [
  {
    n: "01",
    title: "Send the request or book a time",
    body: "Either path reaches the same inbox. Pick whichever feels easier right now.",
  },
  {
    n: "02",
    title: "We review your site or situation",
    body: "Before the call, we look at your existing site (or your competition if you don't have one yet) and write down what is helping and what is hurting.",
  },
  {
    n: "03",
    title: "We confirm by email",
    body: "You get a real reply within one business day. If you booked a time, it's already on the calendar.",
  },
  {
    n: "04",
    title: "You get a plain-English priority list",
    body: "After the call, you receive a short written summary: what we would fix first, second, third. No proposal pressure.",
  },
];

export default function FreeAuditPage() {
  return (
    <>
      <Hero />

      {/* Two-column intake: book a time OR send the form. Columns align
          at the top; each card grows to its own content height. The form
          card is always taller — that asymmetry is intentional, not a
          stretched layout. */}
      <Section tone="cream-deep" hairline="bottom">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <SchedulingPanel />
          <FormPanel />
        </div>
      </Section>

      <Section tone="paper">
        <div className="max-w-[560px]">
          <p className="t-label">What happens next</p>
          <h2 className="t-headline mt-3">
            Four steps from request to priority list.
          </h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            No sales sequence. No pressure to commit on the call. The whole
            point of the audit is to leave you better-informed about your own
            website, whether or not you ever work with us.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {NEXT_STEPS.map((step) => (
            <li
              key={step.n}
              className="flex gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.8rem] font-medium text-[var(--cream-paper)]">
                {step.n}
              </span>
              <div>
                <h3 className="t-title">{step.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-[var(--warm-ash)]">
          Prefer to skip the form entirely? Write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
          >
            {SITE.email}
          </a>{" "}
          with your business name and website (if you have one). We&apos;ll
          reply.
        </p>
      </Section>
    </>
  );
}

/* ----------------------------------------------------------
   Hero — tight, focused, no PageHero so we can lay the
   intake panels directly under it without an extra band.
   ---------------------------------------------------------- */
function Hero() {
  return (
    <header className="bg-[var(--cream-paper)] pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-28 lg:pb-16 hairline-bottom">
      <Container>
        <div className="max-w-[720px]">
          <p className="t-label text-[var(--warm-ash)]">Free audit</p>
          <h1 className="t-display mt-5">Book a free website audit.</h1>
          <p className="t-lead mt-6">
            {HAS_SCHEDULING
              ? "Choose a time on the calendar or send the form and we’ll reply by email — whichever fits your day."
              : "Send the form and we’ll reply by email within one business day."}
          </p>
          <p className="mt-4 text-[0.9rem] text-[var(--warm-ash)]">
            A 30-minute conversation to review your current site (or your
            situation if you don&apos;t have one), what is helping, what is
            hurting, and what to do next. Email is the fastest way to reach
            the studio.
          </p>
        </div>
      </Container>
    </header>
  );
}

/* ----------------------------------------------------------
   Scheduling panel — content-height card. Reads top-to-bottom:
   eyebrow → title → subtext → checklist → calendar preview →
   CTA → microcopy. No flex/justify trickery, so the card
   stops where the content stops.
   ---------------------------------------------------------- */
function SchedulingPanel() {
  if (!HAS_SCHEDULING) {
    return <EmailFirstPanel />;
  }
  return (
    <article
      aria-labelledby="schedule-heading"
      className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper"
    >
      <p className="t-label text-[var(--signal-blue-deep)]">Fastest path</p>
      <h2
        id="schedule-heading"
        className="mt-3 text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.014em] text-[var(--ink-navy)]"
      >
        Book a time now.
      </h2>
      <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">
        Pick a 30-minute audit slot and get a calendar confirmation.
      </p>

      <ul className="mt-5 grid gap-2.5">
        {SCHEDULE_BULLETS.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
          >
            <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <CalendarPreview />

      <Button
        href={SCHEDULING_URL}
        external
        size="lg"
        className="mt-5 w-full"
        data-cta="scheduling_free_audit"
      >
        Book a Free Audit Call
        <ArrowRight />
      </Button>
      <p className="mt-2.5 text-center text-[0.78rem] text-[var(--warm-ash)]">
        Opens our scheduling page in a new tab.
      </p>
    </article>
  );
}

/* When SCHEDULING_URL is empty, this is the left panel — explains the
   email reply flow so the right-side form does not feel orphaned.
   Also content-height; no stretch trickery. */
function EmailFirstPanel() {
  return (
    <article
      aria-labelledby="email-first-heading"
      className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper"
    >
      <p className="t-label text-[var(--signal-blue-deep)]">How it works</p>
      <h2
        id="email-first-heading"
        className="mt-3 text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.014em] text-[var(--ink-navy)]"
      >
        Send the form. We&apos;ll reply with two time options.
      </h2>
      <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">
        Email is the fastest way to reach the studio. Submit the form and
        you&apos;ll hear back within one business day with a couple of times
        that work.
      </p>
      <ul className="mt-5 grid gap-2.5">
        {[
          "Real reply from a real person within one business day",
          "Two time options that fit your week",
          "Confirmation email after submission",
          "No autoresponders or sales sequences",
        ].map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
          >
            <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.85rem] text-[var(--warm-ash)]">
        Or write directly to{" "}
        <a
          href={`mailto:${SITE.email}`}
          data-cta="email_section"
          className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
        >
          {SITE.email}
        </a>{" "}
        with your business name and current site.
      </p>
    </article>
  );
}

/* ----------------------------------------------------------
   Form panel — wraps the existing AuditForm in a labelled
   card so the two intake paths read as equal options.
   ---------------------------------------------------------- */
function FormPanel() {
  return (
    <article
      aria-labelledby="form-heading"
      className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper"
    >
      <p className="t-label text-[var(--warm-ash)]">Or, with context</p>
      <h2
        id="form-heading"
        className="mt-3 text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.014em] text-[var(--ink-navy)]"
      >
        Send the audit request form.
      </h2>
      <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--warm-ash)]">
        Better if you want to explain your business first. We&apos;ll review
        before the call.
      </p>
      <ul className="mt-6 grid gap-2.5">
        {FORM_BULLETS.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
          >
            <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <AuditForm variant="compact" />
      </div>
    </article>
  );
}

/* ----------------------------------------------------------
   Calendar preview — a compact, intentional snapshot of the
   booking widget. One day, a row of 4 real time-slot pills,
   one highlighted. Reads as a confident teaser, not a
   placeholder. Decorative-only — the real picker lives on
   Cal.com behind the CTA below.
   ---------------------------------------------------------- */
function CalendarPreview() {
  const slots = [
    { label: "10:00a" },
    { label: "11:30a", highlight: true },
    { label: "2:00p" },
    { label: "4:00p" },
  ];
  return (
    <div
      aria-hidden
      className="mt-6 rounded-xl border border-[var(--divider)] bg-[var(--cream-deep)] p-4 sm:p-5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--warm-ash)]">
          This week · Tue
        </p>
        <p className="text-[0.72rem] text-[var(--warm-ash-soft)]">
          30-min slots
        </p>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {slots.map((s) => (
          <li key={s.label}>
            <span
              className={`inline-flex h-9 items-center justify-center rounded-full px-3.5 text-[0.85rem] font-medium tabular-nums ${
                s.highlight
                  ? "bg-[var(--ink-navy)] text-[var(--cream-paper)] shadow-paper"
                  : "border border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)]"
              }`}
            >
              {s.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.72rem] text-[var(--warm-ash-soft)]">
        Live slots open on Cal.com
      </p>
    </div>
  );
}
