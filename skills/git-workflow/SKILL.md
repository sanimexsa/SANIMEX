# git-workflow

Standardized procedure for managing issues, branching, and pull requests to ensure a professional audit trail and stable production environment.

## 1. Issue Management
- **Rule**: Every fix or feature must start with a GitHub Issue.
- **Action**: Use the GitHub MCP to create an issue before starting work.
- **Description**: Include clear reproduction steps (for bugs) or goals (for features).

## 2. Branching Strategy
- **Base Branch**: `main`
- **Feature Branches**: `feat/description-of-feature`
- **Bug Fixes**: `fix/description-of-issue`
- **Branch Creation**: Use GitHub MCP `create_branch`.

## 3. Commit Standards
- **Convention**: Conventional Commits (e.g., `feat: ...`, `fix: ...`, `docs: ...`).
- **Context**: Every commit message should explain *why* the change was made.

## 4. Pull Requests (PRs)
- **Draft PRs**: Use for work-in-progress to get early feedback.
- **PR Description**: 
  - Link to the issue (e.g., "Closes #123").
  - Provide a brief summary of changes.
  - Include verification steps (tests run, screenshots).
- **Checks**: PRs must pass all CI checks (lint, unit, e2e) before merging.

## 5. Review & Merging
- **Peer Review**: Request reviewer input via GitHub MCP.
- **Merge Method**: Squash and merge to keep `main` history clean.
- **Cleanup**: Delete the feature/fix branch after merging.

## Exceptions (Direct to main allowed)

The following changes may be committed directly to `main` without an issue or PR:

- **Documentation-only changes**: README.md, CLAUDE.md, inline comments
- **Configuration/meta files**: .gitignore, linter configs, CI configs
- **Trivial fixes**: Typos, whitespace, formatting

All code changes that affect functionality must follow the full workflow.

## 6. Pre-Push Verification (MANDATORY)

Before EVERY `git push`, run these commands locally:

1. `npm run lint` - must pass with no errors (warnings OK)
2. `npx tsc --noEmit` - must pass with no errors
3. `npm test` - all tests must pass
4. `npm run build` - must complete successfully

**CRITICAL**: Do NOT push if any of these fail. Fix the issue first.

This ensures CI will pass and prevents breaking the main branch.

## Procedure
1. `gh issue create --title "..." --body "..."` -> Note `#ISSUE_NUMBER`.
2. `git checkout -b feat/description` or `fix/description`.
3. Perform implementation.
4. Run pre-push verification (lint, tsc, test, build).
5. `git push -u origin branch-name`.
6. `gh pr create --title "..." --body "Closes #ISSUE_NUMBER"`.
7. Wait for CI/Approval.
8. Merge and close.
