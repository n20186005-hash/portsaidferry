# Port Said–Port Fouad ferry independent guide

Existing Arabic `/` and English `/en/` static Astro pages are retained, with locale-specific direction and shared content. No adapter or live weather/departure feature is added. A root asset Worker supplies canonical entrance redirects and localized true error responses before static assets.

Use Node24.21.0 and pnpm12.4.2 with the existing committed frozen lock and native build allowances. The observed build/deploy flow is `pnpm run build` and plain `npx wrangler deploy`, project portsaidferry. Dependency versions and workspace graph are retained.

```sh
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
npx wrangler dev --ip 127.0.0.1
```

Current first/last crossing, interval and category-specific charges were not established. Historical tourism, temporary2020notices and2026infrastructure reporting are attributed with their limits, rather than becoming an unconditional schedule, free-access claim or live departure display. The west-bank Maps pin does not identify both boarding gates or prove an accessible complete crossing.

Maps figures are dated third-party attribution, excluded from rating markup. Generic tourism institution homepages are background links, not same-entity identifiers. An unverified operator telephone is not published.

Original symbolic illustrations remain as brand graphics (`og-card.png`, `concept-*.svg`). On 5 November 2026 the four historical documentary photographs were restored from the site's original Wikimedia Commons references and are hosted locally; see `public/images/CREDITS.txt` for per-file attribution and reuse terms. Arabic and English alt text and captions now describe them as historical photographs rather than symbolic art. Neither the illustrations nor the photographs are evidence of present-day vessel/berth design, timetable or service.

Google Analytics is choice-controlled, with localStorage persistence, an explicit disable flag and consent state updates. Existing loaded scripts/cookies are not represented as removed on refusal. Hosting processes and potential independent hosting browser analytics are disclosed separately. Dialogs return focus to their trigger; native Escape behavior remains. Without script, navigation anchors remain available. The retired service worker deletes only this site's old cache namespace and stops intercepting requests.

Local checks are not production acceptance. The preflight captured a successful root request and subsequent403responses for other routes; those production route/alias/error checks remain pending without any access-setting or user-agent workaround.
