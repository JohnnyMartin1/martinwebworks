import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "cream" | "cream-deep" | "navy";

type SectionProps = {
  id?: string;
  tone?: Tone;
  hairline?: "top" | "bottom" | "both" | "none";
  className?: string;
  containerSize?: "narrow" | "default" | "wide";
  children: ReactNode;
};

const toneClass: Record<Tone, string> = {
  paper: "bg-[var(--cream-paper)] text-[var(--ink-navy)]",
  cream: "bg-[var(--cream-paper)] text-[var(--ink-navy)]",
  "cream-deep": "bg-[var(--cream-deep)] text-[var(--ink-navy)]",
  navy: "drench-navy",
};

const hairlineClass = {
  top: "hairline-top",
  bottom: "hairline-bottom",
  both: "hairline-top hairline-bottom",
  none: "",
};

export function Section({
  id,
  tone = "cream",
  hairline = "none",
  className = "",
  containerSize = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${hairlineClass[hairline]} py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
