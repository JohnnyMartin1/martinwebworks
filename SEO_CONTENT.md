# SEO content system — Martin Web Works

This document defines how the `/industries` and `/resources` sections of the site work. Future Cursor / agent sessions should read this **before** adding, editing, or removing any SEO content.

It is the rulebook. It is short on purpose. The design system itself lives in `DESIGN.md`; the product voice and audience live in `PRODUCT.md`. This file is only about the SEO content layer that sits on top of both.

---

## 1. Why this exists

Martin Web Works needs to be discoverable when small, local service-business owners search Google for things like:

- "websites for roofers"
- "how much does a small business website cost"
- "why is my website not getting leads"
- "should I use Wix or hire a web designer"

The site already proves the studio is competent (Examples, Packages, Process). The SEO layer is what brings those owners in. Once they land, the existing site does its job.

This is not a blog. It is a structured content system with two clear surfaces.

---

## 2. The two surfaces

### `/industries` — conversion landing pages

**Purpose:** rank for industry-intent searches ("websites for roofers", "med spa website design") and convert that traffic into free-audit requests.

These pages are closer to the existing `/packages` and `/services` pages in posture than to a blog post. They are **sales pages that happen to be useful enough to rank**.

**Each industry page must include:**

1. Breadcrumb (Home → Industries → Industry)
2. Hero with one industry-specific headline and one lead paragraph
3. CSS browser-frame mockup themed to that industry (no stock photos, ever)
4. "What customers need to see before they contact you" (5 to 8 industry-specific bullets)
5. Recommended website structure (industry-specific page list)
6. Lead-capture strategy (industry-specific form fields, with rationale)
7. Trust signals that matter for this industry
8. Local-SEO basics tuned for the industry
9. Common website mistakes for this industry
10. Recommended Martin Web Works package (with the **why**, not just a card)
11. Related resources (2 to 4 internal links into `/resources`)
12. Visible FAQ section (3 to 5 questions)
13. Final CTA band routing to `/free-audit`

### `/resources` — editorial guides

**Purpose:** rank for question-based and problem-aware searches ("why is my website not getting leads", "small business website cost"). Educate the visitor enough that booking the audit becomes the obvious next step.

These pages are real articles. They have a reading time. They have hierarchy. They feel like writing, not marketing.

**Each resource article must include:**

1. Breadcrumb (Home → Resources → Category → Article)
2. Article header (category, title, updated date, reading time)
3. Visible table of contents (built from H2 headings)
4. Lead paragraph
5. Body in H2/H3 hierarchy, with checklists and short examples
6. One mid-article CTA card linking to `/free-audit`
7. FAQ section if the article is question-shaped
8. Related resources (2 to 4)
9. Related industry pages (1 to 3) where relevant
10. Final CTA band routing to `/free-audit`

---

## 3. The split is not negotiable

Industry pages live under `/industries/[slug]`. Resource articles live under `/resources/[slug]`. Do not merge them. Do not put "Roofing website tips" under `/resources` and "How much does a website cost" under `/industries`.

The reason is search intent:

- "websites for roofers" is **buyer intent**. It belongs on a page that pitches.
- "why is my website not getting leads" is **research intent**. It belongs on a page that teaches first.

Mixing the two confuses the visitor and dilutes the keyword targeting of both URLs.

---

## 4. Voice and tone rules

Voice rules from `PRODUCT.md` apply to every word on every SEO page. Specifically:

- **Plain English.** A roofer in a truck cab is the reader. No "leverage," no "transform," no "synergistic," no "world-class."
- **No em dashes.** Use commas, colons, semicolons, periods, or parentheses.
- **No fake proof.** No invented testimonials, no fake stats ("Boost leads 312%"), no fake client logos, no fake case studies. If a number is not real, do not write the number.
- **No keyword stuffing.** Each page has a primary search target. Use the phrase naturally one to three times in the body, once in the title, once in the meta description. That is enough.
- **No ranking guarantees.** Never write "rank #1 on Google," "guaranteed top results," or anything similar. The voice is "this is how local SEO actually works," not "we'll game the algorithm."
- **No banned words.** See `PRODUCT.md → Voice → Voice we never use`. The list applies here.

---

## 5. SEO rules

### Metadata

Every published `/industries/[slug]` and `/resources/[slug]` page must export Next.js `metadata`:

- Unique `title` (template `<Page Title> · Martin Web Works`)
- Unique `description` (140 to 160 characters, ends with a clear differentiator like "Built, hosted, and maintained by Martin Web Works.")
- `alternates.canonical` pointing to the page's own URL
- `openGraph.title` / `openGraph.description` / `openGraph.url` / `openGraph.type`
- `twitter.card: "summary_large_image"`
- `robots`: `{ index: true, follow: true }` for published pages; `{ index: false, follow: true }` for drafts (drafts should not be linked anywhere, but the noindex is a safety net)

### Heading hierarchy

- Exactly one `<h1>` per page. The PageHero renders it. Do not also use `t-display` on a sibling heading.
- Sub-headings use `<h2>` then `<h3>`. Skipping levels is not allowed.
- Visible labels (Geist 500, 13px, tracked uppercase) are `<p class="t-label">`, not headings.

### Canonical URLs

The site canonical base is `https://martinwebworks.com`. The `metadataBase` is already set in `app/layout.tsx`. Page-level `alternates.canonical` should be the relative path.

### Structured data

