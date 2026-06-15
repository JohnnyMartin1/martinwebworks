import { CompareSlider } from "./CompareSlider";

/**
 * Homepage "the gap" comparison: an interactive before/after of the same
 * business, dragged between a dated template and the rebuilt site. Replaces
 * the old two-column bullet-list-vs-bullet-list pattern with a single
 * draggable visual. Pure CSS panes, honestly a concept, not a real client.
 */
export function GapCompare({ className = "" }: { className?: string }) {
  return (
    <CompareSlider
      className={className}
      beforeLabel="Typical site"
      afterLabel="Rebuilt"
      before={<DatedPane />}
      after={<RebuiltPane />}
    />
  );
}

/* The dated template: cramped, beige, walls of text, no clear action. */
function DatedPane() {
  return (
    <div className="h-full overflow-hidden bg-[#ece3d0] px-5 py-5 text-[#5b5440]">
      <div className="flex items-center justify-between border-b border-[#d4c8ac] pb-2.5">
        <span className="font-serif text-[12px] font-bold uppercase tracking-wide">
          Cedar &amp; Pine Plumbing
        </span>
        <span className="hidden text-[9px] opacity-70 sm:inline">
          Home · Services · About · Gallery · Contact
        </span>
      </div>
      <p className="mt-4 max-w-[26rem] font-serif text-[12px] leading-snug">
        Welcome to our website. Family owned and operated since 1992, we are
        proud to serve the community with quality plumbing you can count on.
        Please browse our many services and learn more about our company below.
      </p>
      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-8 rounded-[2px] bg-[#d4c8ac]" />
        ))}
      </div>
      <p className="mt-4 text-[9px] opacity-60">
        Call 555-0123 (Mon to Fri, 8 to 4) · Se habla poco · Visitor #00148213
      </p>
    </div>
  );
}

/* The rebuild: dark, decisive, one action, trust on screen. */
function RebuiltPane() {
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden bg-[var(--ink-navy)] px-6 py-6 text-[var(--cream-paper)]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--success-emerald)]">
          Cedar &amp; Pine
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success-emerald)]/15 px-2.5 py-1 text-[10px] font-semibold text-[var(--success-emerald)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)]" />
          Call now
        </span>
      </div>
      <div>
        <h4 className="max-w-[20rem] text-[clamp(1.1rem,2.2vw,1.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
          Burst pipe? We answer on the first ring.
        </h4>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[var(--success-emerald)] px-3.5 py-1.5 text-[11px] font-semibold text-[var(--ink-navy)]">
            Get a free quote
          </span>
          <span className="inline-flex items-center rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-medium">
            See services
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Repairs", "Water heaters", "Drains"].map((s, i) => (
          <div
            key={s}
            className={`rounded-lg px-2.5 py-2 text-[10px] font-semibold ${
              i === 0
                ? "bg-[var(--success-emerald)]/15 text-[var(--success-emerald)]"
                : "bg-white/[0.05] text-[var(--cream-edge)]"
            }`}
          >
            <span className={`mb-1.5 block h-1 w-5 rounded-full ${i === 0 ? "bg-[var(--success-emerald)]" : "bg-white/25"}`} />
            {s}
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-[var(--cream-edge)]">
        ★★★★★ &nbsp;4.9 from 320+ Arlington homeowners · Licensed &amp; insured
      </div>
    </div>
  );
}
