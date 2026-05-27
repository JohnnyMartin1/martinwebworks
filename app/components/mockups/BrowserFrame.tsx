import type { ReactNode } from "react";

type BrowserFrameProps = {
  url?: string;
  children: ReactNode;
  /** Override the surrounding chrome tone. */
  tone?: "paper" | "ink";
  className?: string;
};

export function BrowserFrame({
  url = "yourbusiness.com",
  children,
  tone = "paper",
  className = "",
}: BrowserFrameProps) {
  const onDark = tone === "ink";
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        onDark
          ? "border-white/10 bg-[var(--ink-navy-deep)]"
          : "border-[var(--divider)] bg-[var(--paper-white)]"
      } shadow-paper ${className}`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 border-b ${
          onDark ? "border-white/10 bg-[var(--ink-navy)]" : "border-[var(--divider)] bg-[var(--cream-deep)]"
        }`}
      >
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e26b6b]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e6c14a]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6ec46b]" aria-hidden />
        </span>
        <span
          className={`mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] ${
            onDark
              ? "bg-white/5 text-[var(--cream-edge)]"
              : "bg-[var(--paper-white)] text-[var(--warm-ash)] border border-[var(--divider)]"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <rect x="2" y="4.5" width="6" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.1" />
            <path d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          {url}
        </span>
        <span className="hidden sm:inline-block h-4 w-4 rounded-full border border-current opacity-40" aria-hidden />
      </div>
      <div className={onDark ? "text-[var(--cream-paper)]" : "text-[var(--ink-navy)]"}>
        {children}
      </div>
    </div>
  );
}
