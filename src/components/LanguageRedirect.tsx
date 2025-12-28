import { Navigate, useLocation } from 'react-router-dom';

const VALID_LANGUAGES = ['ar', 'en', 'fr'] as const;

export default function LanguageRedirect() {
  const location = useLocation();

  // Detect preferred language from localStorage, browser, or default to English
  const detectLanguage = (): string => {
    // Check localStorage first
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && VALID_LANGUAGES.includes(savedLang as typeof VALID_LANGUAGES[number])) {
      return savedLang;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (VALID_LANGUAGES.includes(browserLang as typeof VALID_LANGUAGES[number])) {
      return browserLang;
    }

    // Default to English
    return 'en';
  };

  const preferredLang = detectLanguage();

  // Handle root path redirect
  if (location.pathname === '/') {
    return <Navigate to={`/${preferredLang}/`} replace />;
  }

  // Handle legacy URLs without language prefix
  // Examples: /acacia-gum → /en/acacia-gum
  const legacyPath = location.pathname;
  const newPath = `/${preferredLang}${legacyPath}`;

  return <Navigate to={newPath} replace />;
}
