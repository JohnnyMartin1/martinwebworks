import { CheckIcon } from "@/app/components/ui/Icons";

/**
 * Reusable checklist with paper-stack tone. The shared affordance for "here are
 * the things you should look for" on both industry and resource pages.
 */
export function Checklist({
  title,
  items,
  tone = "paper",
}: {
  title?: string;
  items: string[];
  tone?: "paper" | "cream-deep" | "navy-card";
}) {
  const isNavy = tone === "navy-card";
  return (
    <div
      className={
        isNavy
          ? "rounded-2xl border border-white/10 bg-white/[0.04] p-7"
          : tone === "cream-deep"
            ? "rounded-2xl border border-[var(--divider)] bg-[var(--cream-deep)] p-7"
            : "rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 shadow-paper"
      }
    >
      {title ? (
        <p className={`t-label ${isNavy ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"} mb-4`}>
          {title}
        </p>
      ) : null}
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[0.9375rem] leading-relaxed ${
              isNavy ? "text-[var(--cream-paper)]" : "text-[var(--ink-navy)]"
            }`}
          >
            <CheckIcon
              className={`mt-1 shrink-0 ${
                isNavy ? "text-[var(--cream-paper)]" : "text-[var(--signal-blue)]"
              }`}
              width={18}
              height={18}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
