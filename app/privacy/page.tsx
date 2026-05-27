import type { Metadata } from "next";
import { LegalPage } from "@/app/components/site/LegalPage";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Martin Web Works handles the information you share with us. Short, plain English, no dark patterns.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "May 27, 2026";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated={UPDATED}
      intro={
        <>
          We try to keep this short. This is what happens to the information you share with{" "}
          {SITE.name} when you use this site or contact us.
        </>
      }
      sections={[
        {
          heading: "What we collect",
          body: (
            <>
              <p>
                When you submit the free audit form on this site, we collect the fields you fill out: your name, business name, email, optional website URL, optional phone number, what you are interested in, and any message you choose to send.
              </p>
              <p>
                When you email us directly at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
                >
                  {SITE.email}
                </a>
                , we collect whatever is in your message and the email address it came from.
              </p>
              <p>
                We do not collect health information, financial information, government identifiers, or any other sensitive category.
              </p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <>
              <p>
                We use what you send us to reply to you, schedule a conversation if appropriate, and follow up on the work we are doing or considering doing together. That is the whole purpose.
              </p>
              <p>
                We do not sell your personal information to anyone. We do not share it with marketers, ad networks, data brokers, or unrelated third parties.
              </p>
            </>
          ),
        },
        {
          heading: "Email and storage",
          body: (
            <>
              <p>
                Audit submissions send two emails: a notification to {SITE.email} and a confirmation to the email address you provided. Email delivery is handled through Resend, a third-party transactional email provider. Resend processes the email on our behalf.
              </p>
              <p>
                We retain audit submissions and email threads for as long as the conversation is active and for a reasonable period afterwards. You can ask us to delete your record at any time by emailing{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Analytics",
          body: (
            <>
              <p>
                When analytics is enabled on this site, we may use Google Analytics 4 with IP anonymization to count visits, see which pages are useful, and improve the site. Analytics does not collect personally identifiable information from this site by design.
              </p>
              <p>
                You can block analytics scripts entirely with browser settings or extensions, and the site will continue to work normally.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              This site uses a small number of functional cookies and local-storage entries (for example, to remember when you dismiss the mobile quick-actions bar). When analytics is enabled, it may set additional cookies. No third-party advertising cookies are set by us.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You can ask to see, correct, or delete the information we hold about you at any time. Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              and we will respond within a reasonable period.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy? Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-[var(--ink-navy)] underline decoration-[var(--signal-blue)] underline-offset-4"
              >
                {SITE.email}
              </a>
              . A real person reads it.
            </p>
          ),
        },
      ]}
    />
  );
}
