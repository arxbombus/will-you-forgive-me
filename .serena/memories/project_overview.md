# Project Overview
- Purpose: React + Vite TypeScript app being adapted into a playful “forgiveness” microsite using 12 cute cat sticker images in `public/`.
- Stack: React 19 with React Compiler, Vite 7, TypeScript strict configs, Tailwind CSS v4 (zero-config via `@tailwindcss/vite`), Ultracite/Biome for lint+format, tsconfig path alias `~/* -> src/*`.
- Structure: `src/main.tsx` (entry, StrictMode), `src/app.tsx` (current Vite counter stub), `src/app.css` + `src/index.css` (to be replaced), `src/test.ts` (tiny util example). Assets: 12 cat PNGs under `public/` (plus `vite.svg`). Config: `vite.config.ts` (plugins: tsconfigPaths, React w/ compiler, Tailwind), tsconfigs, lefthook, commitlint.
- Hooks/QA: lefthook pre-commit runs `pnpm ultracite fix`; pre-push runs `pnpm audit`; commit-msg uses commitlint conventional.
- Platform: Darwin; package manager: pnpm (lockfile present).