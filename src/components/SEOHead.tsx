import { Helmet } from 'react-helmet-async';
import { useSEO, type SEOConfig } from '@/hooks/useSEO';

interface SEOHeadProps extends SEOConfig {
  jsonLd?: object | object[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  imageAlt,
  type,
  jsonLd,
}: SEOHeadProps) {
  const seo = useSEO({ title, description, keywords, image, imageAlt, type });

  // Convert jsonLd to array if it's a single object
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.canonicalUrl} />

      {/* Hreflang Tags for International SEO */}
      <link rel="alternate" hrefLang="en" href={seo.alternateUrls.en} />
      <link rel="alternate" hrefLang="fr" href={seo.alternateUrls.fr} />
      <link rel="alternate" hrefLang="ar" href={seo.alternateUrls.ar} />
      <link rel="alternate" hrefLang="x-default" href={seo.alternateUrls.en} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={seo.ogData.type} />
      <meta property="og:title" content={seo.ogData.title} />
      <meta property="og:description" content={seo.ogData.description} />
      <meta property="og:url" content={seo.ogData.url} />
      <meta property="og:image" content={seo.ogData.image} />
      <meta property="og:image:alt" content={seo.ogData.imageAlt} />
      <meta property="og:locale" content={seo.ogData.locale} />
      <meta property="og:site_name" content={seo.ogData.siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={seo.twitterData.card} />
      <meta name="twitter:title" content={seo.twitterData.title} />
      <meta name="twitter:description" content={seo.twitterData.description} />
      <meta name="twitter:image" content={seo.twitterData.image} />
      <meta name="twitter:image:alt" content={seo.twitterData.imageAlt} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
