# Style & Conventions
- Ultracite (Biome) enforces formatting/linting; rely on `pnpm fix`/`pnpm check`. Remove debug logs; prefer early returns and clear naming.
- TypeScript strict: avoid `any`, prefer explicit types; optional chaining/nullish coalescing; avoid nested ternaries.
- React 19 functional components only; hooks at top level; include `rel="noopener"` on external links; provide alt text; use semantic HTML.
- Tailwind v4 zero-config; use utility classes instead of ad-hoc CSS. Prefer `@import "tailwindcss";` entry with layer directives as needed.
- Path alias `~/*` maps to `src/*`; base path `./` in Vite for relative asset loading.
- Commit messages follow Conventional Commits (commitlint). Pre-commit hook auto-fixes staged files with Ultracite; keep staged files clean before committing.
- Avoid barrel files; prefer specific imports; no `var`; `const` by default, `let` only when needed.