import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

import LanguageDetector from 'i18next-browser-languagedetector';

// Custom language detector that reads from URL path
const urlLanguageDetector = {
    name: 'urlPath',
    lookup() {
        const match = window.location.pathname.match(/^\/(ar|en|fr)\//);
        return match ? match[1] : undefined;
    },
};

// Create custom detector that includes our URL detector
const customDetector = new LanguageDetector();
customDetector.addDetector(urlLanguageDetector);

i18n
    .use(customDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            ar: { translation: ar },
        },
        fallbackLng: 'en',
        detection: {
            order: ['urlPath', 'localStorage', 'cookie', 'htmlTag'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
