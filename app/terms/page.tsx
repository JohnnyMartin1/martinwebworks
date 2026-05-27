import type { Metadata } from "next";
import { LegalPage } from "@/app/components/site/LegalPage";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Martin Web Works website. Plain English. Real project agreements happen in writing on a per-project basis.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const UPDATED = "May 27, 2026";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      updated={UPDATED}
      intro={
        <>
          These terms cover the website you are reading right now. Real client projects are governed by a separate written proposal and agreement, not this page.
        </>
      }
      sections={[
        {
          heading: "About the information on this site",
          body: (
            <>
              <p>
                The content on {SITE.name} is general information about local-business websites, how we work, and what we offer. It is meant to help you decide whether to talk to us.
              </p>
              <p>
                Examples shown on the site are concept examples designed by us. They are not real client work and are not testimonials.
              </p>
            </>
          ),
        },
        {
          heading: "Proposals and project agreements",
          body: (
            <p>
              If we work together, the scope, price, deliverables, and timeline are set in a separate written proposal and project agreement. Nothing on this site constitutes a binding offer, a contract, or a promise of work. The proposal you sign is the agreement; this site is the marketing material that led you to it.
            </p>
          ),
        },
        {
          heading: "No guaranteed rankings or guaranteed leads",
          body: (
            <p>
              We do not promise specific Google rankings, specific lead volumes, or any other outcome that depends on factors outside the website itself. Anyone in this industry who guarantees rankings is either misinformed or dishonest. We build websites that are honestly engineered to convert; we describe what those choices mean; we do not promise what only Google can promise.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <>
              <p>
                Ownership of work product produced under a client engagement (the website code, design, copy, photography, and content) is governed by the project agreement, not this page. Default position: you own the result.
              </p>
              <p>
                The {SITE.name} brand name, logo, and the content of this marketing site are ours. You are welcome to link to any page here; do not copy the page wholesale.
              </p>
            </>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <p>
              The website you are reading uses third-party services for hosting, email (Resend), and optionally analytics. Their terms govern their portions of the experience. We use them carefully and only where they are doing real work.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update this page as the studio grows or as the law requires. The &quot;last updated&quot; date at the top reflects the most recent change.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms? Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
