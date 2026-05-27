import { Button, ArrowRight } from "@/app/components/ui/Button";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SITE } from "@/app/data/site";

/**
 * Inline CTA card used inside long-form pages (resource articles) and after
 * heavy content blocks on industry pages. Different from the final CTA band
 * (CTASection in /ui), which is full-width and navy.
 */
export function InlineCTACard({
  title,
  body,
  primaryLabel = "Book Free Website Audit",
  variant = "cream",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  variant?: "cream" | "paper";
}) {
  const bg =
    variant === "cream"
      ? "bg-[var(--cream-deep)] border-[var(--divider)]"
      : "bg-[var(--paper-white)] border-[var(--divider)] shadow-paper";

  return (
    <aside
      className={`my-12 rounded-2xl border ${bg} p-7 sm:p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between`}
    >
      <div className="max-w-[420px]">
        <p className="t-label text-[var(--signal-blue-deep)]">Free 30-min audit</p>
        <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.01em] text-[var(--ink-navy)]">
          {title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--warm-ash)]">
          {body}{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4 hover:text-[var(--signal-blue)]"
          >
            Or email us directly.
          </a>
        </p>
      </div>
      <div className="shrink-0">
        <Button
          href={BOOK_AUDIT_HREF}
          external={BOOK_AUDIT_IS_EXTERNAL}
          size="lg"
          variant="primary"
        >
          {primaryLabel}
          <ArrowRight />
        </Button>
      </div>
    </aside>
  );
}
