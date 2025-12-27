import { test, expect } from '@playwright/test';

const languages = ['en', 'fr', 'ar'];
const pages = [
    { path: '/', name: 'Home' },
    { path: '/acacia-gum', name: 'Acacia Gum' },
    { path: '/construction', name: 'Construction' },
    { path: '/logistics', name: 'Logistics' },
    { path: '/contact', name: 'Contact' }
];

test.describe('SANIMEX Multi-lingual Matrix', () => {
    for (const lang of languages) {
        for (const page of pages) {
            test(`Verify ${page.name} in ${lang.toUpperCase()}`, async ({ page: p }) => {
                // Step 1: Set language in localStorage before navigating to test persistence
                await p.addInitScript((storageLang) => {
                    window.localStorage.setItem('i18nextLng', storageLang);
                }, lang);

                await p.goto(page.path);

                // Verify html attributes
                const html = p.locator('html');
                await expect(html).toHaveAttribute('lang', lang);

                if (lang === 'ar') {
                    await expect(html).toHaveAttribute('dir', 'rtl');
                } else {
                    await expect(html).toHaveAttribute('dir', 'ltr');
                }

                // Verify Navbar translation (checking a known key like "Contact")
                // Note: Using text content depends on actual translations
                const contactBtn = p.locator('a[href="/contact"]').first();
                if (lang === 'en') await expect(contactBtn).toContainText('Contact');
                if (lang === 'fr') await expect(contactBtn).toContainText('Contact');
                if (lang === 'ar') await expect(contactBtn).toContainText('اتصل بنا');

                // Verify No Console Errors
                const logs: string[] = [];
                p.on('console', msg => {
                    if (msg.type() === 'error') logs.push(msg.text());
                });

                await p.waitForLoadState('networkidle');
                expect(logs).toEqual([]);
            });
        }
    }
});

test.describe('Language Persistence', () => {
    test('Should maintain French after reload', async ({ page }) => {
        await page.goto('/');

        // Switch to French
        await page.click('button:has-text("FR")');
        await expect(page.locator('html')).toHaveAttribute('lang', 'fr');

        // Reload
        await page.reload();

        // Verify it stays French
        await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    });

    test('Should maintain Arabic after reload and check RTL', async ({ page }) => {
        await page.goto('/');

        // Switch to Arabic
        await page.click('button:has-text("عربي")');
        await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
        await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

        // Reload
        await page.reload();

        // Verify it stays Arabic
        await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
        await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    });
});
