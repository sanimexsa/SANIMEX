import { describe, it, expect } from 'vitest';
import { getOrganizationSchema } from './organization';

describe('getOrganizationSchema', () => {
    it('returns valid schema structure', () => {
        const schema = getOrganizationSchema('en');
        expect(schema['@context']).toBe('https://schema.org');
        expect(schema['@type']).toBe('Organization');
        expect(schema.name).toBe('SANIMEX S.A');
        expect(schema.foundingDate).toBe('1993');
    });

    it('returns English description for en locale', () => {
        const schema = getOrganizationSchema('en');
        expect(schema.description).toContain('Leader in Chad');
    });

    it('returns French description for fr locale', () => {
        const schema = getOrganizationSchema('fr');
        expect(schema.description).toContain('Leader au Tchad');
    });

    it('returns Arabic description for ar locale', () => {
        const schema = getOrganizationSchema('ar');
        expect(schema.description).toContain('شركة رائدة في تشاد');
    });

    it('has correct contact information', () => {
        const schema = getOrganizationSchema('en');
        expect(schema.contactPoint.telephone).toBe('+235-22-51-49-69');
        expect(schema.contactPoint.email).toBe('aa@sanimexsa.com');
    });

    it('falls back to English for unknown locale', () => {
        const schema = getOrganizationSchema('de');
        expect(schema.description).toContain('Leader in Chad');
    });
});
