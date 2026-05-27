/**
 * Compact mockups of trust-building website sections:
 *   - ReviewsMockup    — review/testimonial block (clearly labeled concept)
 *   - FaqMockup        — FAQ accordion preview
 *   - TeamMockup       — staff/about cards (no real photos)
 *   - CredentialsMockup — license / insurance / certification block
 *   - GalleryMockup    — work/project gallery with colored tiles, no stock
 *
 * These are *visual templates* used on /features and example-detail
 * pages. None of them claim to represent a real client.
 */

export function ReviewsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
          What clients say
        </p>
        <p className="text-[10px] text-[var(--warm-ash-soft)]">
          Concept template
        </p>
      </div>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {SAMPLE_REVIEWS.map((r) => (
          <li
            key={r.context}
            className="rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4"
          >
            <p className="text-[0.78rem] text-[#b58a00]">★★★★★</p>
            <p className="mt-2 text-[0.85rem] leading-snug text-[var(--ink-navy)]">
              “{r.body}”
            </p>
            <p className="mt-2 text-[0.72rem] text-[var(--warm-ash)]">
              — {r.author}, {r.context}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.7rem] text-[var(--warm-ash-soft)]">
        Concept layout — real reviews replace these on a live build.
      </p>
    </div>
  );
}

const SAMPLE_REVIEWS = [
  {
    author: "Sample customer",
    context: "Roofing",
    body: "Plain text reviews live here. The component connects to Google reviews on a live build.",
  },
  {
    author: "Sample customer",
    context: "Med spa",
    body: "We keep the layout the same; only the words and names change once real reviews are live.",
  },
  {
    author: "Sample customer",
    context: "Law firm",
    body: "Concept layout — designed so verified reviews are easy to read on a phone.",
  },
];

export function FaqMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        Frequently asked
      </p>
      <ul className="mt-3 divide-y divide-[var(--divider)]">
        {FAQ_SAMPLES.map((q, i) => (
          <li key={q.q} className="py-3">
            <details open={i === 0} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-[0.92rem] font-medium text-[var(--ink-navy)] [&::-webkit-details-marker]:hidden">
                {q.q}
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--cream-deep)] text-[var(--ink-navy)] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--warm-ash)]">
                {q.a}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FAQ_SAMPLES = [
  {
    q: "How fast can someone come out?",
    a: "Same-day estimates in most cases, weather permitting. Emergencies are handled same-day until 6pm.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Yes. We document the damage, write the scope, and work with your adjuster end-to-end.",
  },
  {
    q: "What warranty do you offer?",
    a: "Manufacturer warranty plus our 10-year workmanship warranty on full replacements.",
  },
];

export function TeamMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        Meet the team
      </p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {TEAM_SAMPLES.map((p) => (
          <li
            key={p.initials}
            className="rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full text-[0.95rem] font-semibold text-[var(--ink-navy)]"
              style={{ backgroundColor: p.bg }}
              aria-hidden
            >
              {p.initials}
            </div>
            <p className="mt-3 text-[0.92rem] font-semibold text-[var(--ink-navy)]">
              {p.role}
            </p>
            <p className="mt-0.5 text-[0.78rem] text-[var(--warm-ash)]">{p.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.7rem] text-[var(--warm-ash-soft)]">
        Initials shown as placeholders. Real names and photos replace these on a live build.
      </p>
    </div>
  );
}

const TEAM_SAMPLES = [
  { initials: "DM", role: "Lead estimator", note: "10+ years on residential roofs", bg: "#f4dccb" },
  { initials: "JR", role: "Project manager", note: "Insurance claims and scheduling", bg: "#d9e7f7" },
  { initials: "AT", role: "Office manager", note: "Answers the phones", bg: "#e3eedd" },
];

export function CredentialsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
        Licensed · insured · certified
      </p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {CREDENTIALS.map((c) => (
          <li
            key={c.label}
            className="rounded-xl border border-[var(--divider)] bg-[var(--cream-paper)] p-4 text-center"
          >
            <div className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink-navy)] text-[var(--cream-paper)]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M8 1.5l5.5 2v4.7c0 3-2 5-5.5 6.3-3.5-1.3-5.5-3.3-5.5-6.3V3.5l5.5-2z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8l1.7 1.7L11 6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-2 text-[0.85rem] font-semibold text-[var(--ink-navy)]">
              {c.label}
            </p>
            <p className="mt-0.5 text-[0.72rem] text-[var(--warm-ash)]">{c.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const CREDENTIALS = [
  { label: "VA Class A", note: "Contractor license #XXXXXX" },
  { label: "GAF Master Elite", note: "Top 3% of US roofers" },
  { label: "Fully insured", note: "GL + workers comp" },
];

export function GalleryMockup() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] p-5 shadow-paper">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--warm-ash)]">
          Recent projects
        </p>
        <p className="text-[10px] text-[var(--warm-ash-soft)]">
          Concept tiles
        </p>
      </div>
      <ul className="mt-3 grid grid-cols-3 gap-2.5">
        {GALLERY_TILES.map((g, i) => (
          <li
            key={i}
            className="aspect-[4/3] rounded-xl"
            style={{ background: g.bg }}
            aria-hidden
          >
            <div className="flex h-full w-full items-end p-2">
              <span
                className="rounded-full bg-black/40 px-2 py-0.5 text-[8px] font-medium text-white"
              >
                {g.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.7rem] text-[var(--warm-ash-soft)]">
        Tiles are placeholders. Real project photos replace these on a live build.
      </p>
    </div>
  );
}

const GALLERY_TILES = [
  { label: "Arlington", bg: "linear-gradient(135deg, #d3c0a0, #8a6c45)" },
  { label: "Falls Church", bg: "linear-gradient(135deg, #c4d4e6, #5a7ea4)" },
  { label: "Bethesda", bg: "linear-gradient(135deg, #d6b6b0, #8b524b)" },
  { label: "Vienna", bg: "linear-gradient(135deg, #b9c8b0, #57755a)" },
  { label: "McLean", bg: "linear-gradient(135deg, #e7d8b8, #8a6c45)" },
  { label: "Reston", bg: "linear-gradient(135deg, #b8c8d4, #4d6b80)" },
];
