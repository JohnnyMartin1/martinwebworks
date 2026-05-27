import { BrowserFrame } from "@/app/components/mockups/BrowserFrame";
import type { IndustryMockupSettings } from "@/app/data/industries";

/**
 * Industry-specific CSS mockup. Renders inside a BrowserFrame using the
 * mockup settings from the industry data file.
 *
 * No stock photography. The whole illustration is type, color, and shape.
 */
export function IndustryMockup({ mockup }: { mockup: IndustryMockupSettings }) {
  return (
    <BrowserFrame url={mockup.domain}>
      <div className="bg-[var(--paper-white)]">
        {/* Inner nav */}
        <div className="flex items-center justify-between border-b border-[var(--divider)] px-5 py-3 text-[0.78rem]">
          <span className="font-semibold text-[var(--ink-navy)]">
            {mockup.brandLabel}
          </span>
          <ul className="hidden gap-3 sm:flex">
            {mockup.navItems.map((label) => (
              <li
                key={label}
                className="font-medium uppercase tracking-[0.12em] text-[var(--warm-ash)]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero */}
        <div className="grid gap-6 px-5 py-7 sm:grid-cols-[1.2fr_1fr] sm:gap-7">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--signal-blue-deep)]">
              Concept example
            </p>
            <h3 className="mt-2 text-[1.2rem] font-semibold leading-tight tracking-[-0.012em] text-[var(--ink-navy)]">
              {mockup.heroHeadline}
            </h3>
            <p className="mt-2 text-[0.825rem] leading-relaxed text-[var(--warm-ash)]">
              {mockup.heroSubhead}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--ink-navy)] px-3 py-1.5 text-[0.7rem] font-medium text-[var(--cream-paper)]">
                {mockup.primaryAction}
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-3 py-1.5 text-[0.7rem] font-medium text-[var(--ink-navy)]">
                {mockup.secondaryAction}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.7rem] text-[var(--warm-ash)]">
              {mockup.trustStrip.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Inline form mock */}
          <div className="rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--warm-ash)]">
              {mockup.formTitle}
            </p>
            <div className="mt-3 space-y-2">
              {mockup.formRows.map((row) => (
                <div
                  key={row}
                  className="rounded-md border border-[var(--divider)] bg-[var(--paper-white)] px-3 py-2 text-[0.75rem] text-[var(--warm-ash-soft)]"
                >
                  {row}
                </div>
              ))}
              <div className="rounded-md bg-[var(--ink-navy)] px-3 py-2 text-center text-[0.75rem] font-medium text-[var(--cream-paper)]">
                {mockup.primaryAction}
              </div>
              <p className="text-[0.65rem] leading-snug text-[var(--warm-ash-soft)]">
                {mockup.formNote}
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid gap-3 border-t border-[var(--divider)] bg-[var(--cream-deep)] px-5 py-5 sm:grid-cols-3">
          {mockup.services.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-[var(--divider)] bg-[var(--paper-white)] p-3"
            >
              <p className="text-[0.78rem] font-semibold text-[var(--ink-navy)]">
                {s.label}
              </p>
              <p className="mt-1 text-[0.7rem] leading-snug text-[var(--warm-ash)]">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
