# CPR Certification by Jason Haynor — Website Prototype

A speculative, mobile-first marketing website for **CPR Certification by Jason Haynor** (Haynor.Life LLC) — firefighter-taught CPR/AED & first-aid certification classes in **Clearwater, FL**. Built to show the owner what a polished web presence could look like.

- **Live:** https://jason-haynor-cpr.vercel.app
- **Repo:** https://github.com/grifjef/jason-haynor-cpr

## Project purpose
The business has a strong reputation (5.0★ / 68 Google reviews, 100% recommend on Facebook) but **no website**. This prototype turns that reputation into a fast, conversion-focused site — led by Jason's real story and real class photos — that the owner can review, host as static files, and take to production.

## Materials found in `input/`
`input/` was **empty** at project start — no logos, notes, or photos were provided. All research and assets were gathered from public sources (Google Business Profile, the official Facebook page, Instagram, local directories). Real photos were pulled from the business's own Facebook page. The `input/` folder was left untouched.

## Folder structure
```
jason-haynor-cpr/
  README.md                     ← this file
  vercel.json                   ← Vercel static-hosting config (serves /site)
  site/                         ← the complete, runnable website
    index.html
    assets/
      css/styles.css            ← one stylesheet, mobile-first
      js/main.js                ← vanilla JS (nav, FAQ, form, active-nav)
      img/                      ← real class photos + SVG logo/favicon
      icons/ · fonts/           ← (unused; system fonts, inline SVG icons)
  docs/
    research-summary.md
    design-strategy.md
    panel.md
    panel-review-log.md
    performance-report.md
    owner-confirmations.md
    before-after-sales-one-pager.md
  original/
    current-site-notes.md       ← analysis of the (nonexistent) current site
    screenshots/                ← empty (no prior website to capture)
  scratch/                      ← working files (git-ignored)
```

## How to view locally
Just open the file:
```
site/index.html
```
Or run a simple static server (recommended, so relative paths and the form behave):
```bash
cd site
python3 -m http.server 8080
```
Then visit **http://localhost:8080**.

## What's static & complete
- Full single-page site: header, hero, stat strip, Meet Jason, classes, proof band, how-it-works, who-it's-for, gallery, reviews, FAQ, contact, footer.
- Mobile sticky call/request bar; desktop nav with active-section highlight.
- Real photography, custom inline-SVG logo/icons, heartbeat motif, LocalBusiness + FAQPage structured data, Open Graph tags.
- Tap-to-call, directions text, and social links are real and working.

## What's prototype-only
- **The contact form is a demo** — it validates and shows a confirmation but is **not connected** to any backend. The real conversion path is tap-to-call/text. Wire the form to email or a form service (Formspree, Netlify Forms, etc.) before launch.
- Star/review counts and the certification body reflect public info as of research; confirm before launch.

## What needs owner confirmation
See [`docs/owner-confirmations.md`](docs/owner-confirmations.md) — key items: certifying body (intentionally omitted), exact hours/pricing/curriculum, whether the Grovewood address should be public, clean photo originals, and the form email endpoint.

## Deploy as static files
Any static host works (the source *is* the runtime — no build step):
- **Vercel** (current): `vercel.json` sets `outputDirectory: site`. Deploy with `vercel deploy --prod` from this folder, or connect the GitHub repo in the Vercel dashboard for auto-deploys.
- **Netlify / Cloudflare Pages / GitHub Pages / S3:** upload the contents of `site/` as the web root.

## Notes on forms & integrations
- No backend, database, CMS, or auth. Pure HTML/CSS/vanilla JS.
- To make the form live: point it at a form endpoint and update `site/assets/js/main.js` (replace the demo success handler with a real submit) — or drop in a Formspree `action`.
- Connect a domain, then update the `canonical` and `og:*` URLs in `index.html`.

## Final deliverables
- Website prototype → `site/` (live at https://jason-haynor-cpr.vercel.app)
- Research → `docs/research-summary.md`
- Strategy → `docs/design-strategy.md`
- Panel & review loop → `docs/panel.md`, `docs/panel-review-log.md`
- Performance → `docs/performance-report.md`
- Owner confirmations → `docs/owner-confirmations.md`
- Sales one-pager → `docs/before-after-sales-one-pager.md`

_Built as a speculative local-business redesign prototype. All business facts are from public sources; anything uncertain is flagged for owner confirmation rather than invented._
