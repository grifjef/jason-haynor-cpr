/* =========================================================
   Jason Haynor CPR — main.js  ·  vanilla, progressive enhancement
   ========================================================= */
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: transparent over hero, solid on scroll ---------- */
  var header = document.getElementById("top");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navList.classList.contains("open")) {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Prototype request form ---------- */
  var form = document.getElementById("request-form");
  var note = document.getElementById("form-note");

  function setError(field, msg) {
    var wrap = field.closest(".field");
    var err = wrap ? wrap.querySelector(".err") : null;
    if (msg) { wrap && wrap.classList.add("invalid"); if (err) err.textContent = msg; field.setAttribute("aria-invalid", "true"); }
    else { wrap && wrap.classList.remove("invalid"); if (err) err.textContent = ""; field.removeAttribute("aria-invalid"); }
  }
  function escapeHtml(s){return s.replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name, phone = form.elements.phone, ok = true;
      if (!name.value.trim()) { setError(name, "Please enter your name."); ok = false; } else setError(name, "");
      var digits = (phone.value.match(/\d/g) || []).length;
      if (digits < 7) { setError(phone, "Please enter a valid phone number."); ok = false; } else setError(phone, "");
      if (!ok) { var fi = form.querySelector('[aria-invalid="true"]'); if (fi) fi.focus(); return; }
      if (note) {
        note.classList.add("success");
        note.innerHTML = "Thanks, " + escapeHtml(name.value.trim().split(" ")[0]) +
          " — this is a demo prototype, so your request wasn't sent yet. To lock in your class now, call or text <a href=\"tel:+17274219099\">(727) 421-9099</a>.";
      }
      form.querySelector('button[type="submit"]').textContent = "Request received (demo)";
    });
  }

  /* ---------- Active section in nav ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = navList ? navList.querySelectorAll('a[href^="#"]') : [];
  if ("IntersectionObserver" in window && navLinks.length) {
    var linkFor = {};
    navLinks.forEach(function (a) { linkFor[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkFor[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
