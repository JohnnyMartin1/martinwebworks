"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Defensive scroll-to-top on App Router navigation.
 *
 * Next.js Link already scrolls to top on navigation by default. This helper
 * exists as defense-in-depth against components that programmatically scroll
 * (scrollIntoView, focus(), window.scrollTo, etc.) shortly after a route
 * change — those can race with the browser's own scroll restoration and
 * land the visitor mid-page.
 *
 * Behavior:
 *   - Skips the very first effect run; the browser handles initial page
 *     load and we never want to override an intentional anchor on first
 *     paint.
 *   - On subsequent pathname changes, scrolls to (0, 0) using the
 *     `instant` behavior (so no smooth-scroll bounce when the navigation
 *     was an internal click).
 *   - If the new URL carries a hash (e.g. /foo#section), the helper does
 *     nothing — the browser already handles anchor scrolling and we don't
 *     want to fight it.
 *   - prefers-reduced-motion is irrelevant here because the scroll is
 *     `instant`, not animated. We still avoid any animation paths.
 */
export function ScrollToTopOnNavigation() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      // Older browsers reject "instant" — fall back to direct assignment.
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
