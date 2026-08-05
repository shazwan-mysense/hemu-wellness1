/* Hemu Wellness — homepage behaviour */

(function () {
  'use strict';

  var hdr = document.getElementById('hdr');
  var hero = document.querySelector('.hero');
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  /* ---- hero slideshow ---- */
  var slides = document.querySelectorAll('.hero__slide');
  var dots = document.querySelectorAll('.hero__dots button');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (slides.length > 1) {
    var current = 0;
    var timer = null;
    var HOLD = 2000;   // ms each slide stays up — raise this to slow the carousel down

    function show(next) {
      if (next === current) return;
      slides[current].classList.remove('is-on');
      slides[current].setAttribute('aria-hidden', 'true');
      dots[current].classList.remove('is-on');
      dots[current].setAttribute('aria-selected', 'false');

      current = next;

      slides[current].classList.add('is-on');
      slides[current].setAttribute('aria-hidden', 'false');
      dots[current].classList.add('is-on');
      dots[current].setAttribute('aria-selected', 'true');
    }

    function start() {
      if (calm) return;
      stop();
      timer = setInterval(function () {
        show((current + 1) % slides.length);
      }, HOLD);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.dataset.go));
        start();
      });
    });

    var heroEl = document.querySelector('.hero');
    heroEl.addEventListener('mouseenter', stop);
    heroEl.addEventListener('mouseleave', start);

    // don't run the carousel while the tab is in the background
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    start();
  }

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
