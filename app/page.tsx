import type { ReactNode, SVGProps } from "react";

const CONTACT_EMAIL = "johnrothwellmartin3@gmail.com";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Monthly Care", href: "#monthly-care" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const HERO_TRUST = [
  "Custom website builds starting at $1,995",
  "Managed hosting and care available from $99/month",
  "Optional AI Lead Assistant for FAQs and lead capture",
];

const WHAT_WE_DO = [
  {
    title: "We build the website",
    body: "Clean, mobile-friendly pages designed around your services, trust signals, and calls-to-action.",
    Icon: IconLayout,
  },
  {
    title: "We launch and host it",
    body: "We connect your domain, set up secure hosting, test forms, and make sure the site goes live cleanly.",
    Icon: IconRocket,
  },
  {
    title: "We keep it updated",
    body: "Need new photos, service changes, testimonials, or small edits? Monthly care plans keep the site from going stale.",
    Icon: IconWrench,
  },
  {
    title: "We can add smarter lead capture",
    body: "Add quote forms, review flows, lead tracking, or an AI Lead Assistant that answers common questions and collects visitor details.",
    Icon: IconSpark,
  },
];

const PROBLEM_CARDS = [
  {
    title: "Looks outdated",
    body: "Old fonts, stretched photos, and clunky layouts make people quietly assume the business is behind the times.",
  },
  {
    title: "Hard to use on mobile",
    body: "Tiny text, broken menus, and forms that don't fit on a phone screen lose customers in seconds.",
  },
  {
    title: "No clear quote/contact path",
    body: "If a visitor has to hunt for the phone number or a quote form, they call someone else instead.",
  },
  {
    title: "No one maintains it after launch",
    body: "The site goes stale, photos get old, services change, and small problems pile up unnoticed.",
  },
];

const BUILD_INCLUDES = [
  "Mobile-first design",
  "Clear call-to-action buttons",
  "Contact or quote form",
  "Click-to-call setup",
  "Basic on-page SEO",
  "Google Analytics setup",
  "Google Search Console setup",
  "Domain connection help",
  "Secure hosting setup",
  "Form testing before launch",
  "30 days post-launch support",
  "Clean handoff and next-step plan",
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
    price: "From $1,995",
    blurb:
      "Best for solo operators, new businesses, or simple local service sites.",
    features: [
      "3–5 page website",
      "Mobile-friendly design",
      "Homepage, services, about, and contact structure",
      "One lead/contact form",
      "Click-to-call buttons",
      "Basic SEO titles and descriptions",
      "Domain connection help",
      "1 revision round",
      "30 days post-launch support",
    ],
  },
  {
    name: "Growth Website",
    price: "From $3,995",
    badge: "Most Popular",
    featured: true,
    blurb:
      "Best for businesses that want a stronger site built to earn more calls and quote requests.",
    features: [
      "5–10 page website",
      "Custom homepage",
      "Individual service pages",
      "Reviews/testimonials section",
      "Gallery or work examples",
      "FAQ section",
      "Contact/quote form",
      "Better local SEO structure",
      "Analytics and Search Console setup",
      "2 revision rounds",
      "30 days post-launch support",
    ],
  },
  {
    name: "Authority Website",
    price: "From $6,995",
    blurb:
      "Best for higher-value service businesses, professional firms, or companies with multiple services/locations.",
    features: [
      "10–20 page website",
      "Service and location page structure",
      "Advanced quote/intake form",
      "Case study or project pages",
      "Stronger conversion paths",
      "Copy polishing or partial copywriting",
      "Lead routing or CRM handoff planning",
      "3 revision rounds",
      "45 days post-launch support",
    ],
  },
];

