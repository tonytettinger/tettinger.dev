# tettinger.dev

Personal portfolio built with Gatsby 4, React 17, Chakra UI and repository-authored MDX. Production: https://tettinger.dev/ (Netlify).

## Local development

Use Node 22.14.0. From a cloned checkout:

```sh
npm ci --legacy-peer-deps
npm run dev
```

The legacy peer flag accommodates this existing Gatsby/React dependency tree. No application secrets or environment variables are required.

## Verification and deployment

```sh
npx tsc --noEmit
npx eslint --ext .ts,.tsx src
npm run test:analytics
npm run build
npm run test:built-site
npm run serve
```

The inherited broad `npm run lint` also scans generated files; use the scoped source check above. Netlify builds and publishes the `master` branch. Verify the production privacy page and consent controls after pushing. The v2 redesign is preserved locally on `codex/archive-v2-2026-10-04`; work continues from the previous live design on `codex/live-baseline-improvements`.

## Analytics and privacy

`src/components/AnalyticsConsent.tsx` gates Google Analytics behind explicit opt-in. `src/analytics.ts` stores a 180-day preference and loads the tag only after permission. Rejecting keeps Google scripts unloaded; withdrawing removes analytics cookies and reloads without the tag. The footer reopens these choices on every page.

The privacy notice is at `/privacy/` and uses `tettinger.dev@gmail.com`. GA cookie expiry is configured to 180 days without rolling renewal. Server-side GA retention is controlled separately in the Analytics account and still needs owner verification; update the notice when confirmed. The Google command adapter intentionally uses `arguments`, as required by the vendor's parser; the regression check prevents replacing it with an incompatible rest array.
