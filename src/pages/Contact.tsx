import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Phone, MapPin, TreeDeciduous } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/data/seo-metadata';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { getContactPageSchema } from '@/data/schemas/contact';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    const errorMessages = {
        en: "Oops! There was a problem submitting your form. Please try again or email us directly at aa@sanimexsa.com",
        fr: "Oups ! Un problème est survenu lors de l'envoi de votre formulaire. Veuillez réessayer ou nous contacter directement à aa@sanimexsa.com",
        ar: "عذرًا! حدثت مشكلة أثناء إرسال النموذج. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على aa@sanimexsa.com"
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mqaebrjr", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert(errorMessages[lang as keyof typeof errorMessages] || errorMessages.en);
            }
        } catch {
            alert(errorMessages[lang as keyof typeof errorMessages] || errorMessages.en);
        } finally {
            setIsSubmitting(false);
        }
    };

    const t = {
        en: {
            title: "Let's Talk",
            subtitle: "Whether you're sourcing acacia gum, need infrastructure expertise, or logistics support, we're here to help.",
            send: "Send a Message",
            sent: "Message Sent!",
            sentSub: "We'll get back to you within 24-48 hours.",
            name: "Name",
            email: "Email",
            company: "Company",
            interest: "Interest",
            message: "Message",
            submit: "Send Message",
            phone: "+235 22 51 49 69",
            address: "BP 492, N'Djamena, Chad",
            phoneVal: "+235 22 51 49 69",
            addressVal: "BP 492, N'Djamena, Chad",
            acaciaNote: "Acacia Gum Inquiries",
            acaciaNoteSub: "For bulk export quotes or supply agreements, use the form above with your volume requirements.",
            interests: ["Acacia Gum Export", "Construction Services", "Logistics & Warehousing", "Property Rentals", "Other"]
        },
        fr: {
            title: "Parlons",
            subtitle: "Que vous cherchiez de la gomme arabique, des services de construction ou un support logistique, nous sommes là pour vous aider.",
            send: "Envoyer un Message",
            sent: "Message Envoyé!",
            sentSub: "Nous vous répondrons dans les 24 à 48 heures.",
            name: "Nom",
            email: "Email",
            company: "Entreprise",
            interest: "Intérêt",
            message: "Message",
            submit: "Envoyer le Message",
            phone: "Téléphone",
            address: "Adresse",
            phoneVal: "+235 22 51 49 69",
            addressVal: "BP 492, N'Djamena, Tchad",
            acaciaNote: "Demandes Gomme Arabique",
            acaciaNoteSub: "Pour les devis d'exportation en gros ou les contrats d'approvisionnement, utilisez le formulaire ci-dessus avec vos besoins en volume.",
            interests: ["Export Gomme Arabique", "Services de Construction", "Logistique & Entreposage", "Location de Propriétés", "Autre"]
        },
        ar: {
            title: "دعنا نتحدث",
            subtitle: "سواء كنت تبحث عن الصمغ العربي، أو خدمات البناء، أو الدعم اللوجستي، نحن هنا للمساعدة.",
            send: "أرسل رسالة",
            sent: "تم إرسال الرسالة!",
            sentSub: "سنرد عليك خلال 24-48 ساعة.",
            name: "الاسم",
            email: "البريد الإلكتروني",
            company: "الشركة",
            interest: "الاهتمام",
            message: "الرسالة",
            submit: "إرسال الرسالة",
            phone: "الهاتف",
            address: "العنوان",
            phoneVal: "+٢٣٥ ٢٢ ٥١ ٤٩ ٦٩",
            addressVal: "ص.ب ٤٩٢، انجمينا، تشاد",
            acaciaNote: "استفسارات الصمغ العربي",
            acaciaNoteSub: "لطلبات التصدير بالجملة أو اتفاقيات التوريد، استخدم النموذج أعلاه مع متطلبات الحجم الخاصة بك.",
            interests: ["تصدير الصمغ العربي", "خدمات البناء", "الخدمات اللوجستية والتخزين", "تأجير العقارات", "أخرى"]
        }
    };

    const text = t[lang as keyof typeof t] || t.en;

    // Get SEO metadata and schema for current language
    const seo = seoMetadata.contact[lang as keyof typeof seoMetadata.contact] || seoMetadata.contact.en;
    const schema = getContactPageSchema(lang);

    return (
        <div ref={containerRef} className="font-serif">
            <SEOHead {...seo} type="website" jsonLd={schema} />
            
            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 bg-[hsl(var(--sanimex-off-white))]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="slide-up text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-[hsl(var(--sanimex-dark))] tracking-tight">{text.title}</h1>
                    <p className="slide-up delay-100 text-xl md:text-2xl text-[hsl(var(--sanimex-gray-500))] max-w-2xl mx-auto font-sans leading-relaxed">{text.subtitle}</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div className="reveal">
                        <h2 className="text-3xl font-bold mb-8 text-[hsl(var(--sanimex-dark))]">{text.send}</h2>
                        {submitted ? (
                            <div className="bg-[hsl(var(--sanimex-green-700))]/10 border border-[hsl(var(--sanimex-green-700))]/20 rounded-3xl p-10 text-center">
                                <CheckCircle2 className="w-14 h-14 mx-auto mb-5 text-[hsl(var(--sanimex-green-700))]" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-[hsl(var(--sanimex-green-700))] mb-3">{text.sent}</h3>
                                <p className="text-[hsl(var(--sanimex-gray-500))] font-sans">{text.sentSub}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(var(--sanimex-gray-700))] mb-2">{text.name}</label>
                                    <input type="text" name="name" required className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:border-transparent transition-all duration-200 bg-[hsl(var(--sanimex-off-white))]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(var(--sanimex-gray-700))] mb-2">{text.email}</label>
                                    <input type="email" name="email" required className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:border-transparent transition-all duration-200 bg-[hsl(var(--sanimex-off-white))]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(var(--sanimex-gray-700))] mb-2">{text.company}</label>
                                    <input type="text" name="company" className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:border-transparent transition-all duration-200 bg-[hsl(var(--sanimex-off-white))]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(var(--sanimex-gray-700))] mb-2">{text.interest}</label>
                                    <select name="interest" className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:border-transparent transition-all duration-200 bg-[hsl(var(--sanimex-off-white))]">
                                        {text.interests.map(i => <option key={i}>{i}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(var(--sanimex-gray-700))] mb-2">{text.message}</label>
                                    <textarea rows={5} name="message" required className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:border-transparent transition-all duration-200 bg-[hsl(var(--sanimex-off-white))] resize-none"></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting} 
                                    className="group w-full flex items-center justify-center gap-3 bg-[hsl(var(--sanimex-blue-900))] text-white py-5 rounded-full font-semibold hover:bg-[hsl(var(--sanimex-blue-800))] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_20px_40px_-10px_hsla(213,52%,24%,0.4)]"
                                >
                                    {isSubmitting ? (lang === 'ar' ? 'جار الإرسال...' : lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : text.submit}
                                    {!isSubmitting && (
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="reveal" style={{ animationDelay: '100ms' }}>
                        <div className="space-y-8">
                            <div className="group flex gap-5 p-6 bg-[hsl(var(--sanimex-cream))] rounded-2xl hover:shadow-lg transition-all duration-300">
                                <Phone className="w-8 h-8 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-blue-900))] transition-all duration-300" strokeWidth={1.5} />
                                <div>
                                    <h3 className="font-bold text-[hsl(var(--sanimex-dark))] mb-1">{text.phone}</h3>
                                    <p className="text-[hsl(var(--sanimex-gray-500))] font-sans" dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                                        +235 22 51 49 69
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-5 p-6 bg-[hsl(var(--sanimex-cream))] rounded-2xl hover:shadow-lg transition-all duration-300">
                                <MapPin className="w-8 h-8 text-[hsl(var(--sanimex-gray-500))] group-hover:text-[hsl(var(--sanimex-blue-900))] transition-all duration-300" strokeWidth={1.5} />
                                <div>
                                    <h3 className="font-bold text-[hsl(var(--sanimex-dark))] mb-1">{text.address}</h3>
                                    <p className="text-[hsl(var(--sanimex-gray-500))] font-sans" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                                        {lang === 'ar' ? (
                                            <><span dir="rtl">ص.ب</span> <span dir="ltr">492</span><span dir="rtl">، انجمينا، تشاد</span></>
                                        ) : "BP 492, N'Djamena, Chad"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-8 bg-gradient-to-br from-[hsl(var(--sanimex-sand))]/20 to-[hsl(var(--sanimex-terracotta))]/10 rounded-3xl border border-[hsl(var(--sanimex-sand))]/30">
                            <h3 className="font-bold text-[hsl(var(--sanimex-terracotta))] mb-3 flex items-center gap-2">
                                <TreeDeciduous className="w-6 h-6" strokeWidth={1.5} /> {text.acaciaNote}
                            </h3>
                            <p className="text-[hsl(var(--sanimex-gray-500))] text-sm font-sans leading-relaxed">{text.acaciaNoteSub}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