type CarePlan = {
  name: string;
  price: string;
  priceUnit: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

const CARE_PLANS: CarePlan[] = [
  {
    name: "Managed Hosting",
    price: "$99",
    priceUnit: "/month",
    blurb:
      "For businesses that want the site hosted and watched without regular content updates.",
    features: [
      "Managed hosting",
      "SSL/security basics",
      "Form monitoring",
      "Uptime checks",
      "Technical fixes if something breaks",
      "Email support",
    ],
  },
  {
    name: "Care Plan",
    price: "$199",
    priceUnit: "/month",
    featured: true,
    blurb: "For businesses that want small monthly updates handled for them.",
    features: [
      "Everything in Managed Hosting",
      "Up to 1 hour of small monthly edits",
      "Photo, text, testimonial, and service updates",
      "Monthly performance check",
      "Basic analytics summary",
      "Priority support",
    ],
  },
  {
    name: "Growth Ops",
    price: "$399",
    priceUnit: "/month",
    blurb: "For businesses that want the website improved over time.",
    features: [
      "Everything in Care Plan",
      "Up to 3 hours of updates/month",
      "New landing page or service section support",
      "Local SEO/content improvements",
      "Review/testimonial refreshes",
      "Lead tracking improvements",
      "Monthly strategy check-in",
    ],
  },
];

type AIPlan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
};

const AI_PLANS: AIPlan[] = [
  {
    name: "AI Lead Assistant",
    price: "From $1,500 setup + $149/month",
    blurb: "Best for FAQs and basic lead capture.",
    features: [
      "Answering common customer questions",
      "Collecting name, email, phone, and service need",
      "Routing visitors to a quote form",
      "Sending lead details to your inbox",
      "Staying within approved business information",
    ],
  },
  {
    name: "AI Booking / Intake Assistant",
    price: "From $3,000 setup + $399/month",
    blurb: "Best for appointment-based or higher-ticket businesses.",
    features: [
      "More detailed intake questions",
      "Appointment or consultation routing",
      "Service qualification",
      "CRM or calendar handoff planning",
      "Monthly knowledge updates",
      "Ongoing testing and monitoring",
    ],
  },
];

type Concept = {
  industry: string;
  title: string;
  headline: string;
  cta: string;
  services: string[];
  formLabel: string;
  palette: {
    page: string;
    accent: string;
    accentText: string;
    chip: string;
    muted: string;
    headlineText: string;
    badgeBg: string;
    badgeText: string;
    ctaBg: string;
    ctaText: string;
  };
};

const CONCEPTS: Concept[] = [
  {
    industry: "Contractor / Home Services",
    title: "Northside Contracting",
    headline: "Reliable home repairs done right the first time.",
    cta: "Request a free quote",
    services: ["Repairs", "Remodels", "Additions"],
    formLabel: "Quote request",
    palette: {
      page: "bg-slate-900",
      accent: "bg-amber-400",
      accentText: "text-amber-400",
      chip: "bg-slate-800 text-slate-200",
      muted: "bg-slate-800",
      headlineText: "text-white",
      badgeBg: "bg-amber-400",
      badgeText: "text-slate-900",
      ctaBg: "bg-amber-400",
      ctaText: "text-slate-900",
    },
  },
  {
    industry: "Med Spa / Wellness",
    title: "Linden Aesthetics",
    headline: "Modern aesthetics. Quiet, considered care.",
    cta: "Book a consultation",
    services: ["Facials", "Injectables", "Skin care"],
    formLabel: "Consultation request",
    palette: {
      page: "bg-rose-50",
      accent: "bg-rose-400",
      accentText: "text-rose-700",
      chip: "bg-white text-rose-700 ring-1 ring-rose-200",
      muted: "bg-rose-100",
      headlineText: "text-slate-900",
      badgeBg: "bg-rose-500",
      badgeText: "text-white",
      ctaBg: "bg-rose-500",
      ctaText: "text-white",
    },
  },
  {
    industry: "Law Firm / Professional Services",
    title: "Hayes & Whitford, LLP",
    headline: "Practical counsel for businesses and families.",
    cta: "Schedule a consultation",
    services: ["Business law", "Estate planning", "Real estate"],
    formLabel: "Consultation request",
    palette: {
      page: "bg-[#0B1B33]",
      accent: "bg-amber-300",
      accentText: "text-amber-300",
      chip: "bg-white/10 text-white",
      muted: "bg-white/10",
      headlineText: "text-white",
      badgeBg: "bg-white",
      badgeText: "text-[#0B1B33]",
      ctaBg: "bg-white",
      ctaText: "text-[#0B1B33]",
    },
  },
  {
    industry: "Auto Detail / Local Service",
    title: "Bright Lane Auto Detail",
    headline: "Showroom-finish detailing, booked in 60 seconds.",
    cta: "Book detailing",
    services: ["Interior", "Exterior", "Ceramic coating"],
    formLabel: "Booking request",
    palette: {
      page: "bg-blue-50",
      accent: "bg-blue-600",
      accentText: "text-blue-700",
      chip: "bg-white text-blue-700 ring-1 ring-blue-200",
      muted: "bg-blue-100",
      headlineText: "text-slate-900",
      badgeBg: "bg-blue-600",
      badgeText: "text-white",
      ctaBg: "bg-blue-600",
      ctaText: "text-white",
    },
  },
];

