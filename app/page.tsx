import type { ReactNode, SVGProps } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const TRUST_BULLETS = [
  "Built for mobile first",
  "Clear pricing and fast turnaround",
  "Lead forms, call buttons, and launch support included",
];

const PROBLEM_CARDS = [
  {
    title: "Outdated design",
    body: "If your site looks like it was built ten years ago, visitors assume your business runs the same way.",
  },
  {
    title: "Weak mobile experience",
    body: "Most local searches happen on a phone. A site that breaks on mobile is a site that loses leads.",
  },
  {
    title: "No clear next step",
    body: "If a visitor can't find your phone number or a way to request a quote in seconds, they're gone.",
  },
];

const SERVICES = [
  {
    title: "Website design and rebuilds",
    body: "Clean, modern builds and rebuilds focused on clarity, speed, and credibility for local service businesses.",
    Icon: IconLayout,
  },
  {
    title: "Lead forms and quote requests",
    body: "Smart contact and quote forms with click-to-call buttons designed to convert real visitors into real leads.",
    Icon: IconForm,
  },
  {
    title: "Local SEO structure",
    body: "On-page SEO basics, location targeting, and clean structure so the right customers can find you.",
    Icon: IconMap,
  },
  {
    title: "Domain and launch setup",
    body: "Domain connection, DNS, hosting, SSL, and a calm, careful launch — without breaking your email.",
    Icon: IconRocket,
  },
  {
    title: "Analytics setup",
    body: "Google Analytics and Search Console wired up so you can actually see what your site is doing.",
    Icon: IconChart,
  },
  {
    title: "Maintenance and updates",
    body: "Ongoing care plans for updates, content edits, form monitoring, and steady improvements over time.",
    Icon: IconWrench,
  },
];

const AUDIENCE_TAGS = [
  "Contractors",
  "Landscapers",
  "Roofers",
  "Electricians",
  "Plumbers",
  "Auto detailers",
  "Med spas",
  "Dentists",
  "Law firms",
  "Consultants",
  "Local service businesses",
  "Professional firms",
];

type Package = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  badge?: string;
  featured?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Starter Website",
    price: "From $1,500",
    blurb:
      "Best for solo operators or small businesses that need a clean, professional online presence fast.",
    features: [
      "1–3 page website",
      "Mobile-friendly design",
      "Homepage, services section, and contact section",
      "Click-to-call button",
      "Contact form",
      "Basic SEO setup",
      "Domain connection",
      "1 revision round",
      "Launch support",
    ],
  },
  {
    name: "Growth Website",
    price: "From $2,500",
    badge: "Most Popular",
    featured: true,
    blurb:
      "Best for businesses that want a stronger site built to generate more calls and quote requests.",
    features: [
      "5–7 page website",
      "Custom homepage",
      "Services page",
      "Individual service sections or pages",
      "Reviews/testimonials section",
      "Gallery or work examples",
      "FAQ section",
      "Contact/quote form",
      "Google Analytics setup",
      "Google Search Console setup",
      "Basic local SEO structure",
      "Domain and Vercel hosting setup",
      "2 revision rounds",
      "14 days post-launch support",
    ],
  },
  {
    name: "Lead Engine",
    price: "From $5,000",
    blurb:
      "Best for higher-value businesses that want a full website and lead capture system.",
    features: [
      "8–12 page website",
      "Service pages",
      "Location pages",
      "Advanced quote/intake form",
      "Lead tracking sheet or simple CRM setup",
      "Review capture flow",
      "Case study or project pages",
      "Conversion-focused landing pages",
      "Analytics and conversion tracking",
      "3 revision rounds",
      "30 days post-launch support",
    ],
  },
];

type Concept = {
  label: string;
  title: string;
  tagline: string;
  accent: string;
  surface: string;
  surfaceMuted: string;
  text: string;
  textMuted: string;
  cta: string;
};

