import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const projects = [
    { name: 'University of Pala', nameAr: 'جامعة بالا', nameFr: 'Université de Pala', description: 'Major regional educational infrastructure serving the Mayo-Kebbi West region.', descriptionAr: 'بنية تحتية تعليمية إقليمية رئيسية تخدم منطقة مايو كيبي الغربية.', descriptionFr: 'Infrastructure éducative régionale majeure desservant la région du Mayo-Kebbi Ouest.', icon: '🏛️' },
    { name: 'Constitutional Council of Chad', nameAr: 'المجلس الدستوري لتشاد', nameFr: 'Conseil Constitutionnel du Tchad', description: 'Sovereign institutional construction — the foundation of Chadian governance.', descriptionAr: 'بناء مؤسسي سيادي — أساس الحكم التشادي.', descriptionFr: 'Construction institutionnelle souveraine — le fondement de la gouvernance tchadienne.', icon: '⚖️' },
    { name: 'National Police Headquarters', nameAr: 'المقر الرئيسي للشرطة الوطنية', nameFr: 'Quartier Général de la Police Nationale', description: 'High-security sovereign infrastructure for national security operations.', descriptionAr: 'بنية تحتية سيادية عالية الأمان لعمليات الأمن الوطني.', descriptionFr: 'Infrastructure souveraine de haute sécurité pour les opérations de sécurité nationale.', icon: '🛡️' },
];

import constructionHero from '../assets/images/construction.png';

export default function Construction() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const getName = (p: typeof projects[0]) => lang === 'ar' ? p.nameAr : lang === 'fr' ? p.nameFr : p.name;
    const getDesc = (p: typeof projects[0]) => lang === 'ar' ? p.descriptionAr : lang === 'fr' ? p.descriptionFr : p.description;

    return (
        <div className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'خدمات البناء في تشاد | سانيميكس' : lang === 'fr' ? 'Services de Construction au Tchad | SANIMEX' : 'Construction Services in Chad | SANIMEX'}</title>
                <meta name="description" content={lang === 'ar' ? 'سانيميكس متخصصة في مشاريع البنية التحتية والمباني المؤسسية الكبرى في تشاد منذ عام ١٩٩٣.' : lang === 'fr' ? 'SANIMEX est spécialisée dans les projets d\'infrastructure et les grands bâtiments institutionnels au Tchad depuis 1993.' : 'SANIMEX specializes in infrastructure projects and major institutional buildings in Chad since 1993.'} />
                <meta name="keywords" content="Construction Chad, BTP Tchad, Génie Civil Tchad, SANIMEX, Sanimex Tchad" />
            </Helmet>
            <section className="relative pt-32 pb-32 px-6 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={constructionHero} alt="Construction Site" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-neutral-900/70" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="text-sm uppercase tracking-widest text-amber-400 mb-4 font-sans font-semibold">{lang === 'ar' ? 'الهندسة المدنية' : lang === 'fr' ? 'Génie Civil' : 'Civil Engineering'}</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        {lang === 'ar' ? 'بناء أساس تشاد منذ 1993' : lang === 'fr' ? 'Construire les Fondations du Tchad Depuis 1993' : 'Building Chad\'s Foundation Since 1993'}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-sans leading-relaxed">
                        {lang === 'ar' ? 'أكثر من 30 عامًا من تطوير البنية التحتية الوطنية. من الجامعات إلى المؤسسات الحكومية، نبني الهياكل التي تحدد الأمة.' : lang === 'fr' ? '30+ ans de développement d\'infrastructures nationales. Des universités aux institutions gouvernementales, nous construisons les structures qui définissent une nation.' : '30+ years of national infrastructure development. From universities to government institutions, we build the structures that define a nation.'}
                    </p>
                </div>
            </section>

            <section className="py-12 bg-slate-800 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                    <div><div className="text-5xl font-bold mb-2">30+</div><div className="text-slate-300 font-sans">{lang === 'ar' ? 'سنوات من الخبرة' : lang === 'fr' ? 'Années d\'Expérience' : 'Years of Experience'}</div></div>
                    <div><div className="text-5xl font-bold mb-2">10+</div><div className="text-slate-300 font-sans">{lang === 'ar' ? 'مشاريع مؤسسية كبرى' : lang === 'fr' ? 'Projets Institutionnels Majeurs' : 'Major Institutional Projects'}</div></div>
                    <div><div className="text-5xl font-bold mb-2">{lang === 'ar' ? 'المستوى الأول' : lang === 'fr' ? 'Niveau 1' : 'Tier-1'}</div><div className="text-slate-300 font-sans">{lang === 'ar' ? 'مقاول حكومي' : lang === 'fr' ? 'Entrepreneur Gouvernemental' : 'Government Contractor'}</div></div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">{t('portfolio.title')}</h2>
                    <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto font-sans">{t('portfolio.subtitle')}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.name} className="bg-slate-50 p-8 rounded-2xl">
                                <div className="text-5xl mb-6">{project.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{getName(project)}</h3>
                                <p className="text-neutral-600 font-sans">{getDesc(project)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
