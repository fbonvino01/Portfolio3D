/**
 * ui.js
 * Dynamically renders all data-driven sections from portfolio.js into the DOM.
 * Keeps index.html clean and makes content updates trivial (edit data/portfolio.js).
 */

import {
  skills,
  experience,
  projects,
  education,
  certifications,
} from '../data/portfolio.js';

// ── Skills grid ──────────────────────────────────────
export function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skills.map((group) => `
    <div class="skill-group reveal">
      <div class="skill-group-icon ${group.colorClass}">${group.icon}</div>
      <div class="skill-group-title">${group.title}</div>
      <div class="skill-tags">
        ${group.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ── Experience list ──────────────────────────────────
export function renderExperience() {
  const list = document.getElementById('exp-list');
  if (!list) return;

  list.innerHTML = experience.map((job) => `
    <div class="exp-item reveal">
      <div class="exp-meta">
        <div class="exp-period">${job.period}</div>
        <div class="exp-company">${job.company}</div>
        <div class="exp-location">${job.location}</div>
      </div>
      <div class="exp-content">
        <div class="exp-role">${job.role}</div>
        <div class="exp-client">${job.client}</div>
        <ul class="exp-bullets">
          ${job.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ── Projects grid ────────────────────────────────────
export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map((p) => {
    const featuredClass = p.featured ? 'featured' : '';
    const canvasBlock   = p.hasCanvas
      ? `<div class="project-canvas-wrap"><canvas id="project-canvas"></canvas></div>`
      : '';
    const linkBlock = p.link
      ? `<a href="${p.link.href}" target="_blank" rel="noopener" class="project-link">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
           </svg>
           ${p.link.label}
         </a>`
      : '';

    return `
      <div class="project-card ${featuredClass} reveal">
        <div>
          <div class="project-tag">${p.tag}</div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-tech">
            ${p.tech.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          ${linkBlock}
        </div>
        ${canvasBlock}
      </div>
    `;
  }).join('');
}

// ── Education list ───────────────────────────────────
export function renderEducation() {
  const list = document.getElementById('edu-list');
  if (!list) return;

  list.innerHTML = education.map((edu) => {
    const grade = edu.grade ? `<span class="edu-grade">${edu.grade}</span>` : '';
    return `
      <div class="edu-card reveal">
        <div class="edu-year">${edu.year}</div>
        <div>
          <div class="edu-degree">${edu.degree} ${grade}</div>
          <div class="edu-school">${edu.school}</div>
          <div class="edu-note">${edu.note}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Certifications ────────────────────────────────────
export function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  grid.innerHTML = certifications
    .map((c) => `<div class="cert-card reveal">${c}</div>`)
    .join('');
}

// ── Run all renderers ─────────────────────────────────
export function renderAll() {
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();
}
