# Trusted-Aide Website Project Context

## Project

Trusted-Aide is a Singapore-based cybersecurity, AI governance, privacy, application security, and IT advisory website for business leaders, SMEs, scaling companies, investors, and APAC/China cross-border operators.

Production site: https://trusted-aide.com

Repository: https://github.com/pysim2000-commits/trusted-aide-site

Deployment model: changes pushed to GitHub `main` are expected to be picked up by Cloudflare automatically.

## Working Pattern

- Make edits directly in the repo when possible.
- Commit and push to GitHub `main` after validation, unless the user asks for local-only work.
- Use cache-busted stylesheet links such as `assets/style.css?v=20260531-site-14`; bump the version when changing shared CSS so Cloudflare/browser cache does not hide updates.
- Keep changes scoped and avoid unrelated refactors.
- Validate with at least:
  - `git diff --check`
  - simple HTML section/main balance checks when editing HTML
  - CSS brace balance checks when editing CSS

## Current Design Preferences

- Keep layouts clean, businesslike, and space-efficient.
- Avoid oversized serif headings except where already working well as true page/section titles.
- For service cards and solution cards:
  - Heading: Work Sans, bold, dark teal/green.
  - Body: Work Sans, readable, smaller than heading.
  - Card style: white or pale mint background, light teal border, subtle shadow, modest border radius.
- Do not let text look like plain lines. Use card layouts for service offerings.
- Avoid excessive vertical gaps between sections, especially on the App Security page.
- Do not make section labels or headings comically large. Use emphasis, but keep proportions polished.
- The Solutions overview style is a good reference:
  - prominent section label on the left or centered where appropriate
  - label style should be white background, dark teal/green text, subtle border/shadow
  - compact heading text beside or below it
  - service cards in a clean grid

## Header Rules

- Header order: Home, Solutions, Customers, App Security, Contact.
- Do not show a dark-mode toggle.
- Do not show the top-right `Talk to Us` button in the header; it was removed to free menu space.
- Keep the mobile menu button.

## Footer Rules

- Footer should list all seven solution offerings, with direct links to the sections on `solutions.html`.
- Remove the footer badges/buttons: `ISO 27001`, `PDPA`, `MAS TRM`.
- Footer Contact column should only keep one link: `Discuss Your Needs`.
- Footer should include a `Privacy Policy` link.
- Solutions footer column needs enough width so solution names do not wrap awkwardly on desktop.

Footer solution links:

- `solutions.html#ai` — AI Adoption, Risk & Governance
- `solutions.html#cyber` — Cybersecurity, Privacy & Certification
- `solutions.html#leadership` — Fractional CIO / CISO / DPO Leadership
- `solutions.html#appsec` — Application Security & Secure Engineering
- `solutions.html#apac` — APAC & China Cross-Border Advisory
- `solutions.html#training` — Training, Workshops & Capability Building
- `solutions.html#itops` — Rapid IT Enablement & Business Setup

## Seven Solution Areas

1. AI Adoption, Risk & Governance
2. Cybersecurity, Privacy & Certification Readiness
3. Fractional CIO / CISO / DPO Leadership & Governance
4. Application Security & Secure Engineering
5. APAC & China Cross-Border Technology Advisory
6. Training, Workshops & Capability Building
7. Rapid IT Enablement & Business Operations Setup

## Solutions Page Notes

- The Solutions page was rebuilt and should remain the reference style for cards and section formatting.
- Hero includes `assets/solutions-advisory-meeting.jpg`.
- AI section includes a book feature using `assets/dont-sink-your-ship-cover.png`.
- Book title:
  - `Don't Sink Your Ship`
  - Subtitle: `What Every SME Leader Needs to Know Before Setting Sail with AI`
  - Amazon link: https://www.amazon.com/dp/B0GXH5Y6QR
- AI Readiness wording should include:
  - `Assess business profile and AI ambition, then evaluate processes, data, and risks to identify safe, high-impact AI use cases.`
- AI Governance & Risk card should not repeat the long “Typical risks...” text because the book summary covers that theme.
- Cybersecurity section includes MLPS 2.0 Certification (China).
- Training section uses a horizontal/featured card approach for the long custom corporate training card.

## App Security Page Notes

Current intended flow:

1. Application Security & Secure Engineering hero
2. The Problem: Why Traditional AppSec Fails
3. OWASP Top 10
4. AppSec Statistics
5. Our Approach: two tracks
6. Why This Approach Works
7. Our Application Security Services
8. Who This Is For
9. CTA

Important visual direction:

- Follow the Solutions page’s compact, professional design language.
- Section labels such as `THE PROBLEM`, `OWASP TOP 10`, `APPSEC STATISTICS`, `OUR APPROACH` should be visually clear but not huge.
- Section labels should use white background with dark teal/green text, not white text on green background.
- The heading underneath should be smaller and compact, not a giant serif headline.
- Supporting descriptions should be normal text size.
- `What This Means` is a supporting note under the same problem section, not a major section headline.
- Use judgement to keep emphasis where needed without making proportions feel ridiculous.

Current AppSec page CSS is scoped with `body class="appsec-page"` and AppSec-specific rules in `assets/style.css`.

## Contact and Privacy

- Contact form uses Formspree endpoint: `https://formspree.io/f/xkoyjejd`.
- Required privacy consent checkbox:
  - user consents to use submitted information to respond to enquiry
  - Trusted-Aide will not resell contact information
  - link to `privacy.html`
- Optional marketing consent checkbox:
  - user may consent to occasional updates/insights/marketing
  - user can opt out any time
- Privacy page exists at `privacy.html`.

## SEO and LLM Discovery

- `robots.txt` allows crawling and points to `https://trusted-aide.com/sitemap.xml`.
- `robots.txt` should keep normal search and AI retrieval discoverability open, but block known AI training / bulk dataset ingestion crawlers where separate user agents exist.
- `sitemap.xml` should include canonical clean URLs for Home, Solutions, App Security, Customers, Contact, and Privacy.
- `llms.txt` is the AI/LLM-readable site summary and should stay aligned with the seven solution areas.
- `llms.txt` includes an explicit permission note: AI assistants may summarise and cite the site for user queries, but content is not licensed for model training, fine-tuning, embeddings datasets, or bulk dataset ingestion.
- Main public pages include:
  - canonical URL
  - meta description
  - Open Graph / Twitter preview metadata where appropriate
  - `robots` index/follow directive
  - JSON-LD structured data for organisation, page, breadcrumbs, services, and book where relevant
- `segments.html` canonical must remain `https://trusted-aide.com/segments` and not the previous typo.

## Common Pitfalls To Avoid

- Do not add back dark mode toggle or header `Talk to Us` button.
- Do not make page headings so large that they dominate the section and waste space.
- Do not allow footer Solutions links to wrap badly on desktop.
- Do not turn service offerings into plain text lines; use cards.
- Do not add decorative clutter or generic stock-like visual elements unless clearly useful.
- Do not use big one-off layouts that are inconsistent with the rest of the site.

## Useful Local Files

- `index.html` — Home page
- `solutions.html` — Main Solutions page
- `solution-application-security.html` — App Security page
- `segments.html` — Customers page
- `contact.html` — Contact form page
- `privacy.html` — Privacy policy page
- `assets/style.css` — Shared CSS
- `assets/script.js` — Mobile menu and reveal behavior
- `assets/solutions-advisory-meeting.jpg` — Solutions hero image
- `assets/dont-sink-your-ship-cover.png` — Book cover image
