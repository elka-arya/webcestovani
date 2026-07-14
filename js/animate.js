/* ════════════════════════════════════════════════════════════
   animate.js — premium editorial micro-animations  v4
   Hero parallax · Atm-break parallax · Scroll reveal
   Header state · Card stagger · Active nav
   ════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. Header — glass intensifies on scroll ─────────────── */
  const header = document.getElementById('header');
  if (header) {
    const tick = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── 2. Hero parallax — leaf bg only, desktop only ──────── */
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const heroParallax = () => {
      if (window.innerWidth < 768) return;
      heroBg.style.transform = `translateY(${window.scrollY * 0.26}px)`;
    };
    window.addEventListener('scroll', heroParallax, { passive: true });
  }

  /* ── 3. Atmospheric break — subtle Ken Burns on scroll ───── */
  const atmImg = document.querySelector('.atm-break img');
  if (atmImg) {
    const atmEl = atmImg.parentElement;
    const atmParallax = () => {
      if (window.innerWidth < 600) return;
      const rect = atmEl.getBoundingClientRect();
      const visible = -rect.top / (window.innerHeight + rect.height);
      // Drift: 0% at top-of-viewport → 8% when bottom-of-viewport
      const offset = visible * 8;
      atmImg.style.transform = `scale(1.12) translateY(${offset}%)`;
    };
    window.addEventListener('scroll', atmParallax, { passive: true });
    atmParallax(); // run once on load
  }

  /* ── 4. Generic scroll reveal (IntersectionObserver) ─────── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ── 5. Article card stagger reveal ─────────────────────── */
  const grid = document.getElementById('articles-grid');
  if (grid) {
    const cardIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            cardIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    );

    const attachCard = (card, idx) => {
      // 80ms stagger per card, cycle of 6 — subtle choreography
      card.style.transitionDelay = `${Math.min(idx % 6, 5) * 80}ms`;
      cardIo.observe(card);
    };

    // MutationObserver catches dynamically rendered cards from app.js
    new MutationObserver(() => {
      grid.querySelectorAll('.article-card:not([data-anim])').forEach((card, i) => {
        card.setAttribute('data-anim', '1');
        attachCard(card, i);
      });
    }).observe(grid, { childList: true });

    // In case cards are already present at parse time
    grid.querySelectorAll('.article-card').forEach((card, i) => {
      card.setAttribute('data-anim', '1');
      attachCard(card, i);
    });
  }

  /* ── 6. Active nav link via scroll position ──────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const navIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((a) =>
              a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`)
            );
          }
        });
      },
      { threshold: 0.28 }
    );
    sections.forEach((s) => navIo.observe(s));
  }

})();
