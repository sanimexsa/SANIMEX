import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
    { icon: '🚛', titleEn: 'Fleet Transport', titleFr: 'Transport par Flotte', titleAr: 'النقل بالأسطول', descEn: 'Our truck fleet moves cargo across Chad and the Sahel region safely and efficiently.', descFr: 'Notre flotte de camions transporte des marchandises à travers le Tchad et la région du Sahel en toute sécurité.', descAr: 'أسطول شاحناتنا ينقل البضائع عبر تشاد ومنطقة الساحل بأمان وكفاءة.' },
    { icon: '🏭', titleEn: 'Warehousing', titleFr: 'Entreposage', titleAr: 'التخزين', descEn: 'Strategic warehouse facilities across Chad for secure storage and distribution.', descFr: 'Installations d\'entreposage stratégiques à travers le Tchad pour le stockage et la distribution sécurisés.', descAr: 'مرافق تخزين استراتيجية في جميع أنحاء تشاد للتخزين والتوزيع الآمن.' },
    { icon: '📦', titleEn: 'UNICEF Partnership', titleFr: 'Partenariat UNICEF', titleAr: 'شراكة اليونيسف', descEn: '10+ years as a certified logistics partner for UNICEF in landlocked regions.', descFr: '10+ ans en tant que partenaire logistique certifié pour l\'UNICEF dans les régions enclavées.', descAr: 'أكثر من 10 سنوات كشريك لوجستي معتمد لليونيسف في المناطق الحبيسة.' },
    { icon: '🏠', titleEn: 'Property Rentals', titleFr: 'Location de Propriétés', titleAr: 'تأجير العقارات', descEn: 'Commercial and residential rental properties across N\'Djamena.', descFr: 'Propriétés commerciales et résidentielles à louer à N\'Djamena.', descAr: 'عقارات تجارية وسكنية للإيجار في نجامينا.' },
];

import logisticsHero from '../assets/images/logistics.png';

export default function Logistics() {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    const getTitle = (s: typeof services[0]) => lang === 'ar' ? s.titleAr : lang === 'fr' ? s.titleFr : s.titleEn;
    const getDesc = (s: typeof services[0]) => lang === 'ar' ? s.descAr : lang === 'fr' ? s.descFr : s.descEn;

    return (
        <div className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'الخدمات اللوجستية والعقارات في تشاد | سانيميكس' : lang === 'fr' ? 'Logistique et Immobilier au Tchad | SANIMEX' : 'Logistics and Real Estate in Chad | SANIMEX'}</title>
                <meta name="description" content={lang === 'ar' ? 'حلول لوجستية موثوقة وشريك معتمد لليونيسف وإدارة العقارات التجارية في نجامينا، تشاد.' : lang === 'fr' ? 'Solutions logistiques fiables, partenaire certifié UNICEF et gestion immobilière commerciale à N\'Djamena, Tchad.' : 'Reliable logistics solutions, UNICEF certified partner, and commercial property management in N\'Djamena, Chad.'} />
                <meta name="keywords" content="Logistics Chad, Logistique Tchad, Transport Tchad, Real Estate Chad, Immobilier Tchad, UNICEF Partner Chad, SANIMEX" />
            </Helmet>
            <section className="relative pt-32 pb-32 px-6 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={logisticsHero} alt="Logistics convoy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-neutral-900/60" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="text-sm uppercase tracking-widest text-green-300 mb-4 font-sans font-semibold">{lang === 'ar' ? 'الخدمات اللوجستية والعقارات' : lang === 'fr' ? 'Logistique & Immobilier' : 'Logistics & Real Estate'}</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        {lang === 'ar' ? 'نقل البضائع.\nإدارة الأصول.' : lang === 'fr' ? 'Transporter les Marchandises.\nGérer les Actifs.' : 'Moving Goods.\nManaging Assets.'}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-100 max-w-3xl font-sans leading-relaxed">
                        {lang === 'ar' ? 'من التوصيل للميل الأخير في تشاد الحبيسة إلى التخزين الاستراتيجي وإدارة الممتلكات — نحن نبقي الأمور تتحرك.' : lang === 'fr' ? 'De la livraison du dernier kilomètre au Tchad enclavé à l\'entreposage stratégique et la gestion immobilière — nous gardons les choses en mouvement.' : 'From last-mile delivery in landlocked Chad to strategic warehousing and property management — we keep things moving.'}
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-neutral-900">{lang === 'ar' ? 'قدراتنا' : lang === 'fr' ? 'Nos Capacités' : 'Our Capabilities'}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div key={service.titleEn} className="flex gap-4 p-6 bg-green-50 rounded-xl">
                                <div className="text-4xl">{service.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-neutral-900">{getTitle(service)}</h3>
                                    <p className="text-neutral-600 font-sans">{getDesc(service)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-green-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-6xl mb-6">🤝</div>
                    <h2 className="text-4xl font-bold mb-6">{lang === 'ar' ? 'شريك معتمد لليونيسف' : lang === 'fr' ? 'Partenaire Certifié UNICEF' : 'UNICEF Certified Partner'}</h2>
                    <p className="text-xl text-green-100 font-sans max-w-2xl mx-auto">
                        {lang === 'ar' ? 'لأكثر من 10 سنوات، قدمنا الدعم اللوجستي للميل الأخير لعمليات اليونيسف في تشاد — نوصل الإمدادات الأساسية إلى بعض المناطق الأكثر عزلة في أفريقيا.' : lang === 'fr' ? 'Depuis plus de 10 ans, nous fournissons un soutien logistique du dernier kilomètre pour les opérations de l\'UNICEF au Tchad — livrant des fournitures essentielles dans certaines des régions les plus reculées d\'Afrique.' : 'For over 10 years, we\'ve provided last-mile logistics support for UNICEF operations in Chad — delivering essential supplies to some of the most remote regions in Africa.'}
                    </p>
                    <Link to="/contact" className="inline-block mt-8 bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors">{t('contact')}</Link>
                </div>
            </section>
        </div>
    );
}
