/**
 * Visible FAQ list for SEO pages. Uses the native <details> / <summary>
 * pattern, default closed, for accessibility and zero-JS behavior.
 *
 * Pairs with FaqJsonLd to emit structured data only for the FAQs that are
 * actually visible.
 */
export function SeoFaqList({
  items,
  heading = "Questions we get from owners",
}: {
  items: { question: string; answer: string }[];
  heading?: string;
}) {
  if (!items?.length) return null;
  return (
    <section aria-labelledby="seo-faq-heading">
      <p className="t-label text-[var(--warm-ash)]">FAQ</p>
      <h2
        id="seo-faq-heading"
        className="t-headline mt-3 max-w-[640px]"
      >
        {heading}
      </h2>
      <div className="mt-10 divide-y divide-[var(--divider)]">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
              <h3 className="text-[1.0625rem] font-medium leading-snug text-[var(--ink-navy)]">
                {item.question}
              </h3>
              <span
                aria-hidden
                className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)] transition-transform duration-200 group-open:rotate-45"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M6 2v8M2 6h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 max-w-[65ch] text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
