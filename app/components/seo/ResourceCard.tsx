import Link from "next/link";
import type { PublishedResource } from "@/app/data/resources";

/**
 * Card used in the /resources grid. Editorial-leaning: category, title,
 * description, reading time. No hero image — typography carries the weight.
 */
export function ResourceCard({
  resource,
  variant = "default",
}: {
  resource: PublishedResource;
  variant?: "default" | "featured";
}) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/resources/${resource.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-7 transition-shadow duration-200 hover:shadow-paper-hover ${
        isFeatured ? "shadow-paper sm:p-8" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--signal-blue-deep)]">
          {resource.category}
        </span>
        <span className="text-[0.72rem] text-[var(--warm-ash)]">
          {resource.readingTime}
        </span>
      </div>
      <h3
        className={`mt-4 font-semibold tracking-[-0.012em] text-[var(--ink-navy)] ${
          isFeatured
            ? "text-[1.5rem] leading-tight sm:text-[1.875rem]"
            : "text-[1.125rem] leading-snug"
        }`}
      >
        {resource.title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
        {resource.description}
      </p>
      <div className="mt-auto pt-6 flex items-center gap-2 text-[0.8rem] font-medium text-[var(--ink-navy)]">
        <span className="underline-offset-4 group-hover:underline">Read guide</span>
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
