import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { Stamp } from "@/app/components/ui/Stamp";

import { BrowserFrame } from "@/app/components/mockups/BrowserFrame";
import { SiteMockup } from "@/app/components/mockups/SiteMockup";
import { PhoneFrame } from "@/app/components/mockups/PhoneFrame";
import { FormMockup } from "@/app/components/mockups/FormMockup";
import { LeadFlowMockup } from "@/app/components/mockups/LeadFlowMockup";
import {
  ReviewsMockup,
  FaqMockup,
} from "@/app/components/mockups/TrustMockup";
import { ConceptHomeMockup } from "@/app/components/mockups/ConceptHomeMockup";
import { BookingMockup } from "@/app/components/mockups/BookingMockup";
import { AssistantDemo } from "@/app/components/mockups/AssistantDemo";

import { BreadcrumbJsonLd } from "@/app/components/seo/JsonLd";
import {
  EXAMPLE_CONCEPTS,
  getBaseExample,
  getExampleConceptBySlug,
  type ExampleConcept,
} from "@/app/data/exampleConcepts";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";

/* ----------------------------------------------------------
   Next.js 16 — params is a Promise in app router pages.
   ---------------------------------------------------------- */
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return EXAMPLE_CONCEPTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = getExampleConceptBySlug(slug);
  if (!concept) {
    return {
      title: "Concept not found",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: concept.meta.title,
    description: concept.meta.description,
    alternates: { canonical: `/examples/${concept.slug}` },
    openGraph: {
      title: concept.meta.title,
      description: concept.meta.description,
      url: `/examples/${concept.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: concept.meta.title,
      description: concept.meta.description,
    },
  };
}

export default async function ExampleConceptPage({ params }: Props) {
  const { slug } = await params;
  const concept = getExampleConceptBySlug(slug);
  if (!concept) notFound();

  const base = getBaseExample(concept);
  if (!base) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Examples", href: "/examples" },
          { label: concept.industryLabel },
        ]}
      />

      <Hero concept={concept} base={base} />
      <HomepageMockupSection concept={concept} base={base} />
      <KeySectionsBlock concept={concept} base={base} />
      <BookingSection concept={concept} />
      <AssistantSection concept={concept} />
      <MobilePreviewSection concept={concept} base={base} />
      <LeadFlowSection concept={concept} />
      <FeaturesBreakdown concept={concept} />
      <WhyItWorks concept={concept} />
      <RelatedConceptsBlock currentSlug={concept.slug} />
      <FinalCTA concept={concept} />
    </>
  );
}

/* ----------------------------------------------------------
   Hero
   ---------------------------------------------------------- */

function Hero({
  concept,
  base,
}: {
  concept: ExampleConcept;
  base: NonNullable<ReturnType<typeof getBaseExample>>;
}) {
  return (
    <header className="bg-[var(--cream-paper)] pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20 hairline-bottom">
      <Container>
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-[0.78rem] text-[var(--warm-ash)]"
        >
          <Link href="/examples" className="hover:text-[var(--ink-navy)]">
            Examples
          </Link>
          <span aria-hidden>·</span>
          <span className="text-[var(--ink-navy)]">{concept.industryLabel}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-14">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3">
              <Stamp tone="cream">{concept.hero.eyebrow}</Stamp>
            </div>
            <h1 className="t-display mt-5">{concept.hero.headline}</h1>
            <p className="t-lead mt-6">{concept.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                size="lg"
              >
                {concept.hero.primaryCtaInPage}
                <ArrowRight />
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                Explore Features
              </Button>
            </div>
            <p className="mt-6 text-[0.85rem] text-[var(--warm-ash)]">
              All mockups on this page are concept work by Martin Web Works.
              No real client information is shown.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <BrowserFrame url={base.domain}>
              <SiteMockup
                businessName={base.name}
                tagline={concept.hero.siteTagline}
                primaryCta={concept.hero.siteCta}
                serviceLabels={concept.hero.services}
                palette={base.palette}
              />
            </BrowserFrame>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ----------------------------------------------------------
   Full homepage mockup section
   ---------------------------------------------------------- */

function HomepageMockupSection({
  concept,
  base,
}: {
  concept: ExampleConcept;
  base: NonNullable<ReturnType<typeof getBaseExample>>;
}) {
  return (
    <Section tone="cream-deep">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">The homepage</p>
        <h2 className="t-headline mt-3">
          One page, answering the questions a visitor brings.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          The homepage is not a brochure — it is the first triage step. The
          hero names the situation, the services help the visitor self-qualify,
          and the trust block answers the silent question every prospect has.
        </p>
      </div>
      <div className="mt-10 mx-auto max-w-[940px]">
        <ConceptHomeMockup
          variant={concept.variant}
          business={base}
          headline={concept.hero.siteTagline}
          subline={`Concept for ${base.name}, designed by Martin Web Works. Layout adapts to industry-specific reading patterns.`}
          cta={concept.hero.siteCta}
        />
        <p className="mt-3 text-center text-[0.78rem] text-[var(--warm-ash)]">
          Concept screenshot. Not a real client site.
        </p>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Booking section — uses the variant-aware BookingMockup so
   the industry's actual service names and intake fields land
   in the right places (roof inspection vs. consultation vs.
   confidential call).
   ---------------------------------------------------------- */

function BookingSection({ concept }: { concept: ExampleConcept }) {
  const copy = bookingCopy(concept);
  return (
    <Section tone="cream-deep" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-14">
        <div className="max-w-[520px]">
          <p className="t-label text-[var(--warm-ash)]">Booking module</p>
          <h2 className="t-headline mt-3">{copy.title}</h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">{copy.body}</p>
          <ul className="mt-6 grid gap-2.5">
            {copy.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <BookingMockup variant={concept.variant} />
        </div>
      </div>
    </Section>
  );
}

function bookingCopy(concept: ExampleConcept) {
  switch (concept.variant) {
    case "roofing":
      return {
        title: "Schedule the inspection without leaving the page.",
        body: "Roofing customers often book the inspection in the same minute they decide to. This widget lets them — service, time, address, done.",
        bullets: [
          "Free inspection, storm assessment, or replacement quote",
          "Property address captured for the route",
          "Confirmation email + crew dispatch notification",
        ],
      };
    case "medSpa":
      return {
        title: "Consultations and treatments, booked online.",
        body: "Guests pick a consultation or treatment, find a time, and complete a short intake. The confirmation explains what to bring on a first visit.",
        bullets: [
          "Complimentary consultation as the default first step",
          "Treatment-specific intake on confirmation",
          "Reschedule link in every email",
        ],
      };
    case "lawFirm":
      return {
        title: "A confidential 15-minute call, on the calendar.",
        body: "Prospective clients pick a time without the awkward phone-tag step. The intake confirms what the call covers and what is shared.",
        bullets: [
          "Phone, video, or in-office consultation options",
          "Confirmation explains scope and confidentiality",
          "Submitting does not create an attorney-client relationship",
        ],
      };
  }
}

/* ----------------------------------------------------------
   Assistant section — locks AssistantDemo to the concept's
   scenario so the surrounding industry context drives the
   conversation. Inherits the legal-advice guardrail for law
   firms automatically (it's baked into the scenario).
   ---------------------------------------------------------- */

function AssistantSection({ concept }: { concept: ExampleConcept }) {
  const copy = assistantCopy(concept);
  return (
    <Section tone="paper" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-14">
        <div>
          <AssistantDemo
            scenarioId={concept.assistantScenarioId}
            caption={copy.caption}
          />
        </div>
        <div className="max-w-[480px] lg:order-first">
          <p className="t-label text-[var(--warm-ash)]">AI assistant</p>
          <h2 className="t-headline mt-3">{copy.title}</h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">{copy.body}</p>
          <ul className="mt-6 grid gap-2.5">
            {copy.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
              >
                <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.85rem] text-[var(--warm-ash)]">
            See the{" "}
            <Link
              href="/ai-assistant"
              className="font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
            >
              full AI assistant page
            </Link>{" "}
            for guardrails, pricing, and other industry scenarios.
          </p>
        </div>
      </div>
    </Section>
  );
}

function assistantCopy(concept: ExampleConcept) {
  switch (concept.variant) {
    case "roofing":
      return {
        title: "Answers storm-season questions before the phone rings.",
        body: "When the homeowner asks ‘do you handle storm damage in Arlington?’ at 9pm, the assistant answers, qualifies the lead, and hands it to your inbox by morning.",
        bullets: [
          "Storm damage, repair, replacement, inspection",
          "Captures address + best contact",
          "Routes to your project manager or CRM",
        ],
        caption:
          "Scripted demo. The real assistant uses your approved business information, not generic AI replies.",
      };
    case "medSpa":
      return {
        title: "Treatment questions answered with your voice.",
        body: "Guests ask the assistant about treatments and pricing windows. The assistant explains, qualifies, and offers a consultation booking — without making medical claims.",
        bullets: [
          "Treatments, pricing windows, consultation flow",
          "Routes first-time guests to the right starting point",
          "Never makes medical promises or guarantees",
        ],
        caption:
          "Scripted demo. The real assistant uses your approved business information, not generic AI replies.",
      };
    case "lawFirm":
      return {
        title: "Confidential intake, with the right disclaimers.",
        body: "The assistant collects the basics needed to route an inquiry to the right attorney. It explicitly does not provide legal advice and does not create an attorney-client relationship.",
        bullets: [
          "Practice area routing (estate, business, contracts)",
          "Confidential intake summary by email",
          "Hard guardrails on legal advice and outcomes",
        ],
        caption:
          "Scripted demo. The real assistant does not provide legal advice or create an attorney-client relationship.",
      };
  }
}

/* ----------------------------------------------------------
   Key sections walkthrough
   ---------------------------------------------------------- */

function KeySectionsBlock({
  concept,
  base,
}: {
  concept: ExampleConcept;
  base: NonNullable<ReturnType<typeof getBaseExample>>;
}) {
  return (
    <Section tone="paper" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Inside the site</p>
        <h2 className="t-headline mt-3">
          The sections that earn the conversion.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          Each block answers a specific question. None of them exist to
          decorate the page.
        </p>
      </div>

      <ol className="mt-12 grid gap-10 lg:gap-14">
        {concept.sections.map((section, i) => {
          const visual = pickSectionVisual(section.eyebrow, concept, base);
          const flip = i % 2 === 1;
          return (
            <li
              key={section.title}
              className={`grid items-start gap-8 lg:items-center lg:gap-14 ${
                flip ? "lg:grid-cols-[1.05fr_1fr]" : "lg:grid-cols-[1fr_1.05fr]"
              }`}
            >
              <div className={flip ? "lg:order-2" : ""}>
                <p className="t-label text-[var(--signal-blue-deep)]">
                  {String(i + 1).padStart(2, "0")} · {section.eyebrow}
                </p>
                <h3 className="mt-3 text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.014em] text-[var(--ink-navy)]">
                  {section.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-relaxed text-[var(--warm-ash)]">
                  {section.body}
                </p>
                <ul className="mt-5 grid gap-2">
                  {section.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]"
                    >
                      <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={flip ? "lg:order-1" : ""}>{visual}</div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

/**
 * Pick a visual for a section based on its eyebrow label. Sections we don't
 * recognize fall back to a small site-snapshot tile — never empty.
 */
function pickSectionVisual(
  eyebrow: string,
  concept: ExampleConcept,
  base: NonNullable<ReturnType<typeof getBaseExample>>,
) {
  const tag = eyebrow.toLowerCase();
  if (tag.includes("hero")) {
    return (
      <BrowserFrame url={base.domain}>
        <SiteMockup
          businessName={base.name}
          tagline={concept.hero.siteTagline}
          primaryCta={concept.hero.siteCta}
          serviceLabels={concept.hero.services}
          palette={base.palette}
        />
      </BrowserFrame>
    );
  }
  if (tag.includes("trust") || tag.includes("review")) {
    return <ReviewsMockup />;
  }
  if (tag.includes("faq")) {
    return <FaqMockup />;
  }
  if (tag.includes("quote") || tag.includes("intake") || tag.includes("contact")) {
    const variant =
      concept.slug === "law-firm-website-concept"
        ? "intake"
        : tag.includes("intake")
          ? "intake"
          : "quote";
    return <FormMockup variant={variant} business={base.name} />;
  }
  if (tag.includes("attorney") || tag.includes("team")) {
    return <ReviewsMockup />;
  }
  if (tag.includes("gallery") || tag.includes("proof")) {
    return (
      <BrowserFrame url={base.domain}>
        <SiteMockup
          businessName={base.name}
          tagline="Recent work, by neighborhood"
          primaryCta="See more"
          serviceLabels={["Arlington", "Falls Church", "Bethesda"]}
          palette={base.palette}
        />
      </BrowserFrame>
    );
  }
  if (tag.includes("services") || tag.includes("procedures") || tag.includes("practice")) {
    return (
      <BrowserFrame url={base.domain}>
        <SiteMockup
          businessName={base.name}
          tagline={`What ${base.name} does`}
          primaryCta="See all services"
          serviceLabels={concept.hero.services}
          palette={base.palette}
        />
      </BrowserFrame>
    );
  }
  if (tag.includes("booking")) {
    return (
      <FormMockup variant="contact" business={base.name} />
    );
  }
  return (
    <BrowserFrame url={base.domain}>
      <SiteMockup
        businessName={base.name}
        tagline={concept.hero.siteTagline}
        primaryCta={concept.hero.siteCta}
        serviceLabels={concept.hero.services}
        palette={base.palette}
      />
    </BrowserFrame>
  );
}

/* ----------------------------------------------------------
   Mobile preview
   ---------------------------------------------------------- */

function MobilePreviewSection({
  concept,
  base,
}: {
  concept: ExampleConcept;
  base: NonNullable<ReturnType<typeof getBaseExample>>;
}) {
  return (
    <Section tone="cream-deep" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        <div className="max-w-[520px]">
          <p className="t-label text-[var(--warm-ash)]">On a phone</p>
          <h2 className="t-headline mt-3">
            Designed for the phone in {concept.industryShort === "law firms" ? "a client's" : "a customer's"} hand.
          </h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            Local-business searches happen on phones. The mobile layout is the
            primary layout — not an afterthought scaled down from desktop.
          </p>
          <ul className="mt-6 grid gap-2.5">
            <li className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]">
              <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
              <span>Tap-targets sized for thumbs, not cursors</span>
            </li>
            <li className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]">
              <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
              <span>Quote / call CTAs visible without scrolling</span>
            </li>
            <li className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink-navy)]">
              <CheckIcon className="mt-1 shrink-0 text-[var(--signal-blue)]" />
              <span>Fast load on 4G — under 2 seconds to interactive</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-self-end">
          <PhoneFrame>
            <div className="px-4 pt-2 pb-4">
              <SiteMockup
                businessName={base.name}
                tagline={concept.hero.siteTagline}
                primaryCta={concept.hero.siteCta}
                serviceLabels={concept.hero.services}
                palette={base.palette}
                showPhoneNumber={false}
              />
            </div>
          </PhoneFrame>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Lead-capture flow
   ---------------------------------------------------------- */

function LeadFlowSection({ concept }: { concept: ExampleConcept }) {
  return (
    <Section tone="paper" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Lead-capture flow</p>
        <h2 className="t-headline mt-3">{concept.leadFlow.title}</h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          {concept.leadFlow.body}
        </p>
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {concept.leadFlow.steps.map((step) => (
          <li
            key={step.label}
            className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.78rem] font-mono text-[var(--cream-paper)]">
              {step.label}
            </span>
            <h3 className="mt-4 text-[1.05rem] font-semibold text-[var(--ink-navy)]">
              {step.title}
            </h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--warm-ash)]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <LeadFlowMockup />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------
   Feature breakdown
   ---------------------------------------------------------- */

function FeaturesBreakdown({ concept }: { concept: ExampleConcept }) {
  return (
    <Section tone="cream-deep" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">Features included</p>
        <h2 className="t-headline mt-3">
          What this concept site ships with.
        </h2>
        <p className="t-body mt-5 text-[var(--warm-ash)]">
          A real build looks like this list. Some items are part of every
          package; a few are optional add-ons.
        </p>
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:gap-4">
        {concept.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-start gap-3 rounded-xl border p-4 ${
              f.included
                ? "border-[var(--divider)] bg-[var(--paper-white)]"
                : "border-dashed border-[var(--divider)] bg-[var(--paper-white)]/60"
            }`}
          >
            <FeatureMark included={f.included} />
            <div>
              <p className="text-[0.95rem] font-medium text-[var(--ink-navy)]">
                {f.label}
              </p>
              {f.note ? (
                <p className="mt-0.5 text-[0.78rem] text-[var(--warm-ash)]">
                  {f.note}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[0.85rem] text-[var(--warm-ash)]">
        See full pricing on the{" "}
        <Link
          href="/packages"
          className="font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
        >
          packages page
        </Link>
        .
      </p>
    </Section>
  );
}

function FeatureMark({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success-emerald-soft)] text-[#047857]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2.5 6.5l2.5 2.5 4.5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--cream-deep)] text-[var(--warm-ash)]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M3 6h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* ----------------------------------------------------------
   Why it works
   ---------------------------------------------------------- */

function WhyItWorks({ concept }: { concept: ExampleConcept }) {
  return (
    <Section tone="paper" hairline="top">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div className="max-w-[480px]">
          <p className="t-label text-[var(--warm-ash)]">Why this structure</p>
          <h2 className="t-headline mt-3">{concept.whyItWorks.title}</h2>
          <p className="t-body mt-5 text-[var(--warm-ash)]">
            {concept.whyItWorks.body}
          </p>
        </div>
        <ul className="grid gap-3">
          {concept.whyItWorks.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-4 text-[0.975rem] text-[var(--ink-navy)]"
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
   Related concept walkthroughs
   ---------------------------------------------------------- */

function RelatedConceptsBlock({ currentSlug }: { currentSlug: string }) {
  const others = EXAMPLE_CONCEPTS.filter((c) => c.slug !== currentSlug);
  if (others.length === 0) return null;
  return (
    <Section tone="cream-deep" hairline="top">
      <div className="max-w-[640px]">
        <p className="t-label text-[var(--warm-ash)]">More walkthroughs</p>
        <h2 className="t-headline mt-3">
          Other industry concepts to look at.
        </h2>
      </div>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {others.map((c) => {
          const base = getBaseExample(c);
          return (
            <li key={c.slug}>
              <Link
                href={`/examples/${c.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 transition-colors duration-150 hover:border-[var(--ink-navy)]"
              >
                <span>
                  <span className="block text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--signal-blue-deep)]">
                    {c.industryLabel}
                  </span>
                  <span className="mt-1 block text-[1.05rem] font-semibold text-[var(--ink-navy)]">
                    {base?.name ?? c.industryLabel}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-[var(--warm-ash)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--ink-navy)]" />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* ----------------------------------------------------------
   Final CTA
   ---------------------------------------------------------- */

function FinalCTA({ concept }: { concept: ExampleConcept }) {
  return (
    <CTASection
      headline={`Want a site structured like this for your ${concept.industryShort === "law firms" ? "firm" : "business"}?`}
      body="Book a free 30-minute audit. We will look at your current site (or your situation) and walk through what a build like this would look like for you."
      primaryLabel="Book Free Website Audit"
      secondary={{ label: "Explore Features", href: "/features" }}
    />
  );
}
