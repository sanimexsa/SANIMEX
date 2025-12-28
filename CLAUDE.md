# SANIMEX Project Guidelines

## Required Skills

Before starting any work, read and follow these skills:

1. **Git Workflow** (`skills/git-workflow/SKILL.md`) - MANDATORY for all code changes
   - Create GitHub Issue first
   - Create feature/fix branch
   - Create PR instead of pushing to main
   - Wait for CI before merging

2. **Web Artifacts Builder** (`skills/web-artifacts-builder/SKILL.md`) - For building React components
   - Component patterns, animation classes, i18n
   - Avoid "AI slop" (no purple gradients, excessive centering)

3. **Brand Guidelines** (`skills/brand-guidelines/SKILL.md`) - For UI/design work

4. **Frontend Design** (`skills/frontend-design/SKILL.md`) - For component development

5. **Web Testing** (`skills/webapp-testing/SKILL.md`) - For test-related tasks

6. **Canvas Design** (`skills/canvas-design/SKILL.md`) - For design mockups

7. **Theme Factory** (`skills/theme-factory/SKILL.md`) - For theming/styling

## Git Workflow Summary (Always Follow)

1. **Never push directly to `main`**
2. Create issue: `gh issue create --title "..." --body "..."`
3. Create branch: `git checkout -b feat/description` or `fix/description`
4. Make commits following Conventional Commits (`feat:`, `fix:`, `docs:`)
5. Push branch: `git push -u origin branch-name`
6. Create PR: `gh pr create --title "..." --body "Closes #ISSUE_NUMBER"`
7. Wait for CI checks to pass
8. Merge via GitHub (squash and merge)

## Tech Stack

- React 18 + TypeScript + Vite
- TailwindCSS with custom CSS variables
- i18next for translations (EN, FR, AR with RTL)
- Playwright for E2E tests
- react-helmet-async for SEO

## Key Directories

- `src/pages/` - Page components
- `src/components/` - Shared components
- `src/locales/` - Translation files (en.json, fr.json, ar.json)
- `src/data/` - SEO metadata, schemas
- `tests/` - Playwright E2E tests
- `skills/` - Project skills documentation
