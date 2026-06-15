import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { MobileStickyCTA } from "@/app/components/site/MobileStickyCTA";
import { Analytics } from "@/app/components/site/Analytics";
import { ScrollToTopOnNavigation } from "@/app/components/site/ScrollToTopOnNavigation";
import { SITE, SHARE_IMAGES } from "@/app/data/site";

// Headings + body: a grounded, slightly mechanical grotesque with more
// character than the previous Vercel-default Geist.
const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Numbers, labels, and stats: an instrument-readout monospace. Carries the
// Lighthouse scores, pricing, and the oversized section index numbers.
const monoStat = Martian_Mono({
  variable: "--font-mono-stat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martinwebworks.com"),
  title: {
    default: `${SITE.name} · Conversion-focused websites for service businesses`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    title: `${SITE.name} · Conversion-focused websites for service businesses`,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: SHARE_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Conversion-focused websites for service businesses`,
    description: SITE.description,
    images: SHARE_IMAGES,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification.
  // TODO: replace the empty string with the meta token Search Console issues
  // after the property is added. Until then this stays empty and no tag is
  // emitted.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${monoStat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <noscript>
          {/* Keep scroll-reveal headings visible without JavaScript. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Bitdefender)
          inject attributes like `bis_register` into <body> before React
          hydrates, which would otherwise log a dev-only mismatch warning. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--ink-navy)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--cream-paper)]"
        >
          Skip to content
        </a>
        <ScrollToTopOnNavigation />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileStickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
