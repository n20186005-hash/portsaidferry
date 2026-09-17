# Validation status

Verified locally on Windows with Node 22.12.0 and pnpm 12.4.2:

- Static string checks: no `example.com`, `localhost` or `chrome-extension://` occurrences; the domain is centralized as the default of `site` in `astro.config.mjs` (`https://portsaidferry.com`, overridable via `SITE_URL`).
- Dependencies: `pnpm-lock.yaml` was regenerated with pnpm 12.4.2 (including `packageManagerDependencies` and multi-platform optional packages). `pnpm install --frozen-lockfile --lockfile-only` passes and leaves the lockfile byte-identical, and a full `pnpm install --frozen-lockfile` completes successfully.
- Build: `astro build` succeeds. Output includes `index.html`, `sitemap-index.xml`, `sitemap-0.xml`, `robots.txt`, `manifest.webmanifest`, `sw.js` and the PWA icons under `icons/`.
- Structured data: both JSON-LD blocks parse (`TouristAttraction`+`LocalBusiness` with `@id`, `image`, `hasMap`, `sameAs`; `FAQPage` with 8 questions). `aggregateRating` is intentionally absent because rating/review counts are only displayed on the page with attribution to Google Maps.
- Page structure: single `H1` containing the entity name and city; `H2` sections for About, ratings, planning, location, landmarks, history, map, FAQ and sources; all four `<img>` elements carry entity-aware `alt` text.
- Rating data: 4.6 / 5 with 10,419 Google Maps reviews, labelled as synced September 2026, with source and copyright notes in the ratings block and in the sources section.
- Not covered here: real-network Cloudflare deployment and Google Rich Results testing.
