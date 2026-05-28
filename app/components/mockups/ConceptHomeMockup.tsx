import type { CSSProperties } from "react";
import { BrowserFrame } from "./BrowserFrame";
import type { ExampleBusiness } from "@/app/data/examples";

/**
 * Larger, industry-specific "homepage screenshot" used on the concept
 * detail pages. Three variants — each composed of distinct layout
 * primitives so the three concept pages don't visually rhyme:
 *
 *   - roofing: emergency hero + bold CTA strip + trust + storm card
 *   - medSpa : editorial hero + treatment cards + booking strip
 *   - lawFirm: restrained masthead + practice tree + consultation strip
 *
 * Purely CSS — no stock photography, no fake reviews. Every textual
 * placeholder reads as concept content, never as a fake real claim.
 */

type Variant = "roofing" | "medSpa" | "lawFirm";

type Props = {
  variant: Variant;
  business: ExampleBusiness;
  /** Hero headline shown inside the mockup. */
  headline: string;
  /** Hero subline shown inside the mockup. */
  subline: string;
  /** Primary CTA label inside the mockup. */
  cta: string;
};

export function ConceptHomeMockup({
  variant,
  business,
  headline,
  subline,
  cta,
}: Props) {
  return (
    <BrowserFrame url={business.domain}>
      {variant === "roofing" ? (
        <RoofingHome
          business={business}
          headline={headline}
          subline={subline}
          cta={cta}
        />
      ) : null}
      {variant === "medSpa" ? (
        <MedSpaHome
          business={business}
          headline={headline}
          subline={subline}
          cta={cta}
        />
      ) : null}
      {variant === "lawFirm" ? (
        <LawFirmHome
          business={business}
          headline={headline}
          subline={subline}
          cta={cta}
        />
      ) : null}
    </BrowserFrame>
  );
}

/* ============================================================
   Roofer — emergency-first, bold, trust-forward
   ============================================================ */
function RoofingHome({
  business,
  headline,
  subline,
  cta,
}: {
  business: ExampleBusiness;
  headline: string;
  subline: string;
  cta: string;
}) {
  const p = business.palette;
  const surface: CSSProperties = {
    backgroundColor: p.surface,
    color: p.ink,
  };
  const cream = "#faf7f2";
  return (
    <div style={surface}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-3 text-[11px]"
        style={{ backgroundColor: hex(p.accent, 0.12), color: p.accent }}
      >
        <span className="font-semibold uppercase tracking-[0.12em]">
          24/7 Storm Response
        </span>
        <span className="hidden sm:inline">Licensed · Insured · GAF certified</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <span
          className="text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: p.accent }}
        >
          {business.name}
        </span>
        <nav className="hidden sm:flex items-center gap-4 text-[11px]" style={{ color: p.ink }}>
          <span>Services</span>
          <span>Storm</span>
          <span>Service Area</span>
          <span>Reviews</span>
        </nav>
        <Pill color={p.accent} text="Call now" glyph="phone" />
      </div>

      {/* Hero */}
      <div className="px-6 sm:px-10 pt-6 pb-10">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: p.accent }}
        >
          Storm damage? We answer the phone.
        </p>
        <h3
          className="mt-3 text-[1.45rem] sm:text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.015em]"
          style={{ color: p.ink }}
        >
          {headline}
        </h3>
        <p
          className="mt-3 max-w-[28rem] text-[0.9rem] leading-relaxed"
          style={{ color: hex(p.ink, 0.78) }}
        >
          {subline}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <SolidPill text={cta} bg={p.accent} fg={cream} />
          <GhostPill text="(703) 555-0142" border={hex(p.ink, 0.18)} fg={p.ink} />
        </div>
      </div>

      {/* Services strip */}
      <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: hex(p.ink, 0.08) }}>
        {(["Repair", "Replacement", "Inspection"] as const).map((s) => (
          <div
            key={s}
            className="px-4 py-4 text-center"
            style={{ backgroundColor: p.surfaceDeep, color: p.ink }}
          >
            <div className="mx-auto mb-1.5 h-7 w-7 rounded-full" style={{ backgroundColor: hex(p.accent, 0.2) }} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: p.ink }}>
              {s}
            </p>
            <p className="mt-1 text-[10.5px]" style={{ color: hex(p.ink, 0.65) }}>
              See service →
            </p>
          </div>
        ))}
      </div>

      {/* Trust strip */}
      <div
        className="grid grid-cols-2 gap-px text-[11px]"
        style={{ backgroundColor: hex(p.ink, 0.08) }}
      >
        <div className="p-4" style={{ backgroundColor: p.surface, color: p.ink }}>
          <p className="font-semibold">Sample review layout</p>
          <p className="mt-1" style={{ color: hex(p.ink, 0.65) }}>
            “Showed up next morning after the storm. Tarp on by lunch.”
          </p>
          <p className="mt-1" style={{ color: hex(p.ink, 0.45) }}>
            — Concept review (placeholder)
          </p>
        </div>
        <div className="p-4" style={{ backgroundColor: p.surface, color: p.ink }}>
          <p className="font-semibold">Insurance &amp; warranty</p>
          <p className="mt-1" style={{ color: hex(p.ink, 0.65) }}>
            We document damage with your adjuster.<br />
            10-year workmanship warranty.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Med spa — editorial, calm, treatment-led
   ============================================================ */
