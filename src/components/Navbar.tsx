import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const languages = [
    { code: 'ar', label: 'عربي' },
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lang = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        setIsMenuOpen(false);
    };

    const navItems = [
        { to: '/acacia-gum', label: t('nav.acaciaGum') },
        { to: '/construction', label: t('nav.construction') },
        { to: '/logistics', label: t('nav.logistics') },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-neutral-900" dir="ltr">
                    SANIMEX S.A
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="text-neutral-600 hover:text-blue-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild className="bg-blue-900 hover:bg-blue-800 rounded-full">
                        <Link to="/contact">{t('contact')}</Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex gap-1 text-xs font-medium border border-neutral-200 rounded-lg p-1 bg-white">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => changeLanguage(l.code)}
                                className={`px-2 py-1 rounded transition-colors ${lang === l.code ? 'bg-blue-900 text-white' : 'text-neutral-400 hover:text-neutral-700'}`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-neutral-600 hover:text-blue-900"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-8 space-y-6 slide-down shadow-xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-6 text-lg font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-neutral-600 hover:text-blue-900 active:text-blue-900 transition-colors border-b border-neutral-100 pb-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild className="bg-blue-900 hover:bg-blue-800 rounded-full w-full py-6 text-lg">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
