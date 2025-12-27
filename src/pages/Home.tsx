import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';

const sectors = [
    { key: 'acaciaGum', icon: '🌳', path: '/acacia-gum', highlight: true },
    { key: 'construction', icon: '🏗️', path: '/construction', highlight: false },
    { key: 'logistics', icon: '🚛', path: '/logistics', highlight: false },
];

interface Partner {
    name: string;
    nameAr?: string;
    nameFr?: string;
    logo: string;
    logoAr?: string;
    logoFr?: string;
}

const partners: Partner[] = [
    {
        name: 'Government of Chad',
        nameAr: 'حكومة تشاد',
        nameFr: 'Gouvernement du Tchad',
        logo: '/logos/chad.png'
    },
    {
        name: 'Alland & Robert',
        nameAr: 'ألاند وروبرت',
        nameFr: 'Alland & Robert',
        logo: '/logos/alland-robert.png'
    },
    {
        name: 'UNICEF',
        nameAr: 'اليونيسف',
        nameFr: 'UNICEF',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_UNICEF.svg/200px-Logo_of_UNICEF.svg.png'
    },
    {
        name: 'World Bank',
        nameAr: 'البنك الدولي',
        nameFr: 'Banque Mondiale',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_World_Bank_logo.svg/200px-The_World_Bank_logo.svg.png'
    },

    {
        name: 'AfDB',
        nameAr: 'بنك التنمية الأفريقي',
        nameFr: 'BAD',
        logo: '/logos/afdb.png'
    },
    {
        name: 'Huawei',
        nameAr: 'هواوي',
        nameFr: 'Huawei',
        logo: '/logos/huawei.png'
    },
    {
        name: 'World Food Programme',
        nameAr: 'برنامج الأغذية العالمي',
        nameFr: 'Programme Alimentaire Mondial',
        logo: '/logos/wfp-en.png',
        logoAr: '/logos/wfp-ar.png',
        logoFr: '/logos/wfp-fr.png'
    },
];

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

