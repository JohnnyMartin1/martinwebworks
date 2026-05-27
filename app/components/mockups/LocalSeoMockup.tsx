/**
 * Local-SEO mockup: a tidy "site map" view of what a published
 * service/location structure looks like when SEO is set up well.
 *
 *   /                       Home
 *   /services               Services hub
 *   /services/roof-repair   Service page
 *   /service-areas          Areas hub
 *   /service-areas/arlington Location page
 *   /faq                    Schema-backed FAQ
 *
 * Plus a small "search result preview" panel that shows what Google
 * sees: title, URL breadcrumb, description, FAQ rich result.
 */

export function LocalSeoMockup() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SitemapPane />
      <SerpPane />
    </div>
  );
}

function SitemapPane() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        Indexed structure
      </p>
      <p className="mt-1 text-[0.92rem] font-semibold text-[var(--ink-navy)]">
        A site Google understands.
      </p>
      <ul className="mt-3 grid gap-1.5 text-[0.85rem] font-mono">
        <SiteRow path="/" label="Home" />
        <SiteRow path="/services" label="Services hub" />
        <SiteRow path="/services/roof-repair" indent={1} label="Roof repair" />
        <SiteRow path="/services/roof-replacement" indent={1} label="Roof replacement" />
        <SiteRow path="/services/storm-damage" indent={1} label="Storm damage" />
        <SiteRow path="/service-areas" label="Service areas" />
        <SiteRow path="/service-areas/arlington" indent={1} label="Arlington, VA" />
        <SiteRow path="/service-areas/falls-church" indent={1} label="Falls Church, VA" />
        <SiteRow path="/faq" label="FAQ · schema enabled" />
        <SiteRow path="/sitemap.xml" label="Sitemap · auto-updated" />
      </ul>
    </div>
  );
}

function SiteRow({
  path,
  label,
  indent = 0,
}: {
  path: string;
  label: string;
  indent?: number;
}) {
  return (
    <li
      className="grid grid-cols-[1fr_auto] items-baseline gap-3 rounded-md border border-[var(--divider)] bg-[var(--cream-paper)] px-3 py-2"
      style={{ paddingLeft: `${0.75 + indent * 0.75}rem` }}
    >
      <span className="text-[var(--signal-blue-deep)]">{path}</span>
      <span className="text-[0.78rem] text-[var(--warm-ash)] font-sans">
        {label}
      </span>
    </li>
  );
}

function SerpPane() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        Search result preview
      </p>
      <p className="mt-1 text-[0.92rem] font-semibold text-[var(--ink-navy)]">
        What Google shows people.
      </p>

      <div className="mt-4 rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4">
        <p className="text-[0.7rem] text-[var(--warm-ash)]">
          summitridgeroofing.com &nbsp;›&nbsp; service-areas &nbsp;›&nbsp; arlington
        </p>
        <p className="mt-1 text-[1rem] font-medium text-[#1a0dab]">
          Roofing in Arlington, VA · Summit Ridge Roofing
        </p>
        <p className="mt-1 text-[0.82rem] leading-snug text-[var(--warm-ash)]">
          Same-day storm damage estimates and replacements throughout Arlington. Licensed,
          insured, and reviewed locally. Free 30-minute inspection.
        </p>
        <ul className="mt-2.5 grid gap-1 border-t border-[var(--divider)] pt-2 text-[0.78rem]">
          <li className="flex items-center justify-between">
            <span className="text-[var(--ink-navy)]">
              ★★★★★ &nbsp;Trusted by Arlington homeowners
            </span>
            <span className="text-[var(--warm-ash)]">Reviews</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[var(--ink-navy)]">Same-day estimates</span>
            <span className="text-[var(--warm-ash)]">FAQ rich result</span>
          </li>
        </ul>
      </div>

      <ul className="mt-4 grid gap-1.5 text-[0.78rem] text-[var(--warm-ash)]">
        <li>· Google Business Profile aligned with site NAP</li>
        <li>· Schema for FAQ, breadcrumbs, articles, and locations</li>
        <li>· Search Console and Analytics wired before launch</li>
      </ul>
    </div>
  );
}