- **Article JSON-LD:** only on `/resources/[slug]` pages. Includes `headline`, `datePublished`, `dateModified`, `author` (org), `publisher` (org), `mainEntityOfPage`.
- **FAQ JSON-LD:** only on pages where the FAQ content is actually visible to the user. If a FAQ is hidden behind a query param, in a script, or otherwise not visible, do not emit FAQ schema.
- **BreadcrumbList JSON-LD:** on `/industries/[slug]` and `/resources/[slug]` pages where breadcrumbs are visible.
- **Banned schemas:** no `Review` schema, no `AggregateRating` schema, no `LocalBusiness` schema. The studio has no published reviews yet; lying about reviews in structured data is dishonest and a Google penalty.

### Sitemap

`app/sitemap.ts` enumerates all published routes (including `/industries`, `/resources`, and every page where `draft !== true`). It excludes drafts.

### Robots

`app/robots.ts` allows all user agents, references the sitemap, disallows nothing.

---

## 6. Internal linking rules

The internal-link graph is what makes the SEO investment compound. Use these rules; do not improvise.

### From an industry page (`/industries/[slug]`), link to:

- `/free-audit` (primary CTA; multiple times, naturally)
- `/packages` (when discussing the recommended tier)
- `/services` (once, in a "what we actually build" sentence)
- `/examples` (when introducing the mockup or proof)
- `/monthly-care` (when discussing maintenance / ongoing care)
- 2 to 4 specific `/resources/[slug]` articles (only published ones)
- 2 to 3 related `/industries/[slug]` pages (only published ones)

### From a resource article (`/resources/[slug]`), link to:

- `/free-audit` (primary CTA; in intro card, mid-article CTA, final CTA)
- `/packages` when the article touches on pricing
- `/monthly-care` when the article touches on maintenance
- 1 to 3 specific `/industries/[slug]` pages where industry examples are mentioned
- 2 to 4 related `/resources/[slug]` articles

### From `/resources` index → link to `/industries` index, and vice versa.

### Anchor text

Use descriptive anchor text, not "click here." Examples:

- Good: "[How quote forms should actually be built](/resources/quote-form-best-practices)"
- Bad: "Click [here](/resources/quote-form-best-practices) for more"

---

## 7. Anti-patterns to refuse

- **Thin pages.** A page with less than ~400 words of substantive content is not published. It stays in the data with `draft: true` until it is real.
- **"Coming soon" pages.** Never. A 200-word placeholder for `/industries/dentists` is worse than no page at all. Drafts are hidden from grids and excluded from the sitemap.
- **Generic AI scaffolding.** Six identical cards of "icon + heading + two-line description" repeated across every section of every page. The shared design system already provides varied affordances (split layouts, comparison blocks, mockup frames, checklist columns, accordions). Use them.
- **Keyword-stuffed sentences.** "Roofers roofing roofer websites for roofers in your roofing area." Write for the owner, not the spider.
- **Fake proof.** No invented testimonials, no fabricated review counts, no AI-generated faces, no fake project photos, no fake client claims.
- **Stock photography.** Continue the no-stock-photo rule. Industry mockups are built in CSS.
- **All-caps eyebrow on every section.** The Quiet Eyebrow Rule applies. Max two appearances per page.
- **Em dashes.** Use a comma, a colon, or rewrite the sentence. The lint rule does not catch them; the writer does.

---

## 8. How drafts work

Data files (`app/data/industries.ts`, `app/data/resources.ts`) include a `draft: boolean` field on every entry.

- `draft: true` → the page is rendered at its URL but not linked from any index, not included in the sitemap, and marked `robots: { index: false }`.
- `draft: false` (or omitted) → the page is fully published.

Routes filter on `draft` for index pages, related links, sitemap entries, and `generateStaticParams`. Specifically, drafts are excluded from `generateStaticParams` so they are not pre-rendered at build time; they are only reachable by typing the URL directly.

To publish a draft, set `draft: false`, write the full content per Section 2 of this file, and confirm the page passes the "no thin page" check before merging.

---

## 9. The "30-second owner test"

Adapted from `DESIGN.md`. If a roofer opens `/industries/roofers` on his phone for 30 seconds and cannot answer all three of these, the page has failed.

1. **Does this person build websites for roofers specifically?** (Yes, here is how it is structured.)
2. **What does a roofing website cost or include?** (Pricing is one click away on `/packages`, and the recommended package is named here.)
3. **What is the next step?** (Book a free website audit.)

Every published industry and resource page should pass an equivalent test.

---

## 10. Where things live in code

- **Data:**
  - `app/data/industries.ts` — `INDUSTRIES`, `IndustryEntry`, `getPublishedIndustries()`, `getIndustryBySlug()`
  - `app/data/resources.ts` — `RESOURCES`, `ResourceEntry`, `getPublishedResources()`, `getResourceBySlug()`, `RESOURCE_CATEGORIES`
- **Components:**
  - `app/components/seo/IndustryCard.tsx`
  - `app/components/seo/IndustryMockup.tsx`
  - `app/components/seo/ResourceCard.tsx`
  - `app/components/seo/Checklist.tsx`
  - `app/components/seo/Breadcrumbs.tsx`
  - `app/components/seo/InlineCTACard.tsx`
  - `app/components/seo/RelatedLinks.tsx`
  - `app/components/seo/SeoFaqList.tsx`
  - `app/components/seo/ArticleJsonLd.tsx`
  - `app/components/seo/FaqJsonLd.tsx`
  - `app/components/seo/BreadcrumbsJsonLd.tsx`
- **Routes:**
  - `app/industries/page.tsx`
  - `app/industries/[slug]/page.tsx`
  - `app/resources/page.tsx`
  - `app/resources/[slug]/page.tsx`
- **SEO infrastructure:**
  - `app/sitemap.ts`
  - `app/robots.ts`

That is the entire system. When in doubt, re-read this file before improvising a new pattern.
