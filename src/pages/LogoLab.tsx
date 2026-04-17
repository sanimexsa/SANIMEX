import FooterLogo, { type FooterLogoVariant } from '@/components/FooterLogo';
import geminiLogoSrc from '../../Gemini_Generated_Image_951csr951csr951c.png';

const logoOptions: Array<{
    id: FooterLogoVariant;
    name: string;
    note: string;
}> = [
    {
        id: 'gemini-balanced',
        name: 'Option A',
        note: 'Balanced crop from the Gemini image with minimal extra masking.',
    },
    {
        id: 'gemini-tight',
        name: 'Option B',
        note: 'Tighter crop to hide more of the black surround and lower edge noise.',
    },
    {
        id: 'gemini-lifted',
        name: 'Option C',
        note: 'Lifts the image slightly so the bottom edge reads cleaner.',
    },
    {
        id: 'gemini-ring',
        name: 'Option D',
        note: 'Keeps the Gemini cleanup and redraws the outer red edge on top.',
    },
];

export default function LogoLab() {
    return (
        <section className="min-h-[calc(100vh-5rem)] bg-[hsl(var(--sanimex-dark))] px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--sanimex-red))]">
                        Footer Logo Lab
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white">Pick the footer logo treatment you want</h1>
                    <p className="mt-4 text-base leading-relaxed text-[hsl(var(--sanimex-gray-500))]">
                        Each option uses the Gemini-generated image with a different crop or edge treatment. Review them
                        on the same dark background used in the site footer and tell me which option you want promoted.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {logoOptions.map((option) => (
                        <article
                            key={option.id}
                            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                        >
                            <div className="rounded-[1.75rem] bg-[#171717] px-8 py-10">
                                <div className="flex flex-col items-center">
                                    <FooterLogo variant={option.id} src={geminiLogoSrc} />
                                    <h2 className="mt-4 text-center text-[2.6rem] font-bold leading-none tracking-tight text-[hsl(var(--sanimex-red))]">
                                        SANIMEX S.A
                                    </h2>
                                    <p className="mt-8 max-w-md text-left text-[2rem] leading-[1.45] text-[hsl(var(--sanimex-gray-500))] md:text-[1.9rem]">
                                        Construire l'avenir du Tchad depuis 1993. Une entreprise familiale multi-sectorielle.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-lg font-semibold text-white">{option.name}</p>
                                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--sanimex-gray-500))]">{option.note}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
