import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import SEOHead from './SEOHead';

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </BrowserRouter>
    </HelmetProvider>
);

describe('SEOHead', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <SEOHead
                title="Test Title"
                description="Test description"
                keywords="test, keywords"
                image="https://example.com/image.jpg"
                type="website"
            />,
            { wrapper }
        );
        expect(container).toBeDefined();
    });

    it('accepts jsonLd as single object', () => {
        const schema = { '@type': 'Organization', name: 'Test' };
        const { container } = render(
            <SEOHead
                title="Test"
                description="Test"
                type="website"
                jsonLd={schema}
            />,
            { wrapper }
        );
        expect(container).toBeDefined();
    });

    it('accepts jsonLd as array', () => {
        const schemas = [
            { '@type': 'Organization', name: 'Test' },
            { '@type': 'WebSite', name: 'Test Site' },
        ];
        const { container } = render(
            <SEOHead
                title="Test"
                description="Test"
                type="website"
                jsonLd={schemas}
            />,
            { wrapper }
        );
        expect(container).toBeDefined();
    });
});
