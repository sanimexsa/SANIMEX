import { useEffect } from 'react';
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VALID_LANGUAGES = ['ar', 'en', 'fr'] as const;

export default function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // Validate language parameter
  if (!lang || !VALID_LANGUAGES.includes(lang as typeof VALID_LANGUAGES[number])) {
    // Invalid language - redirect to default (English)
    const savedLang = localStorage.getItem('i18nextLng') || 'en';
    const validLang = VALID_LANGUAGES.includes(savedLang as typeof VALID_LANGUAGES[number])
      ? savedLang
      : 'en';
    return <Navigate to={`/${validLang}/`} replace />;
  }

  // Sync i18next with URL language
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Set document attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Signal that meta tags are rendered (for react-snap pre-rendering)
  useEffect(() => {
    document.body.classList.add('meta-rendered');
  }, []);

  return <Outlet />;
}
