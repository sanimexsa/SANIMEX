import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { i18n } = useTranslation();
    const lang = i18n.language;

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
                alert("Oops! There was a problem submitting your form. Please try again or email us directly at aa@sanimexsa.com");
            }
        } catch {
            alert("Oops! There was a problem submitting your form. Please try again or email us directly at aa@sanimexsa.com");
        } finally {
            setIsSubmitting(false);
        }
    };

    const t = {
        en: {
            title: "Let's Talk",
            subtitle: "Whether you're sourcing acacia gum, need infrastructure expertise, or logistics support — we're here to help.",
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
            subtitle: "Que vous cherchiez de la gomme arabique, des services de construction ou un support logistique — nous sommes là pour vous aider.",
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
            subtitle: "سواء كنت تبحث عن الصمغ العربي، أو خدمات البناء، أو الدعم اللوجستي — نحن هنا للمساعدة.",
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

    return (
        <div className="font-serif">
            <Helmet>
                <title>{lang === 'ar' ? 'اتصل بنا | سانيميكس تشاد' : lang === 'fr' ? 'Contactez-nous | SANIMEX Tchad' : 'Contact Us | SANIMEX Chad'}</title>
                <meta name="description" content={lang === 'ar' ? 'اتصل بسانيميكس للاستفسار عن الصمغ العربي أو البناء أو الخدمات اللوجستية في تشاد.' : lang === 'fr' ? 'Contactez SANIMEX pour vos besoins en gomme arabique, construction ou logistique au Tchad.' : 'Contact SANIMEX for your acacia gum, construction, or logistics needs in Chad.'} />
                <meta name="keywords" content="Contact SANIMEX, Sanimex Tchad Phone, Sanimex Chad Address" />
            </Helmet>
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-neutral-900">{text.title}</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-sans">{text.subtitle}</p>
                </div>
            </section>

            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-neutral-900">{text.send}</h2>
                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                <div className="text-4xl mb-4">✅</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{text.sent}</h3>
                                <p className="text-green-700 font-sans">{text.sentSub}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div><label className="block text-sm font-medium text-neutral-700 mb-2">{text.name}</label><input type="text" name="name" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /></div>
                                <div><label className="block text-sm font-medium text-neutral-700 mb-2">{text.email}</label><input type="email" name="email" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /></div>
                                <div><label className="block text-sm font-medium text-neutral-700 mb-2">{text.company}</label><input type="text" name="company" className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /></div>
                                <div><label className="block text-sm font-medium text-neutral-700 mb-2">{text.interest}</label><select name="interest" className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">{text.interests.map(i => <option key={i}>{i}</option>)}</select></div>
                                <div><label className="block text-sm font-medium text-neutral-700 mb-2">{text.message}</label><textarea rows={4} name="message" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea></div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSubmitting ? (lang === 'ar' ? 'جار الإرسال...' : lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : text.submit}
                                </button>
                            </form>
                        )}
                    </div>

                    <div>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-2xl">📞</div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">{text.phone}</h3>
                                    <p className="text-neutral-600 font-sans" dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                                        +235 22 51 49 69
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl">📍</div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">{text.address}</h3>
                                    <p className="text-neutral-600 font-sans" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                                        {lang === 'ar' ? (
                                            <><span dir="rtl">ص.ب</span> <span dir="ltr">492</span><span dir="rtl">، انجمينا، تشاد</span></>
                                        ) : "BP 492, N'Djamena, Chad"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
                            <h3 className="font-bold text-amber-800 mb-2">🌳 {text.acaciaNote}</h3>
                            <p className="text-amber-700 text-sm font-sans">{text.acaciaNoteSub}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