function MedSpaHome({
  business,
  headline,
  subline,
  cta,
}: {
  business: ExampleBusiness;
  headline: string;
  subline: string;
  cta: string;
}) {
  const p = business.palette;
  const surface: CSSProperties = {
    backgroundColor: p.surface,
    color: p.ink,
  };
  return (
    <div style={surface}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <span
          className="text-[12px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: p.accent }}
        >
          {business.name}
        </span>
        <nav className="hidden sm:flex items-center gap-4 text-[11px]" style={{ color: hex(p.ink, 0.75) }}>
          <span>Treatments</span>
          <span>Providers</span>
          <span>Gallery</span>
          <span>FAQ</span>
        </nav>
        <SolidPill text="Book" bg={p.ink} fg={p.surface} small />
      </div>

      {/* Editorial hero */}
      <div className="grid gap-0 sm:grid-cols-[1.1fr_1fr]">
        <div className="px-6 sm:px-10 py-8 sm:py-10">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: p.accent }}
          >
            Now booking · spring
          </p>
          <h3
            className="mt-3 text-[1.4rem] sm:text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.012em]"
            style={{ color: p.ink, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {headline}
          </h3>
          <p
            className="mt-3 max-w-[28rem] text-[0.9rem] leading-relaxed"
            style={{ color: hex(p.ink, 0.72) }}
          >
            {subline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <SolidPill text={cta} bg={p.ink} fg={p.surface} />
            <GhostPill text="Treatment menu" border={hex(p.ink, 0.18)} fg={p.ink} />
          </div>
          <p className="mt-5 text-[10.5px]" style={{ color: hex(p.ink, 0.55) }}>
            Complimentary 15-min consultations · Insurance not required
          </p>
        </div>
        {/* Editorial visual placeholder */}
        <div className="relative min-h-[160px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${hex(p.accent, 0.22)} 0%, ${hex(p.surfaceDeep, 1)} 100%)`,
            }}
          />
          <div
            className="absolute right-6 top-6 h-24 w-24 rounded-full"
            style={{ backgroundColor: hex(p.accent, 0.28) }}
          />
          <div
            className="absolute bottom-8 left-8 h-16 w-32 rounded-2xl"
            style={{ backgroundColor: hex(p.ink, 0.08) }}
          />
        </div>
      </div>

      {/* Treatment cards */}
      <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: hex(p.ink, 0.08) }}>
        {(
          [
            { name: "Injectables", meta: "From $14/unit" },
            { name: "Facials", meta: "From $145" },
            { name: "Laser", meta: "From $195" },
          ] as const
        ).map((t) => (
          <div
            key={t.name}
            className="px-4 py-4"
            style={{ backgroundColor: p.surface, color: p.ink }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: p.ink, fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {t.name}
            </p>
            <p className="mt-1 text-[10.5px]" style={{ color: hex(p.ink, 0.6) }}>
              {t.meta}
            </p>
            <p className="mt-2 text-[10.5px]" style={{ color: p.accent }}>
              Learn more →
            </p>
          </div>
        ))}
      </div>

      {/* Booking strip */}
      <div
        className="flex items-center justify-between px-6 py-4 text-[11px]"
        style={{ backgroundColor: p.surfaceDeep, color: p.ink }}
      >
        <span>Open this week · Tue/Thu evenings</span>
        <SolidPill text="See available times" bg={p.accent} fg={"#fff"} small />
      </div>
    </div>
  );
}

/* ============================================================
   Law firm — restrained masthead, practice tree, consult strip
   ============================================================ */
