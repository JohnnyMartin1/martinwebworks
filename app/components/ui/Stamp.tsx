import type { ReactNode } from "react";

/**
 * The studio's "stamp": a small inline tag used sparingly per DESIGN.md's
 * One Stamp Rule. Reserved for things like a Most Popular badge, an
 * Available status, or a concept-example tag.
 *
 * Default tone uses Signal Blue; use sparingly. Pass tone="ink" to lean ink.
 */
type StampProps = {
  children: ReactNode;
  tone?: "signal" | "ink" | "cream" | "emerald" | "rose";
  className?: string;
};

const toneClass: Record<NonNullable<StampProps["tone"]>, string> = {
  signal:
    "bg-[var(--signal-blue-soft)] text-[var(--signal-blue-deep)] ring-1 ring-inset ring-[#c2cdf9]",
  ink: "bg-[var(--ink-navy)] text-[var(--cream-paper)]",
  cream:
    "bg-[var(--cream-deep)] text-[var(--ink-navy)] ring-1 ring-inset ring-[var(--cream-edge)]",
  emerald:
    "bg-[var(--success-emerald-soft)] text-[#065f46] ring-1 ring-inset ring-[#a7f3d0]",
  rose:
    "bg-[var(--alert-rose-soft)] text-[#9f1239] ring-1 ring-inset ring-[#fecdd3]",
};

export function Stamp({ children, tone = "signal", className = "" }: StampProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-[0.08em] uppercase ${toneClass[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
