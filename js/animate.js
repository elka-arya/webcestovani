/* ════════════════════════════════════════════════════════════
   animate.js — premium editorial micro-animations
   Hero parallax · Scroll reveal + stagger · Header state · Active nav
   ════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. Header — glass intensifies on scroll ── */
  const header = document.getElementById('header');
  if (header) {
    const tick = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── 2. Hero parallax — leaf image only ── */
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const parallax = () => {
      if (window.innerWidth < 768) return;
      // Subtle: 28% of scroll speed, upward drift
      heroBg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener('scroll', parallax, { passive: true });
  }

  /* ── 3. Generic scroll reveal (IntersectionObserver) ── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ── 4. Article card stagger reveal ── */
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
      { threshold: 0.06, rootMargin: '0px 0px -28px 0px' }
    );

    const attachCard = (card, idx) => {
      // Stagger up to 6 cards × 90ms, then reset cycle
      card.style.transitionDelay = `${Math.min(idx % 6, 5) * 90}ms`;
      cardIo.observe(card);
    };

    // MutationObserver catches dynamically rendered cards (app.js)
    new MutationObserver(() => {
      grid.querySelectorAll('.article-card:not([data-anim])').forEach((card, i) => {
        card.setAttribute('data-anim', '1');
        attachCard(card, i);
      });
    }).observe(grid, { childList: true });

    // In case cards are already present
    grid.querySelectorAll('.article-card').forEach((card, i) => {
      card.setAttribute('data-anim', '1');
      attachCard(card, i);
    });
  }

  /* ── 5. Active nav underline via scroll ── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav a[href^="#"]');

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
      { threshold: 0.3 }
    );
    sections.forEach((s) => navIo.observe(s));
  }

  /* ── 6. Atmospheric break — very subtle Ken Burns on scroll ── */
  const atmImg = document.querySelector('.atm-break img');
  if (atmImg) {
    // Already handled via CSS hover; no JS needed for the base effect
  }

})();
