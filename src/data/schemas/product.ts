export function getAcaciaGumProductSchema(lang: string) {
  const names = {
    en: 'Acacia Gum',
    fr: 'Gomme Arabique',
    ar: 'الصمغ العربي',
  };

  const descriptions = {
    en: 'Premium acacia gum (gum arabic) exported from Chad. High-quality natural product sourced directly from local producers.',
    fr: 'Gomme arabique premium exportée du Tchad. Produit naturel de haute qualité provenant directement des producteurs locaux.',
    ar: 'الصمغ العربي الفاخر المصدر من تشاد. منتج طبيعي عالي الجودة يتم الحصول عليه مباشرة من المنتجين المحليين.',
  };

  const name = names[lang as keyof typeof names] || names.en;
  const description = descriptions[lang as keyof typeof descriptions] || descriptions.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Organization',
      name: 'SANIMEX S.A',
    },
    category: 'Food Additives',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'SANIMEX S.A',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '10',
    },
  };
}
