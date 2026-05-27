import Link from "next/link";
import type { PublishedIndustry } from "@/app/data/industries";

/**
 * Card used in the /industries grid. Compact, no oversized icon hat, no
 * gradient blob, no decorative stamp. Just the industry, a short pitch, and
 * the recommended-tier shorthand.
 */
export function IndustryCard({
  industry,
  variant = "default",
}: {
  industry: PublishedIndustry;
  variant?: "default" | "featured";
}) {
  const isFeatured = variant === "featured";
  const tierLabel: Record<PublishedIndustry["recommendedPackage"]["slug"], string> = {
    starter: "Starter",
    growth: "Growth",
    authority: "Authority",
  };

  return (
    <Link
      href={`/industries/${industry.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-6 transition-shadow duration-200 hover:shadow-paper-hover ${
        isFeatured ? "shadow-paper" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-semibold tracking-[-0.012em] text-[var(--ink-navy)] ${
            isFeatured ? "text-[1.35rem]" : "text-[1.125rem]"
          }`}
        >
          {industry.pluralName}
        </h3>
        <span className="inline-flex shrink-0 rounded-full border border-[var(--divider)] bg-[var(--cream-deep)] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--ink-navy)]">
          {tierLabel[industry.recommendedPackage.slug]}
        </span>
      </div>
      <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--warm-ash)]">
        {industry.heroSubtext.split(".")[0]}.
      </p>
      <ul className="mt-5 space-y-1.5 text-[0.85rem] text-[var(--ink-navy)]">
        {industry.suggestedFeatures.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden className="text-[var(--signal-blue)]">·</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex items-center gap-2 text-[0.8rem] font-medium text-[var(--ink-navy)]">
        <span className="underline-offset-4 group-hover:underline">
          See guide for {industry.pluralName.toLowerCase()}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
