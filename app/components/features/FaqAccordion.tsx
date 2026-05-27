import { FAQS, FAQ_CATEGORIES, type FAQ } from "@/app/data/faqs";

type FaqAccordionProps = {
  filterCategory?: FAQ["category"];
  /** Limit the number of items rendered. */
  limit?: number;
  /** Whether to render the category sub-headings. Default true on full FAQ page. */
  groupByCategory?: boolean;
};

export function FaqAccordion({
  filterCategory,
  limit,
  groupByCategory = false,
}: FaqAccordionProps) {
  const items = filterCategory ? FAQS.filter((f) => f.category === filterCategory) : FAQS;
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;

  if (!groupByCategory) {
    return <FaqList items={visible} />;
  }

  return (
    <div className="space-y-14">
      {FAQ_CATEGORIES.map((cat) => {
        const inCat = visible.filter((f) => f.category === cat);
        if (inCat.length === 0) return null;
        return (
          <section key={cat} aria-labelledby={`faq-${slug(cat)}`}>
            <h2 id={`faq-${slug(cat)}`} className="t-label">
              {cat}
            </h2>
            <div className="mt-4">
              <FaqList items={inCat} />
            </div>
          </section>
        );
      })}
    </div>
  );
}

function FaqList({ items }: { items: FAQ[] }) {
  return (
    <ul className="divide-y divide-[var(--divider)] rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper overflow-hidden">
      {items.map((faq) => (
        <li key={faq.question}>
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-[1.05rem] font-medium text-[var(--ink-navy)] sm:px-6 [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--cream-deep)] text-[var(--ink-navy)] transition-transform duration-200 group-open:rotate-45"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2v8M2 6h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-5 pb-5 text-[0.975rem] leading-relaxed text-[var(--warm-ash)] sm:px-6">
              {faq.answer}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
