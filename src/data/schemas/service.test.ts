import { describe, it, expect } from 'vitest';
import { getServiceSchema } from './service';

describe('getServiceSchema', () => {
    describe('construction service', () => {
        it('returns valid schema structure', () => {
            const schema = getServiceSchema('construction', 'en');
            expect(schema['@context']).toBe('https://schema.org');
            expect(schema['@type']).toBe('Service');
            expect(schema.name).toBe('Construction Services');
        });

        it('returns French name for fr locale', () => {
            const schema = getServiceSchema('construction', 'fr');
            expect(schema.name).toBe('Services de Construction');
        });

        it('returns Arabic name for ar locale', () => {
            const schema = getServiceSchema('construction', 'ar');
            expect(schema.name).toBe('خدمات البناء');
        });
    });

    describe('logistics service', () => {
        it('returns valid schema structure', () => {
            const schema = getServiceSchema('logistics', 'en');
            expect(schema['@context']).toBe('https://schema.org');
            expect(schema['@type']).toBe('Service');
            expect(schema.name).toBe('Logistics & Warehousing Services');
        });

        it('mentions UNICEF in description', () => {
            const schema = getServiceSchema('logistics', 'en');
            expect(schema.description).toContain('UNICEF');
        });
    });

    it('has correct provider reference', () => {
        const schema = getServiceSchema('construction', 'en');
        expect(schema.provider['@type']).toBe('Organization');
        expect(schema.provider.name).toBe('SANIMEX S.A');
    });

    it('has Chad as area served', () => {
        const schema = getServiceSchema('logistics', 'en');
        expect(schema.areaServed.name).toBe('Chad');
    });
});
