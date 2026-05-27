"use client";

import { useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

/**
 * Interactive 3-step booking widget mockup.
 *
 * This is a *visual demonstration* of a calendar booking flow a local
 * business could add to their own site (Cal.com, Calendly, etc. style).
 * It does not POST anywhere, does not require SCHEDULING_URL, and never
 * routes the visitor away from the page. Used on /features and
 * /ai-assistant to show what the studio can build.
 *
 * Stages: select service → pick time → contact details → confirmation.
 */

type Service = {
  id: string;
  label: string;
  duration: string;
  meta: string;
};

type Slot = { id: string; label: string };
type Day = { id: string; weekday: string; date: string; slots: Slot[] };

type Props = {
  business?: string;
  domain?: string;
  services?: Service[];
  days?: Day[];
};

const DEFAULT_SERVICES: Service[] = [
  { id: "estimate", label: "Free on-site estimate", duration: "30 min", meta: "In-person · Free" },
  { id: "consult", label: "Project consultation", duration: "45 min", meta: "Video or phone · Free" },
  { id: "emergency", label: "Same-day service call", duration: "60 min", meta: "On-site · From $129" },
];

const DEFAULT_DAYS: Day[] = [
  {
    id: "mon",
    weekday: "Mon",
    date: "Jun 2",
    slots: [
      { id: "mon-9", label: "9:00a" },
      { id: "mon-11", label: "11:00a" },
      { id: "mon-2", label: "2:00p" },
    ],
  },
  {
    id: "tue",
    weekday: "Tue",
    date: "Jun 3",
    slots: [
      { id: "tue-9", label: "9:00a" },
      { id: "tue-1030", label: "10:30a" },
      { id: "tue-130", label: "1:30p" },
      { id: "tue-4", label: "4:00p" },
    ],
  },
  {
    id: "wed",
    weekday: "Wed",
    date: "Jun 4",
    slots: [
      { id: "wed-10", label: "10:00a" },
      { id: "wed-3", label: "3:00p" },
    ],
  },
  {
    id: "thu",
    weekday: "Thu",
    date: "Jun 5",
    slots: [
      { id: "thu-9", label: "9:00a" },
      { id: "thu-1130", label: "11:30a" },
      { id: "thu-2", label: "2:00p" },
    ],
  },
];

type Stage = "service" | "time" | "details" | "confirm";

export function BookingMockup({
  business = "Summit Ridge Roofing",
  domain = "summitridgeroofing.com",
  services = DEFAULT_SERVICES,
  days = DEFAULT_DAYS,
}: Props) {
  const [stage, setStage] = useState<Stage>("service");
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [slotKey, setSlotKey] = useState<{ day: string; slot: string } | null>(null);

  const service = services.find((s) => s.id === serviceId) ?? null;
  const day = days.find((d) => d.id === slotKey?.day);
  const slot = day?.slots.find((s) => s.id === slotKey?.slot);

  const reset = () => {
    setStage("service");
    setServiceId(null);
    setSlotKey(null);
  };

  return (
    <BrowserFrame url={domain}>
      <div className="bg-[var(--cream-paper)] px-5 py-6 sm:px-7 sm:py-7">
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-[0.95rem] font-semibold text-[var(--ink-navy)]">
              Book with {business}
            </p>
            <p className="text-[11px] text-[var(--warm-ash-soft)]">
              Demo widget · works with Cal.com, Calendly, or similar
            </p>
          </div>
          <StageBadge stage={stage} />
        </div>

        <Stepper stage={stage} />

        <div className="mt-5">
          {stage === "service" ? (
            <ServiceStep
              services={services}
              selected={serviceId}
              onSelect={(id) => {
                setServiceId(id);
                setStage("time");
              }}
            />
          ) : null}

          {stage === "time" ? (
            <TimeStep
              days={days}
              selected={slotKey}
              onSelect={(day, slot) => {
                setSlotKey({ day, slot });
                setStage("details");
              }}
              onBack={() => setStage("service")}
            />
          ) : null}

          {stage === "details" ? (
            <DetailsStep
              service={service}
              day={day ?? null}
              slot={slot ?? null}
              onConfirm={() => setStage("confirm")}
              onBack={() => setStage("time")}
            />
          ) : null}

          {stage === "confirm" ? (
            <ConfirmStep
              service={service}
              day={day ?? null}
              slot={slot ?? null}
              onReset={reset}
            />
          ) : null}
        </div>
      </div>
    </BrowserFrame>
  );
}

function Stepper({ stage }: { stage: Stage }) {
  const order: Stage[] = ["service", "time", "details", "confirm"];
  const i = order.indexOf(stage);
  const pct = ((i + 1) / order.length) * 100;
  return (
    <div className="mt-4">
      <div className="h-1 w-full rounded-full bg-[var(--cream-edge)]">
        <div
          className="h-1 rounded-full bg-[var(--signal-blue-deep)] transition-[width] duration-300 ease-out motion-reduce:transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 grid grid-cols-4 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--warm-ash)]">
        <span className={i >= 0 ? "text-[var(--ink-navy)]" : ""}>Service</span>
        <span className={i >= 1 ? "text-[var(--ink-navy)]" : ""}>Time</span>
        <span className={i >= 2 ? "text-[var(--ink-navy)]" : ""}>Details</span>
        <span className={i >= 3 ? "text-[var(--ink-navy)]" : ""}>Done</span>
      </div>
    </div>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  if (stage === "confirm") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success-emerald-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#047857]">
        <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success-emerald)]" />
        Booked
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--signal-blue-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--signal-blue-deep)]">
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal-blue-deep)]" />
      Demo
    </span>
  );
}

