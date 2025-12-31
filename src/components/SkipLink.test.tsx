import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import SkipLink from './SkipLink';

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
);

describe('SkipLink', () => {
    it('renders skip link with correct href', () => {
        render(<SkipLink />, { wrapper });
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '#main-content');
    });

    it('has sr-only class for screen reader accessibility', () => {
        render(<SkipLink />, { wrapper });
        const link = screen.getByRole('link');
        expect(link.className).toContain('sr-only');
    });

    it('renders English label by default', () => {
        render(<SkipLink />, { wrapper });
        const link = screen.getByRole('link');
        expect(link.textContent).toBe('Skip to main content');
    });
});
