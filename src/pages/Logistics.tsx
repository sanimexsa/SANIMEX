import { useTranslation } from 'react-i18next';
import { Truck, Warehouse, Building, type LucideIcon } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/data/seo-metadata';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { getServiceSchema } from '@/data/schemas/service';

const services: { Icon: LucideIcon; titleEn: string; titleFr: string; titleAr: string; descEn: string; descFr: string; descAr: string }[] = [
    { Icon: Truck, titleEn: 'Fleet Transport', titleFr: 'Transport par Flotte', titleAr: 'النقل بالأسطول', descEn: 'Our truck fleet moves cargo across Chad and the Sahel region safely and efficiently.', descFr: 'Notre flotte de camions transporte des marchandises à travers le Tchad et la région du Sahel en toute sécurité.', descAr: 'أسطول شاحناتنا ينقل البضائع عبر تشاد ومنطقة الساحل بأمان وكفاءة.' },
    { Icon: Warehouse, titleEn: 'Warehousing', titleFr: 'Entreposage', titleAr: 'التخزين', descEn: 'Strategic warehouse facilities across Chad for secure storage and distribution.', descFr: 'Installations d\'entreposage stratégiques à travers le Tchad pour le stockage et la distribution sécurisés.', descAr: 'مرافق تخزين استراتيجية في جميع أنحاء تشاد للتخزين والتوزيع الآمن.' },
    { Icon: Building, titleEn: 'Property Rentals', titleFr: 'Location de Propriétés', titleAr: 'تأجير العقارات', descEn: 'Commercial and residential rental properties across N\'Djamena.', descFr: 'Propriétés commerciales et résidentielles à louer à N\'Djamena.', descAr: 'عقارات تجارية وسكنية للإيجار في نجامينا.' },
];

import logisticsHero from '../assets/images/logistics.png';

export default function Logistics() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const getTitle = (s: typeof services[0]) => lang === 'ar' ? s.titleAr : lang === 'fr' ? s.titleFr : s.titleEn;
    const getDesc = (s: typeof services[0]) => lang === 'ar' ? s.descAr : lang === 'fr' ? s.descFr : s.descEn;

    // Get SEO metadata and schema for current language
    const seo = seoMetadata.logistics[lang as keyof typeof seoMetadata.logistics] || seoMetadata.logistics.en;
    const schema = getServiceSchema('logistics', lang);

    return (
        <div ref={containerRef} className="font-serif">
            <SEOHead {...seo} type="website" jsonLd={schema} />
            
            {/* Hero Section */}
            <section className="relative pt-36 pb-32 px-6 min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={logisticsHero} alt="Logistics convoy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sanimex-dark))]/85 via-[hsl(var(--sanimex-dark))]/60 to-transparent" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="slide-up text-sm uppercase tracking-[0.25em] text-[hsl(var(--sanimex-green-600))] mb-6 font-sans font-semibold">{lang === 'ar' ? 'الخدمات اللوجستية والعقارات' : lang === 'fr' ? 'Logistique & Immobilier' : 'Logistics & Real Estate'}</p>
                    <h1 className="slide-up delay-100 text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
                        {lang === 'ar' ? 'نقل البضائع.\nإدارة الأصول.' : lang === 'fr' ? 'Transporter les Marchandises.\nGérer les Actifs.' : 'Moving Goods.\nManaging Assets.'}
                    </h1>
                    <p className="slide-up delay-200 text-xl md:text-2xl text-slate-100 max-w-3xl font-sans leading-relaxed">
                        {lang === 'ar' ? 'من التوصيل للميل الأخير في تشاد الحبيسة إلى التخزين الاستراتيجي وإدارة الممتلكات، نحن نبقي الأمور تتحرك.' : lang === 'fr' ? 'De la livraison du dernier kilomètre au Tchad enclavé à l\'entreposage stratégique et la gestion immobilière, nous gardons les choses en mouvement.' : 'From last-mile delivery in landlocked Chad to strategic warehousing and property management, we keep things moving.'}
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="reveal py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--sanimex-dark))]">{lang === 'ar' ? 'قدراتنا' : lang === 'fr' ? 'Nos Capacités' : 'Our Capabilities'}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div 
                                key={service.titleEn} 
                                className="reveal group flex gap-5 p-8 bg-gradient-to-br from-[hsl(var(--sanimex-green-700))]/5 to-transparent rounded-3xl border border-[hsl(var(--sanimex-green-700))]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <service.Icon className="w-12 h-12 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-green-700))] transition-all duration-300" strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[hsl(var(--sanimex-dark))]">{getTitle(service)}</h3>
                                    <p className="text-[hsl(var(--sanimex-gray-500))] font-sans leading-relaxed">{getDesc(service)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
