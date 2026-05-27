/**
 * Monthly care / operations mockup.
 *
 * Renders a "status board" that mirrors what a managed-care client sees
 * after launch: uptime, SSL, backups, monthly edits, performance, form
 * health. Mid-fidelity, no real metrics.
 */

export function CareOpsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
          Monthly care · May summary
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success-emerald-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#047857]">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)]" />
          All green
        </span>
      </div>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <StatusRow label="Hosting" value="Uptime 100.00%" />
        <StatusRow label="SSL" value="Auto-renewed · valid for 88 days" />
        <StatusRow label="Backups" value="4 weekly + 1 monthly · verified" />
        <StatusRow label="Performance" value="LCP 1.2s · CLS 0.01" />
        <StatusRow label="Forms" value="Quote form tested · received 14" />
        <StatusRow label="Edits handled" value="6 of 30 minutes used" />
      </ul>

      <div className="mt-5 rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
          This month
        </p>
        <ul className="mt-2 grid gap-1.5 text-[0.85rem] text-[var(--ink-navy)]">
          <li>· Updated summer hours and three service photos</li>
          <li>· Added “financing” FAQ entry</li>
          <li>· Patched WordPress and 4 plugins · no downtime</li>
          <li>· Re-tested quote form and lead routing</li>
        </ul>
      </div>
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] px-3.5 py-3">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--success-emerald-soft)] text-[#047857]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2.5 6.5l2.5 2.5 4.5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <p className="text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--warm-ash)]">
          {label}
        </p>
        <p className="mt-0.5 text-[0.92rem] text-[var(--ink-navy)]">{value}</p>
      </div>
    </li>
  );
}
