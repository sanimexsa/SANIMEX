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
    const lang = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
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

                <div className="flex gap-2 text-sm font-medium">
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
            </div>
        </nav>
    );
}
