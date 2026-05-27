/**
 * Renders a resource article body from the typed section/block DSL.
 * Keeps each block-kind in one place so we never invent inline variants.
 */

import { CheckIcon } from "@/app/components/ui/Icons";
import type { ResourceBlock, ResourceSection } from "@/app/data/resources";

export function ResourceBody({ sections }: { sections: ResourceSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
          <h2
            id={`${section.id}-heading`}
            className="t-headline scroll-mt-24 text-[1.75rem] leading-tight sm:text-[2rem]"
          >
            {section.heading}
          </h2>
          <div className="mt-6 space-y-6">
            {section.body.map((block, i) => (
              <ResourceBlockRenderer key={`${section.id}-${i}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ResourceBlockRenderer({ block }: { block: ResourceBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="max-w-[65ch] text-[1.0625rem] leading-[1.65] text-[var(--ink-navy)]">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="max-w-[65ch] space-y-2.5 text-[1.0625rem] leading-[1.6] text-[var(--ink-navy)]">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal-blue)]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        <div className="max-w-[68ch] rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-6 sm:p-7 shadow-paper">
          {block.title ? (
            <p className="t-label text-[var(--warm-ash)]">{block.title}</p>
          ) : null}
          <ul className={`${block.title ? "mt-4" : ""} space-y-3`}>
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-[var(--ink-navy)]"
              >
                <CheckIcon
                  className="mt-1 shrink-0 text-[var(--signal-blue)]"
                  width={18}
                  height={18}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return (
        <aside className="max-w-[68ch] rounded-2xl border border-[var(--divider)] bg-[var(--signal-blue-soft)] p-6 sm:p-7">
          <p className="t-label text-[var(--signal-blue-deep)]">{block.title}</p>
          <p className="mt-2 text-[1.0625rem] leading-[1.6] text-[var(--ink-navy)]">
            {block.text}
          </p>
        </aside>
      );
    case "comparison":
      return (
        <div className="overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-0 border-b border-[var(--divider)] bg-[var(--cream-deep)]">
            <div className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--warm-ash)]">
              Compare
            </div>
            <div className="px-5 py-3 text-[0.85rem] font-semibold text-[var(--ink-navy)]">
              {block.columns[0]}
            </div>
            <div className="px-5 py-3 text-[0.85rem] font-semibold text-[var(--ink-navy)]">
              {block.columns[1]}
            </div>
          </div>
          <ul>
            {block.rows.map((row, i) => (
              <li
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] gap-0 text-[0.92rem] leading-snug ${
                  i % 2 ? "bg-[var(--cream-paper)]" : ""
                }`}
              >
                <div className="border-b border-[var(--divider)] px-5 py-3 text-[var(--warm-ash)]">
                  {row.label}
                </div>
                <div className="border-b border-[var(--divider)] px-5 py-3 text-[var(--ink-navy)]">
                  {row.a}
                </div>
                <div className="border-b border-[var(--divider)] px-5 py-3 text-[var(--ink-navy)]">
                  {row.b}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}