const PROCESS_STEPS = [
  {
    title: "Free audit",
    body: "Send your current site or business info. We identify what should be fixed first.",
  },
  {
    title: "Scope and price",
    body: "You get a clear package recommendation, timeline, and list of what is included.",
  },
  {
    title: "Build preview",
    body: "We build the site privately and send you a preview link before anything goes live.",
  },
  {
    title: "Launch",
    body: "We connect the domain, test the forms, check mobile, and publish the site.",
  },
  {
    title: "Ongoing care",
    body: "If you want, we host and maintain the site so updates and technical issues are handled for you.",
  },
];

const TRUST_CARDS = [
  {
    title: "You keep your domain",
    body: "Your domain stays in your account. You always own the most important piece.",
  },
  {
    title: "Your email stays separate",
    body: "We only touch the website-related settings. Business email keeps working as-is.",
  },
  {
    title: "No surprise technical setup",
    body: "We handle the technical pieces quietly and explain only the few things you need to know.",
  },
  {
    title: "Preview before launch",
    body: "You see a working preview link, with time to review and ask for changes before going live.",
  },
  {
    title: "Clear monthly plan options",
    body: "Hosting and care are simple, optional, and explained in plain English — no lock-in tricks.",
  },
  {
    title: "Transfer discussion available if you ever leave",
    body: "If you ever cancel, we'll walk you through how to move the site or domain to another setup.",
  },
];

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Starter builds begin at $1,995. Most local businesses choose the Growth Website starting at $3,995. Larger sites with more services, locations, or lead capture needs start at $6,995.",
  },
  {
    q: "Is hosting included?",
    a: "The website build is a one-time project. Ongoing hosting and care plans are available starting at $99/month so your site stays online, monitored, and supported after launch.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes. Your domain stays in your account. We help connect it to the new site without taking ownership of it.",
  },
  {
    q: "Will my email be affected?",
    a: "No. Business email is separate from the website. We are careful to only change the website-related settings needed to point your domain to the new site.",
  },
  {
    q: "Can you update the site after launch?",
    a: "Yes. Monthly care plans are available for edits, new photos, service changes, testimonials, new pages, and ongoing improvements.",
  },
  {
    q: "What happens if I cancel monthly care?",
    a: "We will explain your options clearly. Depending on your setup, we can discuss transferring the site or moving you to another hosting arrangement.",
  },
  {
    q: "Is the AI Lead Assistant required?",
    a: "No. It is optional. Most businesses should start with a strong website and lead form first. The AI assistant is useful when you want automated FAQ help, lead capture, or intake support.",
  },
  {
    q: "Do you guarantee leads?",
    a: "No honest website builder can guarantee a specific number of leads. What we can do is build a faster, clearer, more trustworthy website that makes it easier for customers to contact you.",
  },
  {
    q: "What do I need to provide?",
    a: "Your logo if you have one, business contact info, list of services, service area, photos if available, reviews/testimonials, and access to your domain when it is time to launch.",
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Problem />
        <BeforeAfter />
        <BuildIncludes />
        <Packages />
        <MonthlyCare />
        <AIAssistant />
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

/* ============================ HEADER ============================ */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            Martin Web Works
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:block">
            Websites · Hosting · Monthly Care
          </span>
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
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
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900 sm:px-5"
        >
          Free Website Audit
        </a>
      </div>
    </header>
  );
}

