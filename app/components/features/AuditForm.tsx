"use client";

import { useState, useRef, useEffect } from "react";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { CheckIcon } from "@/app/components/ui/Icons";
import { SITE } from "@/app/data/site";
import { trackEvent } from "@/app/lib/analytics";

type FormState = {
  name: string;
  businessName: string;
  websiteUrl: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  /** Honeypot. Hidden from real users; bots auto-fill it. */
  company_website: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const INITIAL: FormState = {
  name: "",
  businessName: "",
  websiteUrl: "",
  email: "",
  phone: "",
  interest: "Not sure yet",
  message: "",
  company_website: "",
};

const INTERESTS = [
  "Not sure yet",
  "Audit of my current website",
  "Starter Website ($1,995+)",
  "Growth Website ($3,995+)",
  "Authority Website ($6,995+)",
  "Monthly Care plan",
  "AI Lead Assistant",
  "Just have a few questions",
];

const AUDIT_INCLUDES = [
  "A live walk-through of your existing site (or your situation if you don't have one)",
  "What is helping and what is hurting your calls and quote requests",
  "A clear next-step recommendation (which might be: do nothing right now)",
  "Plain answers, no sales pitch, no upsell",
];

type FieldErrors = Partial<Record<keyof FormState | "_form", string>>;

export function AuditForm({
  variant = "stacked",
}: {
  /** stacked: heading above the form. compact: form only. */
  variant?: "stacked" | "compact";
}) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setErrors({});
    setFormError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let payload:
        | {
            ok?: boolean;
            errors?: FieldErrors;
            error?: string;
            deliveryPending?: boolean;
            confirmationSent?: boolean;
          }
        | null = null;
      try {
        payload = await res.json();
      } catch {
        // non-JSON body; leave payload null
      }

      if (res.ok && payload?.ok) {
        setConfirmationSent(Boolean(payload.confirmationSent));
        setStatus("success");
        trackEvent("audit_form_success", {
          interest: form.interest,
          confirmation_sent: Boolean(payload.confirmationSent),
        });
        return;
      }

      if (res.status === 400 && payload?.errors) {
        setErrors(payload.errors);
        setFormError(
          payload.errors._form ||
            "Please fix the highlighted fields and try again.",
        );
        setStatus("error");
        trackEvent("audit_form_error", { reason: "validation" });
        return;
      }

      if (res.status === 429) {
        setFormError(
          payload?.error ||
            "Too many requests. Please email us at team@martinwebworks.com.",
        );
        setStatus("error");
        trackEvent("audit_form_error", { reason: "rate_limit" });
        return;
      }

      setFormError(
        payload?.error ||
          "Something went wrong on our end. Please email us at team@martinwebworks.com.",
      );
      setStatus("error");
      trackEvent("audit_form_error", { reason: "server" });
    } catch {
      setFormError(
        "Could not reach the server. Please check your connection or email us at team@martinwebworks.com.",
      );
      setStatus("error");
      trackEvent("audit_form_error", { reason: "network" });
    }
  }

  const submitting = status === "submitting";

  return (
    <div className={`grid gap-10 ${variant === "stacked" ? "lg:grid-cols-[1fr_1.1fr] lg:items-start" : ""}`}>
      {variant === "stacked" ? (
        <div className="max-w-md">
          <h2 className="t-headline">Book your free website audit.</h2>
          <p className="t-body mt-4 text-[var(--warm-ash)]">
            Tell us a little about your business. We will reply within one business day to schedule a 30-minute conversation.
          </p>
          <ul className="mt-7 space-y-3 text-[0.95rem]">
            {AUDIT_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[var(--ink-navy)]">
                <CheckIcon className="mt-1 text-[var(--signal-blue)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm text-[var(--warm-ash)]">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 sm:p-8 shadow-paper">
        {status === "success" ? (
          <div
            ref={successRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="rounded-2xl bg-[var(--success-emerald-soft)] p-6 text-[var(--ink-navy)]"
          >
            <p className="t-label text-[#065f46]">Request received</p>
            <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.015em]">
              {confirmationSent
                ? "Thanks. We received your request and sent a confirmation email."
                : "Thanks. We received your request."}
            </h3>
            <p className="mt-3 text-[0.95rem] text-[var(--ink-navy)]/80">
              We&apos;ll be in touch within one business day. In the meantime, feel free to email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>
              {" "}with anything else we should know.
            </p>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
            {/* Honeypot: hidden from real users, bots auto-fill it. */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor="audit-company-website">
                Company website (leave blank)
              </label>
              <input
                id="audit-company-website"
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={form.company_website}
                onChange={(e) => set("company_website", e.target.value)}
              />
            </div>

            <Field
              label="Name"
              id="audit-name"
              required
              value={form.name}
              onChange={(v) => set("name", v)}
              autoComplete="name"
              disabled={submitting}
              error={errors.name}
            />
            <Field
              label="Business name"
              id="audit-business"
              required
              value={form.businessName}
              onChange={(v) => set("businessName", v)}
              autoComplete="organization"
              disabled={submitting}
              error={errors.businessName}
            />
            <Field
              label="Your website (if you have one)"
              id="audit-website"
              type="url"
              placeholder="https://yourbusiness.com"
              value={form.websiteUrl}
              onChange={(v) => set("websiteUrl", v)}
              autoComplete="url"
              disabled={submitting}
              error={errors.websiteUrl}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                id="audit-email"
                type="email"
                required
                value={form.email}
                onChange={(v) => set("email", v)}
                autoComplete="email"
                disabled={submitting}
                error={errors.email}
              />
              <Field
                label="Phone"
                id="audit-phone"
                type="tel"
                value={form.phone}
                onChange={(v) => set("phone", v)}
                autoComplete="tel"
                disabled={submitting}
                error={errors.phone}
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="audit-interest"
                className="text-[0.875rem] font-medium text-[var(--warm-ash)]"
              >
                What are you most interested in?
              </label>
              <div className="relative">
                <select
                  id="audit-interest"
                  value={form.interest}
                  onChange={(e) => set("interest", e.target.value)}
                  disabled={submitting}
                  className="w-full appearance-none rounded-[10px] border border-[var(--divider)] bg-[var(--paper-white)] px-3.5 py-3 pr-10 text-[1rem] text-[var(--ink-navy)] focus:border-[var(--signal-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--signal-blue-soft)] disabled:opacity-60"
                >
                  {INTERESTS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--warm-ash)]"
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="audit-notes"
                className="text-[0.875rem] font-medium text-[var(--warm-ash)]"
              >
                Anything we should know? (Optional)
              </label>
              <textarea
                id="audit-notes"
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                disabled={submitting}
                placeholder="Service area, what you currently use, what you wish was different…"
                className="w-full rounded-[10px] border border-[var(--divider)] bg-[var(--paper-white)] px-3.5 py-3 text-[1rem] text-[var(--ink-navy)] placeholder:text-[var(--warm-ash-soft)] focus:border-[var(--signal-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--signal-blue-soft)] disabled:opacity-60"
              />
              {errors.message ? (
                <p className="text-[0.85rem] text-[var(--alert-rose)]">{errors.message}</p>
              ) : null}
            </div>

            {formError ? (
              <div
                ref={errorRef}
                tabIndex={-1}
                role="alert"
                aria-live="assertive"
                className="rounded-[10px] border border-[var(--alert-rose)]/30 bg-[var(--alert-rose-soft)] px-4 py-3 text-[0.9rem] text-[var(--ink-navy)]"
              >
                {formError}{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium underline decoration-[var(--signal-blue)] underline-offset-4"
                >
                  {SITE.email}
                </a>
              </div>
            ) : null}

            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="mt-2 w-full"
              disabled={submitting}
              aria-busy={submitting || undefined}
            >
              {submitting ? "Sending…" : "Book My Free Website Audit"}
              {submitting ? null : <ArrowRight />}
            </Button>
            <p className="text-xs text-[var(--warm-ash)]">
              No newsletter. No autoresponders. A real reply from a real person within one business day.
              {" "}Prefer email? Write to{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: "text" | "email" | "tel" | "url";
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  error?: string;
};

function Field({
  label,
  id,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled,
  error,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[0.875rem] font-medium text-[var(--warm-ash)]">
        {label}
        {required ? <span aria-hidden className="ml-1 text-[var(--alert-rose)]">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-[10px] border bg-[var(--paper-white)] px-3.5 py-3 text-[1rem] text-[var(--ink-navy)] placeholder:text-[var(--warm-ash-soft)] focus:outline-none focus:ring-4 focus:ring-[var(--signal-blue-soft)] disabled:opacity-60 ${
          error
            ? "border-[var(--alert-rose)] focus:border-[var(--alert-rose)]"
            : "border-[var(--divider)] focus:border-[var(--signal-blue)]"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="text-[0.85rem] text-[var(--alert-rose)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
