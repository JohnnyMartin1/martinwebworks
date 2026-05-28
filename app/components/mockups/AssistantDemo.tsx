"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

/**
 * Interactive *scripted* AI assistant demo.
 *
 * No live AI. The flow is deterministic and labeled "Scripted demo" so no
 * visitor mistakes it for a live integration. Respects prefers-reduced-motion
 * by collapsing the typing indicator to an instant reveal.
 *
 * Each scenario follows the same shape:
 *   1. Visitor picks one of three opening prompts.
 *   2. Assistant types a contextual answer + qualifying question.
 *   3. Visitor picks a suggested follow-up.
 *   4. Assistant confirms the lead in a captured-state panel.
 *
 * Used on /ai-assistant and /features.
 */

type Bubble =
  | { kind: "them"; text: string }
  | { kind: "us"; text: string };

type ChoiceStep = {
  /** A short label shown above the choice chips. */
  cue: string;
  /** The chips the visitor can pick from. */
  choices: string[];
  /** Index into `choices` that maps to its `responses` entry. */
  // (We just iterate by index in the parent component.)
};

type Scenario = {
  id: string;
  label: string;
  business: string;
  domain: string;
  /** The three opening prompts the visitor can pick. */
  prompts: string[];
  /** Assistant's response for each prompt (1:1 with `prompts`). */
  responses: string[];
  /** The qualifying choice step shown after the first exchange. */
  qualify: ChoiceStep;
  /** Assistant's response per qualify choice (1:1 with `qualify.choices`). */
  qualifyReplies: string[];
  /** Final "lead captured" summary line. */
  lead: { name: string; contact: string; need: string; meta: string };
  /**
   * Optional scenario-specific guardrail line surfaced under the chat
   * window. Used today by the Law Firm scenario to make the limits of
   * the assistant unambiguous.
   */
  guardrail?: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "roofing",
    label: "Roofing",
    business: "Summit Ridge Roofing",
    domain: "summitridgeroofing.com",
    prompts: [
      "Do you service Arlington?",
      "Can I get a quote for roof repair?",
      "How soon can someone call me?",
    ],
    responses: [
      "Yes — Summit Ridge serves Arlington and the surrounding ZIPs every day. Roughly what kind of work are you looking at, repair or replacement?",
      "Happy to set that up. A free on-site estimate usually takes about 30 minutes. Is this for shingle, metal, or flat roofing?",
      "We have someone on the phones until 6pm ET and the on-call team handles emergency calls after that. What is the best number to reach you on?",
    ],
    qualify: {
      cue: "Pick the closest match:",
      choices: ["Repair", "Replacement", "Not sure yet"],
    },
    qualifyReplies: [
      "Got it — repair. I can have one of our team out for a free 30-minute estimate this week. Mind sharing your name and number?",
      "Understood — full replacement. Let me grab your name and the best number so an estimator can reach you with two time options.",
      "No problem. We can take a look and tell you. Share your name and best number and we will set up a free estimate.",
    ],
    lead: {
      name: "Sarah Kelly",
      contact: "(703) 555-0142",
      need: "Roof repair · Arlington, VA",
      meta: "Mornings preferred · Sent to your inbox",
    },
  },
  {
    id: "med-spa",
    label: "Med Spa",
    business: "Luma Aesthetics",
    domain: "lumaaesthetics.com",
    prompts: [
      "Do you offer Botox consultations?",
      "What does a facial usually cost?",
      "How do I book an appointment?",
    ],
    responses: [
      "Yes — complimentary 15-minute consultations with our nurse injector are available most weekdays. Are you new to Botox or have you had treatment before?",
      "Our signature facial starts at $145 and runs about 60 minutes. Are you looking for hydration, brightening, or a treatment for a specific concern?",
      "We book online or by phone. Were you looking at a specific service, or would a consultation be easier so we can recommend one?",
    ],
    qualify: {
      cue: "Pick the closest match:",
      choices: ["First-time guest", "Returning client", "Just exploring"],
    },
    qualifyReplies: [
      "Welcome — first-time guests get a 15-minute consultation included. Mind sharing your first name and a number so we can text you a couple of time options?",
      "Welcome back. Want me to pull your last appointment and text you a few openings? Share the best number to reach you.",
      "Of course — no pressure. If you share your first name and number, I can send a quick guide for new clients and a time if you ever want one.",
    ],
    lead: {
      name: "Maya Chen",
      contact: "(202) 555-0193",
      need: "Botox consultation · First visit",
      meta: "Evenings preferred · Sent to your inbox",
    },
  },
  {
    id: "law-firm",
    label: "Law Firm",
    business: "Harbor & Slate Law",
    domain: "harborslatelaw.com",
    prompts: [
      "Can I request a consultation?",
      "Do you handle contract disputes?",
      "What information should I send first?",
    ],
    responses: [
      "Yes — we offer a confidential 15-minute consultation by phone or video. To get you to the right attorney, can you tell me roughly what the matter involves?",
      "We do handle business contract matters, including disputes. I cannot give legal advice here, but I can collect the basics and route you to the right attorney for a confidential call. Is this a contract you signed, a contract you are drafting, or a dispute already underway?",
      "Mostly the basics: your name, a way to reach you, and a one- or two-sentence description of the situation. We do not need documents at this stage — those come up at the consultation.",
    ],
    qualify: {
      cue: "Pick the closest match:",
      choices: [
        "Estate planning",
        "Business or contract",
        "Not sure yet",
      ],
    },
    qualifyReplies: [
      "Got it — estate planning. The attorney who handles wills and trusts will reach out within one business day. Can you share your name and best contact?",
      "Understood — a business or contract matter. I will route this to our business attorney and have someone confirm a confidential consultation. Your name and best contact?",
      "No problem. Share your name and best contact and we will pair you with the attorney whose practice fits best after a brief intake call.",
    ],
    lead: {
      name: "David Park",
      contact: "(202) 555-0117",
      need: "Business contract · Confidential consult",
      meta: "Email preferred · Sent to your inbox",
    },
    guardrail:
      "This assistant does not provide legal advice or create an attorney-client relationship. It collects basic intake information and routes it to the firm.",
  },
];