/* ============================ HERO ============================ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-blue-50 via-white to-white"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <SectionEyebrow>For local business owners</SectionEyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Websites for local businesses — built, hosted, and managed for you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Martin Web Works helps service businesses and local professionals
            get a modern website that looks trustworthy, works on mobile,
            captures leads, and stays supported after launch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCTA href="#contact">Request a Free Website Audit</PrimaryCTA>
            <SecondaryCTA href="#packages">View Packages</SecondaryCTA>
          </div>
          <ul className="mt-9 space-y-3">
            {HERO_TRUST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-slate-700"
              >
                <CheckBadge />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center lg:justify-end">
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}

function HeroComposition() {
  return (
    <div className="relative w-full max-w-xl">
      {/* Main browser/laptop frame */}
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-slate-100 px-2 text-[10px] font-medium text-slate-400">
            yourbusiness.com
          </div>
        </div>
        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-blue-700" />
              <div className="h-3 w-20 rounded bg-slate-900" />
            </div>
            <div className="hidden gap-2 sm:flex">
              <div className="h-2 w-10 rounded bg-slate-200" />
              <div className="h-2 w-10 rounded bg-slate-200" />
              <div className="h-2 w-14 rounded bg-blue-700" />
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 via-white to-white p-5 ring-1 ring-blue-100">
            <div className="h-3 w-3/4 rounded bg-slate-900" />
            <div className="mt-2 h-3 w-1/2 rounded bg-slate-300" />
            <div className="mt-3 h-2 w-2/3 rounded bg-slate-200" />
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="flex h-8 items-center rounded-full bg-blue-700 px-3 text-[10px] font-semibold text-white">
                Get a Quote
              </div>
              <div className="flex h-8 items-center rounded-full border border-slate-300 bg-white px-3 text-[10px] font-semibold text-slate-700">
                Call (555) 123-4567
              </div>
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
            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Quote request
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="h-6 rounded bg-white ring-1 ring-slate-200" />
              <div className="h-6 rounded bg-white ring-1 ring-slate-200" />
              <div className="col-span-2 h-6 rounded bg-white ring-1 ring-slate-200" />
            </div>
            <div className="mt-2 h-7 w-28 rounded-full bg-blue-700" />
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="absolute -bottom-8 -left-3 w-28 rotate-[-4deg] rounded-[1.4rem] border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/15 sm:-left-6 sm:w-36">
        <div className="rounded-[1.1rem] bg-slate-50 p-2.5">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-8 rounded bg-slate-800" />
            <div className="h-1.5 w-3 rounded bg-slate-300" />
          </div>
          <div className="mt-2.5 h-10 rounded-md bg-gradient-to-br from-blue-100 to-blue-50" />
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded bg-slate-200" />
            <div className="h-1.5 w-3/4 rounded bg-slate-200" />
          </div>
          <div className="mt-2 h-5 rounded-full bg-blue-700" />
        </div>
      </div>

      {/* Floating: New quote request */}
      <div className="absolute -right-3 top-4 hidden w-52 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
            <IconBell className="h-4 w-4" />
          </span>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
            New quote request
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-900">
          Sarah K. — Kitchen remodel
        </div>
        <div className="mt-0.5 text-xs text-slate-500">2 minutes ago</div>
      </div>

      {/* Floating: Site live + secure */}
      <div className="absolute -left-2 top-24 hidden w-44 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 md:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
            <IconShield className="h-3.5 w-3.5" />
          </span>
          <div className="text-xs font-semibold text-slate-900">
            Site live + secure
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          SSL active · uptime 99.9%
        </div>
      </div>

      {/* Floating: Monthly updates handled */}
      <div className="absolute -bottom-6 right-2 hidden w-48 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-amber-100">
            <IconWrench className="h-3.5 w-3.5" />
          </span>
          <div className="text-xs font-semibold text-slate-900">
            Monthly updates handled
          </div>
        </div>
        <div className="mt-2 text-[11px] leading-relaxed text-slate-500">
          Hours, photos, services kept fresh.
        </div>
      </div>
    </div>
  );
}

