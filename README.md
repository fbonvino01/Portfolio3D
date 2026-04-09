# Francesco Bonvino — 3D Portfolio

An interactive 3D portfolio website built with **Three.js** and **Vite**.

## ✨ Features

- Three.js particle field with mouse parallax
- Floating 3D wireframe shapes (torus, icosahedron)
- Mini 3D virtual museum scene (ARchive project)
- Scroll-reveal animations
- Custom animated cursor
- Fully responsive design
- Dark theme with electric-cyan accent

## 🛠 Tech Stack

- [Three.js](https://threejs.org/) — 3D rendering
- [Vite](https://vitejs.dev/) — build tool & dev server
- Vanilla JS (ES modules)
- CSS custom properties

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18

### Install & Run
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
# Output in /dist
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-3d/
├── index.html              # HTML entry point (Vite)
├── package.json
├── vite.config.js
├── src/
│   ├── main.js             # App entry — wires all modules
│   ├── style.css           # Global styles & design tokens
│   ├── data/
│   │   └── portfolio.js    # All CV/portfolio content
│   └── modules/
│       ├── cursor.js       # Custom cursor logic
│       ├── navbar.js       # Sticky nav + scroll state
│       ├── scrollReveal.js # IntersectionObserver reveals
│       ├── scene.js        # Three.js background scene
│       └── projectScene.js # Mini 3D scene (ARchive card)
└── public/
    └── favicon.svg
```

## 🌐 Deploy

Works with any static host (Netlify, Vercel, GitHub Pages):

```bash
npm run build
# Upload /dist
```

---

**Francesco Bonvino** · francescobonvino2001@gmail.com · [github.com/FrancescoBonvino](https://github.com/FrancescoBonvino)
