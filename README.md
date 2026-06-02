# JT Portfolio

Neo-brutalist personal portfolio for JT. The site presents AI application work, machine learning projects, interactive media experiments, research notes, GitHub links, and a public resume PDF.

Live site: [jt-portfolio-snowy.vercel.app](https://jt-portfolio-snowy.vercel.app)

## Highlights

- Neo-brutalist visual system with hard black borders, solid color blocks, and physical button feedback.
- English-first content with a one-click Chinese language switch.
- Responsive desktop and mobile layouts.
- Public resume link served from `public/JT-Resume.pdf`.
- Generated SVG artwork for the hero board and project cards.

## Tech Stack

- Vite
- React
- TypeScript
- CSS
- Vitest
- Playwright for production QA screenshots
- Vercel for deployment

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm test -- --run
npm run build
npm run preview
```

## Deployment

The project is deployed on Vercel.

- Build command: `npm run build`
- Output directory: `dist`
- Public assets: `public/`

## Project Structure

```text
src/
  App.tsx
  components.tsx
  data/projects.ts
  styles.css
public/
  JT-Resume.pdf
  images/
```
