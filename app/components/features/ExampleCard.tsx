import Link from "next/link";

import { Stamp } from "@/app/components/ui/Stamp";
import { BrowserFrame } from "@/app/components/mockups/BrowserFrame";
import { SiteMockup } from "@/app/components/mockups/SiteMockup";
import type { ExampleBusiness } from "@/app/data/examples";
import { CONCEPT_SLUG_BY_BASE } from "@/app/data/exampleConcepts";

/**
 * Card for the /examples grid.
 *
 * Two states:
 *   - Has a concept walkthrough → entire card links to /examples/[slug].
 *   - Has no concept walkthrough → entire card links to /free-audit.
 *
 * The footer alignment is fixed by a single grid track that locks the
 * meta row to the bottom of every card, regardless of feature-list
 * height. No nested links, no stray arrows.
 */

export function ExampleCard({ example }: { example: ExampleBusiness }) {
  const services = pickServices(example.features);
  const conceptSlug = CONCEPT_SLUG_BY_BASE[example.slug];
  const href = conceptSlug ? `/examples/${conceptSlug}` : "/free-audit";
  const ctaLabel = conceptSlug ? "View concept" : "Book free audit";

  return (
    <Link
      href={href}
      aria-label={
        conceptSlug
          ? `View the full ${example.name} concept`
          : `Book a free audit — inspired by ${example.name}`
      }
      className="group flex h-full flex-col gap-5 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper transition-shadow duration-200 hover:shadow-paper-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream-paper)]"
    >
      <div className="flex items-center justify-between gap-2">
        <Stamp tone="cream">Concept example</Stamp>
        <span className="font-mono text-[11px] text-[var(--warm-ash-soft)]">
          {example.industry}
        </span>
      </div>

      <BrowserFrame url={example.domain} className="!shadow-none">
        <SiteMockup
          businessName={example.name}
          tagline={example.tagline}
          primaryCta={"Get a free quote"}
          serviceLabels={services}
          palette={example.palette}
        />
      </BrowserFrame>

      <div className="px-1">
        <h3 className="t-title">{example.name}</h3>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
          {example.pitch}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-[var(--ink-navy)]">
          {example.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span
                aria-hidden
                className="mt-2 inline-block h-1 w-1 rounded-full bg-[var(--signal-blue)]"
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[var(--divider)] pt-4">
        <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--warm-ash-soft)]">
          Concept example · Not a real client
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[var(--ink-navy)] transition-colors duration-150 group-hover:text-[var(--signal-blue)]"
          aria-hidden
        >
          {ctaLabel}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function pickServices(features: string[]): [string, string, string] {
  const fallback = ["Services", "Quote", "Reviews"] as const;
  const sliced = features.slice(0, 3);
  while (sliced.length < 3) sliced.push(fallback[sliced.length]);
  return [
    truncate(sliced[0], 20),
    truncate(sliced[1], 20),
    truncate(sliced[2], 20),
  ];
}

function truncate(s: string, n: number) {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trim() + "…";
}
