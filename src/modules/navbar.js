/**
 * navbar.js
 * - Adds .scrolled class when user scrolls past 40px
 * - Hamburger toggle for mobile nav
 */

export function initNavbar() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const links     = nav.querySelector('.nav-links');

  if (!nav) return;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile hamburger
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      const isOpen = links.style.display === 'flex';
      links.style.display = isOpen ? '' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(5,5,8,0.97)';
      links.style.padding = '24px';
      links.style.gap = '20px';
      links.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.style.display = '';
      });
    });
  }
}
