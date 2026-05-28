/**
 * Analytics helper.
 *
 * Provider-agnostic event API that currently pipes to GA4 when configured.
 * If NEXT_PUBLIC_GA_MEASUREMENT_ID is unset, every call here is a safe no-op.
 * Swap providers by replacing the body of `trackEvent`; call sites do not
 * need to change.
 *
 * Usage:
 *   import { trackEvent } from "@/app/lib/analytics";
 *   trackEvent("cta_click_book_audit", { location: "header" });
 */

export type AnalyticsEventName =
  | "audit_form_success"
  | "audit_form_error"
  | "cta_click_book_audit"
  | "cta_click_email"
  | "cta_click_phone"
  | "cta_click_mobile_sticky"
  | "cta_click_view_packages"
  | "scheduling_click"
  | "free_audit_page_scheduling_click";

declare global {
  interface Window {
    // Loosely typed gtag stub; GA4 sets this when the script loads.
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a typed analytics event. Safe to call from server code (the body is
 * guarded by `typeof window`); calls from server components compile but do
 * nothing.
 */
export function trackEvent(
  name: AnalyticsEventName,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  // GA4: gtag('event', '<name>', { ...params })
  try {
    window.gtag("event", name, params ?? {});
  } catch {
    // Never let analytics throw into application code.
  }
}

/**
 * Convenience binding for the most common case: a link/button that should
 * fire a CTA-click event when the user activates it. Returns an onClick
 * handler that fires the event before any default navigation.
 */
export function bindCtaClick(
  name: AnalyticsEventName,
  params?: Record<string, string | number | boolean | undefined>,
) {
  return () => trackEvent(name, params);
}