/* ============================ WHAT WE DO ============================ */

function WhatWeDo() {
  return (
    <section
      id="services"
      className="border-t border-slate-100 bg-[var(--cream)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>What we actually do for you</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            One studio. Build, host, update, and capture leads.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Most business owners do not want to hire a designer, a developer, a
            hosting company, and a maintenance contact separately. We handle
            all of it.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHAT_WE_DO.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm shadow-blue-900/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {body}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-12 flex flex-wrap gap-2.5">
          {AUDIENCE_TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/[0.03]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================ PROBLEM ============================ */

function Problem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Why most local sites underperform</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Most local business websites make customers work too hard.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Customers should not have to zoom, scroll forever, hunt for your
            phone number, or wonder if your business is still active. A good
            website should quickly explain what you do, where you work, why
            people trust you, and how to contact you.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-rose-100">
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

/* ============================ BEFORE / AFTER ============================ */

function BeforeAfter() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Before · After</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            What changes when your site actually works for you.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A quick visual comparison of the kind of website most local
            businesses have today vs. what we build.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <BeforeCard />
          <AfterCard />
        </div>
      </div>
    </section>
  );
}

function BeforeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
            Before
          </span>
          <span className="text-xs text-slate-500">Typical local site</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
      <div className="space-y-4 bg-[#f6f3ee] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="h-3.5 w-28 rounded bg-slate-400" />
          <div className="hidden gap-1.5 sm:flex">
            <div className="h-2 w-8 rounded bg-slate-300" />
            <div className="h-2 w-8 rounded bg-slate-300" />
            <div className="h-2 w-8 rounded bg-slate-300" />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-3">
          <div className="col-span-2">
            <div className="h-3.5 w-full rounded bg-slate-300" />
            <div className="mt-2 h-3.5 w-2/3 rounded bg-slate-300" />
            <div className="mt-3 h-2 w-1/2 rounded bg-slate-300/70" />
            <div className="mt-1 h-2 w-1/3 rounded bg-slate-300/70" />
          </div>
          <div className="h-20 rounded-md bg-slate-300/80" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div className="h-12 rounded bg-slate-200" />
          <div className="h-12 rounded bg-slate-200" />
          <div className="h-12 rounded bg-slate-200" />
        </div>
        <div className="rounded-md bg-slate-200/80 px-3 py-2 text-[10px] uppercase tracking-wide text-slate-500">
          Last updated: 2019
        </div>
      </div>
      <ul className="space-y-2.5 border-t border-slate-200 bg-white p-6 sm:p-8">
        {[
          "Outdated, cluttered layout",
          "No clear quote or call button",
          "Hard to update without a developer",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-600"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AfterCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-lg shadow-blue-900/10 ring-1 ring-blue-100">
      <div className="flex items-center justify-between border-b border-blue-100 bg-blue-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            After
          </span>
          <span className="text-xs text-blue-900/70">Martin Web Works build</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>
      </div>
      <div className="space-y-4 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-blue-700" />
            <div className="h-3 w-20 rounded bg-slate-900" />
          </div>
          <div className="inline-flex items-center rounded-full bg-blue-700 px-2.5 py-1 text-[10px] font-semibold text-white">
            Get a Quote
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-5 ring-1 ring-blue-100">
          <div className="h-3.5 w-3/4 rounded bg-slate-900" />
          <div className="mt-2 h-3.5 w-1/2 rounded bg-slate-300" />
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="h-7 rounded-full bg-blue-700 px-3 text-[10px] font-semibold leading-[1.75rem] text-white">
              Request quote
            </div>
            <div className="h-7 rounded-full border border-slate-300 bg-white px-3 text-[10px] font-semibold leading-[1.6rem] text-slate-700">
              Call now
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 p-2.5"
            >
              <div className="h-4 w-4 rounded bg-blue-200" />
              <div className="mt-2 h-1.5 w-10 rounded bg-slate-700" />
              <div className="mt-1 h-1.5 w-8 rounded bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Monthly care active · last update 4 days ago
        </div>
      </div>
      <ul className="space-y-2.5 border-t border-slate-200 bg-white p-6 sm:p-8">
        {[
          "Modern, mobile-first layout with clear CTAs",
          "Quote form, click-to-call, and trust signals",
          "Hosted and maintained — content stays fresh",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-700"
          >
            <IconCheck className="mt-1 h-4 w-4 flex-shrink-0 text-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================ BUILD INCLUDES ============================ */

function BuildIncludes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Standard in every build</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Every website build includes the basics done right.
          </h2>
        </div>
        <div className="mt-12 rounded-3xl border border-slate-200 bg-[var(--cream)] p-6 sm:p-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BUILD_INCLUDES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3.5 ring-1 ring-slate-200"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-600">
            You do not need to know how any of this works. We handle the
            technical setup and explain the few things you actually need to
            know.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================ PACKAGES ============================ */

function Packages() {
  return (
    <section id="packages" className="border-t border-slate-100 bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>One-time builds</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Simple website build packages.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Choose the level of website your business needs now. Monthly care
            and hosting are separate so you can decide how much ongoing support
            you want after launch.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-slate-600">
          Not sure which package fits?{" "}
          <a
            href="#contact"
            className="font-semibold text-blue-800 underline-offset-4 hover:underline"
          >
            Send your current website
          </a>{" "}
          and we&apos;ll recommend the simplest option that gets the job done.
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
        "relative flex flex-col rounded-2xl border p-7 transition-shadow sm:p-8 " +
        (isFeatured
          ? "border-blue-800 bg-white shadow-xl shadow-blue-900/10 ring-1 ring-blue-800"
          : "border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]")
      }
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-blue-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/20">
          {pkg.badge}
        </span>
      )}
      <div className="flex items-baseline gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {pkg.name}
        </h3>
      </div>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
        {pkg.price}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{pkg.blurb}</p>
      <div className="mt-6 h-px bg-slate-200" />
      <ul className="mt-6 space-y-3">
        {pkg.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-sm text-slate-700"
          >
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
        href="#contact"
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

/* ============================ MONTHLY CARE (dark navy) ============================ */

function MonthlyCare() {
  return (
    <section
      id="monthly-care"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dots"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-blue-700/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
            Ongoing monthly plans
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Monthly hosting and care, explained simply.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            After your site is built, it needs to stay online, secure, updated,
            and easy to change. Our monthly plans cover the ongoing work most
            business owners do not want to deal with.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CARE_PLANS.map((plan) => (
            <CareCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-slate-300">
          Your domain stays yours. If you ever cancel, we can discuss
          transferring the site or moving you to a different setup.
        </p>
      </div>
    </section>
  );
}

function CareCard({ plan }: { plan: CarePlan }) {
  const isFeatured = plan.featured;
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border p-7 sm:p-8 " +
        (isFeatured
          ? "border-blue-400/40 bg-gradient-to-b from-blue-900/40 to-slate-900/60 ring-1 ring-blue-400/30"
          : "border-white/10 bg-white/[0.04]")
      }
    >
      {isFeatured && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most Chosen
        </span>
      )}
      <h3 className="text-xl font-semibold tracking-tight text-white">
        {plan.name}
      </h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-white">
          {plan.price}
        </span>
        <span className="text-sm font-medium text-slate-300">
          {plan.priceUnit}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {plan.blurb}
      </p>
      <div className="mt-6 h-px bg-white/10" />
      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-sm text-slate-200"
          >
            <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-300" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={
          "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors " +
          (isFeatured
            ? "bg-white text-slate-900 hover:bg-slate-100"
            : "border border-white/20 bg-transparent text-white hover:bg-white/10")
        }
      >
        Talk About This Plan
      </a>
    </div>
  );
}

/* ============================ AI LEAD ASSISTANT ============================ */

function AIAssistant() {
  return (
    <section
      id="ai-assistant"
      className="border-t border-slate-100 bg-[var(--cream)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Optional add-on</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Optional add-on: an AI Lead Assistant for your website.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            For businesses that get repeat questions or want better lead
            capture, we can add an AI Lead Assistant to your site. It can
            answer common questions, guide visitors to the right service,
            collect contact details, and send you the lead.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {AI_PLANS.map((plan) => (
              <AICard key={plan.name} plan={plan} />
            ))}
          </div>
          <AssistantMockup />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 sm:p-6">
          <p>
            <span className="font-semibold text-slate-900">
              The AI assistant is optional.
            </span>{" "}
            It does not replace you, make promises on your behalf, or answer
            questions outside the information you approve.
          </p>
        </div>
      </div>
    </section>
  );
}

function AICard({ plan }: { plan: AIPlan }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.03] sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
          <IconSpark className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {plan.name}
        </h3>
      </div>
      <p className="mt-4 text-base font-semibold text-slate-900">
        {plan.price}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {plan.blurb}
      </p>
      <div className="mt-5 h-px bg-slate-200" />
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Can help with
      </p>
      <ul className="mt-3 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
            <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssistantMockup() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white">
              <IconSpark className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Lead Assistant
              </p>
              <p className="text-[11px] text-slate-500">Online</p>
            </div>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>

        <div className="mt-4 space-y-3">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-xs text-slate-700">
            Hi! I can help with questions or set up a quote. What service do
            you need?
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-700 px-3.5 py-2 text-xs text-white">
            Roof repair after a recent storm.
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-xs text-slate-700">
            Got it. What zip code is the property in?
          </div>
          <div className="ml-auto max-w-[60%] rounded-2xl rounded-tr-sm bg-blue-700 px-3.5 py-2 text-xs text-white">
            22203
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
            <p className="font-semibold">Lead captured — sent to your inbox</p>
            <p className="mt-1 text-emerald-700/80">
              Name, email, service need, zip code
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-400">
          <span className="flex-1">Type a question…</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-white">
            <IconArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================ WORK / CONCEPTS ============================ */

function Work() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Sample work</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Example website directions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            These are concept examples to show the kind of site structure we
            can build. Once real client projects are complete, this section
            will be replaced with case studies.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {CONCEPTS.map((concept) => (
            <ConceptCard key={concept.title} concept={concept} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptCard({ concept }: { concept: Concept }) {
  const p = concept.palette;
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]">
      <div className={"relative p-6 sm:p-8 " + p.page}>
        {/* browser bar */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>

        {/* nav row */}
        <div className="mt-5 flex items-center justify-between">
          <div className={"text-sm font-semibold " + p.headlineText}>
            {concept.title}
          </div>
          <div className="hidden gap-1.5 sm:flex">
            <span className={"h-1.5 w-8 rounded " + p.muted} />
            <span className={"h-1.5 w-8 rounded " + p.muted} />
            <span className={"h-1.5 w-12 rounded " + p.accent} />
          </div>
        </div>

        {/* hero */}
        <div className="mt-6 grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div>
            <p
              className={
                "text-[10px] font-semibold uppercase tracking-[0.18em] " +
                p.accentText
              }
            >
              {concept.industry}
            </p>
            <h3
              className={
                "mt-2 text-lg font-semibold leading-snug sm:text-xl " +
                p.headlineText
              }
            >
              {concept.headline}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className={
                  "rounded-full px-3 py-1.5 text-[11px] font-semibold " +
                  p.ctaBg +
                  " " +
                  p.ctaText
                }
              >
                {concept.cta}
              </span>
              <span
                className={
                  "rounded-full px-3 py-1.5 text-[11px] font-semibold " +
                  p.chip
                }
              >
                Call now
              </span>
            </div>
          </div>

          {/* mini form */}
          <div
            className={
              "rounded-xl p-4 ring-1 ring-white/10 " +
              (p.page === "bg-rose-50" || p.page === "bg-blue-50"
                ? "bg-white"
                : "bg-white/5")
            }
          >
            <div
              className={
                "text-[10px] font-semibold uppercase tracking-wide " +
                (p.page === "bg-rose-50" || p.page === "bg-blue-50"
                  ? "text-slate-500"
                  : "text-white/60")
              }
            >
              {concept.formLabel}
            </div>
            <div className="mt-2 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={
                    "h-5 rounded " +
                    (p.page === "bg-rose-50" || p.page === "bg-blue-50"
                      ? "bg-slate-100"
                      : "bg-white/10")
                  }
                />
              ))}
            </div>
            <div
              className={
                "mt-2.5 h-6 rounded-full " + p.ctaBg + " " + p.ctaText
              }
            />
          </div>
        </div>

        {/* services row */}
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {concept.services.map((s) => (
            <div
              key={s}
              className={
                "rounded-lg p-3 " +
                (p.page === "bg-rose-50" || p.page === "bg-blue-50"
                  ? "bg-white ring-1 ring-slate-200"
                  : "bg-white/5 ring-1 ring-white/10")
              }
            >
              <div className={"h-4 w-4 rounded " + p.accent} />
              <p
                className={
                  "mt-2 text-[11px] font-semibold " +
                  (p.page === "bg-rose-50" || p.page === "bg-blue-50"
                    ? "text-slate-800"
                    : "text-white")
                }
              >
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {concept.industry} Website
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Concept example — site structure preview
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
          Concept example
        </span>
      </div>
    </article>
  );
}

/* ============================ PROCESS ============================ */

function Process() {
  return (
    <section id="process" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Simple process. No technical confusion.
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, idx) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03]"
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

/* ============================ TRUST ============================ */

function Trust() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>Ownership and clarity</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Clear ownership. No confusing tech handoff.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Some agencies make their setup deliberately confusing so you feel
            stuck. We do the opposite.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <IconShield className="h-5 w-5" />
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

/* ============================ AUDIT FORM ============================ */

function AuditForm() {
  return (
    <section id="contact" className="bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionEyebrow>Free website audit</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.05]">
              Want to know what your current website is costing you?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Send your site and I&apos;ll review the biggest fixes I&apos;d
              make first: design, mobile experience, calls-to-action, trust
              signals, SEO basics, and lead capture.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Prefer email?
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 inline-block text-base font-semibold text-blue-800 hover:text-blue-900"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-sm text-slate-600">
                Reach out directly and we&apos;ll respond within a few business
                days.
              </p>
            </div>
          </div>
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03] sm:p-8 lg:col-span-3"
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
              <Field
                id="goal"
                label="What do you want the website to help with?"
              >
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
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-800 px-5 py-3.5 text-base font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900 sm:w-auto"
            >
              Request My Free Audit
            </button>
            <p className="mt-3 text-xs text-slate-500">
              No spam. No automated follow-ups. A real reply by email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClasses =
  "block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-900/[0.03] focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200";

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

/* ============================ FAQ ============================ */

function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Questions local business owners usually ask.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]">
          {FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-900 sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-45">
                  <IconPlus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-base leading-relaxed text-slate-600 sm:px-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ FINAL CTA ============================ */

function FinalCTA() {
  return (
    <section className="bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"
          />
          <div className="relative max-w-3xl">
            <SectionEyebrow>Ready to start?</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.05]">
              Ready for a website your business can actually rely on?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Get a clear website plan, simple pricing, and the option to have
              hosting and updates handled for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA href="#contact">
                Request Free Website Audit
              </PrimaryCTA>
              <SecondaryCTA href="#packages">View Packages</SecondaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */

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
              Websites, hosting, monthly care, and lead capture for local
              businesses.
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-slate-700 hover:text-slate-900"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {NAV_LINKS.map((link) => (
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

/* ============================ SHARED UI ============================ */

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
      {children}
    </span>
  );
}

function PrimaryCTA({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-blue-800 px-6 py-3.5 text-base font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-900"
    >
      {children}
    </a>
  );
}

function SecondaryCTA({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
    >
      {children}
    </a>
  );
}

function CheckBadge() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
      <IconCheck className="h-3 w-3" />
    </span>
  );
}

/* ============================ ICONS ============================ */

function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
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

function IconSpark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M10 2l1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 13.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M5 8a5 5 0 0110 0v3l1.2 2.4a.6.6 0 01-.5.9H4.3a.6.6 0 01-.5-.9L5 11V8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 15.5a2 2 0 004 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M10 2.5l6 2v4.8c0 3.6-2.5 6.7-6 7.7-3.5-1-6-4.1-6-7.7V4.5l6-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10l2 2 3-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
