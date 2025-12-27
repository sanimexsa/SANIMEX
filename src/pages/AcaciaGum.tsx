import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const stats = [
    { value: '20+', labelEn: 'Tonnes/Year Capacity', labelFr: 'Tonnes/An Capacité', labelAr: 'طن/سنة القدرة' },
    { value: '10+', labelEn: 'Years Export Experience', labelFr: 'Années d\'Expérience Export', labelAr: 'سنوات خبرة التصدير' },
    { value: '3rd', labelEn: 'Largest Exporter (Chad)', labelFr: 'Plus Grand Exportateur (Tchad)', labelAr: 'أكبر مصدر (تشاد)' },
];

const advantages = [
    { icon: '✅', titleEn: 'Direct from Chad', titleFr: 'Direct du Tchad', titleAr: 'مباشر من تشاد', descEn: 'Chad is the 3rd largest acacia gum exporter globally. Source directly from producers.', descFr: 'Le Tchad est le 3ème plus grand exportateur de gomme arabique au monde. Approvisionnez-vous directement.', descAr: 'تشاد هي ثالث أكبر مصدر للصمغ العربي عالمياً. احصل على المنتج مباشرة من المنتجين.' },
    { icon: '🚢', titleEn: 'No Intermediaries', titleFr: 'Sans Intermédiaires', titleAr: 'بدون وسطاء', descEn: 'Direct export to your facility. Simplified supply chain.', descFr: 'Exportation directe vers vos installations. Chaîne d\'approvisionnement simplifiée.', descAr: 'تصدير مباشر إلى منشأتك. سلسلة توريد مبسطة.' },
    { icon: '📋', titleEn: 'Proven Track Record', titleFr: 'Historique Éprouvé', titleAr: 'سجل حافل', descEn: '10+ years supplying to Alland & Robert (France).', descFr: '10+ ans de fourniture à Alland & Robert (France).', descAr: 'أكثر من 10 سنوات من التزويد لشركة ألاند وروبرت (فرنسا).' },
    { icon: '🏭', titleEn: 'Consistent Quality', titleFr: 'Qualité Constante', titleAr: 'جودة متسقة', descEn: 'High-grade Acacia Senegal and Acacia Seyal varieties.', descFr: 'Variétés de haute qualité Acacia Senegal et Acacia Seyal.', descAr: 'أصناف عالية الجودة من أكاسيا السنغال وأكاسيا سيال.' },
];

import acaciaHero from '../assets/images/acacia.png';

export default function AcaciaGum() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

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
        <div className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'تصدير الصمغ العربي من تشاد | سانيميكس' : lang === 'fr' ? 'Export de Gomme Arabique du Tchad | SANIMEX' : 'Acacia Gum Export from Chad | SANIMEX'}</title>
                <meta name="description" content={lang === 'ar' ? 'سانيميكس هي ثالث أكبر مصدر للصمغ العربي في تشاد، حيث توفر أصناف أكاسيا السنغال وأكاسيا سيال عالية الجودة عالمياً.' : lang === 'fr' ? 'SANIMEX est le 3ème plus grand exportateur de gomme arabique au Tchad, fournissant des variétés Acacia Senegal et Seyal de haute qualité.' : 'SANIMEX is the 3rd largest acacia gum exporter in Chad, providing high-quality Acacia Senegal and Seyal varieties globally.'} />
                <meta name="keywords" content="Acacia Gum, Gomme Arabique, الصمغ العربي, Hashab, Seyal, Chad Export, Tchad Export, SANIMEX" />
            </Helmet>
            <section className="relative pt-32 pb-32 px-6 min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={acaciaHero} alt="Premium Acacia Gum" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-neutral-900/60" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="text-sm uppercase tracking-widest text-amber-300 mb-4 font-sans font-semibold">{content.subtitle}</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">{content.title}</h1>
                    <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl font-sans leading-relaxed">{content.description}</p>
                    <Link to="/contact" className="inline-block bg-amber-600/90 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 transition-all hover:scale-105 shadow-lg border border-white/20">{content.cta} →</Link>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">{lang === 'ar' ? 'الشهادات والامتثال' : lang === 'fr' ? 'Certifications et Conformité' : 'Certifications & Compliance'}</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">🌿</div>
                            <span className="font-bold text-neutral-700 text-sm">Organic (EU/NOP)</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">🛡️</div>
                            <span className="font-bold text-neutral-700 text-sm">HACCP Compliant</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">✅</div>
                            <span className="font-bold text-neutral-700 text-sm">ISO 22000</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-amber-600 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (<div key={stat.labelEn}><div className="text-5xl font-bold mb-2">{stat.value}</div><div className="text-amber-100 font-sans">{getLabel(stat)}</div></div>))}
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">{content.whyTitle}</h2>
                    <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto font-sans">{content.whySubtitle}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {advantages.map((adv) => (<div key={adv.titleEn} className="flex gap-4 p-6 bg-neutral-50 rounded-xl"><div className="text-3xl">{adv.icon}</div><div><h3 className="text-xl font-bold mb-2 text-neutral-900">{getTitle(adv)}</h3><p className="text-neutral-600 font-sans">{getDesc(adv)}</p></div></div>))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-neutral-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">{content.marketTitle}</h2>
                    <div className="space-y-6 text-lg font-sans text-neutral-300">
                        <p>{content.marketP1}</p>
                        <p>{content.marketP2}</p>
                        <p>{content.marketP3}</p>
                    </div>
                    <div className="mt-10"><Link to="/contact" className="inline-block bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors">{content.cta} →</Link></div>
                </div>
            </section>

            <section className="py-20 px-6 bg-amber-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-neutral-900">{content.ctaTitle}</h2>
                    <p className="text-xl text-neutral-600 mb-8 font-sans">{content.ctaSubtitle}</p>
                    <Link to="/contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">{t('contact')}</Link>
                </div>
            </section>
        </div>
    );
}
