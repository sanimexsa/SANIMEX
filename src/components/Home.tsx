import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
    { key: 'universityOfPala', icon: '🏛️' },
    { key: 'constitutionalCouncil', icon: '⚖️' },
    { key: 'policeHQ', icon: '🛡️' },
];

export default function Home() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const isArabic = lang === 'ar';

    // Handle RTL switching
    useEffect(() => {
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang, isArabic]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={`min-h-screen bg-neutral-50 text-neutral-900 ${isArabic ? 'font-arabic' : 'font-serif'}`}>

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tighter text-neutral-900">SANIMEX S.A</div>
                    <div className="flex gap-4 text-sm font-medium">
                        {['en', 'fr', 'ar'].map((l) => (
                            <button
                                key={l}
                                onClick={() => changeLanguage(l)}
                                className={`uppercase transition-colors ${lang === l ? 'text-blue-900 font-bold' : 'text-neutral-500 hover:text-neutral-800'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-neutral-50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-widest text-blue-800 mb-4 font-sans font-semibold">Since 1993</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-neutral-900">
                        {t('hero')}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-2xl mx-auto font-sans">
                        {t('subhero')}
                    </p>
                    <button className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-transform hover:scale-105 shadow-lg">
                        {t('cta')}
                    </button>
                </div>
            </section>

            {/* Institutional Trust Strip */}
            <section className="py-12 border-y border-neutral-200 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-sm uppercase tracking-widest text-neutral-500 mb-8 font-sans font-semibold">
                        {t('trustedBy')}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl mb-2">🏦</div>
                            <p className="text-sm font-medium text-neutral-700">{t('partners.worldbank')}</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🦋</div>
                            <p className="text-sm font-medium text-neutral-700">{t('partners.unicef')}</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🌍</div>
                            <p className="text-sm font-medium text-neutral-700">{t('partners.afdb')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 px-6 bg-neutral-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-neutral-900">
                        {t('portfolio.title')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.key} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-5xl mb-6">{project.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">
                                    {t(`portfolio.${project.key}.name`)}
                                </h3>
                                <p className="text-neutral-600 font-sans">
                                    {t(`portfolio.${project.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">© 1993-2025 Sanimex S.A. All Rights Reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <span className="hover:text-white cursor-pointer">N'Djamena</span>
                        <span className="hover:text-white cursor-pointer">Dubai</span>
                        <span className="hover:text-white cursor-pointer">Paris</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
