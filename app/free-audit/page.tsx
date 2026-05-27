import type { Metadata } from "next";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { AuditForm } from "@/app/components/features/AuditForm";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Free Website Audit for Local Businesses",
  description:
    "Request a free 30-minute website audit. We review your current site (or your situation) and send a plain-English priority list of what to fix first. No pitch.",
  alternates: { canonical: "/free-audit" },
  openGraph: {
    title: "Free Website Audit · Martin Web Works",
    description:
      "Free 30-minute website audit for local service businesses. Plain English. No pitch.",
    url: "/free-audit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit · Martin Web Works",
    description:
      "A free 30-minute review of your local-business website. No pitch.",
  },
};

const NEXT_STEPS = [
  {
    n: "01",
    title: "You send the request",
    body: "Use the form on this page, or email us directly. Either works.",
  },
  {
    n: "02",
    title: "I review your site or situation",
    body: "Before the call, I look at your existing site (or your competition if you don't have one yet) and write down what is helping and what is hurting.",
  },
  {
    n: "03",
    title: "I reply by email to schedule",
    body: "You get a real reply within one business day, with a couple of time options for a 30-minute call.",
  },
  {
    n: "04",
    title: "You get a plain-English priority list",
    body: "After the call, you receive a short written summary: what I would fix first, second, third. No proposal pressure.",
  },
];

export default function FreeAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Audit"
        headline="Book your free website audit."
        lead="A 30-minute conversation to review your current site (or your situation if you do not have one), what is helping, what is hurting, and what to do next."
        footnote={
          <>
            Prefer email?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
            >
              {SITE.email}
            </a>
          </>
        }
      />

      <Section tone="cream-deep" hairline="bottom">
        <AuditForm variant="stacked" />
      </Section>

      <Section tone="paper">
        <div className="max-w-[560px]">
          <p className="t-label">What happens next</p>
          <h2 className="t-headline mt-3">Four steps from request to priority list.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            No sales sequence. No pressure to commit on the call. The whole point of the audit is to leave you better-informed about your own website, whether or not you ever work with us.
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
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">{step.body}</p>
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
          </a>
          {" "}with your business name and website (if you have one). I will reply.
        </p>
      </Section>
    </>
  );
}
