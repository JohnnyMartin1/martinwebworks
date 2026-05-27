import type { ReactNode } from "react";

/**
 * Compact visual mockup of a lead-capture form, rendered as a static card.
 * Three flavors:
 *   - "quote": single-step service quote form
 *   - "contact": short message form
 *   - "intake": multi-step intake with progress
 *
 * Strictly visual — no inputs, no submit, no `<form>` element. Used on the
 * /features page to demonstrate what we build for clients.
 */

type Variant = "quote" | "contact" | "intake";

type Props = {
  variant?: Variant;
  business?: string;
};

export function FormMockup({ variant = "quote", business = "Summit Ridge Roofing" }: Props) {
  if (variant === "intake") return <IntakeMockup business={business} />;
  if (variant === "contact") return <ContactMockup business={business} />;
  return <QuoteMockup business={business} />;
}

function QuoteMockup({ business }: { business: string }) {
  return (
    <Shell business={business} title="Free roof inspection" subtitle="We reply within one business day.">
      <FieldRow label="Your name">Sarah Kelly</FieldRow>
      <FieldRow label="Phone">(703) 555-0142</FieldRow>
      <FieldRow label="Address">1240 Lincoln St, Arlington VA</FieldRow>
      <FieldRow label="Service needed">Roof inspection + estimate</FieldRow>
      <SubmitButton label="Request free inspection" />
      <p className="mt-2 text-center text-[0.7rem] text-[var(--warm-ash)]">
        Visual demo · no information is sent
      </p>
    </Shell>
  );
}

function ContactMockup({ business }: { business: string }) {
  return (
    <Shell business={business} title="Send us a note" subtitle="A real person reads every message.">
      <FieldRow label="Name">Maya Chen</FieldRow>
      <FieldRow label="Email">maya@example.com</FieldRow>
      <FieldRow label="Message" lines={3}>
        Looking for a consultation about Botox before my wedding in August. Are there
        evening appointments?
      </FieldRow>
      <SubmitButton label="Send message" />
    </Shell>
  );
}

function IntakeMockup({ business }: { business: string }) {
  return (
    <Shell business={business} title="New client intake" subtitle="3 of 5 · 2 minutes to finish">
      <ProgressBar value={3} max={5} />
      <FieldRow label="Practice area">Estate planning</FieldRow>
      <FieldRow label="Marital status">Married, two children</FieldRow>
      <FieldRow label="Any prior planning?">Will from 2014, never updated</FieldRow>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-[0.78rem] text-[var(--warm-ash)]">Step 3 of 5</span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 items-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] px-4 text-[0.82rem] font-medium text-[var(--ink-navy)]">
            Back
          </span>
          <span className="inline-flex h-9 items-center rounded-full bg-[var(--ink-navy)] px-4 text-[0.82rem] font-medium text-[var(--cream-paper)]">
            Continue
          </span>
        </span>
      </div>
    </Shell>
  );
}

function Shell({
  business,
  title,
  subtitle,
  children,
}: {
  business: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper">
      <div className="border-b border-[var(--divider)] bg-[var(--cream-deep)] px-5 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
          {business}
        </p>
        <p className="mt-1 text-[1rem] font-semibold text-[var(--ink-navy)]">{title}</p>
        <p className="mt-0.5 text-[0.78rem] text-[var(--warm-ash)]">{subtitle}</p>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  );
}

function FieldRow({
  label,
  children,
  lines = 1,
}: {
  label: string;
  children: ReactNode;
  lines?: number;
}) {
  return (
    <label className="mb-3 block">
      <span className="block text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[var(--warm-ash)]">
        {label}
      </span>
      <span
        className={`mt-1.5 block rounded-lg border border-[var(--divider)] bg-[var(--paper-white)] px-3 py-2.5 text-[0.85rem] text-[var(--ink-navy)] ${
          lines > 1 ? "min-h-[64px]" : ""
        }`}
      >
        {children}
      </span>
    </label>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <span className="mt-1 flex h-10 w-full items-center justify-center rounded-full bg-[var(--ink-navy)] text-[0.88rem] font-medium text-[var(--cream-paper)]">
      {label}
    </span>
  );
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="mb-4">
      <div className="h-1 w-full rounded-full bg-[var(--cream-edge)]">
        <div
          className="h-1 rounded-full bg-[var(--signal-blue-deep)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
