export function getContactPageSchema(lang: string) {
  const names = {
    en: 'Contact Us',
    fr: 'Contactez-nous',
    ar: 'اتصل بنا',
  };

  const name = names[lang as keyof typeof names] || names.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name,
    url: `https://sanimexsa.com/${lang}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'SANIMEX S.A',
      '@id': 'https://sanimexsa.com/#organization',
    },
  };
}
