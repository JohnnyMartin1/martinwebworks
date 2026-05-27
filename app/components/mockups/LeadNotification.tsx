import type { ReactNode } from "react";

type Tone = "lead" | "uptime" | "update";

type LeadNotificationProps = {
  tone?: Tone;
  label: string;
  title: string;
  time: string;
  className?: string;
};

const toneStyles: Record<
  Tone,
  { iconBg: string; iconColor: string; label: string; icon: ReactNode }
> = {
  lead: {
    iconBg: "bg-[var(--success-emerald-soft)]",
    iconColor: "text-[#047857]",
    label: "text-[#047857]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M3 6.5a3.5 3.5 0 117 0v2l1 1.5H2l1-1.5v-2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M5.5 12a2 2 0 003 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  uptime: {
    iconBg: "bg-[var(--signal-blue-soft)]",
    iconColor: "text-[var(--signal-blue-deep)]",
    label: "text-[var(--signal-blue-deep)]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 2l5 1.5v3.7c0 3-2 4.9-5 5.8-3-.9-5-2.8-5-5.8V3.5L8 2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 8l1.7 1.7L11 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  update: {
    iconBg: "bg-[var(--cream-edge)]",
    iconColor: "text-[var(--ink-navy)]",
    label: "text-[var(--ink-navy)]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M11 4l-7 7M11 4H7m4 0v4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

export function LeadNotification({
  tone = "lead",
  label,
  title,
  time,
  className = "",
}: LeadNotificationProps) {
  const t = toneStyles[tone];
  return (
    <aside
      className={`flex items-start gap-3 w-[224px] rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-3.5 shadow-[0_1px_0_rgba(11,27,51,0.04),0_18px_36px_-16px_rgba(11,27,51,0.16)] ${className}`}
    >
      <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${t.iconBg} ${t.iconColor}`}>
        {t.icon}
      </span>
      <div className="leading-tight">
        <p className={`text-[10px] font-semibold tracking-[0.1em] uppercase ${t.label}`}>{label}</p>
        <p className="mt-0.5 text-[13px] font-semibold text-[var(--ink-navy)]">{title}</p>
        <p className="mt-0.5 text-[11px] text-[var(--warm-ash-soft)]">{time}</p>
      </div>
    </aside>
  );
}
