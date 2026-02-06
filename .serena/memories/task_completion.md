# Task Completion Checklist
- Ensure code formatted/linted: run `pnpm fix` then `pnpm check`.
- Confirm build passes: `pnpm build` (and `pnpm preview` for manual QA if needed).
- Keep staged files clean (lefthook pre-commit will run Ultracite fix).
- Verify assets load from `public/` with Vite base `./`.
- Use Conventional Commit message style for commits (commitlint enforced).