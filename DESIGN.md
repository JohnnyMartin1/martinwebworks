---
name: Martin Web Works
description: A local web studio that builds, hosts, and maintains websites for service businesses.
colors:
  ink-navy: "#0b1b33"
  ink-navy-deep: "#06122a"
  cream-paper: "#faf7f2"
  cream-deep: "#f4efe6"
  cream-edge: "#ece4d3"
  signal-blue: "#1e40af"
  signal-blue-deep: "#1e3a8a"
  signal-blue-soft: "#e6ecff"
  warm-ash: "#475569"
  warm-ash-soft: "#94a3b8"
  divider: "#e6e0d3"
  paper-white: "#ffffff"
  alert-rose: "#e11d48"
  alert-rose-soft: "#fde8ec"
  success-emerald: "#10b981"
  success-emerald-soft: "#dcfce7"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw + 1rem, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2vw + 1rem, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "20px"
  pill: "9999px"
spacing:
  step-1: "4px"
  step-2: "8px"
  step-3: "12px"
  step-4: "16px"
  step-5: "24px"
  step-6: "32px"
  step-7: "48px"
  step-8: "72px"
  step-9: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.cream-paper}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.ink-navy-deep}"
    textColor: "{colors.cream-paper}"
  button-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.cream-deep}"
    textColor: "{colors.ink-navy}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  card-default:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.lg}"
    padding: "28px"
  card-on-cream:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.lg}"
    padding: "28px"
  card-on-navy:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.cream-paper}"
    rounded: "{rounded.lg}"
    padding: "28px"
  input-default:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  chip-filter:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  chip-filter-active:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.cream-paper}"
  nav-link:
    textColor: "{colors.warm-ash}"
    typography: "{typography.label}"
    padding: "10px 12px"
  nav-link-active:
    textColor: "{colors.ink-navy}"
---

# Design System: Martin Web Works

## 1. Overview

**Creative North Star: "The Paper Atelier."**

A small, deliberate web studio that feels like quality stationery: a cream paper background, ink-dark typography, a single confident blue used the way a notary stamps a contract. Premium and practical at the same time. The visual world is the bay window of a craftsman's workshop, not the lobby of a software company.

This system explicitly rejects the AI-generated SaaS landing page reflex: cream-and-purple gradients, identical icon card grids, repeated all-caps eyebrow pills above every heading, glassy translucent panels. It also rejects the editorial-magazine aesthetic (Fraunces italic, mono uppercase labels, three-column ruled grids), which would feel wrong to a roofer scrolling on a phone at 7 a.m. The studio is precise but not refined into preciousness.

Density is generous. Pages breathe. Spacing varies on purpose: tight inside a unit, loose between units. The page is built to be scanned on a phone in a truck cab, but rewards a desktop look with confident composition and asymmetric layouts.

**Key Characteristics:**

- Cream paper background, dark navy text, one signal blue used sparingly.
- One typographic family (Geist) carries the entire system. Discipline of weight and size, not variety of family.
- Two committed-navy "drench" moments per page maximum. Used as voice, not wallpaper.
- Each page has its own dominant layout shape. No two routes share the same composition.
- Real component library, real reusable primitives, no per-section copy-paste.

## 2. Colors

A short palette of warm neutrals plus a single confident blue, arranged so the navy ink reads as authoritative and the cream surface as inviting.

### Primary

- **Ink Navy** (`#0b1b33`): Primary type color. Also the surface color of the two committed "drench" sections (Monthly Care plans, Final CTA band). When the ink becomes the surface, the cream becomes the type.

### Secondary

- **Signal Blue** (`#1e40af`): The studio's stamp. Reserved for the primary CTA underline on hover, the active nav indicator, the focus ring, and small high-trust accents (a verified-style check mark, a state pill that means "live"). Never the background of a hero section.
- **Signal Blue Deep** (`#1e3a8a`): Hover state for Signal Blue.
- **Signal Blue Soft** (`#e6ecff`): The only acceptable blue tint surface. Used at ≤2% of a page if at all. Not a substitute for cream.

### Neutral

