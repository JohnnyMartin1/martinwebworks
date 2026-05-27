import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Stamp } from "@/app/components/ui/Stamp";
import { CheckIcon } from "@/app/components/ui/Icons";
import { PACKAGES } from "@/app/data/packages";

const PREVIEW_BULLETS: Record<string, string[]> = {
  starter: [
    "3 to 5 page website",
    "Click-to-call buttons",
    "Mobile-friendly design",
    "Domain connection help",
  ],
  growth: [
    "5 to 10 page website",
    "Individual service pages",
    "Reviews and quote form",
    "Local SEO + analytics",
  ],
  authority: [
    "10 to 20 page website",
    "Service + location pages",
    "Advanced quote intake",
    "Copy polishing included",
  ],
};

const SHORT_BEST_FOR: Record<string, string> = {
  starter: "Best for a clean online presence and a simple way to be contacted.",
  growth: "Best for stronger service pages, reviews, and more quote requests.",
  authority: "Best for multi-service or multi-location lead generation.",
};

export function PricingPreviewCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PACKAGES.map((pkg) => {
        const featured = pkg.featured;
        const bullets = PREVIEW_BULLETS[pkg.slug] ?? pkg.features.slice(0, 4);
        const bestFor = SHORT_BEST_FOR[pkg.slug] ?? pkg.bestFor;
        return (
          <article
            key={pkg.slug}
            className={`relative flex flex-col rounded-2xl p-6 ${
              featured
                ? "bg-[var(--ink-navy)] text-[var(--cream-paper)] shadow-paper"
                : "bg-[var(--paper-white)] text-[var(--ink-navy)] border border-[var(--divider)] shadow-paper"
            }`}
          >
            {featured ? (
              <div className="absolute -top-3 left-6">
                <Stamp tone="signal">Most Popular</Stamp>
              </div>
            ) : null}

            <header className="flex items-baseline justify-between gap-3">
              <h3 className={`t-title ${featured ? "text-[var(--cream-paper)]" : ""}`}>{pkg.name}</h3>
            </header>
            <p
              className={`mt-1 text-[1.5rem] font-semibold tracking-[-0.018em] leading-tight ${
                featured ? "text-[var(--cream-paper)]" : "text-[var(--ink-navy)]"
              }`}
            >
              {pkg.price}
            </p>
            <p
              className={`mt-3 text-[0.9rem] leading-relaxed ${
                featured ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
              }`}
            >
              {bestFor}
            </p>

            <ul className="mt-5 space-y-2 text-[0.9rem]">
              {bullets.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon
                    className={`mt-[3px] h-4 w-4 ${
                      featured ? "text-[var(--success-emerald)]" : "text-[var(--signal-blue)]"
                    }`}
                  />
                  <span className={featured ? "text-[var(--cream-edge)]" : "text-[var(--ink-navy)]"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 pt-2">
              <Button
                href="/packages"
                variant={featured ? "primary-on-dark" : "primary"}
                size="md"
                className="flex-1"
              >
                See details
                <ArrowRight />
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
