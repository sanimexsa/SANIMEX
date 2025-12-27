# Bulletproof Quality Standards & Test Cases (SANIMEX S.A.)

This document defines the quality bars and testing strategies for the SANIMEX project, influenced by the [Bulletproof React](https://github.com/alan2207/bulletproof-react) standards.

## 1. Quality Philosophy
- **Feature-Centric**: Quality is measured by functional feature completeness (e.g., "Acacia Gum Export" feature).
- **Automated First**: Every commit must pass build, linting, and type-checking.
- **User-Centric Testing**: Focus on how the user interacts with the app, not implementation details.

## 2. Testing Strategy
- **Unit Testing**: 
    - Tools: **Vitest**, **React Testing Library**.
    - Scope: Pure utility functions, individual UI components, and custom hooks.
- **Integration Testing**: 
    - Scope: Complex features (e.g., Contact Form submission with loading states).
    - Requirement: Use **MSW** (Mock Service Worker) for API responses.
- **E2E Testing**:
    - Tool: **Playwright**.
    - Critical Path: Navigation flow from Home -> Sector -> Contact.

## 3. High-Priority Test Cases

### 3.1 Routing & Navigation
- [ ] **SPA Reload**: Reloading a sub-route (e.g., `/acacia-gum`) must serve the application correctly (no 404).
- [ ] **Direct Access**: Users can land on any defined route from a search engine.
- [ ] **Icon Navigation**: Verify that the SANIMEX logo and all footer social/contact icons are "Clickable" and redirect correctly.

### 3.2 Responsive & Multi-Platform (Web/Mobile/iOS/Android)
- [ ] **Viewport Testing**: Run E2E tests for `iPhone X` (mobile), `iPad` (tablet), and `Desktop` viewports.
- [ ] **Mobile-Only Elements**: Sidenav hamburger menu must be clickable on mobile and invisible on desktop.
- [ ] **iOS/Android Webview**: Verify text rendering and button clickability on mobile Chrome/Safari browsers.
- [ ] **Visual Regressions**: Take visual snapshots (e.g., Percy) for critical pages on all 3 breakpoints to ensure zero layout shifting.

### 3.3 Internationalization (i18n) & RTL
- [ ] **Language Toggle**: Verify that clicking the language switcher actually re-renders the UI in the target language.
- [ ] **Arabic RTL Formatting**: 
    - Verify `dir="rtl"` on `<html>`.
    - **Numeric Integrity**: Explicitly test that `BP 492` and `+235 ...` do not appear "flipped" in Arabic.
- [ ] **Full Translation Coverage**: Verify that 100% of labels (Footer, Navbar, Buttons) change when switching between EN/FR/AR.

### 3.4 Interactive UI Elements (Icons & Buttons)
- [ ] **Data-Test Attributes**: Use `data-test` attributes for all clickable icons to ensure tests don't break when CSS changes.
- [ ] **Hover/Active States**: Icons must show visual feedback on hover/tap.
- [ ] **Broken Links**: Automated crawler to ensure all icons link to valid internal or external destinations.

## 4. CI/CD Governance
The `.github/workflows/deploy.yml` must enforce:
1. `npm ci`: Clean install.
2. `npm run lint`: Zero linting errors.
3. `npm test`: Pass all unit tests.
4. `npm run e2e`: Pass all Playwright/Cypress flows across mobile and desktop viewports.
5. `404.html` Generation: Automated copy of `index.html` for routing.
