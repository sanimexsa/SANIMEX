import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useRevealOnScroll } from './useRevealOnScroll';

describe('useRevealOnScroll', () => {
    let mockObserve: ReturnType<typeof vi.fn>;
    let mockDisconnect: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockObserve = vi.fn();
        mockDisconnect = vi.fn();

        // Create a proper class mock for IntersectionObserver
        const MockIntersectionObserver = vi.fn(function(this: IntersectionObserver) {
            this.observe = mockObserve;
            this.disconnect = mockDisconnect;
            this.unobserve = vi.fn();
            this.root = null;
            this.rootMargin = '';
            this.thresholds = [];
            this.takeRecords = vi.fn(() => []);
        }) as unknown as typeof IntersectionObserver;

        vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('returns a ref object', () => {
        const { result } = renderHook(() => useRevealOnScroll());
        expect(result.current).toBeDefined();
        expect(result.current).toHaveProperty('current');
    });

    it('creates IntersectionObserver with correct options', () => {
        renderHook(() => useRevealOnScroll());
        expect(IntersectionObserver).toHaveBeenCalledWith(
            expect.any(Function),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
    });

    it('disconnects observer on unmount', () => {
        const { unmount } = renderHook(() => useRevealOnScroll());
        unmount();
        expect(mockDisconnect).toHaveBeenCalled();
    });
});
