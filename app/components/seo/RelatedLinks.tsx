import Link from "next/link";

export type RelatedItem = {
  title: string;
  href: string;
  meta?: string;
};

/**
 * Compact list of related links for cross-linking between industries and
 * resources. Always pairs label + meta; never a bare list of slugs.
 */
export function RelatedLinks({
  title,
  items,
  variant = "list",
}: {
  title: string;
  items: RelatedItem[];
  variant?: "list" | "cards";
}) {
  if (items.length === 0) return null;

  if (variant === "cards") {
    return (
      <section>
        <p className="t-label text-[var(--warm-ash)]">{title}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 transition-shadow duration-200 hover:shadow-paper-hover"
            >
              {it.meta ? (
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--signal-blue-deep)]">
                  {it.meta}
                </p>
              ) : null}
              <p className="mt-2 text-[1rem] font-semibold leading-snug text-[var(--ink-navy)] underline-offset-4 group-hover:underline">
                {it.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <p className="t-label text-[var(--warm-ash)]">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group flex items-baseline justify-between gap-4 border-b border-[var(--divider)] pb-3 last:border-b-0 last:pb-0"
            >
              <span className="text-[0.95rem] font-medium text-[var(--ink-navy)] underline-offset-4 group-hover:underline">
                {it.title}
              </span>
              {it.meta ? (
                <span className="shrink-0 text-[0.78rem] text-[var(--warm-ash)]">{it.meta}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
