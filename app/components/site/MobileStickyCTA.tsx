"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BOOK_AUDIT_HREF,
  BOOK_AUDIT_IS_EXTERNAL,
  HAS_PHONE,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE,
} from "@/app/data/site";
import { trackEvent } from "@/app/lib/analytics";

const DISMISS_KEY = "mwwStickyCtaDismissed";
const DISMISS_EVENT = "mww:sticky-cta-dismiss";

/**
 * SSR-safe subscription to the dismissed flag in localStorage.
 *
 * useSyncExternalStore lets us treat localStorage as an external source of
 * truth without violating the "no setState in effects" lint rule and without
 * causing hydration warnings. On the server we always return false (visible);
 * on the client we read the real value and React reconciles cleanly.
 */
function useDismissed(): [boolean, () => void] {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener("storage", onChange);
    window.addEventListener(DISMISS_EVENT, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(DISMISS_EVENT, onChange);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    try {
      return window.localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  }, []);

  const getServerSnapshot = useCallback(() => false, []);

  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
      // Same-tab listeners don't fire `storage`; emit a custom event so
      // the snapshot re-reads.
      window.dispatchEvent(new Event(DISMISS_EVENT));
    } catch {
      // Privacy mode / disabled storage: bar stays visible for the session.
    }
  }, []);

  return [dismissed, dismiss];
}

/**
 * Mobile-only sticky bottom CTA. Renders a quiet two-button bar pinned
 * above the safe-area inset on phones. Hidden on tablet and up, hidden on
 * /free-audit (the form is already the page), and dismissible via the small
 * close button (persists in localStorage).
 *
 * Tap targets are 44px+ as required by WCAG.
 */
export function MobileStickyCTA() {
  const pathname = usePathname();
  const [dismissed, dismiss] = useDismissed();

  if (dismissed) return null;
  if (pathname === "/free-audit") return null;

  const onBookClick = () => {
    trackEvent("cta_click_book_audit", { location: "mobile_sticky" });
    trackEvent("cta_click_mobile_sticky", { action: "book_audit" });
  };

  const onSecondaryClick = () => {
    if (HAS_PHONE) {
      trackEvent("cta_click_phone", { location: "mobile_sticky" });
    } else {
      trackEvent("cta_click_email", { location: "mobile_sticky" });
    }
    trackEvent("cta_click_mobile_sticky", {
      action: HAS_PHONE ? "phone" : "email",
    });
  };

  const secondaryHref = HAS_PHONE
    ? `tel:${PHONE_HREF}`
    : `mailto:${SITE.email}`;

  const secondaryLabel = HAS_PHONE ? `Call ${PHONE_NUMBER}` : "Email us";

  return (
    <div
      aria-label="Quick actions"
      className="md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto flex max-w-[640px] items-center gap-2 rounded-full border border-[var(--divider)] bg-[var(--paper-white)]/95 p-1.5 shadow-[0_8px_30px_-8px_rgba(11,27,51,0.25)] backdrop-blur">
        {BOOK_AUDIT_IS_EXTERNAL ? (
          <a
            href={BOOK_AUDIT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBookClick}
            data-cta="book_audit_mobile_sticky"
            className="flex h-11 flex-1 items-center justify-center rounded-full bg-[var(--ink-navy)] px-4 text-[0.92rem] font-medium text-[var(--cream-paper)] shadow-cta active:translate-y-[0.5px]"
          >
            Book Free Audit
          </a>
        ) : (
          <Link
            href={BOOK_AUDIT_HREF}
            onClick={onBookClick}
            data-cta="book_audit_mobile_sticky"
            className="flex h-11 flex-1 items-center justify-center rounded-full bg-[var(--ink-navy)] px-4 text-[0.92rem] font-medium text-[var(--cream-paper)] shadow-cta active:translate-y-[0.5px]"
          >
            Book Free Audit
          </Link>
        )}

        <a
          href={secondaryHref}
          onClick={onSecondaryClick}
          data-cta={HAS_PHONE ? "phone_mobile_sticky" : "email_mobile_sticky"}
          aria-label={secondaryLabel}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--divider)] bg-[var(--paper-white)] text-[var(--ink-navy)] active:translate-y-[0.5px]"
        >
          {HAS_PHONE ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M5.5 3.5h2.7l1 3.2L7.4 8.1a8.2 8.2 0 004.5 4.5l1.4-1.8 3.2 1v2.7c0 1-.8 1.8-1.8 1.8A11.7 11.7 0 013.7 4.8c0-1 .8-1.8 1.8-1.8z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <rect
                x="3"
                y="5"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M3.5 6l6.5 4.5L16.5 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </a>

        <button
          type="button"
          aria-label="Dismiss quick actions"
          onClick={dismiss}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--warm-ash)] hover:text-[var(--ink-navy)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M3.5 3.5l7 7M10.5 3.5l-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
