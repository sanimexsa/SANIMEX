import { describe, it, expect } from 'vitest';
import { getContactPageSchema } from './contact';

describe('getContactPageSchema', () => {
    it('returns valid schema structure', () => {
        const schema = getContactPageSchema('en');
        expect(schema['@context']).toBe('https://schema.org');
        expect(schema['@type']).toBe('ContactPage');
    });

    it('returns English name for en locale', () => {
        const schema = getContactPageSchema('en');
        expect(schema.name).toBe('Contact Us');
    });

    it('returns French name for fr locale', () => {
        const schema = getContactPageSchema('fr');
        expect(schema.name).toBe('Contactez-nous');
    });

    it('returns Arabic name for ar locale', () => {
        const schema = getContactPageSchema('ar');
        expect(schema.name).toBe('اتصل بنا');
    });

    it('has correct URL for each locale', () => {
        expect(getContactPageSchema('en').url).toBe('https://sanimexsa.com/en/contact');
        expect(getContactPageSchema('fr').url).toBe('https://sanimexsa.com/fr/contact');
        expect(getContactPageSchema('ar').url).toBe('https://sanimexsa.com/ar/contact');
    });

    it('references organization as main entity', () => {
        const schema = getContactPageSchema('en');
        expect(schema.mainEntity['@type']).toBe('Organization');
        expect(schema.mainEntity.name).toBe('SANIMEX S.A');
    });

    it('falls back to English for unknown locale', () => {
        const schema = getContactPageSchema('de');
        expect(schema.name).toBe('Contact Us');
    });
});
