# Martin Web Works

Local web studio that builds, hosts, updates, and maintains websites for service businesses. Single proprietor practice operating in the Arlington, VA / Washington, DC area, with delivery anywhere in the country.

## Register

**brand**

The marketing site IS the product. A visitor's impression on this site is the thing being made. Treat every page as a deliverable, not a wireframe.

## Users

Non-technical local business owners. The work happens before they sit at a desk: morning coffee, the truck cab between job sites, the chair before a procedure, the office before the docket. They evaluate a web studio in 30 to 90 seconds, almost always on a phone.

**Primary audiences**

- Roofers, contractors, landscapers, electricians, plumbers, HVAC, exteriors trades
- Auto detailers, mobile mechanics, locksmiths
- Med spas, dental offices, vet clinics
- Solo law firms, small accounting practices, business consultants
- Other appointment-driven local service businesses

**What they actually need from a website**

1. More calls.
2. More quote requests.
3. More booked jobs.
4. To stop losing customers to whichever competitor's site loaded faster and looked less stale.

**What they do not want**

- To "go digital" or "transform" anything.
- To talk to a sales team.
- To learn DNS, hosting, deployments, repos, or what a CMS is.
- A two-month process before anything ships.

## Product purpose

Get a local business owner to **book a free website audit** with confidence that the person on the other side is competent, honest, and easy to work with.

Everything else (services, packages, monthly care, examples, AI assistant, FAQ) is in service of that single conversion. The audit is the lobby; the rest of the site is the proof room.

## Strategic principles

1. **Trust beats persuasion.** A confident, well-built site does more than a clever headline. Show, do not tell.
2. **The site is the portfolio.** Until there are case studies, this site is the proof. Craft is the argument.
3. **Plain English only.** No "deployment," no "stack," no "leverage," no "transform." A roofer should never feel talked-down-to or talked-over.
4. **Pricing is a trust signal, not a strategy.** Show the numbers. The right customer self-selects; the wrong customer leaves before either party wastes time.
5. **Ownership is the brand.** Customers keep their domain, their email, and their leverage. Say so on every page that touches infrastructure.
6. **No fake proof.** No invented testimonials, no fake client logos, no AI-generated faces. Concept examples are clearly labeled "Concept example."
7. **One real CTA per page.** Book the audit. Secondary CTAs vary. The primary never does.
8. **The site is a multi-page studio, not a long sales letter.** Each route earns its place. Each route is a real page, not a chopped section.

## Voice

Three words: **trustworthy, grounded, deliberate.**

- Trustworthy: says what it will do, names what it will not, prices the work openly.
- Grounded: speaks like a craftsman who answers his own phone, not an agency rep reading from a deck.
- Deliberate: every paragraph carries weight; no filler intros, no closing summaries that restate the headline.

**Examples of voice we use**

- "Make it easy for customers to call, request a quote, or book."
- "Your website should not make people hunt for your phone number."
- "Built for mobile, calls, quote requests, and trust."
- "Simple pricing. Clear ownership. No confusing handoff."
- "We handle the technical setup and explain the few things you actually need to know."

**Voice we never use**

- "Transform your digital presence."
- "Unlock growth."
- "Seamless solutions."
- "Innovative experiences."
- "Cutting-edge."
- "Enterprise-grade."
- "We leverage."
- "AI-powered" (as decoration; the AI Lead Assistant page describes it factually).
- "Synergistic," "best-in-class," "world-class," "industry-leading."

## Anti-references

Things this site should not feel like.

- **A 2024 AI-generated SaaS landing page.** Cream background, purple-blue gradient hero, identical icon-and-text card grids, repeated all-caps eyebrow pills, one tracking number under each heading. The current homepage drifts toward this. Reject it.
- **A WordPress agency template.** Stock photo of a smiling consultant in a headset, blue button on every section, "About Us / Services / Contact" with no real architecture behind it.
- **A Webflow editorial portfolio.** Serif display headlines, italic Fraunces, mono uppercase labels, three-column ruled grids, broadsheet aesthetics. Wrong register for a roofer.
- **A big-agency marketing site.** "Strategic creative partnerships at scale." Vague case study tiles. Three-month engagement minimum. Wrong audience.
- **Wix / GoDaddy default themes.** Stock hero images, generic carousels, square call-to-action buttons in the middle of every section.

## Anti-patterns to refuse

- Em dashes in copy. Use commas, colons, or semicolons.
- Card grids as the default layout for every section.
- Repeated all-caps blue pill above every heading.
- Hero metrics ("99% uptime · 14 days delivery · 100% mobile-first") as the entire hero proof.
- Fake numerical testimonials ("Increased leads 312%").
- Decorative gradients, glassmorphism, animated blobs, floating particles.
- Modal popups (newsletter, cookies bar, "wait, here is 10% off").
- Em dashes (repeat for emphasis).

## Contact

Primary: **team@martinwebworks.com**
Location: Arlington, VA / Washington, DC area
Domain: martinwebworks.com

Scheduling: not yet configured. CTAs route to `/free-audit` until a calendar URL is provided. The constant lives in `app/data/site.ts` as `SCHEDULING_URL`.

## Conversion architecture

```
Book Free Website Audit  (primary, every page)
        ↑
        ├── /              Homepage: trust + 30-second pitch
        ├── /services      What I actually build
        ├── /packages      Three tiers, transparent pricing
        ├── /monthly-care  Hosting and updates, on dark
        ├── /examples      Proof through industry-specific mockups
        ├── /process       Six steps, plain English
        ├── /ai-assistant  Optional add-on, honestly framed
        ├── /free-audit    Dedicated conversion page (form)
        └── /faq           Objection handling
```

Secondary CTAs by page:

| Page | Secondary CTA |
|---|---|
| / | View Packages |
| /services | View Packages |
| /packages | See Examples |
| /monthly-care | View Packages |
| /examples | View Packages |
| /process | View Packages |
| /ai-assistant | Book Free Audit (link to /free-audit) |
| /free-audit | Email team@martinwebworks.com |
| /faq | Book Free Audit |
