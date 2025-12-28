import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { CheckCircle2, Ship, ClipboardList, Factory, Leaf, Shield, type LucideIcon } from 'lucide-react';

const stats = [
    { value: '20+', labelEn: 'Tonnes/Year Capacity', labelFr: 'Tonnes/An Capacité', labelAr: 'طن/سنة القدرة' },
    { value: '10+', labelEn: 'Years Export Experience', labelFr: 'Années d\'Expérience Export', labelAr: 'سنوات خبرة التصدير' },
    { value: '3rd', labelEn: 'Largest Exporter (Chad)', labelFr: 'Plus Grand Exportateur (Tchad)', labelAr: 'أكبر مصدر (تشاد)' },
];

const advantages: { Icon: LucideIcon; titleEn: string; titleFr: string; titleAr: string; descEn: string; descFr: string; descAr: string }[] = [
    { Icon: CheckCircle2, titleEn: 'Direct from Chad', titleFr: 'Direct du Tchad', titleAr: 'مباشر من تشاد', descEn: 'Chad is the 3rd largest acacia gum exporter globally. Source directly from producers.', descFr: 'Le Tchad est le 3ème plus grand exportateur de gomme arabique au monde. Approvisionnez-vous directement.', descAr: 'تشاد هي ثالث أكبر مصدر للصمغ العربي عالمياً. احصل على المنتج مباشرة من المنتجين.' },
    { Icon: Ship, titleEn: 'No Intermediaries', titleFr: 'Sans Intermédiaires', titleAr: 'بدون وسطاء', descEn: 'Direct export to your facility. Simplified supply chain.', descFr: 'Exportation directe vers vos installations. Chaîne d\'approvisionnement simplifiée.', descAr: 'تصدير مباشر إلى منشأتك. سلسلة توريد مبسطة.' },
    { Icon: ClipboardList, titleEn: 'Proven Track Record', titleFr: 'Historique Éprouvé', titleAr: 'سجل حافل', descEn: '10+ years supplying to Alland & Robert (France).', descFr: '10+ ans de fourniture à Alland & Robert (France).', descAr: 'أكثر من 10 سنوات من التزويد لشركة ألاند وروبرت (فرنسا).' },
    { Icon: Factory, titleEn: 'Consistent Quality', titleFr: 'Qualité Constante', titleAr: 'جودة متسقة', descEn: 'High-grade Acacia Senegal and Acacia Seyal varieties.', descFr: 'Variétés de haute qualité Acacia Senegal et Acacia Seyal.', descAr: 'أصناف عالية الجودة من أكاسيا السنغال وأكاسيا سيال.' },
];

const certifications: { Icon: LucideIcon; label: string; bg: string }[] = [
    { Icon: Leaf, label: 'Organic (EU/NOP)', bg: 'bg-green-50' },
    { Icon: Shield, label: 'HACCP Compliant', bg: 'bg-blue-50' },
    { Icon: CheckCircle2, label: 'ISO 22000', bg: 'bg-purple-50' },
];

import acaciaHero from '../assets/images/acacia.png';

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

