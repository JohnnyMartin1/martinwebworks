import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { CTASection } from "@/app/components/ui/CTASection";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { FaqAccordion } from "@/app/components/features/FaqAccordion";
import { FaqJsonLd } from "@/app/components/seo/JsonLd";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";
import { FAQS } from "@/app/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Martin Web Works pricing, packages, process, ownership, monthly care, lead generation, and the AI assistant add-on.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Martin Web Works FAQ",
    description:
      "Pricing, packages, process, ownership, monthly care, lead generation, and the AI assistant.",
    url: "/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ JSON-LD reflects the FAQs that are visible to the user on this
          page. The accordion renders every FAQ; the schema mirrors all of them. */}
      <FaqJsonLd
        items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <PageHero
        eyebrow="FAQ"
        headline="Answers to common questions before we talk."
        lead="If your question is not here, email us or book an audit. We will give you a clear answer."
        actions={
          <>
            <Button href={BOOK_AUDIT_HREF} external={BOOK_AUDIT_IS_EXTERNAL} size="lg">
              Book Free Website Audit
              <ArrowRight />
            </Button>
            <Button href="/packages" variant="secondary" size="lg">
              View Packages
            </Button>
          </>
        }
      />

      <Section tone="cream-deep" hairline="bottom">
        <FaqAccordion groupByCategory />
      </Section>

      <CTASection
        headline="Still have a question?"
        body="Book a free audit and ask anything. If you would rather email, that works too."
        primaryLabel="Book Free Website Audit"
      />
    </>
  );
}
