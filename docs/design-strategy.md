# Design Strategy

Merged from the seven panel members' independent pre-build assessments (see `panel.md`). This drove version 1 of the site.

## Panel consensus — what this site must do

- **Dana (owner/operator):** Lead with the firefighter + 5.0★ proof, make the **group / on-site / recert** path obvious (that's where the money is), and never state a certifying body we haven't confirmed. Say "certification card" carefully.
- **Marisol (customer):** Price, duration, what's covered, and "how do I sign up" must be answerable in ten seconds, on a phone, without scrolling forever. Keep it warm and local.
- **Terrence (SEO):** H1 = "CPR Certification Classes in Clearwater." LocalBusiness schema, FAQ schema, consistent NAP, real service copy, city + intent keywords used naturally.
- **Priya (CRO):** One primary action — **Call/Text (727) 421-9099** — repeated as a sticky mobile bar and at every section break. Secondary action = request a class / group quote. Put proof above the fold.
- **Alex (UX/a11y):** Mobile-first, AA contrast on red, big tap targets, visible focus, alt text, reduced-motion, no hover-only menus, hero short enough to show the CTA on a phone.
- **Jordan (copy):** Concrete headline; every claim verifiable. Use their real voice ("Learn. Prepare. Save.", fun/firefighter). No lorem, no "quality you can trust" filler.
- **Sam (perf):** System fonts, compressed images with width/height set, lazy-load below the fold, one small CSS + one small JS file, no frameworks.

## The strategy

- **Primary audience:** Clearwater/Pinellas locals who need an in-person CPR/AED/first-aid card — parents, babysitters, teachers, coaches, healthcare workers — **plus** workplaces/teams booking **group & on-site** training and recerts.
- **Primary CTA:** **Call or text (727) 421-9099** (tap-to-call; sticky on mobile).
- **Secondary CTA:** **Request a seat / group class** (prototype form) and **Message on Facebook**.
- **Brand feel:** Confident, warm, local, human, a little bold — a real firefighter who makes a scary topic fun. Trustworthy but not clinical or corporate.
- **Messaging angle:** *"Real, hands-on CPR taught by a Clearwater firefighter — fun, affordable, and done in about two hours."* Lean into what national online-cert mills can't offer: local, in-person, memorable, group-friendly.
- **Key trust signals:** 5.0★ / 68 Google reviews · 100% recommend on Facebook · taught by a Clearwater firefighter · family-owned & local · Safety Harbor Chamber member · real testimonials.
- **Visual direction:** Firefighter **red (#C8102E)** + **charcoal ink (#111318)** + **warm off-white (#FBF7F2)**, deep maroon for depth, one warm amber highlight sparingly. Custom **inline-SVG Maltese-cross + heart + heartbeat logo** (self-contained, crisp, high-contrast — matched to the real emblem). **Jason's real class photos** (pulled from the official Facebook page) used throughout — hero, Meet-Jason, proof band, gallery. Heartbeat/EKG line as a recurring motif.

> **Execution note (v2):** The first build leaned on AI placeholder imagery and a generic template layout; the panel flagged both. The delivered version replaces all trainer imagery with **Jason's actual Facebook class photos** and adopts a distinctive **editorial layout** (split hero with a floating rating badge + firefighter chip, heartbeat divider, numeric stat strip, prominent Meet-Jason story, custom line-art icons, full-bleed group-photo proof band). See [`panel-review-log.md`](panel-review-log.md).
- **Content priorities (page order):**
  1. Sticky header + tap-to-call
  2. Hero: headline, proof strip, dual CTA, class photo
  3. Trust bar (rating, reviews, firefighter, local, chamber)
  4. Classes / services (individual, group/on-site, recert; price & duration)
  5. Why choose Jason (firefighter, fun, local, family-owned)
  6. How it works (3 steps)
  7. Who it's for (parents, workplaces, healthcare, coaches…)
  8. Gallery / proof
  9. Testimonials (real, attributed)
  10. FAQ (accordion; SEO-aligned)
  11. Location / hours / contact + request form
  12. Final CTA
  13. Footer with NAP, socials
- **Type:** System UI stack (San Francisco / Segoe / Roboto) for speed; a single tasteful display treatment via CSS only (no web-font download). Heavy weight + tight tracking for headlines.
- **Risks / unknowns → owner confirmation:** certifying body (AHA/Red Cross), exact current curriculum & pricing tiers, whether public classes are held at the Grovewood address (looks residential) or on-site/mobile, card same-day issuance, testimonial usage permission, real photo assets, form endpoint. All logged in `owner-confirmations.md`.
- **What to avoid:** implying a specific certification authority we haven't verified; cheesy stock photos; competing CTAs; heavy frameworks; any invented award/claim.