export default function AcaciaGum() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const text = {
        en: {
            subtitle: 'Acacia Gum Export',
            title: 'High-Quality Acacia Gum, Direct from Chad',
            description: 'Chad is the world\'s 3rd largest acacia gum exporter. Sanimex has 10+ years of export experience, including supplying Alland & Robert, the global leader in acacia gum processing.',
            cta: 'Request a Quote',
            whyTitle: 'Why Source from Sanimex?',
            whySubtitle: 'A trusted exporter with institutional partnerships and proven supply chain.',
            marketTitle: 'Chad\'s Acacia Gum Industry',
            marketP1: 'Chad exported 42,000 tonnes of acacia gum in 2022, valued at $30.6 million.',
            marketP2: 'Our acacia gum is sourced from sustainable harvesting practices in Chad\'s gum belt region.',
            marketP3: 'Sanimex offers both Acacia Senegal (Hashab) and Acacia Seyal varieties for food, beverage, and pharmaceutical applications.',
            ctaTitle: 'Let\'s Discuss Your Needs',
            ctaSubtitle: 'Whether you need bulk supply, spot purchases, or long-term contracts — we\'re ready to talk.'
        },
        fr: {
            subtitle: 'Export de Gomme Arabique',
            title: 'Gomme Arabique de Haute Qualité, Directe du Tchad',
            description: 'Le Tchad est le 3ème plus grand exportateur de gomme arabique au monde. Sanimex a plus de 10 ans d\'expérience d\'exportation, y compris la fourniture à Alland & Robert.',
            cta: 'Demander un Devis',
            whyTitle: 'Pourquoi Choisir Sanimex ?',
            whySubtitle: 'Un exportateur de confiance avec des partenariats institutionnels et une chaîne d\'approvisionnement éprouvée.',
            marketTitle: 'L\'Industrie de la Gomme Arabique au Tchad',
            marketP1: 'Le Tchad a exporté 42 000 tonnes de gomme arabique en 2022, d\'une valeur de 30,6 millions de dollars.',
            marketP2: 'Notre gomme arabique provient de pratiques de récolte durables dans la région de la ceinture de gomme du Tchad.',
            marketP3: 'Sanimex propose des variétés Acacia Senegal (Hashab) et Acacia Seyal pour les applications alimentaires, de boissons et pharmaceutiques.',
            ctaTitle: 'Discutons de Vos Besoins',
            ctaSubtitle: 'Que vous ayez besoin d\'approvisionnement en gros, d\'achats ponctuels ou de contrats à long terme — nous sommes prêts à en parler.'
        },
        ar: {
            subtitle: 'تصدير الصمغ العربي',
            title: 'صمغ عربي عالي الجودة، مباشر من تشاد',
            description: 'تشاد هي ثالث أكبر مصدر للصمغ العربي في العالم. تمتلك سانيمكس أكثر من 10 سنوات من الخبرة في التصدير، بما في ذلك التوريد لشركة ألاند وروبرت.',
            cta: 'اطلب عرض سعر',
            whyTitle: 'لماذا تختار سانيمكس؟',
            whySubtitle: 'مصدر موثوق مع شراكات مؤسسية وسلسلة توريد مثبتة.',
            marketTitle: 'صناعة الصمغ العربي في تشاد',
            marketP1: 'صدرت تشاد 42,000 طن من الصمغ العربي في 2022، بقيمة 30.6 مليون دولار.',
            marketP2: 'يتم الحصول على الصمغ العربي لدينا من ممارسات الحصاد المستدامة في منطقة حزام الصمغ في تشاد.',
            marketP3: 'تقدم سانيمكس أصناف أكاسيا السنغال (الهشاب) وأكاسيا سيال للتطبيقات الغذائية والمشروبات والصيدلانية.',
            ctaTitle: 'دعنا نناقش احتياجاتك',
            ctaSubtitle: 'سواء كنت بحاجة إلى توريد بالجملة أو مشتريات فورية أو عقود طويلة الأجل — نحن مستعدون للتحدث.'
        }
    };

    const content = text[lang as keyof typeof text] || text.en;
    const getLabel = (s: typeof stats[0]) => lang === 'ar' ? s.labelAr : lang === 'fr' ? s.labelFr : s.labelEn;
    const getTitle = (a: typeof advantages[0]) => lang === 'ar' ? a.titleAr : lang === 'fr' ? a.titleFr : a.titleEn;
    const getDesc = (a: typeof advantages[0]) => lang === 'ar' ? a.descAr : lang === 'fr' ? a.descFr : a.descEn;

    return (
        <div ref={containerRef} className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'تصدير الصمغ العربي من تشاد | سانيميكس' : lang === 'fr' ? 'Export de Gomme Arabique du Tchad | SANIMEX' : 'Acacia Gum Export from Chad | SANIMEX'}</title>
                <meta name="description" content={lang === 'ar' ? 'سانيميكس هي ثالث أكبر مصدر للصمغ العربي في تشاد، حيث توفر أصناف أكاسيا السنغال وأكاسيا سيال عالية الجودة عالمياً.' : lang === 'fr' ? 'SANIMEX est le 3ème plus grand exportateur de gomme arabique au Tchad, fournissant des variétés Acacia Senegal et Seyal de haute qualité.' : 'SANIMEX is the 3rd largest acacia gum exporter in Chad, providing high-quality Acacia Senegal and Seyal varieties globally.'} />
                <meta name="keywords" content="Acacia Gum, Gomme Arabique, الصمغ العربي, Hashab, Seyal, Chad Export, Tchad Export, SANIMEX" />
            </Helmet>
            
            {/* Hero Section */}
            <section className="relative pt-36 pb-32 px-6 min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={acaciaHero} alt="Premium Acacia Gum" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sanimex-dark))]/80 via-[hsl(var(--sanimex-dark))]/60 to-transparent" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="slide-up text-sm uppercase tracking-[0.25em] text-[hsl(var(--sanimex-sand))] mb-6 font-sans font-semibold">{content.subtitle}</p>
                    <h1 className="slide-up delay-100 text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">{content.title}</h1>
                    <p className="slide-up delay-200 text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl font-sans leading-relaxed">{content.description}</p>
                    <Link 
                        to="/contact" 
                        className="slide-up delay-300 group inline-flex items-center gap-3 bg-[hsl(var(--sanimex-terracotta))] backdrop-blur text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[hsl(var(--sanimex-sand))] transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border border-white/10"
                    >
                        {content.cta}
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="reveal py-16 bg-white border-b border-[hsl(var(--sanimex-gray-100))]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-bold text-[hsl(var(--sanimex-gray-500))] uppercase tracking-[0.2em] mb-10">{lang === 'ar' ? 'الشهادات والامتثال' : lang === 'fr' ? 'Certifications et Conformité' : 'Certifications & Compliance'}</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                        {certifications.map((cert, i) => (
                            <div key={cert.label} className="reveal flex flex-col items-center gap-4 group" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className={`w-20 h-20 rounded-2xl ${cert.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                                    <cert.Icon className="w-10 h-10 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-blue-900))] transition-colors" strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-[hsl(var(--sanimex-gray-700))] text-sm">{cert.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[hsl(var(--sanimex-terracotta))] text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
                    {stats.map((stat, i) => (
                        <div key={stat.labelEn} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="text-6xl font-bold mb-3">{stat.value}</div>
                            <div className="text-white/80 font-sans text-lg">{getLabel(stat)}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Section */}
            <section className="reveal py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[hsl(var(--sanimex-dark))]">{content.whyTitle}</h2>
                        <p className="text-lg text-[hsl(var(--sanimex-gray-500))] max-w-2xl mx-auto font-sans">{content.whySubtitle}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {advantages.map((adv, i) => (
                            <div 
                                key={adv.titleEn} 
                                className="reveal group flex gap-5 p-8 bg-[hsl(var(--sanimex-cream))] rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <adv.Icon className="w-10 h-10 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-blue-900))] transition-all duration-300" strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[hsl(var(--sanimex-dark))]">{getTitle(adv)}</h3>
                                    <p className="text-[hsl(var(--sanimex-gray-500))] font-sans leading-relaxed">{getDesc(adv)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Section */}
            <section className="reveal py-24 px-6 bg-[hsl(var(--sanimex-dark))] text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">{content.marketTitle}</h2>
                    <div className="space-y-6 text-lg font-sans text-[hsl(var(--sanimex-gray-300))] leading-relaxed">
                        <p>{content.marketP1}</p>
                        <p>{content.marketP2}</p>
                        <p>{content.marketP3}</p>
                    </div>
                    <div className="mt-12">
                        <Link 
                            to="/contact" 
                            className="group inline-flex items-center gap-3 bg-[hsl(var(--sanimex-sand))] text-[hsl(var(--sanimex-dark))] px-10 py-5 rounded-full text-lg font-semibold hover:bg-[hsl(var(--sanimex-terracotta))] hover:text-white transition-all duration-300"
                        >
                            {content.cta}
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="reveal py-28 px-6 bg-[hsl(var(--sanimex-cream))] text-center relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--sanimex-dark))]">{content.ctaTitle}</h2>
                    <p className="text-xl text-[hsl(var(--sanimex-gray-500))] mb-10 font-sans leading-relaxed">{content.ctaSubtitle}</p>
                    <Link 
                        to="/contact" 
                        className="group inline-flex items-center gap-3 bg-[hsl(var(--sanimex-terracotta))] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[hsl(var(--sanimex-blue-900))] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_hsla(17,52%,47%,0.4)]"
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
