# 墨絵 Portfolio — Sumi-e Style

A premium, Japanese ink-inspired developer portfolio built with **React**, **Framer Motion**, **GSAP**, and **Lenis**. Designed to impress industry professionals.

---

## ✦ Features

- **Cinematic Loader** — counting animation with Japanese kanji
- **Ink-spread Hero** — GSAP SVG brush stroke animations, parallax orb, staggered text reveal
- **Smooth Scroll** — Lenis scroll with silk-smooth physics
- **Custom Cursor** — gold dot + lagging ring with hover expand
- **Scroll Reveal** — IntersectionObserver-based fade/slide reveals
- **Animated Skill Bars** — trigger on viewport entry with spring easing
- **Project Cards** — hover accent bars, tag reveals, link buttons
- **Timeline Experience** — vertical timeline with SVG nodes
- **Elegant Contact Form** — animated underline inputs, mailto integration
- **Japanese Seal Footer** — animated hanko stamp
- **Film Grain Overlay** — subtle noise texture for premium feel
- **Tech Stack Marquee** — infinite horizontal scroll
- **Fully Responsive** — mobile hamburger menu, fluid grids

---

## ✦ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Animations | Framer Motion + GSAP |
| Smooth Scroll | Lenis |
| Styling | CSS Modules + CSS Custom Properties |
| Fonts | Cormorant Garamond, Noto Serif JP, Space Mono |
| Data | `src/data/portfolio.js` — single source of truth |

---

## ✦ Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

---

## ✦ Customization

**All your personal data lives in one file:**

```
src/data/portfolio.js
```

Edit `personalInfo`, `skills`, `projects`, `experience`, and `techStack` arrays to update the entire portfolio.

---

## ✦ Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the /build folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
```

---

## ✦ Project Structure

```
portfolio/
├── public/
│   └── index.html          # Root HTML, Google Fonts
├── src/
│   ├── data/
│   │   └── portfolio.js    # ← Edit ALL your info here
│   ├── hooks/
│   │   ├── useCursor.js
│   │   ├── useLenis.js
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── globals.css     # CSS variables, utilities, animations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx + .module.css
│   │   │   └── Footer.jsx + .module.css
│   │   ├── ui/
│   │   │   ├── Cursor.jsx
│   │   │   └── Loader.jsx + .module.css
│   │   └── sections/
│   │       ├── Hero.jsx + .module.css
│   │       ├── About.jsx + .module.css
│   │       ├── Skills.jsx + .module.css
│   │       ├── Projects.jsx + .module.css
│   │       ├── Experience.jsx + .module.css
│   │       └── Contact.jsx + .module.css
│   ├── App.jsx             # Root app with loader gate
│   └── index.js            # React DOM entry
└── package.json
```

---

## ✦ Resume

Place your resume PDF at:
```
public/resume.pdf
```

---

*Crafted with care. 手作り — Made by Hand.*
