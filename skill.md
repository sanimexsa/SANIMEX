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

### 3.2 i18n & RTL (Arabic/French/English)
- [ ] **Directionality**: RTL (`dir="rtl"`) is applied to `<html>` and localized numbers are formatted correctly.
- [ ] **BP/Phone Integrity**: Verify that numeric fragments (e.g., `+235`, `492`) do not flip visually.

### 3.3 Mobile UX
- [ ] **Hamburger Menu**: Fully accessible on screens < 768px.
- [ ] **Touch Targets**: All interactive elements are minimum 44x44px.

### 3.4 Security & Performance
- [ ] **HTTPS Enforcement**: Verified via Cloudflare and GitHub Pages settings.
- [ ] **Asset Optimization**: Hero images must be optimized and served via the built pipeline.

## 4. CI/CD Governance
The `.github/workflows/deploy.yml` must enforce:
1. `npm ci`: Clean install.
2. `npm run lint`: Zero linting errors.
3. `npm run build`: Successful compilation.
4. `404.html` Generation: Automated copy of `index.html` for routing.
