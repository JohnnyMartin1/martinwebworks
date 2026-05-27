import Script from "next/script";
import { CtaTracker } from "./CtaTracker";

/**
 * Conditional GA4 loader + global CTA tracker.
 *
 * Loads the Google Analytics 4 script and initializes gtag only when
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set to a real value. When unset, the
 * GA scripts are not emitted (zero overhead, zero cookies, zero requests).
 *
 * The CtaTracker runs regardless and is a no-op until gtag is available —
 * this keeps event call sites consistent whether or not analytics is wired.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const enabled = !!id && id.trim().length > 0;

  return (
    <>
      {enabled ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
              id!,
            )}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(id)}, { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
      <CtaTracker />
    </>
  );
}
