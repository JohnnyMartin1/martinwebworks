import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
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
  title: "Contact",
  description:
    "Contact Martin Web Works. Book a free website audit, ask about packages, or reach the studio about ongoing care. We reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Martin Web Works",
    description:
      "Free website audits, project questions, and existing-site help. We reply within one business day.",
    url: "/contact",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Martin Web Works",
    description:
      "Free website audits, project questions, and existing-site help.",
    images: SHARE_IMAGES,
  },
};

type ContactRoute = {
  label: string;
  title: string;
  body: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
};

const ROUTES: ContactRoute[] = [
  {
    label: "Best starting point for new projects",
    title: "Free Website Audit",
    body:
      "Book a time or send the form. A 30-minute conversation about your current site (or your situation if you do not have one yet). Where the website is helping, where it is hurting, and where the next leads are sitting on the table. No pitch.",
    primary: {
      label: "Book Free Website Audit",
      href: BOOK_AUDIT_HREF,
      external: BOOK_AUDIT_IS_EXTERNAL,
    },
    secondary: { label: "What the audit covers", href: "/free-audit" },
  },
  {
    label: "Already know what you want",
    title: "Project & package questions",
    body:
      "Pricing, packages, timelines, the kinds of service businesses we are built for. Send a short note; we reply within one business day.",
    primary: {
      label: `Email ${SITE.email}`,
      href: `mailto:${SITE.email}?subject=Project%20question`,
    },
    secondary: { label: "Read the FAQ first", href: "/faq" },
  },
  {
    label: "Existing client",
    title: "Care plan and edits",
    body:
      "On a care plan and need an edit, a new photo, an updated service, or a small page change? Email the change and we handle it.",
    primary: {
      label: "Email the studio",
      href: `mailto:${SITE.email}?subject=Care%20plan%20edit`,
    },
    secondary: { label: "About monthly care", href: "/monthly-care" },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Contact Martin Web Works."
        lead="Three reasons people usually write in. Pick whichever fits, or just email us directly. We are currently expanding project capacity for new service-business website builds."
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
            <Button
              href={`mailto:${SITE.email}`}
              variant="secondary"
              size="lg"
            >
              Email {SITE.email}
            </Button>
          </>
        }
      />

      {/* Three contact routes, varied tone to avoid a flat card grid */}
      <Section tone="cream-deep">
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {ROUTES.map((r) => (
            <article
              key={r.title}
              className="flex h-full flex-col rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 shadow-paper"
            >
              <p className="t-label text-[var(--signal-blue-deep)]">{r.label}</p>
              <h2 className="mt-3 text-[1.375rem] font-semibold tracking-[-0.012em] text-[var(--ink-navy)]">
                {r.title}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
                {r.body}
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <Button
                  href={r.primary.href}
                  external={r.primary.external}
                  variant="primary"
                  className="w-full"
                >
                  {r.primary.label}
                </Button>
                {r.secondary ? (
                  <Link
                    href={r.secondary.href}
                    className="block text-center text-[0.85rem] font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
                  >
                    {r.secondary.label}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Direct contact details. Email always. Phone only when configured. */}
      <Section tone="paper" hairline="top">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">Direct contact</p>
            <h2 className="t-headline mt-3">Or skip the routing entirely.</h2>
            <p className="t-body mt-4 text-[var(--warm-ash)]">
              Email is the fastest way to reach the studio. A real specialist replies within one business day, often faster. No call center, no phone tree, no ticketing system.
            </p>
          </div>

          <ul className="grid gap-3">
            <ContactRow
              label="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            {HAS_PHONE ? (
              <ContactRow
                label="Phone"
                value={PHONE_NUMBER}
                href={`tel:${PHONE_HREF}`}
              />
            ) : null}
            <ContactRow label="Studio" value={SITE.location} />
            <ContactRow label="Hours" value="Mon to Fri, 9am to 6pm ET" />
            <ContactRow
              label="Response time"
              value="One business day, often faster"
            />
          </ul>
        </div>
      </Section>

      {/* What to send before we talk — practical, removes awkwardness from the call */}
      <Section tone="cream-deep" hairline="top">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-[58ch]">
            <p className="t-label text-[var(--warm-ash)]">
              Before we talk
            </p>
            <h2 className="t-headline mt-3">
              What to send so the first call is useful.
            </h2>
            <p className="t-body mt-5 text-[var(--warm-ash)]">
              You do not need a creative brief. A short email with a few
              specifics lets us look honestly at your situation before we get
              on a call.
            </p>
          </div>
          <ul className="grid gap-3">
            <PrepRow
              label="Current website"
              body="If you already have a site, the URL. If not, just say so. That is a different conversation."
            />
            <PrepRow
              label="Business type"
              body="One sentence about what you do and the kinds of customers you serve."
            />
            <PrepRow
              label="Service area"
              body="The cities or neighborhoods you cover, or the radius from your shop."
            />
            <PrepRow
              label="What you want more of"
              body="Calls, quote requests, bookings, trust, local search. Naming the bottleneck helps us see the shape of the fix."
            />
            <PrepRow
              label="Any examples you like"
              body="Links to websites you respect. Competitors, other industries, anything. We will tell you what is worth borrowing."
            />
          </ul>
        </div>
      </Section>

      <CTASection
        headline="Best place to start is the free website audit."
        body="A 30-minute review of your current site or your situation, and where your website could be producing more inquiries. Plain English. No pitch."
        primaryLabel="Book Free Website Audit"
        secondary={{ label: `Email ${SITE.email}`, href: `mailto:${SITE.email}` }}
      />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const body = href ? (
    <a
      href={href}
      className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
    >
      {value}
    </a>
  ) : (
    <span className="text-[var(--ink-navy)]">{value}</span>
  );

  return (
    <li className="grid grid-cols-[110px_1fr] items-baseline gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 text-[0.975rem]">
      <span className="t-label text-[var(--warm-ash)]">{label}</span>
      {body}
    </li>
  );
}

function PrepRow({ label, body }: { label: string; body: string }) {
  return (
    <li className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4">
      <p className="t-label text-[var(--signal-blue-deep)]">{label}</p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-navy)]">
        {body}
      </p>
    </li>
  );
}
