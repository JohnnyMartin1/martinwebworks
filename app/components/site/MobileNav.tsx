"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MOBILE_NAV } from "@/app/data/nav";
import { BOOK_AUDIT_HREF, BOOK_AUDIT_IS_EXTERNAL, SITE } from "@/app/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)]"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          {open ? (
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 5h12M3 9h12M3 13h12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open ? (
        <>
          <div
            aria-hidden
            className="fixed inset-0 z-40 bg-[rgba(11,27,51,0.32)] md:hidden"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            aria-label="Mobile"
            className="fixed inset-x-0 top-[56px] z-50 md:hidden bg-[var(--cream-paper)] border-b border-[var(--divider)] shadow-[0_24px_48px_-24px_rgba(11,27,51,0.18)]"
          >
            <ul className="flex flex-col py-3">
              {MOBILE_NAV.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`flex items-center justify-between px-5 py-4 text-[1rem] font-medium ${
                        active
                          ? "text-[var(--ink-navy)] bg-[var(--cream-deep)]"
                          : "text-[var(--ink-navy)] hover:bg-[var(--cream-deep)]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M5 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 border-t border-[var(--divider)] px-5 py-5">
                <a
                  href={BOOK_AUDIT_HREF}
                  {...(BOOK_AUDIT_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={close}
                  className="block w-full rounded-full bg-[var(--ink-navy)] px-5 py-3 text-center text-[0.95rem] font-medium text-[var(--cream-paper)] shadow-cta"
                >
                  Book Free Website Audit
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={close}
                  className="mt-3 block text-center text-sm text-[var(--warm-ash)]"
                >
                  or email {SITE.email}
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
}
