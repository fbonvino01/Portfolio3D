/**
 * scene.js
 * Main Three.js background scene:
 *  - 2200-particle field with scroll parallax
 *  - Wireframe torus (hero accent)
 *  - Wireframe icosahedron (secondary accent)
 *  - Dynamic connection lines
 *  - Mouse-driven camera parallax
 */

import * as THREE from 'three';

export function initBackgroundScene() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // ── Renderer ────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 30);

  // ── Particle field ──────────────────────────────────
  const COUNT = 2200;
  const positions = new Float32Array(COUNT * 3);
  const sizes     = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 120;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    sizes[i] = Math.random() * 1.2 + 0.3;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const pMat = new THREE.PointsMaterial({
    color: 0x00e5ff, size: 0.08,
    transparent: true, opacity: 0.4,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ── Wireframe torus ─────────────────────────────────
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(8, 2.5, 24, 80),
    new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.08 }),
  );
  torus.position.set(14, 2, -10);
  scene.add(torus);

  // ── Wireframe icosahedron ────────────────────────────
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(5, 1),
    new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.07 }),
  );
  ico.position.set(-18, -6, -15);
  scene.add(ico);

  // ── Connection lines ─────────────────────────────────
  for (let i = 0; i < 60; i++) {
    const x1 = (Math.random() - 0.5) * 80;
    const y1 = (Math.random() - 0.5) * 80;
    const z1 = (Math.random() - 0.5) * 20;
    const x2 = x1 + (Math.random() - 0.5) * 15;
    const y2 = y1 + (Math.random() - 0.5) * 15;
    const z2 = z1 + (Math.random() - 0.5) * 10;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(
      new Float32Array([x1, y1, z1, x2, y2, z2]), 3,
    ));
    scene.add(new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: 0x00e5ff, transparent: true,
        opacity: 0.04 + Math.random() * 0.06,
      }),
    ));
  }

  // ── Mouse parallax ───────────────────────────────────
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Resize ───────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Animation loop ───────────────────────────────────
  const clock = new THREE.Clock();

  (function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    particles.rotation.y = t * 0.012;
    particles.rotation.x = t * 0.006;
    torus.rotation.x     = t * 0.20;
    torus.rotation.y     = t * 0.12;
    ico.rotation.x       = t * 0.10;
    ico.rotation.z       = t * 0.15;

    // smooth camera parallax
    camera.position.x += (mouseX *  4 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }());
}
