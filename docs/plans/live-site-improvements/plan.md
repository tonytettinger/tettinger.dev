# Plan: Improve the live site incrementally
PRD: docs/PRD.md; current scope amended by the user's 2026-10-04 request
Status: in progress
Repo: git@github.com:tonytettinger/tettinger.dev.git
Branch: codex/live-baseline-improvements
Delivery: user authorized production deployment on 2026-10-04; push the restored baseline and SEO/privacy changes to the existing Netlify production branch after verification.
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
Status: done · 2026-10-04
Checkpoint: yes — existing pages retain their design and URLs while generated HTML contains their content and distinct metadata.
- Does: Render existing queried content synchronously, add page-specific metadata and canonical URLs, social previews, appropriate page headings and 404 noindex. Preserve existing content.
- Stories: search engines and visitors can discover the existing pages without waiting for client effects.
- Files: .gitignore, src/providers/postProvider.tsx, src/components/Seo.tsx, src/components/Layout.tsx, src/components/ArticleTemplate.tsx, src/components/PostList.tsx, src/pages/*.tsx, scripts/check-built-site.mjs, package.json, this plan. Each page owns its metadata so the shell cannot leave a homepage canonical on the 404 page.
- Test: one generated-site regression script for static content and metadata; production build; TypeScript; browser homepage/article navigation. No appearance unit tests.
- Commit: `fix(seo): render live-site content and page metadata at build time`
- Rollback: revert the phase commit.

## Phase 3 — Privacy information and analytics behavior
Status: done · 2026-10-04 — explicit opt-in implemented and verified; production deployment authorized
Checkpoint: yes — privacy page is reachable from all pages and optional analytics behavior matches the user's choice.
- Does: Add a factual privacy notice covering hosting, contact and the chosen analytics behavior. Remove Google Analytics if selected, or gate loading behind explicit opt-in with withdrawal. Verify the hosting facts and avoid claiming blanket legal compliance.
- Stories: visitors can understand data processing and control optional analytics.
- Files: gatsby-config.ts, package.json, package-lock.json, src/pages/privacy.tsx, src/components/Layout.tsx, src/components/AnalyticsConsent.tsx, src/analytics.ts, scripts/check-built-site.mjs, README.md, CHANGELOG.md, docs/deploys.log, this plan.
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
- Analytics preference: explicit opt-in, confirmed 2026-10-04. Public privacy contact: tettinger.dev@gmail.com.
- Netlify hosting facts were checked against its privacy and data-protection pages. Google Analytics server-side retention still needs owner verification; the notice distinguishes it from the site’s configured cookie lifetime.

## Source material
- Visit Budget store listing, read 2026-10-04: https://chromewebstore.google.com/detail/visit-budget/mdpmalceofmkoefkfmfcggkcjigapjpa
- Version 1.1.0, updated 2026-09-15. Visit budgets, active-time budgets, permanent blocks, delayed/code-confirmed timed overrides, optional per-site permissions; local data with no analytics or telemetry according to the listing. These are product facts, not a substitute for the author's experience.
- No Atlas exists on this baseline; no documentation site is being introduced for this change.

## Verification at the SEO checkpoint
- Restored baseline and updated production builds both passed (Node 22.14.0; telemetry disabled and temporary XDG config for this local sandbox).
- `npm run test:built-site`: passed; one regression script checks five pages' generated content, metadata, heading hierarchy and sitemap, plus the 404 noindex behavior.
- `tsc --noEmit`: passed. `eslint --ext .ts,.tsx src`: passed. The broader inherited lint configuration still includes generated output; it was not weakened or expanded in this phase.
- Browser: homepage retains the portrait and original text; Projects contains Xentral; Articles opens the existing article and shows its own title/canonical and one h1.
- Evidence: /tmp/tettinger-restored-verification/home.png and article.png.
- No remote push or deployment. Privacy and new articles remain pending the inputs above.

## Verification at the privacy checkpoint
- Production build, TypeScript and scoped source lint passed. Generated-site and analytics regression checks passed.
- Browser: initial/rejected pages contain no Google script; permission persists across reloads; allowing loads the tag; privacy navigation retains permission; withdrawing reloads without Google scripts.
- Mobile: at 390 × 844, both consent choices and the privacy link remain readable and usable.
- Browser automation exposes DOM but not cookie/network storage inspection; cookie deletion is implemented for host-only and parent-domain GA cookies. No claim of inspecting the Analytics account's data collection or retention settings.
- Google requires an Arguments object for its command queue. The vendor adapter has one documented lint exception and a regression assertion; rest arrays are incompatible.
- Next: push the verified changes to the existing production branch, verify Netlify's published result, and record the deployment.