type DemoState =
  | { stage: "open" }
  | { stage: "qualify"; promptIndex: number }
  | { stage: "captured"; promptIndex: number; qualifyIndex: number };

type AssistantDemoProps = {
  /**
   * Lock the demo to a single scenario (hides the tab strip). Used on
   * concept detail pages where the surrounding context already names the
   * industry. Falls back to the multi-scenario picker when omitted.
   */
  scenarioId?: string;
  /** Optional label for the small "scripted demo" footer note. */
  caption?: string;
};

export function AssistantDemo({ scenarioId: lockedId, caption }: AssistantDemoProps = {}) {
  const initialId = lockedId ?? SCENARIOS[0].id;
  const [scenarioId, setScenarioId] = useState<string>(initialId);
  const scenario = useMemo(
    () => SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0],
    [scenarioId],
  );
  const [state, setState] = useState<DemoState>({ stage: "open" });
  const reset = (id?: string) => {
    if (id) setScenarioId(id);
    setState({ stage: "open" });
  };
  const locked = Boolean(lockedId);

  const bubbles: Bubble[] = [];
  if (state.stage !== "open") {
    bubbles.push({ kind: "them", text: scenario.prompts[state.promptIndex] });
    bubbles.push({ kind: "us", text: scenario.responses[state.promptIndex] });
  }
  if (state.stage === "captured") {
    bubbles.push({
      kind: "them",
      text: scenario.qualify.choices[state.qualifyIndex],
    });
    bubbles.push({
      kind: "us",
      text: scenario.qualifyReplies[state.qualifyIndex],
    });
  }

  return (
    <div>
      {locked ? null : (
        <ScenarioTabs
          scenarios={SCENARIOS}
          active={scenario.id}
          onChange={(id) => reset(id)}
        />
      )}

      <div className={locked ? "" : "mt-4"}>
        <BrowserFrame url={scenario.domain}>
          <div className="bg-[var(--cream-paper)] px-5 py-6 sm:px-7 sm:py-7">
            <Header business={scenario.business} />

            <div className="mt-5 space-y-3 text-[0.92rem]">
              {bubbles.map((b, i) => (
                <BubbleRow key={`${state.stage}-${i}`} bubble={b} delay={i} />
              ))}

              {state.stage === "open" ? (
                <PromptPicker
                  cue="Pick a question to see how the assistant answers:"
                  prompts={scenario.prompts}
                  onPick={(i) =>
                    setState({ stage: "qualify", promptIndex: i })
                  }
                />
              ) : null}

              {state.stage === "qualify" ? (
                <PromptPicker
                  cue={scenario.qualify.cue}
                  prompts={scenario.qualify.choices}
                  scrollOnMount
                  onPick={(i) =>
                    setState({
                      stage: "captured",
                      promptIndex: state.promptIndex,
                      qualifyIndex: i,
                    })
                  }
                />
              ) : null}
            </div>

            {state.stage === "captured" ? (
              <LeadCaptured lead={scenario.lead} onReset={() => reset()} />
            ) : null}
          </div>
        </BrowserFrame>
      </div>

      <p className="mt-3 text-center text-[0.72rem] text-[var(--warm-ash)]">
        {caption ??
          "Scripted demo. The real assistant uses your approved business information, not generic AI replies."}
      </p>

      {scenario.guardrail ? (
        <p
          role="note"
          className="mx-auto mt-2 max-w-[42rem] rounded-md border border-dashed border-[var(--divider)] bg-[var(--cream-paper)] px-3 py-2 text-center text-[0.72rem] text-[var(--warm-ash)]"
        >
          {scenario.guardrail}
        </p>
      ) : null}
    </div>
  );
}

