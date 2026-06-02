import { ImageResponse } from "next/og";

/**
 * Shared Open Graph / Twitter image renderer.
 *
 * Lives in a private folder (`_og`) so Next does not treat it as a route.
 * `app/opengraph-image.tsx` and `app/twitter-image.tsx` re-export the
 * defaults from here so both meta tags resolve to the same 1200x630 image.
 *
 * No external assets, no client logos, no stock photos. Just brand mark,
 * headline, and footer rendered with the satori defaults so the build is
 * fully self-contained.
 */

export const alt =
  "Martin Web Works. Websites for service businesses that need more calls, quote requests, and booked jobs.";

export const size = { width: 1200, height: 630 } as const;

export const contentType = "image/png";

const CREAM_PAPER = "#FAF7F2";
const CREAM_DEEP = "#F3EEE5";
const INK_NAVY = "#0B1B33";
const SIGNAL_BLUE = "#1f6fed";
const WARM_ASH = "#5A6478";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px",
          background: CREAM_PAPER,
          color: INK_NAVY,
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        {/* Quiet grid lattice on the right half — abstract, no photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `radial-gradient(circle at 85% 30%, ${CREAM_DEEP} 0px, transparent 360px)`,
          }}
        />

        {/* Header row: studio mark + small eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: INK_NAVY,
                color: CREAM_PAPER,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              MW
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: WARM_ASH,
                  fontWeight: 600,
                }}
              >
                Martin Web Works
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: WARM_ASH,
                  marginTop: "4px",
                }}
              >
                Custom websites for service businesses
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              background: CREAM_DEEP,
              borderRadius: "999px",
              fontSize: "16px",
              color: INK_NAVY,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: SIGNAL_BLUE,
              }}
            />
            martinwebworks.com
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            position: "relative",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: INK_NAVY,
            }}
          >
            Websites for service businesses that need more calls, quote requests, and booked jobs.
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: WARM_ASH,
              maxWidth: "780px",
            }}
          >
            Built, hosted, and maintained by a small studio. Free 30-minute website audits.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            color: WARM_ASH,
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <span>Starter · Growth · Authority</span>
            <span
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background: WARM_ASH,
                opacity: 0.5,
              }}
            />
            <span>From $1,995</span>
          </div>
          <div style={{ color: INK_NAVY, fontWeight: 600 }}>
            Book a free website audit
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
