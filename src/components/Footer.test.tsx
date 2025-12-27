import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { language: 'en' },
    }),
}));

describe('Footer Component', () => {
    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Check if the logo or the name "SANIMEX" is present
        expect(screen.getByText(/SANIMEX S.A./i)).toBeInTheDocument();
    });
});
