import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export interface SEOData {
  canonicalUrl: string;
  alternateUrls: {
    en: string;
    fr: string;
    ar: string;
  };
  ogData: {
    title: string;
    description: string;
    url: string;
    image: string;
    imageAlt: string;
    type: string;
    locale: string;
    siteName: string;
  };
  twitterData: {
    card: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
}

export function useSEO(config: SEOConfig): SEOData {
  const { i18n } = useTranslation();
  const location = useLocation();

  const baseUrl = 'https://sanimexsa.com';
  const currentLang = i18n.language;
  const currentPath = location.pathname;

  // Generate canonical URL (current language variant)
  const canonicalUrl = `${baseUrl}${currentPath}`;

  // Generate alternate URLs for hreflang (all language variants of current page)
  const pathWithoutLang = currentPath.replace(/^\/(ar|fr|en)/, '');
  const alternateUrls = {
    en: `${baseUrl}/en${pathWithoutLang || '/'}`,
    fr: `${baseUrl}/fr${pathWithoutLang || '/'}`,
    ar: `${baseUrl}/ar${pathWithoutLang || '/'}`,
  };

  // Map language codes to locale codes
  const localeMap: Record<string, string> = {
    en: 'en_US',
    fr: 'fr_FR',
    ar: 'ar_AR',
  };

  const locale = localeMap[currentLang] || 'en_US';

  // Default OG image if not provided
  const defaultImage = `${baseUrl}/og-default.jpg`;

  return {
    canonicalUrl,
    alternateUrls,
    ogData: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      image: config.image || defaultImage,
      imageAlt: config.imageAlt || config.title,
      type: config.type || 'website',
      locale,
      siteName: 'SANIMEX S.A',
    },
    twitterData: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      image: config.image || defaultImage,
      imageAlt: config.imageAlt || config.title,
    },
  };
}
