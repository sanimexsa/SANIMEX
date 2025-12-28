export function getOrganizationSchema(lang: string) {
  const descriptions = {
    en: 'Leader in Chad specializing in acacia gum export, construction, and logistics services since 1993',
    fr: 'Leader au Tchad spécialisé dans l\'exportation de gomme arabique, la construction et la logistique depuis 1993',
    ar: 'شركة رائدة في تشاد متخصصة في تصدير الصمغ العربي والبناء والخدمات اللوجستية منذ عام ١٩٩٣',
  };

  const description = descriptions[lang as keyof typeof descriptions] || descriptions.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sanimexsa.com/#organization',
    name: 'SANIMEX S.A',
    alternateName: lang === 'ar' ? 'سانيميكس' : 'SANIMEX',
    url: `https://sanimexsa.com/${lang}/`,
    logo: 'https://sanimexsa.com/logo-sanimex.png',
    foundingDate: '1993',
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'N\'Djamena',
      addressCountry: 'TD',
      postalCode: 'BP 492',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+235-22-51-49-69',
      email: 'aa@sanimexsa.com',
      contactType: 'customer service',
      availableLanguage: ['en', 'fr', 'ar'],
    },
  };
}
