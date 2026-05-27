"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`relative inline-flex items-center px-3 py-2.5 text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-colors duration-150 ${
        active
          ? "text-[var(--ink-navy)]"
          : "text-[var(--warm-ash)] hover:text-[var(--ink-navy)]"
      }`}
    >
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--signal-blue)] transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}
