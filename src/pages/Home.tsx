import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const sectors = [
    { key: 'acaciaGum', icon: '🌳', path: '/acacia-gum', highlight: true },
    { key: 'construction', icon: '🏗️', path: '/construction', highlight: false },
    { key: 'logistics', icon: '🚛', path: '/logistics', highlight: false },
];

const partners = [
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

export default function Home() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const getPartnerLogo = (p: typeof partners[0]) => {
        // @ts-ignore - dynamic property access
        if (lang === 'ar' && p.logoAr) return p.logoAr;
        // @ts-ignore - dynamic property access
        if (lang === 'fr' && p.logoFr) return p.logoFr;
        return p.logo;
    };

    const getPartnerName = (p: typeof partners[0]) => {
        // @ts-ignore - dynamic property access
        if (lang === 'ar' && p.nameAr) return p.nameAr;
        // @ts-ignore - dynamic property access
        if (lang === 'fr' && p.nameFr) return p.nameFr;
        return p.name;
    };

    return (
        <div className="font-serif">
            <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-widest text-blue-800 mb-4 font-sans font-semibold">Since 1993</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-neutral-900">{t('hero')}</h1>
                    <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto font-sans">{t('subhero')}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/acacia-gum" className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all hover:scale-105 shadow-lg">{t('sectors.acaciaGum.title')}</Link>
                        <Link to="/contact" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">{t('contact')}</Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">{t('sectorsTitle')}</h2>
                    <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto font-sans">{t('sectorsSubtitle')}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sectors.map((sector) => (
                            <Link key={sector.key} to={sector.path} className={`p-8 rounded-2xl transition-all hover:scale-105 ${sector.highlight ? 'bg-blue-900 text-white shadow-xl' : 'bg-neutral-100 hover:shadow-lg'}`}>
                                <div className="text-5xl mb-6">{sector.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{t(`sectors.${sector.key}.title`)}</h3>
                                <p className={`font-sans ${sector.highlight ? 'text-blue-100' : 'text-neutral-600'}`}>{t(`sectors.${sector.key}.description`)}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section with Logos */}
            <section className="py-20 border-y border-neutral-200 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-sm uppercase tracking-widest text-neutral-500 mb-12 font-sans font-semibold">{t('trustedBy')}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center justify-items-center">
                        {partners.map((partner) => (
                            <div key={partner.name} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow w-full max-w-[160px]">
                                <img
                                    src={getPartnerLogo(partner)}
                                    alt={partner.name}
                                    className="h-16 w-auto object-contain mb-3"
                                    loading="lazy"
                                />
                                <p className="text-xs font-medium text-neutral-600">{getPartnerName(partner)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-blue-900 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
                    <p className="text-xl text-blue-100 mb-8 font-sans">{t('ctaSubtitle')}</p>
                    <Link to="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">{t('contact')}</Link>
                </div>
            </section>
        </div>
    );
}
