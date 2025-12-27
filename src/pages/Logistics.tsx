import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';

const services = [
    { icon: '🚛', titleEn: 'Fleet Transport', titleFr: 'Transport par Flotte', titleAr: 'النقل بالأسطول', descEn: 'Our truck fleet moves cargo across Chad and the Sahel region safely and efficiently.', descFr: 'Notre flotte de camions transporte des marchandises à travers le Tchad et la région du Sahel en toute sécurité.', descAr: 'أسطول شاحناتنا ينقل البضائع عبر تشاد ومنطقة الساحل بأمان وكفاءة.' },
    { icon: '🏭', titleEn: 'Warehousing', titleFr: 'Entreposage', titleAr: 'التخزين', descEn: 'Strategic warehouse facilities across Chad for secure storage and distribution.', descFr: 'Installations d\'entreposage stratégiques à travers le Tchad pour le stockage et la distribution sécurisés.', descAr: 'مرافق تخزين استراتيجية في جميع أنحاء تشاد للتخزين والتوزيع الآمن.' },
    { icon: '📦', titleEn: 'UNICEF Partnership', titleFr: 'Partenariat UNICEF', titleAr: 'شراكة اليونيسف', descEn: '10+ years as a certified logistics partner for UNICEF in landlocked regions.', descFr: '10+ ans en tant que partenaire logistique certifié pour l\'UNICEF dans les régions enclavées.', descAr: 'أكثر من 10 سنوات كشريك لوجستي معتمد لليونيسف في المناطق الحبيسة.' },
    { icon: '🏠', titleEn: 'Property Rentals', titleFr: 'Location de Propriétés', titleAr: 'تأجير العقارات', descEn: 'Commercial and residential rental properties across N\'Djamena.', descFr: 'Propriétés commerciales et résidentielles à louer à N\'Djamena.', descAr: 'عقارات تجارية وسكنية للإيجار في نجامينا.' },
];

import logisticsHero from '../assets/images/logistics.png';

// Hook for intersection observer animations
function useRevealOnScroll() {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        
        return () => observer.disconnect();
    }, []);
    
    return ref;
}

export default function Logistics() {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const getTitle = (s: typeof services[0]) => lang === 'ar' ? s.titleAr : lang === 'fr' ? s.titleFr : s.titleEn;
    const getDesc = (s: typeof services[0]) => lang === 'ar' ? s.descAr : lang === 'fr' ? s.descFr : s.descEn;

    return (
        <div ref={containerRef} className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'الخدمات اللوجستية والعقارات في تشاد | سانيميكس' : lang === 'fr' ? 'Logistique et Immobilier au Tchad | SANIMEX' : 'Logistics and Real Estate in Chad | SANIMEX'}</title>
                <meta name="description" content={lang === 'ar' ? 'حلول لوجستية موثوقة وشريك معتمد لليونيسف وإدارة العقارات التجارية في نجامينا، تشاد.' : lang === 'fr' ? 'Solutions logistiques fiables, partenaire certifié UNICEF et gestion immobilière commerciale à N\'Djamena, Tchad.' : 'Reliable logistics solutions, UNICEF certified partner, and commercial property management in N\'Djamena, Chad.'} />
                <meta name="keywords" content="Logistics Chad, Logistique Tchad, Transport Tchad, Real Estate Chad, Immobilier Tchad, UNICEF Partner Chad, SANIMEX" />
            </Helmet>
            
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
                        {lang === 'ar' ? 'من التوصيل للميل الأخير في تشاد الحبيسة إلى التخزين الاستراتيجي وإدارة الممتلكات — نحن نبقي الأمور تتحرك.' : lang === 'fr' ? 'De la livraison du dernier kilomètre au Tchad enclavé à l\'entreposage stratégique et la gestion immobilière — nous gardons les choses en mouvement.' : 'From last-mile delivery in landlocked Chad to strategic warehousing and property management — we keep things moving.'}
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="reveal py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--sanimex-dark))]">{lang === 'ar' ? 'قدراتنا' : lang === 'fr' ? 'Nos Capacités' : 'Our Capabilities'}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <div 
                                key={service.titleEn} 
                                className="reveal group flex gap-5 p-8 bg-gradient-to-br from-[hsl(var(--sanimex-green-700))]/5 to-transparent rounded-3xl border border-[hsl(var(--sanimex-green-700))]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="text-5xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-300">{service.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[hsl(var(--sanimex-dark))]">{getTitle(service)}</h3>
                                    <p className="text-[hsl(var(--sanimex-gray-500))] font-sans leading-relaxed">{getDesc(service)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UNICEF Section */}
            <section className="reveal py-28 px-6 bg-[hsl(var(--sanimex-green-700))] text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 right-[10%] w-64 h-64 bg-white rounded-full opacity-5 blur-3xl" />
                <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-[hsl(var(--sanimex-sand))] rounded-full opacity-10 blur-3xl" />
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="text-7xl mb-8">🤝</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">{lang === 'ar' ? 'شريك معتمد لليونيسف' : lang === 'fr' ? 'Partenaire Certifié UNICEF' : 'UNICEF Certified Partner'}</h2>
                    <p className="text-xl text-green-100 font-sans max-w-2xl mx-auto leading-relaxed">
                        {lang === 'ar' ? 'لأكثر من 10 سنوات، قدمنا الدعم اللوجستي للميل الأخير لعمليات اليونيسف في تشاد — نوصل الإمدادات الأساسية إلى بعض المناطق الأكثر عزلة في أفريقيا.' : lang === 'fr' ? 'Depuis plus de 10 ans, nous fournissons un soutien logistique du dernier kilomètre pour les opérations de l\'UNICEF au Tchad — livrant des fournitures essentielles dans certaines des régions les plus reculées d\'Afrique.' : 'For over 10 years, we\'ve provided last-mile logistics support for UNICEF operations in Chad — delivering essential supplies to some of the most remote regions in Africa.'}
                    </p>
                    <Link 
                        to="/contact" 
                        className="group inline-flex items-center gap-3 mt-10 bg-white text-[hsl(var(--sanimex-green-700))] px-10 py-5 rounded-full text-lg font-semibold hover:bg-[hsl(var(--sanimex-cream))] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                        {t('contact')}
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
