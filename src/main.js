/**
 * main.js
 * Application entry point.
 * Imports and initialises all modules in the correct order.
 */

import './style.css';

import { renderAll }          from './modules/ui.js';
import { initCursor }         from './modules/cursor.js';
import { initNavbar }         from './modules/navbar.js';
import { initScrollReveal }   from './modules/scrollReveal.js';
import { initBackgroundScene } from './modules/scene.js';
import { initProjectScene }   from './modules/projectScene.js';

// 1. Render data-driven HTML first so the DOM is ready for observers
renderAll();

// 2. UI behaviours
initCursor();
initNavbar();

// 3. Scroll reveals (must run after renderAll populates .reveal elements)
initScrollReveal();

// 4. Three.js (can run in parallel with scroll setup)
initBackgroundScene();

// project canvas is only present after renderProjects() injects it
//  → defer one microtask to ensure DOM is painted
requestAnimationFrame(() => {
  initProjectScene();
});
