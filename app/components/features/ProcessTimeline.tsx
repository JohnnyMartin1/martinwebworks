import { PROCESS_STEPS } from "@/app/data/process";

export function ProcessTimeline() {
  return (
    <ol className="relative">
      <span
        aria-hidden
        className="absolute left-[14px] top-2 bottom-2 w-px bg-[var(--divider)] md:left-[26px]"
      />
      {PROCESS_STEPS.map((step) => (
        <li key={step.step} className="relative pl-12 md:pl-20 pb-10 last:pb-0">
          <span
            aria-hidden
            className="absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.7rem] font-medium text-[var(--cream-paper)] md:left-3 md:h-10 md:w-10 md:text-sm"
          >
            {step.step}
          </span>
          <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-start">
            <div>
              <p className="t-caption text-[var(--warm-ash)]">{step.durationLabel}</p>
              <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.015em] leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 t-body text-[var(--warm-ash)]">{step.body}</p>
            </div>
            <ul className="space-y-2.5 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 text-[0.95rem]">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5 text-[var(--ink-navy)]">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal-blue)]"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
