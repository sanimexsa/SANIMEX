---
name: web-artifacts-builder
description: Guidelines for building React components and web artifacts using SANIMEX's established stack (React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui). Use this skill when creating new components, pages, or UI features.
---

# Web Artifacts Builder

Build powerful frontend components following SANIMEX's established patterns.

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS 3.4 + shadcn/ui + Radix UI

## Design & Style Guidelines

**CRITICAL**: To avoid "AI slop", never use:
- Excessive centered layouts for everything
- Purple/blue gradients as default
- Uniform rounded corners on everything
- Inter font (use Playfair Display + IBM Plex Sans Arabic)
- Generic stock photo aesthetics
- Overly symmetrical 3-column grids

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui primitives (button, navigation-menu, etc.)
│   └── *.tsx            # App-specific components (Navbar, Footer, etc.)
├── pages/               # Route-level page components
├── lib/                 # Utility functions (utils.ts for cn())
├── locales/             # i18n translation files (en.json, fr.json, ar.json)
├── assets/              # Static assets (images, icons)
├── index.css            # Global styles + Tailwind config + design tokens
├── App.tsx              # Root component with routing
└── main.tsx             # Entry point
```

## Component Creation Patterns

### 1. Page Components

```tsx
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';

// Scroll animation hook (reuse across pages)
function useRevealOnScroll() {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        
        return () => observer.disconnect();
    }, []);
    
    return ref;
}

export default function PageName() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const containerRef = useRevealOnScroll();

    return (
        <div ref={containerRef} className="font-serif">
            <Helmet>
                <title>Page Title | SANIMEX</title>
                <meta name="description" content="..." />
            </Helmet>
            
            {/* Hero Section */}
            <section className="relative pt-36 pb-28 px-6 mesh-gradient grain overflow-hidden">
                {/* Content with slide-up animations */}
                <h1 className="slide-up text-5xl md:text-7xl font-bold">...</h1>
                <p className="slide-up delay-100">...</p>
            </section>
            
            {/* Content Sections */}
            <section className="reveal py-24 px-6 bg-white">
                {/* Use reveal class for scroll animations */}
            </section>
        </div>
    );
}
```

### 2. Reusable Components

```tsx
// Always type props explicitly
interface CardProps {
    title: string;
    description: string;
    icon?: string;
    highlighted?: boolean;
}

export function Card({ title, description, icon, highlighted = false }: CardProps) {
    return (
        <div className={`
            group p-8 rounded-3xl transition-all duration-300
            ${highlighted 
                ? 'bg-[hsl(var(--sanimex-blue-900))] text-white shadow-2xl' 
                : 'bg-[hsl(var(--sanimex-cream))] hover:shadow-xl'
            }
            hover:-translate-y-1
        `}>
            {icon && (
                <div className="text-5xl mb-6 grayscale-[30%] group-hover:grayscale-0 transition-all">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className={highlighted ? 'text-blue-100' : 'text-[hsl(var(--sanimex-gray-500))]'}>
                {description}
            </p>
        </div>
    );
}
```

### 3. Button Patterns

```tsx
// Primary CTA Button
<Link 
    to="/contact" 
    className="group inline-flex items-center gap-3 bg-[hsl(var(--sanimex-blue-900))] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[hsl(var(--sanimex-blue-800))] hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_hsla(213,52%,24%,0.4)]"
>
    {t('contact')}
    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
</Link>

// Secondary/Outline Button
<Link 
    to="/contact" 
    className="border-2 border-[hsl(var(--sanimex-blue-900))] text-[hsl(var(--sanimex-blue-900))] px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[hsl(var(--sanimex-blue-900))] hover:text-white"
>
    {t('contact')}
</Link>
```

## Animation Classes

Available in `index.css`:

```css
/* Page load animations */
.slide-up          /* Fade up on page load */
.delay-100         /* 100ms delay */
.delay-200         /* 200ms delay */
.delay-300         /* 300ms delay */

/* Scroll-triggered animations */
.reveal            /* Add to elements, becomes .visible when in viewport */

/* Background utilities */
.mesh-gradient     /* Multi-color radial gradient background */
.grain             /* Subtle noise texture overlay */
```

## Internationalization (i18n)

SANIMEX supports English, French, and Arabic (RTL):

```tsx
const { t, i18n } = useTranslation();
const lang = i18n.language;

// For RTL-aware directional icons
<svg className="rtl:rotate-180 rtl:group-hover:-translate-x-1">

// For language-specific content
{lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : 'English'}
```

## Testing Requirements

Every component should have a corresponding test file:

```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <ComponentName />
            </BrowserRouter>
        );
        expect(screen.getByText('Expected Text')).toBeInTheDocument();
    });
});
```

## Checklist for New Components

- [ ] TypeScript types for all props
- [ ] Uses design tokens from `index.css` (not hardcoded colors)
- [ ] Includes hover/focus states with transitions
- [ ] Animation classes applied appropriately
- [ ] RTL support for directional elements
- [ ] Responsive design (mobile-first)
- [ ] Accessibility: semantic HTML, ARIA labels where needed
- [ ] Test file created
- [ ] i18n strings added to locale files if needed

## Common Patterns

### Asymmetric Grid (Avoid 3-equal-columns)
```tsx
<div className="grid md:grid-cols-12 gap-6">
    <div className="md:col-span-6">Featured/Larger Item</div>
    <div className="md:col-span-3">Smaller Item</div>
    <div className="md:col-span-3">Smaller Item</div>
</div>
```

### Decorative Background Elements
```tsx
<section className="relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-[hsl(var(--sanimex-green-700))] rounded-full opacity-[0.04] blur-3xl" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(var(--sanimex-sand))] rounded-full opacity-[0.08] blur-3xl" />
    
    <div className="relative z-10">
        {/* Actual content */}
    </div>
</section>
```

### Contact Info Cards
```tsx
<div className="group flex gap-5 p-6 bg-[hsl(var(--sanimex-cream))] rounded-2xl hover:shadow-lg transition-all duration-300">
    <div className="text-3xl grayscale-[30%] group-hover:grayscale-0 transition-all">📞</div>
    <div>
        <h3 className="font-bold text-[hsl(var(--sanimex-dark))]">Phone</h3>
        <p className="text-[hsl(var(--sanimex-gray-500))]">+235 22 51 49 69</p>
    </div>
</div>
```
