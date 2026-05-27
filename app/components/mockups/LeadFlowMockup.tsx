/**
 * Visual representation of a lead routing flow.
 *
 *   Website form  →  Validation  →  Email notification  →  CRM / inbox
 *
 * Used on /features and example-detail pages to explain how a quote
 * request ends up in the right inbox without "going to a black hole".
 */
export function LeadFlowMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 sm:p-6 shadow-paper">
      <ol className="grid gap-3 sm:grid-cols-4">
        <FlowStep
          n="01"
          label="Visitor"
          title="Submits quote form"
          body="Mobile-first, 3–6 fields, no friction."
        />
        <FlowStep
          n="02"
          label="Validate"
          title="Spam + honeypot"
          body="Bots filtered before they reach you."
        />
        <FlowStep
          n="03"
          label="Notify"
          title="Email to your inbox"
          body="Lead summary in plain text, in seconds."
        />
        <FlowStep
          n="04"
          label="Route"
          title="CRM or team handoff"
          body="Optional: forward to a CRM or a teammate."
          accent
        />
      </ol>
      <div className="mt-5 grid gap-2 rounded-xl border border-[var(--success-emerald)]/30 bg-[var(--success-emerald-soft)] p-4 sm:grid-cols-[auto_1fr]">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--success-emerald)] text-white">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 5l5 4 5-4M3 5v6h10V5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
            New lead — sample inbox preview
          </p>
          <p className="mt-1 text-[0.92rem] font-semibold text-[var(--ink-navy)]">
            Sarah Kelly · Roof inspection · 1240 Lincoln St, Arlington VA
          </p>
          <p className="mt-0.5 text-[0.78rem] text-[var(--warm-ash)]">
            (703) 555-0142 · Submitted 2 minutes ago · Source: quote form
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  n,
  label,
  title,
  body,
  accent = false,
}: {
  n: string;
  label: string;
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <li
      className={`flex flex-col gap-2 rounded-xl border p-4 ${
        accent
          ? "border-[var(--ink-navy)] bg-[var(--ink-navy)] text-[var(--cream-paper)]"
          : "border-[var(--divider)] bg-[var(--cream-paper)]"
      }`}
    >
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[0.72rem] font-mono ${
          accent
            ? "bg-[var(--cream-paper)] text-[var(--ink-navy)]"
            : "bg-[var(--ink-navy)] text-[var(--cream-paper)]"
        }`}
      >
        {n}
      </span>
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
          accent ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
        }`}
      >
        {label}
      </p>
      <p className={`text-[0.95rem] font-semibold ${accent ? "" : "text-[var(--ink-navy)]"}`}>
        {title}
      </p>
      <p
        className={`text-[0.8rem] leading-snug ${
          accent ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
        }`}
      >
        {body}
      </p>
    </li>
  );
}