- **Cream Paper** (`#faf7f2`): Primary background. The studio's "paper stock."
- **Cream Deep** (`#f4efe6`): Secondary cream for alternating sections. The contrast between Cream Paper and Cream Deep is intentionally subtle: it provides rhythm, not contrast.
- **Cream Edge** (`#ece4d3`): The warmest cream, used only as the edge of a panel inset on cream, or as a section divider band.
- **Paper White** (`#ffffff`): Card surface on cream. Functions as "the card sits on the paper."
- **Warm Ash** (`#475569`): Secondary type color (subheads, descriptions, FAQ answers).
- **Warm Ash Soft** (`#94a3b8`): Tertiary type (timestamps, captions, placeholder text).
- **Divider** (`#e6e0d3`): Hairline borders and section separators. A cream-tinted gray, never a pure neutral.

### State

- **Alert Rose** (`#e11d48`): Reserved for the Problem section icon and required-field markers. Not for buttons, never for headings.
- **Alert Rose Soft** (`#fde8ec`): Background for the Problem section icons.
- **Success Emerald** (`#10b981`): Used only on system states ("Site live + secure," "Lead captured"). Never on a CTA.
- **Success Emerald Soft** (`#dcfce7`): Background for success state badges.

### Named Rules

**The One Stamp Rule.** Signal Blue covers at most 10% of any page. Its rarity is the point. If a page reads as "blue," it has failed.

**The Two Drench Moments Rule.** Ink Navy as a section background appears at most twice on any page. On the homepage that is Monthly Care preview + Final CTA band. On other pages, choose intentionally; usually one drench, sometimes none.

**The Warm Neutral Rule.** Pure `#000` and pure `#fff` are forbidden as text colors. Every neutral is tinted toward cream (a hint of warm yellow) or navy (a hint of cool blue). The system never reads cold.

## 3. Typography

