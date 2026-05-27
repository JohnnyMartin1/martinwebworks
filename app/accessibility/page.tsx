import type { Metadata } from "next";
import { LegalPage } from "@/app/components/site/LegalPage";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Martin Web Works builds accessible websites and works to keep our own site accessible. Tell us if anything is hard to use.",
  alternates: { canonical: "/accessibility" },
  robots: { index: true, follow: true },
};

const UPDATED = "May 27, 2026";

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      updated={UPDATED}
      intro={
        <>
          We try to make this site usable for everyone, including people who use keyboards, screen readers, magnification, voice control, or who experience the web differently. Accessibility is not a feature we finished; it is something we keep working on.
        </>
      }
      sections={[
        {
          heading: "Our commitment",
          body: (
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA across the site. The standards we hold ourselves to include keyboard-only navigation, focus indicators, color contrast, semantic HTML, descriptive labels, and respect for reduced-motion preferences.
            </p>
          ),
        },
        {
          heading: "What we do",
          body: (
            <>
              <p>
                Every page on this site uses semantic HTML landmarks, descriptive headings, and visible focus rings tuned for both cream and navy backgrounds. Interactive elements meet a 44-pixel tap-target minimum on mobile. Forms have label associations and inline error messaging. Color is never the sole way information is conveyed.
              </p>
              <p>
                When &quot;reduced motion&quot; is set in your operating system, animation and smooth scrolling are turned off automatically.
              </p>
            </>
          ),
        },
        {
          heading: "What we are still working on",
          body: (
            <>
              <p>
                No site is finished. Things we are actively improving include keyboard handling for some complex components, alternative text patterns as we add imagery, and contrast ratios in areas where the type sits over photographic content (none today, more later).
              </p>
              <p>
                If you spot something that is hard to use, please tell us. The site improves faster when real people report what is broken.
              </p>
            </>
          ),
        },
        {
          heading: "Tell us about a barrier",
          body: (
            <p>
              Email{" "}
              <a
                href={`mailto:${SITE.email}?subject=Accessibility`}
                className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              with the subject line &quot;Accessibility.&quot; Include the page URL, what you were trying to do, and what got in the way. We reply within one business day and treat accessibility issues as priority work.
            </p>
          ),
        },
        {
          heading: "Client work",
          body: (
            <p>
              When we build websites for clients, accessibility is a default. Every project includes semantic structure, focus management, color-contrast checks, and form labeling. If your business has specific accessibility commitments (for example, ADA-conscious medical or legal practices), we are happy to discuss them during the audit.
            </p>
          ),
        },
      ]}
    />
  );
}
