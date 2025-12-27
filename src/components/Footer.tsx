import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
            copyright: "© 1993-2025 Sanimex S.A. All Rights Reserved.",
            phone: "+235 22 51 49 69",
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
            copyright: "© 1993-2025 Sanimex S.A. Tous Droits Réservés.",
            phone: "+235 22 51 49 69",
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
            copyright: "© 1993-2025 سانيمكس ش.م. جميع الحقوق محفوظة.",
            phone: "+٢٣٥ ٢٢ ٥١ ٤٩ ٦٩",
            address: "ص.ب ٤٩٢، انجمينا، تشاد"
        }
    };

    const content = text[lang as keyof typeof text] || text.en;

    return (
        <footer className="bg-neutral-900 text-neutral-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-white font-bold text-xl mb-4" dir="ltr">SANIMEX S.A</h3>
                    <p className="text-sm">{content.tagline}</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">{content.sectors}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/acacia-gum" className="hover:text-white">{content.acaciaGum}</Link></li>
                        <li><Link to="/construction" className="hover:text-white">{content.construction}</Link></li>
                        <li><Link to="/logistics" className="hover:text-white">{content.logistics}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">{content.contact}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/contact" className="hover:text-white">{content.sendMessage}</Link></li>
                        <li dir="ltr" className={lang === 'ar' ? 'text-right' : 'text-left'}>{content.phone}</li>
                        <li className={lang === 'ar' ? 'text-right' : 'text-left'}>
                            {lang === 'ar' ? (
                                <><span dir="rtl">ص.ب</span> <span dir="ltr">492</span><span dir="rtl">، انجمينا، تشاد</span></>
                            ) : content.address}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-sm text-center">
                {content.copyright}
            </div>
        </footer>
    );
}
