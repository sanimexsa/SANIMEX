import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi, expect, test, describe, beforeEach } from 'vitest';
import Navbar from './Navbar';

// Mock i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            language: 'en',
            changeLanguage: vi.fn(),
        },
    }),
}));

describe('Navbar', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders logo and navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(screen.getByText('SANIMEX S.A')).toBeInTheDocument();
        expect(screen.getByText('nav.acaciaGum')).toBeInTheDocument();
        expect(screen.getByText('nav.construction')).toBeInTheDocument();
        expect(screen.getByText('nav.logistics')).toBeInTheDocument();
    });

    test('mobile menu toggles when button is clicked', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const toggleBtn = screen.getByLabelText('Toggle menu');
        
        // Initial state: menu closed
        expect(screen.queryByText('nav.acaciaGum', { selector: 'div.md\\:hidden a' })).not.toBeInTheDocument();

        fireEvent.click(toggleBtn);
        
        // Now it should be visible
        expect(screen.getByText('nav.acaciaGum', { selector: 'div.md\\:hidden a' })).toBeInTheDocument();
        
        fireEvent.click(toggleBtn);
        expect(screen.queryByText('nav.acaciaGum', { selector: 'div.md\\:hidden a' })).not.toBeInTheDocument();
    });
});
