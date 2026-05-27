import { Button, ArrowRight } from "@/app/components/ui/Button";
import { Stamp } from "@/app/components/ui/Stamp";
import { CheckIcon } from "@/app/components/ui/Icons";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";
import { CARE_PLANS } from "@/app/data/carePlans";

export function CarePlanCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {CARE_PLANS.map((plan) => {
        const featured = plan.featured;
        return (
          <article
            key={plan.slug}
            className={`relative flex flex-col rounded-2xl p-7 ${
              featured
                ? "bg-white/[0.06] text-[var(--cream-paper)] ring-1 ring-inset ring-white/15"
                : "bg-white/[0.03] text-[var(--cream-paper)] ring-1 ring-inset ring-white/8"
            }`}
          >
            {featured ? (
              <div className="absolute -top-3 left-7">
                <Stamp tone="signal">Most Popular</Stamp>
              </div>
            ) : null}

            <header>
              <h3 className="t-title">{plan.name}</h3>
              <p className="mt-1 text-[2rem] font-semibold tracking-[-0.018em] leading-tight">
                {plan.price}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--cream-edge)]">
                {plan.blurb}
              </p>
            </header>

            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-1 text-[var(--success-emerald)]" />
                  <span className="text-[var(--cream-edge)]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={BOOK_AUDIT_HREF}
                external={BOOK_AUDIT_IS_EXTERNAL}
                variant={featured ? "primary-on-dark" : "secondary-on-dark"}
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