**Display Font:** Geist (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Geist (same family)
**Label / Mono Font:** Geist Mono (with `ui-monospace, SFMono-Regular, monospace` fallback)

**Character:** A single industrial-quality sans serif used at extremes: large weights and sizes for display, modest weight for body. Geist sits between geometric and humanist; it does not signal a category (not "tech-fintech," not "editorial-luxury"). Discipline carries the voice.

### Hierarchy

- **Display** (Geist 600, `clamp(2.5rem, 4vw + 1rem, 4.75rem)`, line-height 1.04, tracking -0.022em): Page hero headlines only. One per page.
- **Headline** (Geist 600, `clamp(1.875rem, 2vw + 1rem, 2.625rem)`, line-height 1.15, tracking -0.018em): Section headings.
- **Title** (Geist 600, 1.25rem, line-height 1.3, tracking -0.01em): Card titles, plan names, feature category headers.
- **Body** (Geist 400, 1.0625rem / 17px, line-height 1.6): Default running text. Max measure 65ch.
- **Body Lead** (Geist 400, 1.1875rem / 19px, line-height 1.55): The single paragraph below a Display headline. Slightly larger than Body to anchor the hero.
- **Caption** (Geist 400, 0.875rem, line-height 1.5): Footnotes, "Concept example" labels, small inline notes.
- **Label** (Geist 500, 0.8125rem, tracking 0.12em, uppercase): Reserved for short, rare uses. Filter chip names, table headers in the package comparison.
- **Mono** (Geist Mono 500, 0.875rem, line-height 1.4): Reserved for one decorative purpose: tiny status text inside mockups ("yourbusiness.com," "SSL active"). Never used for headings.

### Named Rules

**The Single Family Rule.** Geist carries the entire system. No serif companion, no script accent, no display swap. Distinction comes from weight contrast and size scale, never from introducing a second family.

**The Quiet Eyebrow Rule.** All-caps tracked labels appear at most twice in the entire site. They are not section grammar. The current site uses them 13+ times; that pattern is banned.

**The Lead Paragraph Rule.** Below the Display headline on each page, exactly one lead paragraph at Body Lead size. No subhead pill above the headline. No double-paragraph lead. One sentence to two short sentences, maximum.

**The 65-Character Rule.** Body copy never exceeds 65ch width. Most pages use a narrower measure (~58ch) to keep reading rhythm comfortable on the cream surface.

## 4. Elevation

The system is **flat by default with deliberate "lifted paper" moments.** No SaaS-default `0 1px 2px rgba(0,0,0,0.05)` ambient shadow on every card. Cards on cream get a hairline border in the Divider color and a tiny, almost-imperceptible drop shadow that suggests "this is a sheet of paper that has been placed down," not "this is a button that should be clicked."

Dark sections (Ink Navy drench) carry no shadows at all. Depth on dark comes from tonal layering (a card at 4% white-on-navy reads as raised against the navy ground).

### Shadow Vocabulary

- **Paper-rest** (`0 1px 0 rgba(11,27,51,0.04), 0 8px 24px -16px rgba(11,27,51,0.08)`): Default for cards on cream. The 1px hairline reads as the bottom edge of paper; the diffuse upper shadow reads as the card lifting a few millimeters.
- **Paper-hover** (`0 2px 0 rgba(11,27,51,0.06), 0 18px 36px -16px rgba(11,27,51,0.12)`): Cards on hover, when a card is interactive. Non-interactive cards never animate.
- **CTA-lift** (`0 1px 0 rgba(11,27,51,0.16), 0 12px 24px -10px rgba(11,27,51,0.18)`): Primary button at rest. The button is the only element with a meaningful resting shadow on cream.
- **Nav-stick** (`0 1px 0 rgba(11,27,51,0.06)`): The bottom edge of the sticky header. A 1px line, no diffuse halo.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows belong to two things only: the primary CTA, and cards that are interactive. Decorative shadow is forbidden.

**The No-Glow Rule.** No blue glows, no purple glows, no colored shadows of any kind. Shadows are tinted with Ink Navy at low opacity.

## 5. Components

### Buttons

- **Shape:** Pill (radius 9999px). Every button on this site is a pill.
- **Primary:** Ink Navy background, Cream Paper text. Padding 14px 22px. Carries CTA-lift shadow at rest. Hover: background shifts to Ink Navy Deep, lift increases (~2px translateY equivalent via shadow expansion). Focus: 2px outline in Signal Blue, offset 2px. Active: shadow flattens.
- **Secondary:** Paper White background, Ink Navy text, 1px Divider border. Padding 14px 22px. No resting shadow. Hover: background shifts to Cream Deep.
- **Ghost:** Transparent background, Ink Navy text. Padding 10px 16px. Used inside the header nav and inside cards for "Learn more" links. Hover: text shifts to Signal Blue, no underline.
- **Inline link:** Underline appears on hover, offset 4px, color stays Ink Navy. Signal Blue is reserved for emphasized inline links only.

### Chips (filter chips on /examples)

- **Style:** Pill, Paper White background, Ink Navy text, 1px Divider border.
- **Selected:** Background flips to Ink Navy, text to Cream Paper. Border becomes Ink Navy.
- **Hover (unselected):** Background shifts to Cream Deep.
- **No focus ring inside the chip group**; the group itself gets a `role="group"` and arrow-key navigation in the client component.

### Cards / Containers

- **Corner Style:** Radius 14px (rounded.lg). One step softer than typical agency cards, one step harder than rounded toys.
- **Background:** Paper White on cream pages. `rgba(255,255,255,0.04)` on navy pages.
- **Border:** 1px Divider on cream cards. None on navy cards (tonal layering does the work).
- **Shadow:** Paper-rest default. Paper-hover only when the card is interactive (mockup cards on /examples, package cards on /packages with a hover state).
- **Internal Padding:** 28px on desktop, 20px on mobile.

### Inputs / Fields

- **Style:** Paper White background, 1px Divider border, radius 10px. Padding 12px 14px. Label sits above the input, weight 500, color Warm Ash.
- **Focus:** Border shifts to Signal Blue, plus a soft 2px Signal Blue Soft outer ring. No box-shadow halo.
- **Error:** Border shifts to Alert Rose. Helper text below in Alert Rose at Caption size.
- **Disabled:** Background Cream Deep, text Warm Ash Soft.
- **Select:** Native `<select>` styled to match Input default. A chevron icon (10px) sits 14px from the right edge.

### Navigation

- **Sticky header:** Cream Paper background at 92% opacity with a `backdrop-filter: blur(8px)`. Hairline bottom border in Divider. Height 64px on desktop, 56px on mobile.
- **Nav link:** Label typography (Geist 500, 13px, tracking 0.12em, uppercase). Default color Warm Ash. Hover color Ink Navy. Active route: Ink Navy text plus a 2px underbar in Signal Blue, positioned 4px below the text baseline. Not a pill, not a background fill.
- **Mobile nav:** A single CTA pill always visible. The menu is a disclosure (native `<details>` or a controlled React menu) that slides down at full width. Tap targets minimum 44px.

### Mockups (signature component family)

These are the visual centerpiece of the studio, especially on `/examples` and `/`.

- **Browser frame:** Cream Paper background card, hairline border. A row of three traffic dots in Alert Rose / Amber / Success Emerald at 60% saturation. A URL pill in Cream Deep with the domain in Geist Mono.
- **Phone frame:** Pill-cornered (radius 28px) Paper White card with internal padding 6px. Inner content area uses the cream/navy palette of the parent page.
- **Lead notification:** A 192px-wide Paper White card with a colored circle icon (Success Emerald Soft for "New quote request," Cream Edge for "Monthly update handled," Signal Blue Soft for "Site live + secure"). One uppercase label, one bold business name line, one timestamp.
- **Mobile preview chip-tail:** When a mobile frame appears next to a desktop frame, it overlaps by 1/6 and rotates -4deg. Never rotates more than 4 degrees.

### Section drench

- **Ink Navy drench section:** Full-width Ink Navy background, Cream Paper type. Card surfaces inside drench are `rgba(255,255,255,0.04)` with no border. The drench is the moment that proves the studio knows how to do dark.
- **Drench rules:** No decorative gradients inside drench. A single radial vignette at 8% Signal Blue is the only permitted ambient effect.

## 6. Do's and Don'ts

### Do:

- **Do** keep all-caps tracked labels (Label typography) to at most two appearances per page, and at most two pages in the entire site.
- **Do** vary section layouts: split hero, comparison table, timeline, filter grid, accordion, drench band. Not every section is a card grid.
- **Do** keep body copy width to 65ch on desktop and 58ch where reading rhythm matters.
- **Do** put the primary CTA (Book Free Website Audit) in the same visual position on every page (sticky header) and the same color (Ink Navy pill).
- **Do** tint every neutral toward cream or navy. Never use `#000` or `#fff` as text.
- **Do** label every concept example as "Concept example," visibly, twice (a tag at top of the card and a strip at the bottom).
- **Do** use the warm-ash secondary text color for descriptions, not a 60% opacity overlay on Ink Navy.
- **Do** show pricing on `/packages` above the fold on desktop, full table comparison below.
- **Do** keep mobile CTAs to single-column, full-width, 14px+ tap padding.

### Don't:

- **Don't** use em dashes anywhere. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** put an all-caps blue eyebrow pill above every section heading. (The current site does this 13+ times. Stop.)
- **Don't** repeat the "icon + heading + 2 lines, six cards in a grid" pattern. It is the AI slop tell.
- **Don't** use decorative gradients, glassmorphism, animated blobs, or floating particles.
- **Don't** use side-stripe borders (`border-left` greater than 1px) on cards, list items, or callouts.
- **Don't** use gradient text (`background-clip: text` over a gradient). One solid color, every time.
- **Don't** invent fake testimonials, fake client logos, fake metric badges ("Increased leads 312%"), or AI-generated faces.
- **Don't** put modals anywhere on this site. No newsletter modal, no cookie bar with "wait, here's 10% off," no chat overlay.
- **Don't** write the words: "transform," "unlock," "seamless," "innovative," "cutting-edge," "enterprise-grade," "we leverage," "world-class," "best-in-class," "industry-leading."
- **Don't** use the word "Bento" as a layout concept or build a bento layout.
- **Don't** use a hero metric template ("99% uptime · 14 days delivery · 100% mobile-first") as the entire hero proof.
- **Don't** use Inter, DM Sans, Plus Jakarta, Instrument, Plex, Outfit, or any other reflex-reject sans. Geist is the family.
- **Don't** add a second font family without a written reason in this file.
- **Don't** use blue as a background on a section larger than a small banner. (Signal Blue is a stamp, not a sky.)
- **Don't** animate `width`, `height`, `padding`, `margin`, `top`, `left`, or any other layout property. Transforms and opacity only.

### The 30-Second Audit Test

If a roofer in his truck cab opens `/` for 30 seconds and could not answer all three of these, the page has failed:

1. **What does Martin Web Works do?** (Builds, hosts, and updates websites for local businesses.)
2. **What does it cost to start?** ($1,995 starter, $3,995 most popular.)
3. **What is the single next step?** (Book a free website audit.)

Every page should pass an equivalent 30-second test for its own purpose.
