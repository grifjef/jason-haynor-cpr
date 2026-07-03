# Panel Review Log

Seven-person panel (see [`panel.md`](panel.md)). Each member reviewed independently; findings were merged, deduplicated, discussed as a group, and a **Fix now / Defer / Owner-confirm** decision was made for each. The loop ran until no Critical/High/Medium findings remained.

---

## Round 1 — review of the first build (v1)

The first version was a competent but **generic local-business template**: gradient hero, an emoji-icon "trust bar," three identical emoji cards, and AI-generated stock photography of a class (with an instructor who was **not** Jason). The panel's core verdict: *it doesn't feel like Jason's business, and it looks like a template.*

### Master findings — Round 1

| # | Finding | Sev | Raised by | Decision |
|---|---|---|---|---|
| 1 | **Photos aren't real / don't show Jason.** The hero used an AI-generated instructor — misrepresents the business. Jason (a specific, recognizable firefighter) must be the face. | Critical | Dana, Marisol, Priya | **Fix now** — replace all trainer imagery with Jason's real Facebook class photos |
| 2 | **Design feels templated.** Emoji icons (❤️🏢🔄), centered-everything, identical cards, generic gradient. No point of view. | High | Alex, Jordan, Dana | **Fix now** — editorial layout, real photography, custom SVG icons, signature motif |
| 3 | **Jason (the differentiator) is buried.** His firefighter story is the whole reason to choose him over an online mill; it appeared low on the page. | High | Dana, Jordan | **Fix now** — add a prominent "Meet Jason" section high on the page |
| 4 | **Trust proof is not visual.** The 5.0/68 rating was plain text; social proof from real, diverse class photos was unused. | High | Priya, Marisol | **Fix now** — floating rating badge on the hero photo + full-bleed group-photo proof band |
| 5 | Emoji trust bar looks unrefined. | Medium | Alex | **Fix now** — replace with a clean numeric stat strip |
| 6 | No brand signature; logo mark didn't match the real emblem (Maltese cross + heart + heartbeat). | Medium | Dana, Alex | **Fix now** — rebuild logo to match; add heartbeat/EKG motif as a recurring element |
| 7 | Anchor links hid section headings under the sticky header. | Medium | Alex | **Fix now** — `scroll-margin-top` on sections |
| 8 | Reviews were a single wide column on desktop (poor line length/density). | Medium | Priya, Alex | **Fix now** — 2-column reviews |
| 9 | Missing FAQ structured data for SEO. | Medium | Terrence | **Fix now** — add FAQPage JSON-LD |
| 10 | Certification **issuing body** (AHA vs Red Cross) unverified — copy must not imply one. | High | Dana | **Owner-confirm** — copy says "you leave certified" only; body logged in owner-confirmations |
| 11 | Grovewood address looks residential; don't over-expose it as a class venue. | Medium | Terrence, Dana | **Owner-confirm** — city + "location confirmed at booking"; full address kept in schema/footer for NAP |

### Round 1 actions applied (v2 rebuild)
- Pulled **four real photos** from the official Facebook page (Jason teaching a community-room class, an on-site dental-office group, the Clearwater-waterfront class, and the big wide group shot) and used them for the hero, the Meet-Jason section, the proof band, and the gallery. All AI trainer images were removed.
- Rebuilt as an **editorial layout**: split hero (headline + tilted, white-framed real photo with a floating **5.0★ rating badge** and a **"Taught by a Clearwater firefighter"** chip), a **heartbeat/EKG divider**, a clean 4-up **stat strip**, a prominent **Meet Jason** story block with a real pull-quote, class cards with **custom line-art SVG icons** (no emoji), a full-bleed **proof band** over the group photo, and a real-photo gallery.
- Rebuilt the **logo** to match the real brand (charcoal Maltese cross + red heart + white heartbeat line); reused it as the favicon.
- Fixed anchor offset, 2-column reviews, and added **FAQPage** schema.

---

## Round 2 — review of the redesign (v2)

| # | Finding | Sev | Raised by | Decision |
|---|---|---|---|---|
| 12 | Ordered-list default markers ("1. 2. 3.") showed beside the styled step badges. | Medium | Alex | **Fixed** — `list-style:none` on `.steps` |
| 13 | Real photos carry a baked-in "Schedule a class today (727-421-9099)" watermark and the CPR logo. | Low | Sam, Dana | **Keep** — it's the business's own promo and reinforces the phone number; owner can supply clean versions for launch (logged) |
| 14 | Hero photo weight (~156 KB) — largest asset. | Low | Sam | **Accept** — hero eager-loaded with width/height set (no CLS); all other photos lazy-loaded; total image payload ~0.6 MB |
| 15 | Proof-band group photo has a centered logo watermark under the dark overlay. | Polish | Alex | **Keep** — reads as intentional under the gradient |
| 16 | `og:image` path is relative (fine locally; absolute preferred once the domain is set). | Polish | Terrence | **Owner-confirm** — update at domain launch |

### Round 2 actions applied
- Removed stray list markers on the steps.
- Verified on the live viewport: **no horizontal scroll (0 px overflow)**, no console errors, form validation + demo-success behavior working, tap-to-call and directions/social links correct.

---

## Round 3 — group sign-off

The panel reviewed v2 across first impression, mobile/tablet/desktop, copy, trust, conversion, local relevance, SEO, accessibility, performance, simplicity, and owner appeal.

- **Dana (owner/operator):** "Now it looks like *my* business. Jason's face is up top, the group shots sell the social proof, and nothing over-claims. I'd show this to a client."
- **Marisol (customer):** "I can call in one tap, I see the price and what's covered, and the people in the photos look like real Clearwater classes."
- **Terrence (SEO):** LocalBusiness + FAQ schema present, H1 has service + city, NAP consistent, indexable service copy. ✔
- **Priya (CRO):** One primary action repeated (call/text), sticky mobile bar, proof above the fold. ✔
- **Alex (UX/a11y):** Semantic landmarks, labeled form with error states, visible focus, alt text on every image, AA contrast, reduced-motion handled, 44px+ targets. ✔
- **Jordan (copy):** Concrete, verifiable, in Jason's voice ("Learn. Prepare. Save."). No filler. ✔
- **Sam (perf):** No frameworks/web-fonts, one small CSS + one small JS file, images sized + lazy-loaded. ✔

**Consensus: ready to show the owner.** No Critical / High / Medium findings remain. Remaining items are owner-confirmations (facts, certification body, clean photos, form endpoint), tracked in [`owner-confirmations.md`](owner-confirmations.md).

**Iterations:** 3 (initial build → real-photo editorial rebuild → polish & sign-off).
