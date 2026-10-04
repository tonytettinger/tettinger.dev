# Plan: Improve the live site incrementally
PRD: docs/PRD.md; current scope amended by the user's 2026-10-04 request
Status: in progress
Repo: git@github.com:tonytettinger/tettinger.dev.git
Branch: codex/live-baseline-improvements
Delivery: local work on the restored baseline; no deployment requested
Stack: Gatsby 4, React 17, Chakra UI, Git-authored MDX, Netlify
Constraints: retain the live design, portrait, Projects/Articles naming and existing URLs. No v2 redesign, new taxonomy, framework migration, or invented first-person experience.
Recovery: v2 is preserved at 0660b6f on codex/archive-v2-2026-10-04 and master. Baseline is df17f644cc513b27eef01187eef9886ff5e76820.

## Phase 1 — Restore the live baseline
Status: done · 2026-10-04 · df17f64
Checkpoint: no
- Does: Preserve v2 on a backup branch and start the current branch at the live-site baseline. Rebuild locally.
- Stories: preserve the existing visual identity and routes.
- Files: historical checkout; no source edits.
- Test: production build and browser comparison against the live homepage.
- Commit: existing baseline `df17f64`; no synthetic rollback commit needed.
- Rollback: switch to codex/archive-v2-2026-10-04.

## Phase 2 — Improve SEO without redesigning
Status: in progress
Checkpoint: yes — existing pages retain their design and URLs while generated HTML contains their content and distinct metadata.
- Does: Render existing queried content synchronously, add page-specific metadata and canonical URLs, social previews, appropriate page headings and 404 noindex. Preserve existing content.
- Stories: search engines and visitors can discover the existing pages without waiting for client effects.
- Files: .gitignore, src/providers/postProvider.tsx, src/components/Seo.tsx, src/components/ArticleTemplate.tsx, src/components/PostList.tsx, src/pages/*.tsx, scripts/check-built-site.mjs, package.json, this plan.
- Test: one generated-site regression script for static content and metadata; production build; TypeScript; browser homepage/article navigation. No appearance unit tests.
- Commit: `fix(seo): render live-site content and page metadata at build time`
- Rollback: revert the phase commit.

## Phase 3 — Privacy information and analytics behavior
Status: todo — awaiting analytics preference and confirmed public privacy contact
Checkpoint: yes — privacy page is reachable from all pages and optional analytics behavior matches the user's choice.
- Does: Add a factual privacy notice covering hosting, contact and the chosen analytics behavior. Remove Google Analytics if selected, or gate loading behind explicit opt-in with withdrawal. Verify the hosting facts and avoid claiming blanket legal compliance.
- Stories: visitors can understand data processing and control optional analytics.
- Files: gatsby-config.ts, package.json, package-lock.json, src/pages/privacy.tsx, src/components/Layout.tsx; consent component only if analytics is retained.
- Test: built HTML check and live browser checks of network, storage and consent choices as applicable.
- Commit: `feat(privacy): document and control website data processing`
- Rollback: revert the phase commit.

## Phase 4 — Publish substantive experience articles
Status: todo — awaiting LinkedIn link and author notes
Checkpoint: yes — both factual articles can be read through Articles; the basic movie-app entry is removed or substantively rewritten.
- Does: Add a winning-hackathon retrospective with its LinkedIn link and a Visit Budget development/release retrospective linked to the Chrome Web Store. Prefer removing the movie entry unless there is a specific engineering lesson worth preserving.
- Stories: readers can evaluate recent, specific engineering experience.
- Files: blogposts/**; article metadata/query adjustments only if needed; this plan.
- Test: production build, generated article content and metadata checks, live article navigation and outbound link inspection.
- Commit: `feat(content): share hackathon and Visit Budget engineering experience`
- Rollback: revert the phase commit; Git preserves removed movie content.

## Pending information
- Hackathon LinkedIn URL; event, award and team credit; author's role and lessons.
- Visit Budget author notes about difficult implementation choices and Chrome Web Store submission/review.
- Analytics preference and an existing public email address for privacy requests. The v2 hello@ alias was never confirmed.
- Netlify hosting/retention facts must be verified before finalizing the privacy notice.

## Source material
- Visit Budget store listing, read 2026-10-04: https://chromewebstore.google.com/detail/visit-budget/mdpmalceofmkoefkfmfcggkcjigapjpa
- Version 1.1.0, updated 2026-09-15. Visit budgets, active-time budgets, permanent blocks, delayed/code-confirmed timed overrides, optional per-site permissions; local data with no analytics or telemetry according to the listing. These are product facts, not a substitute for the author's experience.
- No Atlas exists on this baseline; no documentation site is being introduced for this change.
