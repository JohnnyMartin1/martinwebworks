import Link from "next/link";

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const color = tone === "ink" ? "text-[var(--ink-navy)]" : "text-[var(--cream-paper)]";
  return (
    <Link
      href="/"
      aria-label="Martin Web Works home"
      className={`group inline-flex items-center gap-2.5 ${color}`}
    >
      <span
        aria-hidden
        className={`inline-flex h-8 w-8 items-center justify-center rounded-[10px] ${
          tone === "ink"
            ? "bg-[var(--ink-navy)] text-[var(--cream-paper)]"
            : "bg-white/10 text-[var(--cream-paper)] ring-1 ring-inset ring-white/15"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 12V4l3 4 3-4v8M9 12V4l3 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[0.95rem] font-semibold tracking-[-0.01em]">
        Martin Web Works
      </span>
    </Link>
  );
}
