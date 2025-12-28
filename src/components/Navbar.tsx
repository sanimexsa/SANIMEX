import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLocalizedLink } from '@/hooks/useLocalizedLink';

const languages = [
    { code: 'ar', label: 'عربي' },
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const lang = i18n.language;

    // Pre-compute all localized links at the top level (hooks must be called unconditionally)
    const homeLink = useLocalizedLink('/');
    const acaciaGumLink = useLocalizedLink('/acacia-gum');
    const constructionLink = useLocalizedLink('/construction');
    const logisticsLink = useLocalizedLink('/logistics');
    const contactLink = useLocalizedLink('/contact');

    // Note: document attributes are now set in LanguageWrapper component
    // but keeping this as a fallback
    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const changeLanguage = (newLang: string) => {
        // Extract current path without language prefix
        const currentPath = location.pathname.replace(/^\/(ar|en|fr)/, '');
        // Navigate to new language URL
        navigate(`/${newLang}${currentPath || '/'}`);
        i18n.changeLanguage(newLang);
        setIsMenuOpen(false);
    };

    const navItems = [
        { to: acaciaGumLink, label: t('nav.acaciaGum') },
        { to: constructionLink, label: t('nav.construction') },
        { to: logisticsLink, label: t('nav.logistics') },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-[hsl(var(--sanimex-gray-100))] z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to={homeLink} className="text-2xl font-bold tracking-tighter text-[hsl(var(--sanimex-dark))]" dir="ltr">
                    SANIMEX S.A
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="text-[hsl(var(--sanimex-gray-500))] hover:text-[hsl(var(--sanimex-blue-900))] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild className="bg-[hsl(var(--sanimex-blue-900))] hover:bg-[hsl(var(--sanimex-blue-800))] rounded-full">
                        <Link to={contactLink}>{t('contact')}</Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex gap-1 text-xs font-medium border border-[hsl(var(--sanimex-gray-100))] rounded-lg p-1 bg-white">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => changeLanguage(l.code)}
                                className={`px-2 py-1 rounded transition-colors ${lang === l.code ? 'bg-[hsl(var(--sanimex-blue-900))] text-white' : 'text-[hsl(var(--sanimex-gray-300))] hover:text-[hsl(var(--sanimex-gray-700))]'}`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[hsl(var(--sanimex-gray-500))] hover:text-[hsl(var(--sanimex-blue-900))]"
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
                <div className="md:hidden bg-white border-b border-[hsl(var(--sanimex-gray-100))] px-6 py-8 space-y-6 slide-down shadow-xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-6 text-lg font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[hsl(var(--sanimex-gray-500))] hover:text-[hsl(var(--sanimex-blue-900))] active:text-[hsl(var(--sanimex-blue-900))] transition-colors border-b border-[hsl(var(--sanimex-gray-100))] pb-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild className="bg-[hsl(var(--sanimex-blue-900))] hover:bg-[hsl(var(--sanimex-blue-800))] rounded-full w-full py-6 text-lg">
                            <Link to={contactLink} onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
