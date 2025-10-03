<div align="center">
  <img src="public/placeholder-logo.svg" height="72" alt="PC Manizer GX logo" />

  <h1>PC Manizer GX</h1>
  <p>Transform images like a pro gamer — ultra-fast, privacy-first, and free.</p>

  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
    <img alt="React" src="https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img alt="Radix UI" src="https://img.shields.io/badge/Radix%20UI-Components-111?style=for-the-badge" />
  </p>

  <p>
    <a href="#-quick-start">Quick Start</a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="#-screenshots">Screenshots</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
  </p>
</div>

<!--
Add your screenshots to docs/screenshots and update the file names below.
If you’re using the images you shared in chat, save them as:
  docs/screenshots/01-hero.jpg
  docs/screenshots/02-features.jpg
  docs/screenshots/03-editor-upload.jpg
  docs/screenshots/04-gaming.jpg
  docs/screenshots/05-community.jpg
  docs/screenshots/06-cta.jpg
-->

### ✨ Overview

PC Manizer GX is a sleek, blazing‑fast image tool inspired by gaming aesthetics. Upload, crop, customize, and download your images in seconds — no accounts, no tracking, 100% in-browser.

### 🚀 Quick Start

```bash
# clone
git clone <your-repo-url> pc-manizer
cd pc-manizer

# install (recommended)
pnpm install

# dev
pnpm dev

# build & start
pnpm build && pnpm start
```

Alternatively use npm:

```bash
npm install
npm run dev
```

### 🧩 Features

- **Precision Cropping**: Pixel‑perfect drag, resize, and position.
- **Powerful Filters**: Brightness, contrast, saturation and more.
- **Lightning Fast**: Optimized rendering with modern React 19.
- **Instant Download**: High‑quality export, zero compression surprises.
- **Privacy First**: Everything runs locally in your browser.
- **No Sign‑Up**: Open the app and get to work.

### 🖼️ Screenshots

<div align="center">
  <img src="docs/screenshots/01-hero.jpg" alt="Hero section" width="900" />
  <br/>
  <img src="docs/screenshots/02-features.jpg" alt="Features grid" width="900" />
  <br/>
  <img src="docs/screenshots/03-editor-upload.jpg" alt="Editor - upload step" width="900" />
  <br/>
  <img src="docs/screenshots/04-gaming.jpg" alt="Gaming optimized section" width="900" />
  <br/>
  <img src="docs/screenshots/05-community.jpg" alt="Community & testimonials" width="900" />
  <br/>
  <img src="docs/screenshots/06-cta.jpg" alt="Call to action" width="900" />
</div>

### 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Radix UI, Tailwind CSS v4, tailwindcss-animate
- **Icons**: `lucide-react`
- **State & Forms**: `react-hook-form`, `zod`
- **Extras**: `framer-motion`, `embla-carousel-react`, `recharts`
- **Analytics**: `@vercel/analytics`

### 📁 Project Structure

```text
app/                # Next.js app router pages/layouts
components/         # UI sections & reusable components
components/ui/      # Primitives (Radix + shadcn-inspired)
hooks/              # Reusable hooks
lib/                # Utilities
public/             # Static assets
styles/             # Tailwind layer & tokens
```

Key sections rendered on the homepage:

```startLine:endLine:app/page.tsx
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { EditorSection } from "@/components/editor-section"
import { GamingSection } from "@/components/gaming-section"
import { CommunitySection } from "@/components/community-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
```

### 🔧 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### 📦 Environment

No server creds are required. Image optimization is disabled during build to keep exports simple for static hosting.

```startLine:endLine:next.config.mjs
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}
```

### 🖌️ Design Notes

- Dark theme with neon accents inspired by gaming UIs
- Custom tokens defined in `app/globals.css`
- Motion and glow utilities for subtle, responsive flair

### 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/awesome`
3. Commit changes: `git commit -m "feat: add awesome"`
4. Push and open a PR

### 📜 License

This project has no explicit license yet. If you plan to open‑source it, add a `LICENSE` file (MIT is a good default).

---

Made with ❤️ for creators and gamers. Enjoy the speed.


