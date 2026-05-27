import { BrowserFrame } from "./BrowserFrame";

/**
 * Side-by-side "before / after" website mockup.
 *
 * Pure CSS — no real screenshots. The intent is to convey the *shape* of
 * the problem (cramped header, tiny phone link, walls of text) and the
 * shape of the fix (mobile-first stack, big tap-to-call, clean services).
 *
 * Used on /features. Honestly labeled as concept, not a real client.
 */
export function BeforeAfter() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <PaneCard label="Before" tone="rose">
        <BrowserFrame url="oldroofingsite.com" className="!shadow-none">
          <BeforePane />
        </BrowserFrame>
        <PaneList
          tone="rose"
          items={[
            "Slow, cramped header",
            "Phone number buried",
            "Wall of unread text",
            "No quote path",
            "No reviews or trust",
            "No mobile call button",
          ]}
        />
      </PaneCard>

      <PaneCard label="After" tone="signal">
        <BrowserFrame url="summitridgeroofing.com" className="!shadow-none">
          <AfterPane />
        </BrowserFrame>
        <PaneList
          tone="signal"
          items={[
            "Mobile-first layout",
            "Tap-to-call always visible",
            "Quote form above the fold",
            "Three clear services",
            "Reviews and warranty proof",
            "Loads fast, looks current",
          ]}
        />
      </PaneCard>
    </div>
  );
}

function PaneCard({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "rose" | "signal";
  children: React.ReactNode;
}) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <figcaption className="flex items-center gap-2.5">
        <span
          className={`inline-flex h-6 items-center rounded-full px-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
            tone === "rose"
              ? "bg-[var(--alert-rose-soft)] text-[#9f1239]"
              : "bg-[var(--signal-blue-soft)] text-[var(--signal-blue-deep)]"
          }`}
        >
          {label}
        </span>
        <span className="text-[0.78rem] text-[var(--warm-ash)]">
          Concept comparison. Not a real client site.
        </span>
      </figcaption>
      {children}
    </figure>
  );
}

function PaneList({
  items,
  tone,
}: {
  items: string[];
  tone: "rose" | "signal";
}) {
  return (
    <ul className="grid gap-2">
      {items.map((it) => (
        <li
          key={it}
          className="flex items-start gap-2.5 text-[0.9rem] text-[var(--ink-navy)]"
        >
          <span
            aria-hidden
            className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full ${
              tone === "rose"
                ? "bg-[var(--alert-rose)]"
                : "bg-[var(--signal-blue)]"
            }`}
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------------------------------------
   Before pane — cramped, beige, "2014 template" feel.
   ---------------------------------------------------------- */
function BeforePane() {
  return (
    <div className="bg-[#efe7d4] px-3 py-3 text-[#5b5440]">
      <div className="flex items-center justify-between border-b border-[#d6cbb1] pb-2 text-[8px]">
        <span className="font-serif font-bold uppercase">ACME ROOFING CO.</span>
        <span className="opacity-70">Home · Services · About · Contact</span>
      </div>
      <p className="mt-2 font-serif text-[10px] leading-tight">
        Welcome to our website. We have been roofing since 1987 and are pleased to
        serve our community. Please browse our services below or scroll down to learn
        more about us and what we do.
      </p>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-7 rounded-[2px] bg-[#d6cbb1]"
          />
        ))}
      </div>
      <p className="mt-2 text-[7px] opacity-60">
        Call us: 555-0123 · Open Mon-Fri 8a-4p · Some restrictions apply
      </p>
    </div>
  );
}

/* ----------------------------------------------------------
   After pane — mobile-first, signature studio look.
   ---------------------------------------------------------- */
function AfterPane() {
  return (
    <div className="bg-[#0b1b33] px-4 py-4 text-[var(--cream-paper)]">
      <div className="flex items-center justify-between text-[9px]">
        <span className="font-semibold uppercase tracking-[0.12em] text-[#ff9b6a]">
          Summit Ridge
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#ff9b6a]/15 px-2 py-0.5 text-[#ff9b6a]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff9b6a]" />
          Call now
        </span>
      </div>
      <h4 className="mt-3 text-[14px] font-semibold leading-tight">
        Storm damage? We answer the phone.
      </h4>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="inline-flex items-center rounded-full bg-[#ff9b6a] px-2.5 py-1 text-[9px] font-semibold text-[#0b1b33]">
          Free roof inspection
        </span>
        <span className="inline-flex items-center rounded-full border border-white/20 px-2 py-1 text-[9px]">
          See services
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        <ServicePill label="Repair" />
        <ServicePill label="Replace" highlight />
        <ServicePill label="Inspect" />
      </div>
      <div className="mt-3 rounded-md bg-white/[0.06] px-2 py-1.5 text-[8px] text-[var(--cream-edge)]">
        ★★★★★ &nbsp;Trusted by 600+ Arlington homeowners
      </div>
    </div>
  );
}

function ServicePill({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-[6px] px-2 py-1.5 text-[9px] font-semibold ${
        highlight
          ? "bg-[#ff9b6a]/15 text-[#ff9b6a]"
          : "bg-white/[0.04] text-[var(--cream-edge)]"
      }`}
    >
      <div
        className={`mb-1 h-1 w-4 rounded-full ${
          highlight ? "bg-[#ff9b6a]" : "bg-white/30"
        }`}
      />
      {label}
    </div>
  );
}
