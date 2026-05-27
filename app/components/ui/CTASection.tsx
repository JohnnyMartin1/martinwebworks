import { Button, ArrowRight } from "./Button";
import { Section } from "./Section";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SITE } from "@/app/data/site";

type CTASectionProps = {
  /** Heading shown in large display type on the navy band. */
  headline?: string;
  /** Supporting paragraph. */
  body?: string;
  /** Label for the primary CTA. Defaults to "Book Free Website Audit." */
  primaryLabel?: string;
  /** Override the secondary CTA. Defaults to the team@... mailto. */
  secondary?: { label: string; href: string; external?: boolean };
  /** Tone of the CTA section. Default: navy. The Final-CTA always uses navy. */
  tone?: "navy" | "cream-deep";
};

export function CTASection({
  headline = "One free audit. One honest conversation.",
  body = "We will review your current site (or your situation if you do not have one), tell you what is working, what is not, and what we would do. No pitch.",
  primaryLabel = "Book Free Website Audit",
  secondary = { label: `Email ${SITE.email}`, href: `mailto:${SITE.email}` },
  tone = "navy",
}: CTASectionProps) {
  const onDark = tone === "navy";
  return (
    <Section tone={onDark ? "navy" : "cream-deep"} containerSize="default" className="!py-20 sm:!py-24">
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-[640px]">
          <h2 className={`t-headline ${onDark ? "text-[var(--cream-paper)]" : ""}`}>{headline}</h2>
          {body ? (
            <p className={`t-body mt-5 ${onDark ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"}`}>
              {body}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <Button
            href={BOOK_AUDIT_HREF}
            external={BOOK_AUDIT_IS_EXTERNAL}
            size="lg"
            variant={onDark ? "primary-on-dark" : "primary"}
            data-cta="book_audit_section"
          >
            {primaryLabel}
            <ArrowRight />
          </Button>
          <Button
            href={secondary.href}
            external={secondary.external}
            size="lg"
            variant={onDark ? "secondary-on-dark" : "secondary"}
            data-cta={
              secondary.href.startsWith("mailto:")
                ? "email_section"
                : secondary.href.startsWith("tel:")
                  ? "phone_section"
                  : "secondary_section"
            }
          >
            {secondary.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