function ScenarioTabs({
  scenarios,
  active,
  onChange,
}: {
  scenarios: Scenario[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Demo scenarios"
      className="inline-flex rounded-full border border-[var(--divider)] bg-[var(--paper-white)] p-1"
    >
      {scenarios.map((s) => {
        const on = s.id === active;
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(s.id)}
            className={`rounded-full px-4 py-1.5 text-[0.82rem] font-medium transition-colors duration-150 ${
              on
                ? "bg-[var(--ink-navy)] text-[var(--cream-paper)]"
                : "text-[var(--ink-navy)] hover:bg-[var(--cream-deep)]"
            }`}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}

function Header({ business }: { business: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[var(--cream-paper)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect
              x="2.5"
              y="3.5"
              width="11"
              height="8"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M5.5 7h1M9.5 7h1"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M5.5 12l1 1.5h3l1-1.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="leading-tight">
          <p className="text-[0.95rem] font-semibold text-[var(--ink-navy)]">
            {business} Assistant
          </p>
          <p className="text-[11px] text-[var(--warm-ash-soft)]">
            Trained on your business · Demo
          </p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--signal-blue-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--signal-blue-deep)]">
        <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue-deep)]" />
        Scripted
      </span>
    </div>
  );
}

function BubbleRow({ bubble, delay }: { bubble: Bubble; delay: number }) {
  if (bubble.kind === "them") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-br-md border border-[var(--divider)] bg-[var(--paper-white)] px-4 py-2.5 text-[var(--ink-navy)]">
          {bubble.text}
        </div>
      </div>
    );
  }
  return <AssistantBubble text={bubble.text} delay={delay} />;
}

function AssistantBubble({ text, delay }: { text: string; delay: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Schedule the reveal through setTimeout so the state update happens in
    // a callback rather than synchronously inside the effect body. Reduced
    // motion collapses the delay to zero — still ticked through setTimeout
    // so React doesn't see a cascading render.
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const wait = reduceMotion ? 0 : 350 + delay * 50;
    const t = window.setTimeout(() => setShow(true), wait);
    return () => window.clearTimeout(t);
  }, [delay]);

  if (!show) return <TypingIndicator />;

  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-[var(--ink-navy)] px-4 py-2.5 text-[var(--cream-paper)]">
        {text}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md bg-[var(--ink-navy)] px-4 py-3 text-[var(--cream-paper)]">
        <Dot delay={0} />
        <Dot delay={150} />
        <Dot delay={300} />
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      aria-hidden
      className="block h-1.5 w-1.5 rounded-full bg-[var(--cream-paper)]/80 motion-safe:animate-pulse motion-reduce:opacity-80"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function PromptPicker({
  cue,
  prompts,
  onPick,
  scrollOnMount = false,
}: {
  cue: string;
  prompts: string[];
  onPick: (i: number) => void;
  /**
   * When true, the picker scrolls itself into view on mount. This is the
   * old default — useful on mobile after a user-initiated stage change so
   * the new choices are visible. It is intentionally OFF for the initial
   * open-stage picker because the picker mounts on page load (not after
   * a click); leaving it on caused the whole page to jump to the middle
   * on every concept detail page visit.
   */
  scrollOnMount?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollOnMount) return;
    const el = ref.current;
    if (!el) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [scrollOnMount]);
  return (
    <div ref={ref} className="pt-2">
      <p className="text-[0.78rem] font-medium text-[var(--warm-ash)]">
        {cue}
      </p>
      <ul className="mt-2 flex flex-col gap-2">
        {prompts.map((p, i) => (
          <li key={p}>
            <button
              type="button"
              onClick={() => onPick(i)}
              className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-4 py-2 text-left text-[0.88rem] text-[var(--ink-navy)] transition-colors duration-150 hover:border-[var(--ink-navy)] hover:bg-[var(--ink-navy)] hover:text-[var(--cream-paper)]"
            >
              <span>{p}</span>
              <span aria-hidden className="text-[var(--warm-ash)] group-hover:text-current">
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeadCaptured({
  lead,
  onReset,
}: {
  lead: Scenario["lead"];
  onReset: () => void;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-[#a7f3d0] bg-[var(--success-emerald-soft)] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
          Lead captured — sent to your inbox
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-[0.72rem] font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
        >
          Run again
        </button>
      </div>
      <p className="mt-1.5 text-[0.95rem] font-semibold text-[var(--ink-navy)]">
        {lead.name} · {lead.need}
      </p>
      <p className="mt-0.5 text-[0.85rem] text-[var(--warm-ash)]">
        {lead.contact} · {lead.meta}
      </p>
    </div>
  );
}
