/**
 * cursor.js
 * Custom animated cursor with ring + dot.
 * Ring lags behind slightly for a fluid feel.
 * Enlarges on hoverable elements.
 */

export function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');

  let mx = -200, my = -200; // raw mouse position
  let rx = -200, ry = -200; // smoothed ring position

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Snap dot, smooth ring
  (function tick() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';

    requestAnimationFrame(tick);
  }());

  // Hover state on interactive elements
  const HOVER_SELECTOR = 'a, button, .project-card, .skill-group, .stat-card, .edu-card, .cert-card, .contact-link';
  document.querySelectorAll(HOVER_SELECTOR).forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    mx = -200; my = -200;
  });
}