function LawFirmHome({
  business,
  headline,
  subline,
  cta,
}: {
  business: ExampleBusiness;
  headline: string;
  subline: string;
  cta: string;
}) {
  const p = business.palette;
  const surface: CSSProperties = {
    backgroundColor: p.surface,
    color: p.ink,
  };
  return (
    <div style={surface}>
      {/* Top utility bar */}
      <div
        className="flex items-center justify-between px-6 py-2 text-[10.5px]"
        style={{ backgroundColor: hex(p.ink, 0.04), color: hex(p.ink, 0.7) }}
      >
        <span>Confidential intake</span>
        <span className="hidden sm:inline">Members, DC + VA Bar</span>
      </div>

      {/* Masthead */}
      <div className="border-b px-6 py-5" style={{ borderColor: hex(p.ink, 0.1) }}>
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.22em] text-center"
          style={{ color: p.ink, fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {business.name}
        </p>
        <nav className="mt-3 flex items-center justify-center gap-5 text-[11px]" style={{ color: hex(p.ink, 0.75) }}>
          <span>Practice Areas</span>
          <span>Attorneys</span>
          <span>About</span>
          <span>Insights</span>
          <span>Contact</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="px-6 sm:px-10 py-10 text-center">
        <p
          className="text-[10.5px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: p.accent }}
        >
          Estate, business, contracts
        </p>
        <h3
          className="mx-auto mt-3 max-w-[32rem] text-[1.4rem] sm:text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.01em]"
          style={{ color: p.ink, fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {headline}
        </h3>
        <p
          className="mx-auto mt-3 max-w-[30rem] text-[0.9rem] leading-relaxed"
          style={{ color: hex(p.ink, 0.72) }}
        >
          {subline}
        </p>
        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2">
          <SolidPill text={cta} bg={p.ink} fg={p.surface} />
          <GhostPill text="Read about us" border={hex(p.ink, 0.18)} fg={p.ink} />
        </div>
        <p className="mt-5 text-[10.5px]" style={{ color: hex(p.ink, 0.55) }}>
          Submitting an inquiry does not create an attorney-client relationship.
        </p>
      </div>

      {/* Practice tree */}
      <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: hex(p.ink, 0.08) }}>
        {(
          [
            { name: "Estate Planning", body: "Wills, trusts, probate" },
            { name: "Business", body: "Formation, agreements, governance" },
            { name: "Contracts", body: "Drafting, review, disputes" },
          ] as const
        ).map((t) => (
          <div
            key={t.name}
            className="px-4 py-5"
            style={{ backgroundColor: p.surface, color: p.ink }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: p.ink, fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {t.name}
            </p>
            <p className="mt-1 text-[10.5px]" style={{ color: hex(p.ink, 0.65) }}>
              {t.body}
            </p>
            <p className="mt-2 text-[10.5px]" style={{ color: p.accent }}>
              Practice page →
            </p>
          </div>
        ))}
      </div>

      {/* Consultation strip */}
      <div
        className="px-6 py-4 text-center text-[11px]"
        style={{ backgroundColor: p.surfaceDeep, color: p.ink }}
      >
        Request a 15-minute confidential call · Reply within one business day
      </div>
    </div>
  );
}

/* ============================================================
   Shared pill primitives — keep the variants visually distinct
   without dragging in additional components.
   ============================================================ */

function SolidPill({
  text,
  bg,
  fg,
  small,
}: {
  text: string;
  bg: string;
  fg: string;
  small?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${
        small ? "px-3 py-1 text-[10.5px]" : "px-4 py-2 text-[11.5px]"
      } font-semibold`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {text}
    </span>
  );
}

function GhostPill({
  text,
  border,
  fg,
}: {
  text: string;
  border: string;
  fg: string;
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11.5px] font-semibold"
      style={{ borderColor: border, color: fg }}
    >
      {text}
    </span>
  );
}

function Pill({
  color,
  text,
  glyph,
}: {
  color: string;
  text: string;
  glyph?: "phone";
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
      style={{ backgroundColor: hex(color, 0.12), color }}
    >
      {glyph === "phone" ? (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2 3.5C2 2.7 2.7 2 3.5 2H4l1.2 2-1 1c.6 1.2 1.6 2.2 2.8 2.8l1-1L10 8v.5c0 .8-.7 1.5-1.5 1.5C4.9 10 2 7.1 2 3.5z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {text}
    </span>
  );
}

/* ============================================================
   Tiny color helper — convert an opaque hex to rgba alpha.
   Kept private to avoid leaking another color lib into the bundle.
   ============================================================ */
function hex(color: string, alpha: number): string {
  if (color.startsWith("rgb")) return color;
  const cleaned = color.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

