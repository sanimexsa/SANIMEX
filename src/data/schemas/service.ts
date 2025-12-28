export function getServiceSchema(serviceType: 'construction' | 'logistics', lang: string) {
  const serviceNames = {
    construction: {
      en: 'Construction Services',
      fr: 'Services de Construction',
      ar: 'خدمات البناء',
    },
    logistics: {
      en: 'Logistics & Warehousing Services',
      fr: 'Services de Logistique et Entreposage',
      ar: 'خدمات اللوجستية والتخزين',
    },
  };

  const descriptions = {
    construction: {
      en: 'Professional construction services in Chad including government buildings, commercial projects, and infrastructure development.',
      fr: 'Services de construction professionnels au Tchad comprenant des bâtiments gouvernementaux, des projets commerciaux et le développement d\'infrastructures.',
      ar: 'خدمات البناء الاحترافية في تشاد بما في ذلك المباني الحكومية والمشاريع التجارية وتطوير البنية التحتية.',
    },
    logistics: {
      en: 'Comprehensive logistics and warehousing services in Chad. UNICEF-certified partner for transport, storage, and real estate management.',
      fr: 'Services complets de logistique et d\'entreposage au Tchad. Partenaire certifié UNICEF pour le transport, le stockage et la gestion immobilière.',
      ar: 'خدمات لوجستية واحترافية شاملة في تشاد. شريك معتمد من اليونيسيف للنقل والتخزين وإدارة العقارات.',
    },
  };

  const name = serviceNames[serviceType][lang as keyof typeof serviceNames.construction] || serviceNames[serviceType].en;
  const description = descriptions[serviceType][lang as keyof typeof descriptions.construction] || descriptions[serviceType].en;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'SANIMEX S.A',
      '@id': 'https://sanimexsa.com/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Chad',
    },
    serviceType: name,
  };
}
