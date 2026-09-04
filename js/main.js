/* Haitham Mohamed — portfolio interactions. Tiny, dependency-free. */
(function () {
  'use strict';

  /* Current year in footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Scroll-reveal via IntersectionObserver (respects reduced motion) */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('[data-reveal]');

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Mobile navigation toggle */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.hidden = !open;
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false); toggle.focus();
      }
    });
  }
})();
