import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://sanimexsa.com';
const languages = ['en', 'fr', 'ar'];
const routes = ['', 'acacia-gum', 'construction', 'logistics', 'contact'];

interface SitemapURL {
  loc: string;
  priority: string;
  lastmod: string;
  alternates: Array<{ lang: string; href: string }>;
}

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  const urls: SitemapURL[] = [];

  // Generate URLs for each route in each language
  routes.forEach((route) => {
    const priority = route === '' ? '1.0' : '0.8';

    languages.forEach((lang) => {
      const path = route === '' ? '/' : `/${route}`;
      const loc = `${baseUrl}/${lang}${path}`;

      // Generate alternate links for all languages
      const alternates = languages.map((altLang) => ({
        lang: altLang,
        href: `${baseUrl}/${altLang}${path}`,
      }));

      urls.push({
        loc,
        priority,
        lastmod: today,
        alternates,
      });
    });
  });

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  urls.forEach((url) => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;

    // Add hreflang alternates
    url.alternates.forEach((alt) => {
      xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}"/>\n`;
    });

    // Add x-default (English)
    const defaultPath = url.loc.replace(/\/(ar|en|fr)\//, '/en/');
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultPath}"/>\n`;

    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, xml, 'utf-8');

  console.log('✅ Sitemap generated successfully!');
  console.log(`📄 File: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${urls.length} (${routes.length} routes × ${languages.length} languages)`);
};

// Run the generator
generateSitemap();
