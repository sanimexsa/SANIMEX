export function getLocalBusinessSchema(lang: string) {
  const descriptions = {
    en: 'Multi-sector business enterprise in Chad providing acacia gum export, construction, and logistics services',
    fr: 'Entreprise multi-sectorielle au Tchad offrant l\'exportation de gomme arabique, la construction et la logistique',
    ar: 'مؤسسة تجارية متعددة القطاعات في تشاد توفر تصدير الصمغ العربي والبناء والخدمات اللوجستية',
  };

  const description = descriptions[lang as keyof typeof descriptions] || descriptions.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sanimexsa.com/#localbusiness',
    name: 'SANIMEX S.A',
    image: 'https://sanimexsa.com/og-home.jpg',
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'N\'Djamena',
      addressCountry: 'TD',
      postalCode: 'BP 492',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.1348',
      longitude: '15.0557',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    telephone: '+235-22-51-49-69',
    priceRange: '$$$',
  };
}
