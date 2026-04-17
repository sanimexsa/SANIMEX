type FooterLogoVariant =
    | 'tight-circle'
    | 'lifted-circle'
    | 'ring-overlay'
    | 'bottom-mask'
    | 'gemini-balanced'
    | 'gemini-tight'
    | 'gemini-lifted'
    | 'gemini-ring';

type FooterLogoProps = {
    variant?: FooterLogoVariant;
    className?: string;
    src?: string;
};

const variantStyles: Record<FooterLogoVariant, React.CSSProperties> = {
    'tight-circle': {
        clipPath: 'circle(48.75% at 50% 50%)',
    },
    'lifted-circle': {
        clipPath: 'circle(48.25% at 50% 48.5%)',
    },
    'ring-overlay': {
        clipPath: 'circle(49.1% at 50% 50%)',
    },
    'bottom-mask': {
        clipPath: 'path("M 80 1 C 123 1 159 37 159 80 C 159 123 123 159 80 159 C 37 159 1 123 1 80 C 1 37 37 1 80 1 Z M 80 6 C 40 6 8 38 8 80 C 8 118 37 151 80 154 C 123 151 152 118 152 80 C 152 38 120 6 80 6 Z")',
    },
    'gemini-balanced': {
        transform: 'scale(2.22) translateY(7%)',
        transformOrigin: 'center',
    },
    'gemini-tight': {
        transform: 'scale(2.34) translateY(6.5%)',
        transformOrigin: 'center',
    },
    'gemini-lifted': {
        transform: 'scale(2.3) translateY(3.5%)',
        transformOrigin: 'center',
    },
    'gemini-ring': {
        transform: 'scale(2.26) translateY(6.25%)',
        transformOrigin: 'center',
    },
};

const overlayStyles: Partial<Record<FooterLogoVariant, React.CSSProperties>> = {
    'ring-overlay': {
        boxShadow: 'inset 0 0 0 3px hsl(var(--sanimex-red))',
    },
    'bottom-mask': {
        boxShadow: 'inset 0 -4px 0 0 hsl(var(--sanimex-red))',
    },
    'gemini-ring': {
        boxShadow: 'inset 0 0 0 3px hsl(var(--sanimex-red))',
    },
};

export type { FooterLogoVariant };

export default function FooterLogo({ variant = 'tight-circle', className = '', src = '/logos/sanimex-logo.png' }: FooterLogoProps) {
    return (
        <div className={`relative h-40 w-40 overflow-hidden rounded-full ${className}`.trim()}>
            <img
                src={src}
                alt=""
                width={168}
                height={168}
                className="h-full w-full object-cover"
                loading="lazy"
                style={variantStyles[variant]}
            />
            {overlayStyles[variant] ? (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={overlayStyles[variant]}
                />
            ) : null}
        </div>
    );
}
