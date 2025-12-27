# webapp-testing

Expert guidance for testing web applications using Playwright and Vitest, ensuring cross-platform stability and high reliability.

## 1. Unit Testing (Vitest)
- **Tool**: Vitest + React Testing Library.
- **Scope**: Components, hooks, and logic.
- **Convention**:
  - Files: `SourceFile.test.tsx`
  - Mocking: Use `vi.mock` for external dependencies.
  - Assertions: Focus on accessibility and user visibility (`getByRole`, `getByText`).

## 2. E2E Testing (Playwright)
- **Tool**: Playwright.
- **Scope**: User flows, cross-device layout, and multi-lingual verification.
- **Matrix Approach**:
  - Test across 3 languages (EN, FR, AR).
  - Test across 4 devices (Desktop, iPhone, Android, Tablet).
- **Execution**: `npm run test:e2e`

## 3. CI/CD Integration
- Every PR must pass `npm run lint`, `npm test`, and `npm run test:e2e`.
- Failures block the deployment pipeline.

## 4. Visual Verification
- Take screenshots and recordings for UI changes.
- Ensure RTL (Right-to-Left) layouts for Arabic are visually correct and numeric integrity is preserved.

## Examples

### Testing a Component
```typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('renders correctly', () => {
  render(<MyComponent label="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});
```

### E2E Multi-lingual Test
```typescript
test('should switch language', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="lang-switcher"]');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
});
```
