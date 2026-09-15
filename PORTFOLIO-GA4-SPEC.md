# PORTFOLIO — ADD GOOGLE ANALYTICS 4

**Written:** 2026-09-15
**Repo:** the portfolio Next.js repo (kagiso-hadebe.netlify.app)
**Property:** `Kagiso Hadebe Portfolio` under GA4 account `ROGUETECHNOLOGIES`
**Measurement ID:** `G-416CJXW1LG` — public browser value, safe to commit
**Stream ID:** `15779685912`

---

## 0. Rules

1. One step at a time. Report before committing.
2. Do not paste Google's raw gtag `<script>` snippet into `index.html` or `_document`. Use the official Next.js package below — it handles route-change page views and loads after hydration.
3. No other changes to the site in this commit. The content rework (`PORTFOLIO-REWORK.md`) is separate.
4. If anything is already sending analytics — an existing gtag tag, a Plausible/Umami script, a Netlify Analytics snippet — stop and report before adding a second one.

---

## 1. Inventory

Report before writing code:

1. App Router (`app/layout.tsx`) or Pages Router (`pages/_app.tsx`)?
2. Is there any existing analytics or tag-manager code anywhere? Grep for `gtag`, `googletagmanager`, `dataLayer`, `analytics`.
3. Is there a Content Security Policy — in `netlify.toml`, `next.config.js` headers, or a `_headers` file? If yes, GA4 needs `https://www.googletagmanager.com` in `script-src` and `https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com` in `connect-src`.
4. Is there a cookie or consent banner? If yes, describe what it gates.

---

## 2. Install

```
npm install @next/third-parties
```

Confirm the version installed matches the Next.js major in `package.json`.

---

## 3. Add the component

**App Router** — in `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-416CJXW1LG" />
      </body>
    </html>
  )
}
```

**Pages Router** — in `pages/_app.tsx`, render `<GoogleAnalytics gaId="G-416CJXW1LG" />` after `<Component {...pageProps} />`.

Prefer reading the ID from an env var if the repo already uses `NEXT_PUBLIC_*` variables for config; otherwise hardcode it — it's not a secret.

Do **not** add manual `page_view` calls. The component sends them on navigation.

---

## 4. CSP

If section 1.3 found a CSP, add the GA origins. If not, skip this.

---

## 5. Verify

1. `npm run build` passes.
2. `npm run dev`, open the site, open DevTools → Network, filter `collect`. Loading the page and navigating between sections should produce requests to `google-analytics.com/g/collect`.
3. No console errors mentioning CSP or gtag.

---

## 6. Commit and push

```
git add -A
git commit -m "chore: add GA4 via @next/third-parties (G-416CJXW1LG)"
git push
```

Netlify deploys on push. Report the commit hash.

---

## 7. Done means

- [ ] Inventory reported
- [ ] `@next/third-parties` installed
- [ ] `GoogleAnalytics` component in the root layout
- [ ] CSP updated if one exists
- [ ] `collect` requests visible locally
- [ ] Build green, pushed, Netlify deploying

Kagiso then opens the live site and confirms himself in GA4 Realtime.
