import type { Metadata } from "next";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Card } from "@/app/components/ui/Card";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { AssistantDemo } from "@/app/components/mockups/AssistantDemo";
import { BookingMockup } from "@/app/components/mockups/BookingMockup";
import { AI_BENEFITS, AI_PLANS } from "@/app/data/aiPlans";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

export const metadata: Metadata = {
  title: "AI Assistant Add-on for Local Business Websites",
  description:
    "An optional AI lead assistant for local businesses. Captures off-hours leads, answers common questions from approved business info, and routes the conversation to your inbox.",
  alternates: { canonical: "/ai-assistant" },
  openGraph: {
    title: "AI Assistant · Martin Web Works",
    description:
      "Optional AI lead assistant for local business websites. Captures leads from approved business information and hands them to you.",
    url: "/ai-assistant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant · Martin Web Works",
    description:
      "Optional AI lead assistant for local business websites. Try the scripted demo.",
  },
};

const CAPTURE_STEPS = [
  {
    n: "01",
    title: "Visitor asks a question",
    body:
      "Someone lands on your site, often after hours or while you are on a job. They have a real question: do you serve their area, what does it cost, can you come tomorrow.",
  },
  {
    n: "02",
    title: "Assistant answers from approved info",
    body:
      "It only uses the services, hours, areas, and pricing you provided. If it does not know, it says so and routes the conversation back to you.",
  },
  {
    n: "03",
    title: "It collects contact details and service need",
    body:
      "Once the visitor signals real interest, the assistant asks for a name, phone or email, and what they need. No fake urgency, no upsell scripts.",
  },
  {
    n: "04",
    title: "Lead is sent to your inbox",
    body:
      "You get a clean lead summary by email: who, what they need, how to reach them, and the full conversation as context.",
  },
];

const LIMITATIONS = [
  {
    title: "It will not make promises on your behalf",
    body: "Quotes, timelines, and commitments stay yours. The assistant captures intent; you confirm details.",
  },
  {
    title: "It only answers from approved information",
    body: "If something is not in your business profile, it tells the visitor it will check and routes them to you instead of guessing.",
  },
  {
    title: "It will not replace your team",
    body: "Customers who want a human get one. The assistant always offers to connect them directly or schedule a callback.",
  },
  {
    title: "You can update what it knows",
    body: "Hours, services, prices, and areas change. Email what changed and we update the assistant's knowledge base — included in the plan.",
  },
];

export default function AIAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Assistant"
        headline="Optional AI assistant for lead capture."
        lead="This is an add-on, not a requirement. If your business gets off-hours traffic or repetitive questions, it can help you capture more qualified leads. Try the scripted demo below."
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
            <Button href="/features" variant="secondary" size="lg">
              Explore Features
            </Button>
          </>
        }
      />

      {/* Interactive scripted demo */}
      <Section tone="cream-deep">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div className="max-w-[520px]">
            <p className="t-label text-[var(--warm-ash)]">Scripted demo</p>
            <h2 className="t-headline mt-3">
              See how the assistant turns a question into a lead.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              Pick one of the three opening questions. The assistant answers
              from approved business information, asks a qualifying follow-up,
              and ends with a captured lead — sent to your inbox.
            </p>
            <p className="mt-5 text-[0.9rem] text-[var(--warm-ash)]">
              Switch between scenarios to see how the same pattern works for
              different industries.
            </p>
          </div>
          <div className="lg:w-full lg:max-w-[520px] lg:justify-self-end">
            <AssistantDemo />
          </div>
        </div>
      </Section>

      {/* Why it helps */}
      <Section tone="paper" hairline="top">
        <div className="max-w-[640px]">
          <p className="t-label text-[var(--warm-ash)]">Why it helps</p>
          <h2 className="t-headline mt-3">
            Catches leads that would otherwise bounce.
          </h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Off-hours traffic, repeat questions, and the moments when you
            cannot get to the phone. The assistant handles the parts that do
            not need a human, then sends you the parts that do.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AI_BENEFITS.map((b) => (
            <Card key={b.title}>
              <h3 className="t-title">{b.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                {b.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Capture steps */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-[480px]">
            <p className="t-label text-[var(--warm-ash)]">
              How it captures a lead
            </p>
            <h2 className="t-headline mt-3">
              Four steps from question to qualified lead.
            </h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              The assistant follows a script you approve, asks the questions
              you actually need answered, and sends you the lead before the
              visitor leaves your site.
            </p>
          </div>
          <ol className="grid gap-4">
            {CAPTURE_STEPS.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.78rem] font-medium text-[var(--cream-paper)]">
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
        </div>
      </Section>

      {/* Booking variant — same approach, different surface */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
          <div className="lg:w-full lg:max-w-[480px]">
            <BookingMockup />
          </div>
          <div className="max-w-[520px]">
            <p className="t-label text-[var(--warm-ash)]">
              Booking-style assistant
            </p>
            <h2 className="t-headline mt-3">
              For appointment-based businesses, the lead is a booking.
            </h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Dentists, med spas, salons, vets, attorneys, and accountants
              often need the conversation to end in a confirmed time slot, not
              just a phone number. The assistant can collect the same details
              and hand off to a booking widget like the one shown here.
            </p>
            <ul className="mt-7 grid gap-2.5">
              <Bullet>Mockup widget — no booking is created</Bullet>
              <Bullet>Works with Cal.com, Calendly, or similar tools</Bullet>
              <Bullet>Confirmation + add-to-calendar email included</Bullet>
              <Bullet>Customer reschedules from the same email</Bullet>
            </ul>
          </div>
        </div>
      </Section>

      {/* What it will not do — the hard limits */}
      <Section tone="cream-deep" hairline="top">
        <div className="max-w-[640px]">
          <p className="t-label text-[var(--warm-ash)]">
            What the assistant will not do
          </p>
          <h2 className="t-headline mt-3">Honest about the limits.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            The assistant is a lead-capture tool, not a replacement for your
            judgment. These are the hard limits, by design.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {LIMITATIONS.map((limit) => (
            <li
              key={limit.title}
              className="flex gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5"
            >
              <CheckIcon className="mt-1 shrink-0 text-[var(--ink-navy)]" />
              <div>
                <h3 className="t-title">{limit.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                  {limit.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Plans */}
      <Section tone="paper" hairline="top">
        <div className="max-w-[640px]">
          <p className="t-label text-[var(--warm-ash)]">Plans</p>
          <h2 className="t-headline mt-3">Two ways to add it.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Both plans are add-ons to a website package and a care plan. They
            are not standalone offerings.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {AI_PLANS.map((plan) => (
            <Card key={plan.slug} interactive>
              <h3 className="t-title">{plan.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--ink-navy)]">
                {plan.setupPrice} · {plan.monthlyPrice}
              </p>
              <p className="mt-3 text-[0.95rem] text-[var(--warm-ash)]">
                {plan.blurb}
              </p>
              <ul className="mt-4 space-y-2 text-[0.95rem]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue)]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--warm-ash)]">
                {plan.bestFor}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Not sure if you need an assistant?"
        body="Book a free audit. We will tell you, honestly, whether this would actually help your business right now or whether your site fixes come first."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]">
      <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
      <span>{children}</span>
    </li>
  );
}