export default function Home() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const getPartnerLogo = (p: Partner) => {
        if (lang === 'ar' && p.logoAr) return p.logoAr;
        if (lang === 'fr' && p.logoFr) return p.logoFr;
        return p.logo;
    };

    const getPartnerName = (p: Partner) => {
        if (lang === 'ar' && p.nameAr) return p.nameAr;
        if (lang === 'fr' && p.nameFr) return p.nameFr;
        return p.name;
    };

    return (
        <div ref={containerRef} className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'سانيميكس | الصمغ العربي والبناء والخدمات اللوجستية في تشاد' : lang === 'fr' ? 'SANIMEX | Gomme Arabique, Construction et Logistique au Tchad' : 'SANIMEX | Acacia Gum, Construction & Logistics in Chad'}</title>
                <meta name="description" content={lang === 'ar' ? 'سانيميكس هي شركة رائدة في تشاد متخصصة في تصدير الصمغ العربي وخدمات البناء والحلول اللوجستية منذ عام ١٩٩٣.' : lang === 'fr' ? 'SANIMEX est un leader au Tchad spécialisé dans l\'exportation de gomme arabique, les services de construction et les solutions logistiques depuis 1993.' : 'SANIMEX is a leader in Chad specializing in acacia gum export, construction services, and logistics solutions since 1993.'} />
                <meta name="keywords" content="SANIMEX, Sanimex Chad, Sanimex Tchad, Sanimex S.A., Acacia Gum Chad, Gomme Arabique Tchad, Construction Chad, Logistics Chad, Logistique Tchad" />
            </Helmet>
            
            {/* Hero Section - Desert Modernism Style */}
            <section className="relative pt-36 pb-28 px-6 mesh-gradient grain overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--sanimex-green-700))] rounded-full opacity-[0.04] blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(var(--sanimex-sand))] rounded-full opacity-[0.08] blur-3xl" />
                
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <p className="slide-up text-sm uppercase tracking-[0.25em] text-[hsl(var(--sanimex-terracotta))] mb-6 font-sans font-semibold">
                        {lang === 'ar' ? 'منذ ١٩٩٣' : lang === 'fr' ? 'Depuis 1993' : 'Since 1993'}
                    </p>
                    <h1 className="slide-up delay-100 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-[hsl(var(--sanimex-dark))] tracking-tight">
                        {t('hero')}
                    </h1>
                    <p className="slide-up delay-200 text-xl md:text-2xl text-[hsl(var(--sanimex-gray-500))] mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
                        {t('subhero')}
                    </p>
                    <div className="slide-up delay-300 flex flex-wrap justify-center gap-5">
                        <Link 
                            to="/acacia-gum" 
                            className="group bg-[hsl(var(--sanimex-blue-900))] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[hsl(var(--sanimex-blue-800))] hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_hsla(213,52%,24%,0.4)]"
                        >
                            <span className="flex items-center gap-2">
                                {t('sectors.acaciaGum.title')}
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                        <Link 
                            to="/contact" 
                            className="border-2 border-[hsl(var(--sanimex-blue-900))] text-[hsl(var(--sanimex-blue-900))] px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[hsl(var(--sanimex-blue-900))] hover:text-white"
                        >
                            {t('contact')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[hsl(var(--sanimex-dark))]">{t('sectorsTitle')}</h2>
                        <p className="text-lg text-[hsl(var(--sanimex-gray-500))] max-w-2xl mx-auto font-sans">{t('sectorsSubtitle')}</p>
                    </div>
                    
                    {/* Asymmetric Grid */}
                    <div className="grid md:grid-cols-12 gap-6">
                        {sectors.map((sector, index) => (
                            <Link 
                                key={sector.key} 
                                to={sector.path} 
                                className={`reveal group relative p-8 md:p-10 rounded-3xl transition-all duration-500 overflow-hidden
                                    ${sector.highlight 
                                        ? 'md:col-span-6 bg-[hsl(var(--sanimex-blue-900))] text-white shadow-2xl hover:shadow-[0_30px_60px_-15px_hsla(213,52%,24%,0.5)]' 
                                        : 'md:col-span-3 bg-[hsl(var(--sanimex-cream))] hover:shadow-xl'
                                    }
                                    hover:-translate-y-1`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Decorative gradient for highlighted card */}
                                {sector.highlight && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--sanimex-blue-800))] via-transparent to-[hsl(var(--sanimex-green-700))] opacity-30" />
                                )}
                                
                                <div className="relative z-10">
                                    <div className={`text-5xl md:text-6xl mb-6 transition-transform duration-300 group-hover:scale-110 ${sector.highlight ? '' : 'grayscale-[30%] group-hover:grayscale-0'}`}>
                                        {sector.icon}
                                    </div>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${sector.highlight ? '' : 'text-[hsl(var(--sanimex-dark))]'}`}>
                                        {t(`sectors.${sector.key}.title`)}
                                    </h3>
                                    <p className={`font-sans leading-relaxed ${sector.highlight ? 'text-blue-100' : 'text-[hsl(var(--sanimex-gray-500))]'}`}>
                                        {t(`sectors.${sector.key}.description`)}
                                    </p>
                                    
                                    {/* Arrow indicator */}
                                    <div className={`mt-6 flex items-center gap-2 font-semibold text-sm ${sector.highlight ? 'text-white' : 'text-[hsl(var(--sanimex-blue-900))]'}`}>
                                        <span>{lang === 'ar' ? 'اكتشف المزيد' : lang === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="reveal py-24 bg-[hsl(var(--sanimex-off-white))] border-y border-[hsl(var(--sanimex-gray-100))]">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-sm uppercase tracking-[0.2em] text-[hsl(var(--sanimex-gray-500))] mb-14 font-sans font-semibold">
                        {t('trustedBy')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                        {partners.map((partner, index) => (
                            <div 
                                key={partner.name} 
                                className="reveal flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-[hsl(var(--sanimex-gray-100))] hover:border-[hsl(var(--sanimex-sand))] hover:shadow-lg transition-all duration-300 w-full max-w-[150px] group"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <img
                                    src={getPartnerLogo(partner)}
                                    alt={partner.name}
                                    className="h-14 w-auto object-contain mb-3 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    loading="lazy"
                                />
                                <p className="text-xs font-medium text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-dark))] transition-colors">
                                    {getPartnerName(partner)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="reveal relative py-28 px-6 bg-[hsl(var(--sanimex-blue-900))] text-white text-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-[10%] w-64 h-64 bg-[hsl(var(--sanimex-green-700))] rounded-full opacity-10 blur-3xl" />
                    <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-[hsl(var(--sanimex-sand))] rounded-full opacity-10 blur-3xl" />
                </div>
                
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('ctaTitle')}</h2>
                    <p className="text-xl text-blue-100 mb-10 font-sans leading-relaxed">{t('ctaSubtitle')}</p>
                    <Link 
                        to="/contact" 
                        className="group inline-flex items-center gap-3 bg-white text-[hsl(var(--sanimex-blue-900))] px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[hsl(var(--sanimex-cream))] hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
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

