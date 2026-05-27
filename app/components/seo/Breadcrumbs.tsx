import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

/**
 * Visible breadcrumbs above the page hero on SEO pages.
 * Mirrors what a BreadcrumbList JSON-LD describes, so the schema reflects
 * what the user actually sees.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.8125rem] text-[var(--warm-ash)]">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link
                  href={c.href}
                  className="hover:text-[var(--ink-navy)] underline-offset-4 hover:underline"
                >
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-[var(--ink-navy)]" : ""}>
                  {c.label}
                </span>
              )}
              {last ? null : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden
                  className="text-[var(--warm-ash-soft)]"
                >
                  <path
                    d="M3.5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
