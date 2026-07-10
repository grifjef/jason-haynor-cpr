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

  /* ---------- Sticky call bar: show only mid-page ----------
     Hidden while the hero or the contact section is visible, so it
     never duplicates the hero buttons, obscures the hero rating line,
     or repeats the contact options. */
  var callbar = document.getElementById("callbar");
  if (callbar && "IntersectionObserver" in window) {
    var suppressors = [document.querySelector(".panel-hero"), document.getElementById("contact")].filter(Boolean);
    var visible = new Set();
    var barObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
      });
      callbar.classList.toggle("is-hidden", visible.size > 0);
    }, { threshold: 0 });
    suppressors.forEach(function (el) { barObs.observe(el); });
  } else if (callbar) {
    callbar.classList.remove("is-hidden");
  }

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
