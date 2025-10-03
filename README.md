PC Manizer GX
================

Fast, privacy‑first image editing in your browser. Upload, crop, customize, and download in seconds — optimized for creators and gamers.

[![Built with Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/) [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Table of Contents
-----------------

- [PC Manizer GX](#pc-manizer-gx)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Screenshots](#screenshots)
    - [Hero](#hero)
    - [Features Grid](#features-grid)
    - [Upload / Try It Now](#upload--try-it-now)
    - [Gaming / Community Sections](#gaming--community-sections)
    - [Call To Action](#call-to-action)
  - [Environment \& Commands](#environment--commands)
  - [Tech Stack](#tech-stack)
  - [License](#license)

Getting Started
---------------

Prerequisites:

- Node.js 18+ (or 20+ recommended)
- pnpm (recommended) or npm/yarn

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`.

Build and preview production:

```bash
pnpm build
pnpm start
```

Project Structure
-----------------

- `app/` Next.js App Router pages and layout
- `components/` UI and page sections
- `public/` static assets
  - `public/screenshots/` screenshots used in this README
- `styles/` global CSS

Features
--------

- Lightning‑fast client‑only processing
- Precision cropping and pro‑grade filters
- No sign‑up required; works fully in the browser

Screenshots
-----------

Place images in `public/screenshots/`. If filenames contain spaces, they are URL‑encoded below so GitHub renders them correctly.

### Hero

![Hero](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161103.png)

### Features Grid

![Features](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161124.png)

### Upload / Try It Now

![Upload](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161145.png)

### Gaming / Community Sections

![Gaming](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161246.png)
![Community](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161308.png)


### Call To Action

![CTA](public/screenshots/Captura%20de%20pantalla%202025-10-03%20161329.png)

Environment & Commands
----------------------

- `pnpm dev` start dev server
- `pnpm build` production build
- `pnpm start` run production server

Tech Stack
----------

- Next.js App Router, React, TypeScript
- Tailwind CSS + Radix UI (shadcn/ui components)

License
-------

MIT