const CONCEPTS: Concept[] = [
  {
    label: "Concept example",
    title: "Contractor Website Concept",
    tagline: "Northside Contracting",
    accent: "bg-slate-900",
    surface: "bg-slate-50",
    surfaceMuted: "bg-slate-200/70",
    text: "text-slate-900",
    textMuted: "text-slate-500",
    cta: "bg-amber-500 text-slate-900",
  },
  {
    label: "Concept example",
    title: "Med Spa Website Concept",
    tagline: "Linden Aesthetics",
    accent: "bg-rose-300",
    surface: "bg-rose-50",
    surfaceMuted: "bg-rose-100",
    text: "text-slate-900",
    textMuted: "text-slate-500",
    cta: "bg-rose-500 text-white",
  },
  {
    label: "Concept example",
    title: "Law Firm Website Concept",
    tagline: "Hayes & Whitford, LLP",
    accent: "bg-blue-900",
    surface: "bg-slate-50",
    surfaceMuted: "bg-slate-200/70",
    text: "text-slate-900",
    textMuted: "text-slate-500",
    cta: "bg-blue-900 text-white",
  },
  {
    label: "Concept example",
    title: "Local Service Business Concept",
    tagline: "Bright Lane Auto Detail",
    accent: "bg-blue-600",
    surface: "bg-blue-50",
    surfaceMuted: "bg-blue-100",
    text: "text-slate-900",
    textMuted: "text-slate-500",
    cta: "bg-blue-600 text-white",
  },
];

const PROCESS_STEPS = [
  {
    title: "Free website audit",
    body: "Send your current website. I'll review the biggest issues and opportunities.",
  },
  {
    title: "Proposal and plan",
    body: "You'll get a clear scope, timeline, price, and list of what I need from you.",
  },
  {
    title: "Preview build",
    body: "I build your new site privately and send a preview link before anything goes live.",
  },
  {
    title: "Launch and support",
    body: "Once approved, I connect your domain, test the forms, launch the site, and support you after launch.",
  },
];

const TRUST_CARDS = [
  {
    title: "No confusing agency process",
    body: "Direct communication, plain English, and no unnecessary meetings or jargon.",
  },
  {
    title: "You keep your domain",
    body: "Your domain stays in your account. You always own the most important piece.",
  },
  {
    title: "Built for mobile",
    body: "Every page is designed and tested on phones first, then scaled up to desktop.",
  },
  {
    title: "Lead-focused",
    body: "Calls, forms, and quote requests are the priority — not flashy effects.",
  },
  {
    title: "Fast preview process",
    body: "You see a working preview link well before launch, with time to give feedback.",
  },
  {
    title: "Ongoing support available",
    body: "Optional monthly care plans for updates, hosting support, and small improvements.",
  },
];

const FAQS = [
  {
    q: "How long does a website take?",
    a: "Most Starter sites launch in 1–2 weeks. Growth sites typically take 2–4 weeks, and Lead Engine builds run 4–6 weeks depending on scope and content readiness.",
  },
  {
    q: "What if I already have a domain?",
    a: "Great — we keep it. Your domain stays in your account. I'll guide you through pointing it at the new site without breaking anything.",
  },
  {
    q: "Will my email be affected?",
    a: "No. Email and website are separate. We only change the DNS records that point to the website and leave your email records alone.",
  },
  {
    q: "Do you write the website copy?",
    a: "I'll help shape and edit your copy, and provide a clear outline so you know exactly what to write. Full copywriting from scratch is available as an add-on.",
  },
  {
    q: "Can I update the site myself?",
    a: "Yes — for small updates I'll show you what to edit. For larger changes, a monthly care plan or one-off update is usually the easiest path.",
  },
  {
    q: "Do you offer SEO?",
    a: "Yes — basic on-page SEO, local SEO structure, and Search Console setup are included in Growth and Lead Engine. Deeper SEO work is available as an ongoing service.",
  },
  {
    q: "Do you guarantee leads?",
    a: "No honest web builder can promise a specific number of leads. What I can promise is a faster, clearer, mobile-friendly site that makes it much easier for the right customers to contact you.",
  },
  {
    q: "What do I need to provide?",
    a: "Usually: your logo (if you have one), a few photos of real work, basic business info, services you offer, and your service area. I'll send a short list so nothing gets missed.",
  },
];

