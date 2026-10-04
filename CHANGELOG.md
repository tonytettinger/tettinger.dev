# Changelog

## 2026-10-04

### [feature] Preserve the live design and add optional analytics
- What: Keep the existing portfolio design, improve static SEO and add explicit analytics consent with a privacy notice.
- Why: The redesign moved away from the owner's preferred site, and analytics previously loaded without a choice.
- How: `postProvider.tsx` renders content during the build; `Seo.tsx` supplies page metadata. `AnalyticsConsent.tsx` gates `analytics.ts`, replacing the unconditional Gatsby analytics plugin. `privacy.tsx` explains hosting, consent and contact processing.
- UX: Visitors can allow or reject equally, revisit Analytics settings, and withdraw consent. Existing page URLs and content remain available.
- Practices:
  - `scripts/check-built-site.mjs` checks generated content and metadata and rejects injected Google script tags before consent.
  - `scripts/check-analytics.mjs` verifies expired permission fails closed and preserves Google's required command format.
