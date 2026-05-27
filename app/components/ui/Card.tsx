import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "cream" | "navy";
  interactive?: boolean;
};

export function Card({ children, className = "", tone = "paper", interactive = false }: CardProps) {
  const toneClass = {
    paper:
      "bg-[var(--paper-white)] text-[var(--ink-navy)] border border-[var(--divider)] shadow-paper",
    cream:
      "bg-[var(--cream-deep)] text-[var(--ink-navy)] border border-[var(--cream-edge)]",
    navy: "bg-white/[0.04] text-[var(--cream-paper)] border border-white/[0.08]",
  }[tone];

  const hover = interactive
    ? "transition-shadow duration-200 hover:shadow-paper-hover"
    : "";

  return (
    <article className={`rounded-2xl p-7 sm:p-8 ${toneClass} ${hover} ${className}`}>
      {children}
    </article>
  );
}