const FOOTER_NAV = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <Audience />
        <Pricing />
        <Work />
        <Process />
        <Trust />
        <AuditForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg"
        >
          Martin Web Works
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#audit"
          className="inline-flex items-center justify-center rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900"
        >
          Get Free Audit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-blue-50 via-white to-white"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
            Local business websites
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Websites that make local businesses look trusted, modern, and easy
            to contact.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Martin Web Works builds fast, mobile-friendly websites for service
            businesses, professionals, and local operators who need more calls,
            quote requests, and credibility online.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#audit"
              className="inline-flex items-center justify-center rounded-full bg-blue-800 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900"
            >
              Request Free Website Audit
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              View Packages
            </a>
          </div>
          <ul className="mt-8 space-y-3">
            {TRUST_BULLETS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <CheckBadge />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center lg:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative w-full max-w-xl">
      {/* Laptop frame */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="ml-3 h-4 flex-1 rounded-md bg-slate-100" />
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-slate-900" />
            <div className="hidden gap-2 sm:flex">
              <div className="h-2 w-10 rounded bg-slate-200" />
              <div className="h-2 w-10 rounded bg-slate-200" />
              <div className="h-2 w-10 rounded bg-slate-200" />
              <div className="h-2 w-14 rounded bg-blue-700" />
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-5 ring-1 ring-blue-100">
            <div className="h-3 w-2/3 rounded bg-slate-800" />
            <div className="mt-2 h-3 w-1/2 rounded bg-slate-300" />
            <div className="mt-4 flex gap-2">
              <div className="h-7 w-28 rounded-full bg-blue-700" />
              <div className="h-7 w-20 rounded-full border border-slate-300 bg-white" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <div className="h-5 w-5 rounded-md bg-blue-100" />
                <div className="mt-2 h-2 w-12 rounded bg-slate-800" />
                <div className="mt-1.5 h-1.5 w-16 rounded bg-slate-200" />
                <div className="mt-1 h-1.5 w-10 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-sm bg-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <div className="h-2 w-16 rounded bg-slate-300" />
            </div>
            <div className="mt-2 h-2 w-full rounded bg-slate-200" />
            <div className="mt-1 h-2 w-5/6 rounded bg-slate-200" />
          </div>
        </div>
      </div>

      {/* Phone frame */}
      <div className="absolute -bottom-6 -right-3 w-32 rotate-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/15 sm:-right-6 sm:w-40">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-10 rounded bg-slate-800" />
            <div className="h-2 w-4 rounded bg-slate-300" />
          </div>
          <div className="mt-3 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-slate-200" />
            <div className="h-1.5 w-3/4 rounded bg-slate-200" />
          </div>
          <div className="mt-3 h-6 rounded-full bg-blue-700" />
          <div className="mt-2 h-2 w-2/3 rounded bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>The problem</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Most local business websites quietly lose customers.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Your website is often the first impression a customer gets. If it
            looks outdated, loads slowly, is hard to use on mobile, or makes
            people hunt for your phone number, they move on. Martin Web Works
            fixes that with clean, practical websites built around one goal:
            helping people trust your business and contact you faster.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <IconAlert className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>What you get</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your local business website needs — without the agency
            bloat.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition-colors hover:border-slate-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Who we help</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for businesses where every new lead matters.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            If a better website could help you earn even one more job,
            appointment, consultation, or quote request per month, your site
            should be working harder than it is.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {AUDIENCE_TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simple packages with clear starting prices.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-600 sm:text-base">
          Monthly care plans available from{" "}
          <span className="font-semibold text-slate-900">$99/month</span> for
          updates, hosting support, form monitoring, analytics, and ongoing
          improvements.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ pkg }: { pkg: Package }) {
  const isFeatured = pkg.featured;
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border p-7 shadow-sm transition-shadow " +
        (isFeatured
          ? "border-blue-800 bg-white shadow-blue-900/10 ring-1 ring-blue-800"
          : "border-slate-200 bg-white shadow-slate-900/5")
      }
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-blue-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/20">
          {pkg.badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{pkg.name}</h3>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
        {pkg.price}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{pkg.blurb}</p>
      <div className="mt-6 h-px bg-slate-200" />
      <ul className="mt-6 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
            <IconCheck
              className={
                "mt-0.5 h-4 w-4 flex-shrink-0 " +
                (isFeatured ? "text-blue-700" : "text-slate-500")
              }
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#audit"
        className={
          "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors " +
          (isFeatured
            ? "bg-blue-800 text-white shadow-sm shadow-blue-900/10 hover:bg-blue-900"
            : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50")
        }
      >
        Request Free Audit
      </a>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Sample work</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Sample website directions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            A few example website styles we can build for different types of
            local businesses. These are concept examples and can be adapted to
            your business.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CONCEPTS.map((concept) => (
            <ConceptCard key={concept.title} concept={concept} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
      <div className={"p-5 sm:p-6 " + concept.surface}>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className={"text-sm font-semibold " + concept.text}>
            {concept.tagline}
          </div>
          <div className="hidden gap-1.5 sm:flex">
            <span className={"h-1.5 w-8 rounded " + concept.surfaceMuted} />
            <span className={"h-1.5 w-8 rounded " + concept.surfaceMuted} />
            <span className={"h-1.5 w-8 rounded " + concept.surfaceMuted} />
          </div>
        </div>
        <div className="mt-5">
          <div className={"h-3 w-3/4 rounded " + concept.accent} />
          <div className={"mt-2 h-3 w-1/2 rounded " + concept.surfaceMuted} />
          <div className="mt-2 h-2 w-2/3 rounded bg-slate-200" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <span
            className={
              "rounded-full px-3 py-1 text-xs font-semibold " + concept.cta
            }
          >
            Get a Quote
          </span>
          <span
            className={
              "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
            }
          >
            Call Now
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={
                "rounded-lg border border-slate-200 bg-white p-2.5 " +
                concept.text
              }
            >
              <div className={"h-4 w-4 rounded " + concept.accent} />
              <div className="mt-1.5 h-1.5 w-10 rounded bg-slate-300" />
              <div className="mt-1 h-1.5 w-8 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
        <div>
          <p className="text-sm font-semibold text-slate-900">{concept.title}</p>
          <p className="mt-0.5 text-xs text-slate-500">{concept.label}</p>
        </div>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
          Concept
        </span>
      </div>
    </article>
  );
}

function Process() {
  return (
    <section id="process" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A simple process from audit to launch.
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 text-sm font-semibold text-white">
                {idx + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Why work with us</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built to be clear, practical, and easy to work with.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <IconCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditForm() {
  return (
    <section id="audit" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionEyebrow>Free website audit</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Want to know what your current website is costing you?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Send your website and I&apos;ll give you a quick audit of what
              I&apos;d fix first — design, mobile experience, calls-to-action,
              trust signals, and lead capture.
            </p>
            <p className="mt-6 text-sm text-slate-600">
              Prefer email? Reach out directly at{" "}
              <a
                href="mailto:hello@martinwebworks.com"
                className="font-semibold text-blue-800 hover:text-blue-900"
              >
                hello@martinwebworks.com
              </a>
            </p>
          </div>
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-8 lg:col-span-3"
            aria-label="Free website audit request"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={inputClasses}
                  placeholder="Your full name"
                />
              </Field>
              <Field id="business" label="Business name" required>
                <input
                  id="business"
                  name="business"
                  type="text"
                  autoComplete="organization"
                  required
                  className={inputClasses}
                  placeholder="Your company"
                />
              </Field>
              <Field id="website" label="Website URL" required>
                <input
                  id="website"
                  name="website"
                  type="url"
                  autoComplete="url"
                  required
                  className={inputClasses}
                  placeholder="https://"
                />
              </Field>
              <Field id="email" label="Email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClasses}
                  placeholder="you@business.com"
                />
              </Field>
              <Field id="phone" label="Phone" hint="optional">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                  placeholder="(555) 123-4567"
                />
              </Field>
              <Field id="goal" label="What do you want the website to do?">
                <input
                  id="goal"
                  name="goal"
                  type="text"
                  className={inputClasses}
                  placeholder="More calls, more quote requests, etc."
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="message" label="Message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClasses + " resize-y"}
                  placeholder="Anything specific you want me to look at?"
                />
              </Field>
            </div>
            <button
              type="button"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-800 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900 sm:w-auto"
            >
              Request My Free Audit
            </button>
            <p className="mt-3 text-xs text-slate-500">
              We&apos;ll review your site and follow up by email within a few
              business days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClasses =
  "block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-900/5 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200";

function Field({
  id,
  label,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700"
      >
        <span>{label}</span>
        {hint && (
          <span className="text-xs font-normal text-slate-400">({hint})</span>
        )}
        {required && (
          <span aria-hidden className="text-blue-700">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Questions local business owners usually ask.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
          {FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-900 sm:px-6 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-45">
                  <IconPlus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.35),transparent_60%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready for a website that makes your business look as good as the
              work you do?
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#audit"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 sm:w-auto"
              >
                Get Free Website Audit
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/0 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-base font-semibold tracking-tight text-slate-900">
              Martin Web Works
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Websites, lead capture, and maintenance for local businesses.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Arlington, VA / Washington, DC area</li>
              <li>
                <a
                  href="mailto:hello@martinwebworks.com"
                  className="text-slate-700 hover:text-slate-900"
                >
                  hello@martinwebworks.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-700 hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Martin Web Works. All rights
            reserved.
          </p>
          <p>Built in the DC area for local businesses.</p>
        </div>
      </div>
    </footer>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
      {children}
    </span>
  );
}

function CheckBadge() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
      <IconCheck className="h-3 w-3" />
    </span>
  );
}

/* ---------- Icons ---------- */

function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M10 2L1.5 17h17L10 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 8v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10" cy="14.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLayout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <rect
        x="2.5"
        y="3.5"
        width="15"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M2.5 7.5h15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 7.5v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconForm(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6 8h8M6 11h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="13"
        width="5"
        height="2"
        rx="1"
        fill="currentColor"
        opacity=".6"
      />
    </svg>
  );
}

function IconMap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M10 2c-2.8 0-5 2.1-5 4.8 0 3.7 5 10.2 5 10.2s5-6.5 5-10.2C15 4.1 12.8 2 10 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="7" r="1.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconRocket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M13.5 2.5c-3 .5-5.6 2.4-7 5l-1.5.2A2 2 0 003.4 9l1.3 1.3 1.4 1.4L7.4 13a2 2 0 001.3-1.6l.2-1.5c2.6-1.4 4.5-4 5-7l-.4-.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 16c1-1 2.5-1 3.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M3 16h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="5" y="9" width="2.5" height="5" rx="0.5" fill="currentColor" />
      <rect x="9" y="6" width="2.5" height="8" rx="0.5" fill="currentColor" />
      <rect
        x="13"
        y="11"
        width="2.5"
        height="3"
        rx="0.5"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M13.5 2.5a4 4 0 00-3.6 5.7L3 15.1l1.9 1.9 6.9-6.9a4 4 0 005.7-3.6l-2.4 2.4-2.1-2.1 2.5-2.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
