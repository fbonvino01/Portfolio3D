/**
 * scrollReveal.js
 * Uses IntersectionObserver to add .visible to .reveal elements
 * as they enter the viewport. Staggered delay for sibling groups.
 */

export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(
            () => entry.target.classList.add('visible'),
            idx * 60,
          );
          observer.unobserve(entry.target); // trigger once
        }
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((el) => observer.observe(el));
}
