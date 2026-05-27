"use client";

import { useState } from "react";
import {
  EXAMPLES,
  EXAMPLE_FILTER_TAGS,
  type ExampleTag,
} from "@/app/data/examples";
import { ExampleCard } from "./ExampleCard";

type Filter = ExampleTag | "All";

const FILTERS: Filter[] = ["All", ...EXAMPLE_FILTER_TAGS];

export function ExamplesGrid() {
  const [active, setActive] = useState<Filter>("All");

  const items =
    active === "All"
      ? EXAMPLES
      : EXAMPLES.filter((e) => e.tags.includes(active));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by industry"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(f)}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-[0.875rem] font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-[var(--ink-navy)] text-[var(--cream-paper)] border-[var(--ink-navy)]"
                  : "bg-[var(--paper-white)] text-[var(--ink-navy)] border-[var(--divider)] hover:bg-[var(--cream-deep)]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div
        className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {items.map((example) => (
          <ExampleCard key={example.slug} example={example} />
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-center text-[var(--warm-ash)]">
          No examples in this category yet. We are building more.
        </p>
      ) : null}
    </div>
  );
}
