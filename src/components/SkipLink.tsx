import { useTranslation } from 'react-i18next';

export default function SkipLink() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const labels = {
        en: 'Skip to main content',
        fr: 'Aller au contenu principal',
        ar: 'انتقل إلى المحتوى الرئيسي',
    };

    const label = labels[lang as keyof typeof labels] || labels.en;

    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[hsl(var(--sanimex-blue-900))] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(var(--sanimex-blue-900))]"
        >
            {label}
        </a>
    );
}
