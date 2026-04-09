/**
 * projectScene.js
 * Mini Three.js scene rendered inside the ARchive project card.
 * Visualises a rotating wireframe museum room with floating artwork panels.
 */

import * as THREE from 'three';

export function initProjectScene() {
  const canvas = document.getElementById('project-canvas');
  if (!canvas) return;

  const container = canvas.parentElement;
  const W = container.clientWidth  || 400;
  const H = 280;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.set(0, 0, 10);

  // ── Museum room wireframe ────────────────────────────
  const roomGroup = new THREE.Group();

  const roomMesh = new THREE.Mesh(
    new THREE.BoxGeometry(8, 5, 8),
    new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.15 }),
  );
  roomGroup.add(roomMesh);

  // ── Floating artwork panels ──────────────────────────
  const artColors = [0x00e5ff, 0x7c3aed, 0x00ff88, 0xff4081];

  artColors.forEach((color, i) => {
    const angle = (i / artColors.length) * Math.PI * 2;
    const geo   = new THREE.PlaneGeometry(1.2, 0.9);

    // Coloured plane
    const panel = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.25, side: THREE.DoubleSide }),
    );
    panel.position.set(Math.cos(angle) * 2.8, 0, Math.sin(angle) * 2.8);
    panel.rotation.y = -angle;
    roomGroup.add(panel);

    // Wireframe frame
    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 }),
    );
    frame.position.copy(panel.position);
    frame.rotation.copy(panel.rotation);
    roomGroup.add(frame);
  });

  scene.add(roomGroup);

  // ── Floating particles inside the museum ────────────
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(300 * 3);
  for (let i = 0; i < 300; i++) {
    pPos[i * 3]     = (Math.random() - 0.5) * 7;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 7;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.04, transparent: true, opacity: 0.5 }),
  ));

  // ── Resize ───────────────────────────────────────────
  window.addEventListener('resize', () => {
    const w = container.clientWidth || 400;
    renderer.setSize(w, H);
    camera.aspect = w / H;
    camera.updateProjectionMatrix();
  });

  // ── Animation loop ───────────────────────────────────
  const clock = new THREE.Clock();

  (function animate() {
    requestAnimationFrame(animate);
    roomGroup.rotation.y = clock.getElapsedTime() * 0.15;
    renderer.render(scene, camera);
  }());
}
