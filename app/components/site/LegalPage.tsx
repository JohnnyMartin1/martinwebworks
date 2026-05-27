import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

/**
 * Shared layout for /privacy, /terms, /accessibility.
 * Single column, narrow measure, generous spacing. Voice stays the same as
 * the rest of the site.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="bg-[var(--cream-paper)] pt-12 pb-10 sm:pt-16 sm:pb-12 hairline-bottom">
        <Container size="narrow">
          <p className="t-label text-[var(--warm-ash)]">{eyebrow}</p>
          <h1 className="t-display mt-4 text-[clamp(2.25rem,3vw+1rem,3.5rem)]">
            {title}
          </h1>
          <div className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-[var(--warm-ash)]">
            {intro}
          </div>
          <p className="mt-6 text-[0.78rem] text-[var(--warm-ash)]">
            Last updated: {updated}
          </p>
        </Container>
      </header>

      <article className="bg-[var(--cream-paper)] pb-24 pt-12 sm:pt-16">
        <Container size="narrow">
          <div className="space-y-12">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-[1.5rem] font-semibold tracking-[-0.012em] text-[var(--ink-navy)] sm:text-[1.75rem]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.65] text-[var(--ink-navy)]">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
