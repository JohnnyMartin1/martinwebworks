"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/app/lib/analytics";

/**
 * Map `data-cta` attribute values to typed analytics events.
 *
 * Add a new entry here whenever a new CTA is introduced and you want it
 * tracked. The event name on the right is the GA4 event name; keep these
 * stable so historical data stays comparable.
 */
const CTA_EVENT_MAP: Record<
  string,
  { event: AnalyticsEventName; location?: string }
> = {
  book_audit_header: { event: "cta_click_book_audit", location: "header" },
  book_audit_section: { event: "cta_click_book_audit", location: "section" },
  book_audit_hero: { event: "cta_click_book_audit", location: "hero" },
  book_audit_mobile_sticky: {
    event: "cta_click_book_audit",
    location: "mobile_sticky",
  },
  email_footer: { event: "cta_click_email", location: "footer" },
  email_section: { event: "cta_click_email", location: "section" },
  email_mobile_sticky: { event: "cta_click_email", location: "mobile_sticky" },
  phone_footer: { event: "cta_click_phone", location: "footer" },
  phone_section: { event: "cta_click_phone", location: "section" },
  phone_mobile_sticky: { event: "cta_click_phone", location: "mobile_sticky" },
  scheduling: { event: "scheduling_click", location: "site" },
  scheduling_free_audit: {
    event: "free_audit_page_scheduling_click",
    location: "free_audit",
  },
};

/**
 * Listens for clicks anywhere in the document and looks up the nearest
 * ancestor with a `data-cta` attribute. If a match exists in CTA_EVENT_MAP,
 * fires the corresponding analytics event. Defensive: never throws, never
 * blocks navigation, no-op when gtag is unavailable.
 */
export function CtaTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-cta]");
      if (!el) return;
      const key = el.dataset.cta;
      if (!key) return;
      const entry = CTA_EVENT_MAP[key];
      if (!entry) return;
      try {
        trackEvent(entry.event, { location: entry.location, cta_id: key });
      } catch {
        // Never let analytics break navigation.
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
