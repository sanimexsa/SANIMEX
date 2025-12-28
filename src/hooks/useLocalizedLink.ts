import { useTranslation } from 'react-i18next';

/**
 * Custom hook to generate localized links with language prefix
 * @param path - The path without language prefix (e.g., '/acacia-gum')
 * @returns The localized path with language prefix (e.g., '/en/acacia-gum')
 */
export function useLocalizedLink(path: string): string {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `/${lang}${normalizedPath}`;
}