function ServiceStep({
  services,
  selected,
  onSelect,
}: {
  services: Service[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="grid gap-2.5">
      {services.map((s) => {
        const active = selected === s.id;
        return (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onSelect(s.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-150 ${
                active
                  ? "border-[var(--ink-navy)] bg-[var(--ink-navy)] text-[var(--cream-paper)]"
                  : "border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)] hover:border-[var(--ink-navy)]"
              }`}
            >
              <span>
                <span className="block text-[0.95rem] font-semibold">{s.label}</span>
                <span
                  className={`mt-0.5 block text-[0.78rem] ${
                    active ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
                  }`}
                >
                  {s.duration} · {s.meta}
                </span>
              </span>
              <ChevronRight />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function TimeStep({
  days,
  selected,
  onSelect,
  onBack,
}: {
  days: Day[];
  selected: { day: string; slot: string } | null;
  onSelect: (day: string, slot: string) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <BackRow onBack={onBack} label="Back to service" />
      <div className="grid gap-3 sm:grid-cols-4">
        {days.map((d) => (
          <div key={d.id}>
            <div className="text-[0.78rem] font-medium text-[var(--ink-navy)]">
              {d.weekday}
            </div>
            <div className="text-[0.7rem] text-[var(--warm-ash)]">{d.date}</div>
            <ul className="mt-2 space-y-1.5">
              {d.slots.map((slot) => {
                const active =
                  selected?.day === d.id && selected.slot === slot.id;
                return (
                  <li key={slot.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(d.id, slot.id)}
                      className={`block w-full rounded-lg px-2.5 py-1.5 text-center text-[0.78rem] font-medium transition-colors duration-150 ${
                        active
                          ? "bg-[var(--ink-navy)] text-[var(--cream-paper)]"
                          : "border border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)] hover:border-[var(--ink-navy)]"
                      }`}
                    >
                      {slot.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailsStep({
  service,
  day,
  slot,
  onConfirm,
  onBack,
}: {
  service: Service | null;
  day: Day | null;
  slot: Slot | null;
  onConfirm: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <BackRow onBack={onBack} label="Back to time" />
      <div className="rounded-xl border border-[var(--divider)] bg-[var(--paper-white)] p-4">
        <p className="text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--warm-ash)]">
          Selected
        </p>
        <p className="mt-1.5 text-[0.95rem] font-semibold text-[var(--ink-navy)]">
          {service?.label}
        </p>
        <p className="mt-0.5 text-[0.85rem] text-[var(--warm-ash)]">
          {day?.weekday} {day?.date} · {slot?.label} · {service?.duration}
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        <DemoInput label="Name" placeholder="Sarah Kelly" />
        <div className="grid gap-3 sm:grid-cols-2">
          <DemoInput label="Phone" placeholder="(703) 555-0142" />
          <DemoInput label="Email" placeholder="sarah@example.com" />
        </div>
        <DemoInput
          label="Address (for on-site visit)"
          placeholder="1240 Lincoln St, Arlington VA"
        />
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--ink-navy)] px-5 text-[0.95rem] font-medium text-[var(--cream-paper)] shadow-cta hover:bg-[var(--ink-navy-deep)]"
      >
        Confirm booking
        <ChevronRight />
      </button>
      <p className="mt-2 text-center text-[0.72rem] text-[var(--warm-ash)]">
        Demo widget. No information is sent.
      </p>
    </div>
  );
}

function ConfirmStep({
  service,
  day,
  slot,
  onReset,
}: {
  service: Service | null;
  day: Day | null;
  slot: Slot | null;
  onReset: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#a7f3d0] bg-[var(--success-emerald-soft)] p-5">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--success-emerald)] text-white">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M5 10.5l3 3 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="leading-tight">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
            Booked
          </p>
          <p className="text-[1rem] font-semibold text-[var(--ink-navy)]">
            You&apos;re on the calendar.
          </p>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-[0.85rem]">
        <ConfirmRow label="Service" value={service?.label ?? ""} />
        <ConfirmRow
          label="When"
          value={`${day?.weekday ?? ""} ${day?.date ?? ""} · ${slot?.label ?? ""}`}
        />
        <ConfirmRow label="Confirmation" value="Sent to sarah@example.com" />
      </dl>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[var(--ink-navy)] underline-offset-4 hover:underline"
      >
        Run demo again
      </button>
    </div>
  );
}

function ConfirmRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] items-baseline gap-3">
      <dt className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        {label}
      </dt>
      <dd className="text-[var(--ink-navy)]">{value}</dd>
    </div>
  );
}

function DemoInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="block text-[0.78rem] font-medium text-[var(--warm-ash)]">
        {label}
      </span>
      <span className="mt-1.5 block rounded-lg border border-[var(--divider)] bg-[var(--paper-white)] px-3 py-2.5 text-[0.85rem] text-[var(--warm-ash-soft)]">
        {placeholder}
      </span>
    </label>
  );
}

function BackRow({ onBack, label }: { onBack: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="mb-3 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[var(--warm-ash)] hover:text-[var(--ink-navy)]"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M7 3L4 6l3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </button>
  );
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M5 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
