import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import {
  FOOTER_STUDIO,
  FOOTER_MORE,
  FOOTER_LEGAL,
} from "@/app/data/nav";
import {
  HAS_PHONE,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE,
} from "@/app/data/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="drench-navy">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="cream" />
            <p className="mt-5 text-sm leading-relaxed text-[var(--cream-edge)]">
              A local web studio. We build, host, and update websites for service businesses across the country. {SITE.location}.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--cream-edge)]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  data-cta="email_footer"
                  className="font-medium text-[var(--cream-paper)] hover:underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </li>
              {HAS_PHONE ? (
                <li>
                  <a
                    href={`tel:${PHONE_HREF}`}
                    data-cta="phone_footer"
                    className="font-medium text-[var(--cream-paper)] hover:underline underline-offset-4"
                  >
                    {PHONE_NUMBER}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-[var(--cream-edge)]">
              Studio
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_STUDIO.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--cream-paper)] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-[var(--cream-edge)]">
              More
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_MORE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--cream-paper)] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-[var(--cream-edge)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Martin Web Works. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
