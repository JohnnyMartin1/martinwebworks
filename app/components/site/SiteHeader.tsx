import { Container } from "@/app/components/ui/Container";
import { Button, ArrowRight } from "@/app/components/ui/Button";
import { PRIMARY_NAV } from "@/app/data/nav";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL } from "@/app/data/site";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[rgba(250,247,242,0.92)] backdrop-blur-md border-b border-[var(--divider)]">
      <Container size="wide">
        <div className="flex h-14 items-center justify-between gap-3 md:h-16">
          <Logo />
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-0 xl:gap-1"
          >
            {PRIMARY_NAV.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block shrink-0">
            <Button
              href={BOOK_AUDIT_HREF}
              external={BOOK_AUDIT_IS_EXTERNAL}
              size="md"
              variant="primary"
              data-cta="book_audit_header"
            >
              Book Free Audit
              <ArrowRight />
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
