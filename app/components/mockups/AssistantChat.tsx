import type { ReactNode } from "react";
import { BrowserFrame } from "./BrowserFrame";

/**
 * A realistic lead-capture exchange between a visitor and the AI Lead Assistant.
 * Ends with a "Lead captured" confirmation pill, so the visual carries the
 * studio's whole pitch: it doesn't chat for fun, it captures leads.
 */
export function AssistantChat({ domain = "yourbusiness.com" }: { domain?: string }) {
  return (
    <BrowserFrame url={domain}>
      <div className="bg-[var(--cream-paper)] px-5 py-6 sm:px-7 sm:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[var(--cream-paper)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.5" y="3.5" width="11" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M5.5 7h1M9.5 7h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M5.5 12l1 1.5h3l1-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-[0.95rem] font-semibold text-[var(--ink-navy)]">Summit Ridge Assistant</p>
              <p className="text-[11px] text-[var(--warm-ash-soft)]">Trained on your business · Online</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success-emerald-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#047857]">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)]" />
            Live
          </span>
        </div>

        <div className="mt-6 space-y-3 text-[0.92rem]">
          <Bubble side="them">Do you replace flat roofs in Arlington?</Bubble>
          <Bubble side="us">
            Yes, Summit Ridge replaces flat, metal, and shingle roofs throughout Arlington and nearby ZIPs. Roughly how old is your current roof?
          </Bubble>
          <Bubble side="them">About 22 years. Some leaking in the back room.</Bubble>
          <Bubble side="us">
            That sounds like a replacement situation rather than a patch. I can have one of the team call you with a free estimate. Mind sharing your name and the best number?
          </Bubble>
          <Bubble side="them">Sarah K. — 703-555-0142, mornings are best.</Bubble>
          <Bubble side="us">
            Thanks Sarah. I have everything we need. Someone will reach out before noon tomorrow.
          </Bubble>
        </div>

        <div className="mt-6 rounded-2xl border border-[#a7f3d0] bg-[var(--success-emerald-soft)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#047857]">Lead captured</p>
          <p className="mt-1.5 text-[0.95rem] font-semibold text-[var(--ink-navy)]">
            Sarah K. · Roof replacement · 703-555-0142
          </p>
          <p className="mt-1 text-[0.8rem] text-[var(--warm-ash)]">
            Sent to your inbox · Arlington, VA · Mornings preferred
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

function Bubble({ side, children }: { side: "us" | "them"; children: ReactNode }) {
  if (side === "us") {
    return (
      <div className="flex justify-start">
        <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-[var(--ink-navy)] px-4 py-2.5 text-[var(--cream-paper)]">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-br-md border border-[var(--divider)] bg-[var(--paper-white)] px-4 py-2.5 text-[var(--ink-navy)]">
        {children}
      </div>
    </div>
  );
}
