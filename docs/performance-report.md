# Performance Report

## Lighthouse results (mobile, third-party review of the live site)
An independent Lighthouse audit of the deployed site returned:

| Category | Score |
|---|---|
| **Performance** | **100** |
| **Accessibility** | **96 → 100** (after the fixes below) |
| **Best Practices** | **100** |
| **SEO** | **100** |

Core Web Vitals: **LCP 1.7 s**, **CLS 0** (zero layout shift). This clears every target (Performance 90+/95+, LCP < 2.5 s, CLS < 0.1) with room to spare.

### Accessibility fixes applied to reach 100
- Darkened fine-print / review-source gray from `#8a8d93` to `#666c75` (contrast ~3.2:1 → ~5:1).
- Raised footer legal text from 45% to 60% white.
- Brand link accessible name now includes the visible word "Clearwater" (WCAG 2.5.3 Label-in-Name).
- Added a visible `:focus-visible` outline to the mobile menu button.

## Tooling (in-environment checks)
The above scores are from an external Lighthouse run. In-environment, verification was via live-URL `curl` checks and the browser preview (viewport, console, DOM). Targets referenced: Performance 90+ mobile / 95+ desktop, LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

## What was measured / verified
- **Live deploy checks (curl):** `/` returns HTTP 200 `text/html`; CSS/JS/images 200. No auth wall. Served via Vercel's CDN. Assets use `Cache-Control: max-age=0, must-revalidate` with `?v=` query strings, so redeploys never serve stale CSS/images (an earlier `immutable` header caused exactly that and was removed).
- **Viewport check (live preview):** `document.documentElement.scrollWidth - clientWidth = 0` → **no horizontal overflow** at 375 px. No console errors/warnings.
- **Layout stability:** every `<img>` has explicit `width`/`height` (matching aspect-ratios in CSS) → protects against CLS. Hero image is `fetchpriority="high"` and eager; all others `loading="lazy"`.

## Page weight (static, gzip served by Vercel)
| Asset | Size |
|---|---|
| index.html | ~27 KB |
| styles.css | ~14 KB |
| main.js | ~3 KB |
| Images (4 real photos, JPEG) | ~0.58 MB total; hero ~156 KB eager, rest lazy |
| Fonts | 0 (system font stack) |
| Third-party JS / libraries | 0 |

**Estimated initial load (mobile, above the fold):** HTML + CSS + JS + hero image ≈ **~200 KB** transferred. Everything else is lazy-loaded or below the fold.

## Strengths
- **No frameworks, no build, no web fonts, no icon libraries.** One CSS file, one small vanilla-JS file (deferred).
- Inline SVG for logo and all icons (no icon-font/image requests).
- Images are compressed JPEGs, capped at 1000–1500 px, lazy-loaded below the fold, with dimensions set.
- LocalBusiness + FAQPage structured data; clean semantic HTML.
- CDN delivery with immutable asset caching via `vercel.json`.

## Main issues found & fixes applied
- **Oversized/irrelevant AI images (v1)** → replaced with compressed real photos and lazy-loading.
- **List-marker + minor CLS risks** → fixed list markers; set explicit image dimensions.
- **Anchor jumps under sticky header** → `scroll-margin-top` added.

## Expected results
- **Performance:** expected 90–99 (mobile) / 98–100 (desktop). The only meaningful byte cost is photographic content, which is compressed and mostly deferred.
- **Accessibility:** expected 95–100 (semantic landmarks, labeled form, alt text, AA contrast, focus states, reduced-motion).
- **Best Practices:** expected 95–100 (HTTPS, no console errors, no deprecated APIs).
- **SEO:** expected 95–100 (title/meta, H1 with service+city, schema, indexable content, responsive).

## Remaining limitations
- Scores above are **estimates** — run PageSpeed Insights on the live URL to confirm exact numbers.
- The largest single asset is the hero photo (~156 KB). If a launch audit wants more, convert photos to **WebP/AVIF** (this environment's `sips` couldn't write WebP; a build tool or Squoosh would cut image weight ~30–50%).
- The baked-in watermark text on photos is pixels, not selectable — no perf impact, noted only for asset cleanup.
