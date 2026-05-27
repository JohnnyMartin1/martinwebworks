import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  /** Tiny label above the headline. Use sparingly per The Quiet Eyebrow Rule. */
  eyebrow?: string;
  /** The page Display headline. One per page. */
  headline: string;
  /** A single lead paragraph below the headline. */
  lead?: ReactNode;
  /** Optional right-side visual (or below on mobile). */
  visual?: ReactNode;
  /** Optional CTAs below the lead. */
  actions?: ReactNode;
  /** Optional supporting note (e.g. price hint), placed under the actions. */
  footnote?: ReactNode;
  tone?: "paper" | "cream-deep" | "navy";
  align?: "left" | "center";
};

const toneClass = {
  paper: "bg-[var(--cream-paper)] text-[var(--ink-navy)]",
  "cream-deep": "bg-[var(--cream-deep)] text-[var(--ink-navy)]",
  navy: "drench-navy",
};

export function PageHero({
  eyebrow,
  headline,
  lead,
  visual,
  actions,
  footnote,
  tone = "paper",
  align = "left",
}: PageHeroProps) {
  const isCenter = align === "center" && !visual;
  const onDark = tone === "navy";

  return (
    <header className={`${toneClass[tone]} pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-24 hairline-bottom`}>
      <Container>
        <div
          className={`grid gap-10 ${visual ? "lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-end" : ""} ${
            isCenter ? "text-center" : ""
          }`}
        >
          <div className={isCenter ? "mx-auto" : "max-w-[720px]"}>
            {eyebrow ? (
              <p
                className={`t-label mb-5 ${onDark ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"}`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h1 className={`t-display ${onDark ? "text-[var(--cream-paper)]" : ""}`}>{headline}</h1>
            {lead ? (
              <p className={`t-lead mt-6 ${onDark ? "text-[var(--cream-edge)]" : ""}`}>{lead}</p>
            ) : null}
            {actions ? (
              <div className={`mt-8 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}>
                {actions}
              </div>
            ) : null}
            {footnote ? (
              <div className={`mt-6 ${onDark ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"} text-sm`}>
                {footnote}
              </div>
            ) : null}
          </div>
          {visual ? <div className="lg:justify-self-end">{visual}</div> : null}
        </div>
      </Container>
    </header>
  );
}
