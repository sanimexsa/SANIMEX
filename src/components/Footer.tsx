import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalizedLink } from '@/hooks/useLocalizedLink';

export default function Footer() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const text = {
        en: {
            tagline: "Building Chad's future since 1993. A family-owned multi-sector enterprise.",
            sectors: "Sectors",
            contact: "Contact",
            sendMessage: "Send us a message",
            acaciaGum: "Acacia Gum Export",
            construction: "Construction",
            logistics: "Logistics & Warehousing",
            copyright: "© 1993-2026 Sanimex S.A. All Rights Reserved.",
            address: "BP 492, N'Djamena, Chad"
        },
        fr: {
            tagline: "Construire l'avenir du Tchad depuis 1993. Une entreprise familiale multi-sectorielle.",
            sectors: "Secteurs",
            contact: "Contact",
            sendMessage: "Envoyez-nous un message",
            acaciaGum: "Export de Gomme Arabique",
            construction: "Construction",
            logistics: "Logistique & Entreposage",
            copyright: "© 1993-2026 Sanimex S.A. Tous Droits Réservés.",
            address: "BP 492, N'Djamena, Tchad"
        },
        ar: {
            tagline: "بناء مستقبل تشاد منذ 1993. مؤسسة عائلية متعددة القطاعات.",
            sectors: "القطاعات",
            contact: "اتصل بنا",
            sendMessage: "أرسل لنا رسالة",
            acaciaGum: "تصدير الصمغ العربي",
            construction: "البناء",
            logistics: "الخدمات اللوجستية والتخزين",
            copyright: "© 1993-2026 سانيمكس ش.م. جميع الحقوق محفوظة.",
            address: "ص.ب ٤٩٢، انجمينا، تشاد"
        }
    };

    const content = text[lang as keyof typeof text] || text.en;

    return (
        <footer className="bg-[hsl(var(--sanimex-dark))] text-[hsl(var(--sanimex-gray-500))] py-20 px-6 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--sanimex-blue-900))]/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 relative z-10">
                <div dir="ltr">
                    <img
                        src="/logos/sanimex-logo.png"
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-auto mb-3"
                        loading="lazy"
                    />
                    <h3 className="text-[hsl(var(--sanimex-red))] font-bold text-2xl mb-5 tracking-tight">SANIMEX S.A</h3>
                    <p className="text-sm leading-relaxed">{content.tagline}</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-[0.15em]">{content.sectors}</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to={useLocalizedLink('/acacia-gum')} className="hover:text-white transition-colors duration-200 link-hover inline-block">
                                {content.acaciaGum}
                            </Link>
                        </li>
                        <li>
                            <Link to={useLocalizedLink('/construction')} className="hover:text-white transition-colors duration-200 link-hover inline-block">
                                {content.construction}
                            </Link>
                        </li>
                        <li>
                            <Link to={useLocalizedLink('/logistics')} className="hover:text-white transition-colors duration-200 link-hover inline-block">
                                {content.logistics}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-[0.15em]">{content.contact}</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to={useLocalizedLink('/contact')} className="hover:text-white transition-colors duration-200 link-hover inline-block">
                                {content.sendMessage}
                            </Link>
                        </li>
                        <li className={lang === 'ar' ? 'text-right' : 'text-left'}>
                            {lang === 'ar' ? (
                                <><span dir="rtl">ص.ب</span> <span dir="ltr">492</span><span dir="rtl">، انجمينا، تشاد</span></>
                            ) : content.address}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-[hsl(var(--sanimex-gray-700))]/30 text-sm text-center text-[hsl(var(--sanimex-gray-500))]">
                {content.copyright}
            </div>
        </footer>
    );
}
