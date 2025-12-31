import { useTranslation } from 'react-i18next';
import { Landmark, Scale, Shield, type LucideIcon } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/data/seo-metadata';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { getServiceSchema } from '@/data/schemas/service';

const projects: { name: string; nameAr: string; nameFr: string; description: string; descriptionAr: string; descriptionFr: string; Icon: LucideIcon }[] = [
    { name: 'University of Pala', nameAr: 'جامعة بالا', nameFr: 'Université de Pala', description: 'Major regional educational infrastructure serving the Mayo-Kebbi West region.', descriptionAr: 'بنية تحتية تعليمية إقليمية رئيسية تخدم منطقة مايو كيبي الغربية.', descriptionFr: 'Infrastructure éducative régionale majeure desservant la région du Mayo-Kebbi Ouest.', Icon: Landmark },
    { name: 'Constitutional Council of Chad', nameAr: 'المجلس الدستوري لتشاد', nameFr: 'Conseil Constitutionnel du Tchad', description: 'Sovereign institutional construction, the foundation of Chadian governance.', descriptionAr: 'بناء مؤسسي سيادي، أساس الحكم التشادي.', descriptionFr: 'Construction institutionnelle souveraine, le fondement de la gouvernance tchadienne.', Icon: Scale },
    { name: 'National Police Headquarters', nameAr: 'المقر الرئيسي للشرطة الوطنية', nameFr: 'Quartier Général de la Police Nationale', description: 'High-security sovereign infrastructure for national security operations.', descriptionAr: 'بنية تحتية سيادية عالية الأمان لعمليات الأمن الوطني.', descriptionFr: 'Infrastructure souveraine de haute sécurité pour les opérations de sécurité nationale.', Icon: Shield },
];

import constructionHero from '../assets/images/construction.png';

export default function Construction() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const getName = (p: typeof projects[0]) => lang === 'ar' ? p.nameAr : lang === 'fr' ? p.nameFr : p.name;
    const getDesc = (p: typeof projects[0]) => lang === 'ar' ? p.descriptionAr : lang === 'fr' ? p.descriptionFr : p.description;

    // Get SEO metadata and schema for current language
    const seo = seoMetadata.construction[lang as keyof typeof seoMetadata.construction] || seoMetadata.construction.en;
    const schema = getServiceSchema('construction', lang);

    return (
        <div ref={containerRef} className="font-serif">
            <SEOHead {...seo} type="website" jsonLd={schema} />
            
            {/* Hero Section */}
            <section className="relative pt-36 pb-32 px-6 min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={constructionHero} alt="Construction Site" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sanimex-dark))]/85 via-[hsl(var(--sanimex-dark))]/70 to-transparent" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 text-white">
                    <p className="slide-up text-sm uppercase tracking-[0.25em] text-[hsl(var(--sanimex-sand))] mb-6 font-sans font-semibold">{lang === 'ar' ? 'الهندسة المدنية' : lang === 'fr' ? 'Génie Civil' : 'Civil Engineering'}</p>
                    <h1 className="slide-up delay-100 text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                        {lang === 'ar' ? 'بناء أساس تشاد منذ 1993' : lang === 'fr' ? 'Construire les Fondations du Tchad Depuis 1993' : 'Building Chad\'s Foundation Since 1993'}
                    </h1>
                    <p className="slide-up delay-200 text-xl md:text-2xl text-slate-200 max-w-3xl font-sans leading-relaxed">
                        {lang === 'ar' ? 'أكثر من 30 عامًا من تطوير البنية التحتية الوطنية. من الجامعات إلى المؤسسات الحكومية، نبني الهياكل التي تحدد الأمة.' : lang === 'fr' ? '30+ ans de développement d\'infrastructures nationales. Des universités aux institutions gouvernementales, nous construisons les structures qui définissent une nation.' : '30+ years of national infrastructure development. From universities to government institutions, we build the structures that define a nation.'}
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[hsl(var(--sanimex-blue-900))] text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
                    {[
                        { value: '30+', label: lang === 'ar' ? 'سنوات من الخبرة' : lang === 'fr' ? 'Années d\'Expérience' : 'Years of Experience' },
                        { value: '10+', label: lang === 'ar' ? 'مشاريع مؤسسية كبرى' : lang === 'fr' ? 'Projets Institutionnels Majeurs' : 'Major Institutional Projects' },
                        { value: lang === 'ar' ? 'المستوى الأول' : lang === 'fr' ? 'Niveau 1' : 'Tier-1', label: lang === 'ar' ? 'مقاول حكومي' : lang === 'fr' ? 'Entrepreneur Gouvernemental' : 'Government Contractor' }
                    ].map((stat, i) => (
                        <div key={stat.label} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="text-6xl font-bold mb-3">{stat.value}</div>
                            <div className="text-blue-100 font-sans text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="reveal py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[hsl(var(--sanimex-dark))]">{t('portfolio.title')}</h2>
                        <p className="text-lg text-[hsl(var(--sanimex-gray-500))] max-w-2xl mx-auto font-sans">{t('portfolio.subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <div 
                                key={project.name} 
                                className="reveal group bg-[hsl(var(--sanimex-cream))] p-10 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <project.Icon className="w-12 h-12 mb-6 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-blue-900))] transition-all duration-300" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--sanimex-dark))]">{getName(project)}</h3>
                                <p className="text-[hsl(var(--sanimex-gray-500))] font-sans leading-relaxed">{getDesc(project)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
