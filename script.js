/* Hemu Wellness — homepage behaviour */

(function () {
  'use strict';

  var hdr = document.getElementById('hdr');
  var hero = document.querySelector('.hero');
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  /* ---- header pins once the hero has scrolled past ---- */
  if (hdr && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      hdr.classList.toggle('is-pinned', !entries[0].isIntersecting);
    }, { rootMargin: '-88px 0px 0px 0px' }).observe(hero);
  }

  /* ---- mobile drawer ---- */
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    hdr.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      hdr.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ---- reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      // stagger siblings that arrive together, but keep it subtle
      setTimeout(function () { el.classList.add('is-in'); }, i * 70);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
