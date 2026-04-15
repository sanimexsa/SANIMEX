export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

export interface SEOMetadata {
  home: Record<'en' | 'fr' | 'ar', PageMetadata>;
  acaciaGum: Record<'en' | 'fr' | 'ar', PageMetadata>;
  construction: Record<'en' | 'fr' | 'ar', PageMetadata>;
  logistics: Record<'en' | 'fr' | 'ar', PageMetadata>;
  contact: Record<'en' | 'fr' | 'ar', PageMetadata>;
}

export const seoMetadata: SEOMetadata = {
  home: {
    en: {
      title: 'SANIMEX | Acacia Gum, Construction & Logistics in Chad',
      description:
        'SANIMEX is a leader in Chad specializing in acacia gum export, construction services, and logistics solutions since 1993. Family-owned multi-sector enterprise.',
      keywords:
        'SANIMEX, sanimex sa, sanimex sa tchad, SANIMEX Chad, Sanimex S.A., Acacia Gum Chad, Construction Chad, Logistics Chad, Gum Arabic Export, N\'Djamena, Chad Business',
      image: 'https://sanimexsa.com/og-home-en.jpg',
    },
    fr: {
      title: 'SANIMEX | Gomme Arabique, Construction et Logistique au Tchad',
      description:
        'SANIMEX est un leader au Tchad spécialisé dans l\'exportation de gomme arabique, les services de construction et les solutions logistiques depuis 1993.',
      keywords:
        'SANIMEX, sanimex sa, sanimex sa tchad, SANIMEX Tchad, Sanimex S.A., Gomme Arabique Tchad, Construction Tchad, Logistique Tchad, Entreprise Tchad, Export Gomme Arabique, N\'Djamena',
      image: 'https://sanimexsa.com/og-home-fr.jpg',
    },
    ar: {
      title: 'سانيميكس | الصمغ العربي والبناء والخدمات اللوجستية في تشاد',
      description:
        'سانيميكس هي شركة رائدة في تشاد متخصصة في تصدير الصمغ العربي وخدمات البناء والحلول اللوجستية منذ عام ١٩٩٣.',
      keywords:
        'سانيميكس, سانيميكس تشاد, SANIMEX SA Tchad, SANIMEX Tchad, الصمغ العربي تشاد, البناء تشاد, الخدمات اللوجستية تشاد, شركة تشاد, تصدير الصمغ العربي, انجمينا',
      image: 'https://sanimexsa.com/og-home-ar.jpg',
    },
  },

  acaciaGum: {
    en: {
      title: 'Acacia Gum Export from Chad | Premium Gum Arabic | SANIMEX',
      description:
        'High-quality acacia gum export from Chad. SANIMEX is Chad\'s 2nd largest exporter, supplying Alland & Robert for 20+ years. Premium gum arabic direct from source.',
      keywords:
        'SANIMEX, SANIMEX Chad, Acacia Gum Chad, Gum Arabic Export, Acacia Senegal, Hashab Gum, Alland Robert Supplier, Chad Gum Arabic',
      image: 'https://sanimexsa.com/og-acacia-en.jpg',
    },
    fr: {
      title: 'Export de Gomme Arabique du Tchad | Gomme Premium | SANIMEX',
      description:
        'Exportation de gomme arabique de haute qualité du Tchad. SANIMEX est le 2e plus grand exportateur du Tchad, fournissant Alland & Robert depuis plus de 20 ans.',
      keywords:
        'SANIMEX, SANIMEX Tchad, Gomme Arabique Tchad, Export Gomme Arabique, Acacia Sénégal, Gomme Hashab, Fournisseur Alland Robert',
      image: 'https://sanimexsa.com/og-acacia-fr.jpg',
    },
    ar: {
      title: 'تصدير الصمغ العربي من تشاد | صمغ عربي ممتاز | سانيميكس',
      description:
        'تصدير الصمغ العربي عالي الجودة من تشاد. سانيميكس هي ثاني أكبر مصدر في تشاد، تزود ألاند وروبرت لأكثر من ٢٠ سنة.',
      keywords:
        'سانيميكس, سانيميكس تشاد, SANIMEX Tchad, الصمغ العربي تشاد, تصدير الصمغ العربي, أكاسيا سنغال, صمغ هشاب, مورد ألاند روبرت',
      image: 'https://sanimexsa.com/og-acacia-ar.jpg',
    },
  },

  construction: {
    en: {
      title: 'Construction Services in Chad | Building Excellence Since 1993 | SANIMEX',
      description:
        'Professional construction services in Chad. SANIMEX has been building Chad\'s infrastructure since 1993. Government buildings, commercial projects, and more.',
      keywords:
        'SANIMEX, sanimex sa tchad, SANIMEX Chad, Construction Chad, Chad Construction Company, N\'Djamena Builder, Infrastructure Chad, Building Contractor Chad',
      image: 'https://sanimexsa.com/og-construction-en.jpg',
    },
    fr: {
      title: 'Services de Construction au Tchad | Excellence depuis 1993 | SANIMEX',
      description:
        'Services de construction professionnels au Tchad. SANIMEX construit l\'infrastructure du Tchad depuis 1993. Bâtiments gouvernementaux, projets commerciaux et plus.',
      keywords:
        'SANIMEX, sanimex sa tchad, SANIMEX Tchad, Construction Tchad, BTP Tchad, Génie Civil Tchad, Entreprise Construction Tchad, Constructeur N\'Djamena, Infrastructure Tchad',
      image: 'https://sanimexsa.com/og-construction-fr.jpg',
    },
    ar: {
      title: 'خدمات البناء في تشاد | التميز منذ ١٩٩٣ | سانيميكس',
      description:
        'خدمات البناء الاحترافية في تشاد. تبني سانيميكس البنية التحتية لتشاد منذ عام ١٩٩٣. المباني الحكومية والمشاريع التجارية والمزيد.',
      keywords:
        'سانيميكس, سانيميكس تشاد, SANIMEX Tchad, البناء تشاد, خدمات البناء تشاد, شركة بناء تشاد, مقاول انجمينا, البنية التحتية تشاد',
      image: 'https://sanimexsa.com/og-construction-ar.jpg',
    },
  },

  logistics: {
    en: {
      title: 'Logistics & Warehousing in Chad | SANIMEX',
      description:
        'Professional logistics and warehousing services in Chad. SANIMEX provides transport, real estate management, and storage solutions across Chad.',
      keywords:
        'SANIMEX, sanimex sa tchad, SANIMEX Chad, Logistics Chad, Warehousing Chad, Transport Chad, Real Estate Management Chad, Supply Chain Chad',
      image: 'https://sanimexsa.com/og-logistics-en.jpg',
    },
    fr: {
      title: 'Logistique et Entreposage au Tchad | SANIMEX',
      description:
        'Services professionnels de logistique et d\'entreposage au Tchad. SANIMEX assure le transport, la gestion immobilière et les solutions de stockage à travers le Tchad.',
      keywords:
        'SANIMEX, sanimex sa tchad, SANIMEX Tchad, Logistique Tchad, Entreposage Tchad, Transport Tchad, Gestion Immobilière Tchad, Chaîne d\'Approvisionnement Tchad',
      image: 'https://sanimexsa.com/og-logistics-fr.jpg',
    },
    ar: {
      title: 'الخدمات اللوجستية والتخزين في تشاد | سانيميكس',
      description:
        'خدمات لوجستية واحترافية وتخزين في تشاد. سانيميكس توفر النقل وإدارة العقارات وحلول التخزين في جميع أنحاء تشاد.',
      keywords:
        'سانيميكس, سانيميكس تشاد, SANIMEX SA Tchad, SANIMEX Tchad, اللوجستية تشاد, التخزين تشاد, النقل تشاد, إدارة العقارات تشاد, سلسلة التوريد تشاد',
      image: 'https://sanimexsa.com/og-logistics-ar.jpg',
    },
  },

  contact: {
    en: {
      title: 'Contact SANIMEX | Get in Touch with Chad\'s Leading Multi-Sector Company',
      description:
        'Contact SANIMEX for acacia gum export, construction, or logistics inquiries. Located in N\'Djamena, Chad. Send us a message.',
      keywords:
        'Contact SANIMEX, sanimex sa tchad, SANIMEX Chad Contact, N\'Djamena Business Contact, Chad Company Contact, Acacia Gum Inquiry, Construction Quote Chad',
      image: 'https://sanimexsa.com/og-contact-en.jpg',
    },
    fr: {
      title: 'Contacter SANIMEX | Prenez Contact avec le Leader Multi-Secteurs du Tchad',
      description:
        'Contactez SANIMEX pour des demandes d\'exportation de gomme arabique, de construction ou de logistique. Situé à N\'Djamena, Tchad.',
      keywords:
        'Contact SANIMEX, sanimex sa tchad, Contact SANIMEX Tchad, Contact Entreprise N\'Djamena, Contact Société Tchad, Demande Gomme Arabique, Devis Construction Tchad',
      image: 'https://sanimexsa.com/og-contact-fr.jpg',
    },
    ar: {
      title: 'اتصل بـ سانيميكس | تواصل مع الشركة الرائدة متعددة القطاعات في تشاد',
      description:
        'اتصل بسانيميكس للاستفسار عن تصدير الصمغ العربي أو البناء أو اللوجستيات. الموقع: انجمينا، تشاد. اتصل على ٢٣٥ ٢٢ ٥١ ٤٩ ٦٩.',
      keywords:
        'اتصل بسانيميكس, اتصال سانيميكس تشاد, اتصال شركة انجمينا, اتصال شركة تشاد, استفسار صمغ عربي, عرض سعر بناء تشاد',
      image: 'https://sanimexsa.com/og-contact-ar.jpg',
    },
  },
};
