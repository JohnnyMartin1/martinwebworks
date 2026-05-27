import type { ResourceSection } from "@/app/data/resources";

/**
 * Visible table of contents built from the article's H2 sections.
 * Renders inline at the top of the article on mobile, and as a sticky sidebar
 * on the right on desktop (see the resource template for placement).
 */
export function TableOfContents({
  sections,
  variant = "inline",
}: {
  sections: ResourceSection[];
  variant?: "inline" | "sticky";
}) {
  if (sections.length < 3) return null;

  if (variant === "sticky") {
    return (
      <nav aria-label="On this page" className="sticky top-24">
        <p className="t-label text-[var(--warm-ash)]">On this page</p>
        <ol className="mt-3 space-y-2 text-[0.85rem]">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block leading-snug text-[var(--warm-ash)] hover:text-[var(--ink-navy)]"
              >
                <span className="mr-2 tabular-nums text-[var(--warm-ash-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading.replace(/^\d+\.\s*/, "")}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-[var(--divider)] bg-[var(--cream-deep)] p-5 lg:hidden"
    >
      <p className="t-label text-[var(--warm-ash)]">On this page</p>
      <ol className="mt-3 space-y-1.5 text-[0.92rem]">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-[var(--ink-navy)] hover:underline underline-offset-4">
              <span className="mr-2 tabular-nums text-[var(--warm-ash)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.heading.replace(/^\d+\.\s*/, "")}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
