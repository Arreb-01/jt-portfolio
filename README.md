# JT Portfolio

Neo-brutalist personal portfolio website for JT, built with Vite, React, and TypeScript. The site presents AI application projects, machine learning experiments, interactive media work, research recognition, GitHub links, and a public resume PDF.

Live site: [jt-portfolio-snowy.vercel.app](https://jt-portfolio-snowy.vercel.app)

## Overview

This portfolio is designed as a sharp, art-facing personal site rather than a generic landing page. It uses a neo-brutalist visual system with bold typography, thick black borders, solid color blocks, hard offset shadows, and physical interaction feedback.

The default language is English. A one-click language switch restores the original mixed Chinese version: English interface labels with Chinese descriptive copy.

## Features

- Neo-brutalist layout with hard borders, high-contrast color blocks, and no gradient effects.
- Responsive desktop and mobile experience.
- English-first content with a one-click Chinese mixed-language mode.
- Project cards for selected works, AI/ML projects, and interactive media.
- Public resume link served from `public/JT-Resume.pdf`.
- Handmade SVG visuals for the hero board and project cards.
- Production QA workflow with unit tests, Vite production build, and local `dist` preview.

## Tech Stack

- Vite
- React
- TypeScript
- CSS
- Vitest
- Testing Library
- Playwright Core for production preview QA
- Vercel for deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Quality Checks

Run the test suite:

```bash
npm test -- --run
```

Run a full production check:

```bash
npm run build
npm run preview
```

Recommended manual QA:

- Verify the default page is English.
- Click the language switch and confirm the mixed Chinese version.
- Check desktop and mobile layouts for horizontal overflow.
- Confirm `/JT-Resume.pdf` opens correctly.
- Confirm GitHub and project links work.
- Confirm all SVG assets load without 404 errors.

## Project Structure

```text
src/
  App.tsx
  components.tsx
  data/
    content.ts
    projects.ts
  styles.css
  test/
public/
  JT-Resume.pdf
  favicon.svg
  images/
```

## Deployment

The production site is deployed on Vercel.

Recommended settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Public assets: `public/`

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
