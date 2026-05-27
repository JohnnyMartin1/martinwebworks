import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Stamp } from "@/app/components/ui/Stamp";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";
import { PACKAGES } from "@/app/data/packages";

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PACKAGES.map((pkg) => {
        const featured = pkg.featured;
        return (
          <article
            key={pkg.slug}
            className={`relative flex flex-col rounded-2xl p-7 ${
              featured
                ? "bg-[var(--ink-navy)] text-[var(--cream-paper)] shadow-paper-hover md:scale-[1.03]"
                : "bg-[var(--paper-white)] text-[var(--ink-navy)] border border-[var(--divider)] shadow-paper"
            }`}
          >
            {featured ? (
              <div className="absolute -top-3 left-7">
                <Stamp tone="signal">Most Popular</Stamp>
              </div>
            ) : null}

            <header>
              <h3 className={`t-title ${featured ? "text-[var(--cream-paper)]" : ""}`}>{pkg.name}</h3>
              <p
                className={`mt-1 text-[2rem] font-semibold tracking-[-0.018em] leading-tight ${
                  featured ? "text-[var(--cream-paper)]" : "text-[var(--ink-navy)]"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mt-3 text-[0.95rem] leading-relaxed ${
                  featured ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
                }`}
              >
                {pkg.blurb}
              </p>
            </header>

            <ul className="mt-7 space-y-3 text-[0.95rem]">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckIcon
                    className={featured ? "mt-1 text-[var(--success-emerald)]" : "mt-1 text-[var(--signal-blue)]"}
                  />
                  <span className={featured ? "text-[var(--cream-edge)]" : "text-[var(--ink-navy)]"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className={`mt-7 text-sm leading-relaxed ${
                featured ? "text-[var(--cream-edge)]" : "text-[var(--warm-ash)]"
              }`}
            >
              {pkg.bestFor}
            </p>

            <div className="mt-8">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                variant={featured ? "primary-on-dark" : "primary"}
                size="md"
                className="w-full"
              >
                Book Free Audit
                <ArrowRight />
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
