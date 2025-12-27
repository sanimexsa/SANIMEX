import { render } from '@testing-library/react';
import { vi, expect, test, describe, beforeEach, type Mock } from 'vitest';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
    useLocation: vi.fn(),
}));

describe('ScrollToTop', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Mock window.scrollTo
        window.scrollTo = vi.fn();
    });

    test('calls window.scrollTo(0, 0) on mount and route change', () => {
        (useLocation as Mock).mockReturnValue({ pathname: '/home' });
        
        const { rerender } = render(<ScrollToTop />);
        
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        expect(window.scrollTo).toHaveBeenCalledTimes(1);

        // Simulate route change
        (useLocation as Mock).mockReturnValue({ pathname: '/about' });
        rerender(<ScrollToTop />);

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        expect(window.scrollTo).toHaveBeenCalledTimes(2);
    });
});
