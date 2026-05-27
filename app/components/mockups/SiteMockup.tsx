import type { CSSProperties } from "react";

export type SiteMockupPalette = {
  surface: string;
  surfaceDeep: string;
  ink: string;
  accent: string;
  accentSoft: string;
};

type SiteMockupProps = {
  businessName: string;
  tagline: string;
  primaryCta: string;
  serviceLabels: [string, string, string];
  palette: SiteMockupPalette;
  showPhoneNumber?: boolean;
};

/**
 * A compact concept screenshot of a business website. Used inside BrowserFrame.
 * Palettes vary per industry. Composition is deliberately abstract: no fake photos,
 * no fake metrics. Just confident layout, color, and information rhythm.
 */
export function SiteMockup({
  businessName,
  tagline,
  primaryCta,
  serviceLabels,
  palette,
  showPhoneNumber = true,
}: SiteMockupProps) {
  const surface = palette.surface;
  const onDark = isDark(surface);

  const styles: CSSProperties = {
    backgroundColor: surface,
    color: palette.ink,
  };

  const accentInk = onDark ? "#ffffff" : palette.ink;

  return (
    <div className="p-6 sm:p-8" style={styles}>
      <header className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: palette.accent }}>
          {firstWord(businessName)}
        </span>
        {showPhoneNumber ? (
          <span
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{ backgroundColor: hex(palette.accent, 0.12), color: palette.accent }}
          >
            <PhoneGlyph color={palette.accent} />
            Call now
          </span>
        ) : null}
      </header>

      <h3
        className="mt-6 text-[1.5rem] sm:text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.018em]"
        style={{ color: accentInk }}
      >
        {tagline}
      </h3>

      <div className="mt-5 flex items-center gap-2.5">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium"
          style={{ backgroundColor: palette.accent, color: surface }}
        >
          {primaryCta}
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium border"
          style={{
            borderColor: hex(palette.ink, 0.18),
            color: palette.ink,
            backgroundColor: "transparent",
          }}
        >
          See services
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {serviceLabels.map((label, i) => (
          <div
            key={label}
            className="rounded-xl p-3"
            style={{
              backgroundColor: i === 1 ? palette.accentSoft : palette.surfaceDeep,
              color: i === 1 ? palette.accent : palette.ink,
            }}
          >
            <div
              className="h-1.5 w-6 rounded-full mb-2"
              style={{ backgroundColor: i === 1 ? palette.accent : hex(palette.ink, 0.3) }}
            />
            <p className="text-[10px] font-semibold leading-tight">{label}</p>
            <div
              className="mt-2 h-0.5 w-full rounded-full"
              style={{ backgroundColor: hex(palette.ink, 0.12) }}
            />
            <div
              className="mt-1 h-0.5 w-3/4 rounded-full"
              style={{ backgroundColor: hex(palette.ink, 0.12) }}
            />
          </div>
        ))}
      </div>

      <footer
        className="mt-6 flex items-center justify-between rounded-xl px-3 py-2.5"
        style={{ backgroundColor: palette.surfaceDeep, color: palette.ink }}
      >
        <span className="text-[10px] font-medium opacity-80">★ ★ ★ ★ ★ 4.9 (122 reviews)</span>
        <span className="text-[10px] font-medium opacity-70">Get a quote →</span>
      </footer>
    </div>
  );
}

function PhoneGlyph({ color }: { color: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M3 2h1.4l.5 1.6-.9.6a4.1 4.1 0 002.3 2.3l.6-.9 1.6.5V7.4c0 .5-.4.9-.9.9A6 6 0 012.1 3c0-.5.4-.9.9-.9z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function firstWord(name: string) {
  return name.split(/\s/)[0].toUpperCase();
}

function isDark(hex: string) {
  const v = hex.replace("#", "");
  if (v.length < 6) return false;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 130;
}

function hex(color: string, alpha: number) {
  const v = color.replace("#", "");
  if (v.length !== 6) return color;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
