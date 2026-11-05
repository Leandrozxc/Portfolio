# Minimalist Apple-Themed Developer Portfolio

A modern, deployable portfolio built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with authentic, understated Apple aesthetics:
- **Restrained Typography & Contrast**: Pure blacks, subtle micro-borders, clean whitespace.
- **Physical Animations**: Smooth layout animations, physics-based springs, and mouse-following spotlight glow.
- **Interactive Project Sheet**: Click any project to open an Apple-style deep-dive modal sheet.
- **Instant Deployment**: Production-ready static output via Vite.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `/dist`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customizing Your Data

All portfolio data (name, bio, projects, timeline, skills, and links) is centralized in:
📂 `src/data/portfolio.ts`

Simply edit this single file to update your projects, contact links, and experience.

---

## 🌐 1-Click Deployment

### Deploy to Vercel
1. Push your code to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Framework Preset: **Vite** (auto-detected).
4. Click **Deploy**.

### Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com).
2. Drag and drop your `dist/` folder, or connect your GitHub repo.
3. Build command: `npm run build` | Publish directory: `dist`.

