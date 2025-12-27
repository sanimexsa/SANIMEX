---
name: brand-guidelines
description: SANIMEX S.A. brand identity and style guidelines. Apply consistent brand colors, typography, and visual styling to any artifact. Use when creating or modifying UI components, marketing materials, or any visual output representing SANIMEX.
---

# SANIMEX Brand Guidelines

## Brand Identity: "Desert Modernism"

SANIMEX S.A. is a family-owned Chadian enterprise established in 1993, operating across acacia gum export, construction, and logistics. The visual identity blends **African earth tones** with **modern professionalism**, creating a distinctive "Desert Modernism" aesthetic.

**Brand Pillars:**

- **Trust & Authority** — Deep blue conveys reliability and institutional strength
- **African Heritage** — Warm sand and terracotta connect to Chadian landscape
- **Growth & Sustainability** — Oasis green represents the acacia gum business and natural resources
- **Modern Professionalism** — Clean typography and generous whitespace signal contemporary business practices

## Color Palette

### Primary Colors

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Deep Blue 900** | `213 52% 24%` | `#1E3A5F` | Primary CTAs, headers, trust elements |
| **Deep Blue 800** | `213 52% 34%` | `#2B4F7A` | Hover states, secondary headers |
| **Deep Blue 700** | `213 52% 40%` | `#336699` | Tertiary elements |

### Accent Colors — African Earth

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Sand** | `30 41% 59%` | `#C4A574` | Subtle backgrounds, highlights |
| **Terracotta** | `17 52% 47%` | `#B65D3D` | Accent CTAs, Acacia Gum section |
| **Cream** | `38 33% 85%` | `#E5DCC8` | Card backgrounds, soft surfaces |

### Accent Colors — Nature

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Oasis Green 700** | `153 45% 30%` | `#2A6B4F` | Logistics section, environmental |
| **Oasis Green 600** | `153 45% 40%` | `#3D8F6A` | Green accents |

### Neutrals

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Dark** | `40 4% 8%` | `#151413` | Primary text, dark backgrounds |
| **Gray 700** | `0 0% 24%` | `#3D3D3D` | Secondary text |
| **Gray 500** | `0 0% 42%` | `#6B6B6B` | Body text, descriptions |
| **Gray 300** | `0 0% 75%` | `#BFBFBF` | Borders, dividers |
| **Gray 100** | `0 0% 90%` | `#E6E6E6` | Light borders |
| **Off-White** | `40 20% 98%` | `#FDFCFA` | Page backgrounds |

### CSS Custom Properties

```css
:root {
    /* Primary - Deep Blue */
    --sanimex-blue-900: 213 52% 24%;
    --sanimex-blue-800: 213 52% 34%;
    --sanimex-blue-700: 213 52% 40%;
    
    /* Accent - African Earth */
    --sanimex-sand: 30 41% 59%;
    --sanimex-terracotta: 17 52% 47%;
    --sanimex-cream: 38 33% 85%;
    
    /* Accent - Nature */
    --sanimex-green-700: 153 45% 30%;
    --sanimex-green-600: 153 45% 40%;
    
    /* Neutrals */
    --sanimex-dark: 40 4% 8%;
    --sanimex-gray-700: 0 0% 24%;
    --sanimex-gray-500: 0 0% 42%;
    --sanimex-gray-300: 0 0% 75%;
    --sanimex-gray-100: 0 0% 90%;
    --sanimex-off-white: 40 20% 98%;
}
```

### Usage in Tailwind

```tsx
// Use HSL format with CSS variables
className="bg-[hsl(var(--sanimex-blue-900))]"
className="text-[hsl(var(--sanimex-terracotta))]"
className="border-[hsl(var(--sanimex-gray-100))]"
```

## Typography

### Font Families

| Type | Font | Fallback | Usage |
|------|------|----------|-------|
| **Display/Headings** | Playfair Display | Georgia, serif | H1-H3, hero text, brand statements |
| **Body (Latin)** | Sora | system-ui | Body copy, UI elements, navigation |
| **Body (Arabic)** | IBM Plex Sans Arabic | Arial | Arabic translations |

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap');
```

### Type Scale

| Level | Size | Weight | Letter Spacing | Line Height |
|-------|------|--------|----------------|-------------|
| **H1 (Hero)** | 5rem–8rem (80–128px) | 700 | -0.02em (tight) | 1.1 |
| **H2 (Section)** | 2.5rem–3rem (40–48px) | 700 | -0.01em | 1.2 |
| **H3 (Card)** | 1.25rem–1.5rem (20–24px) | 700 | normal | 1.3 |
| **Body Large** | 1.25rem (20px) | 400 | normal | 1.6 |
| **Body** | 1rem (16px) | 400 | normal | 1.6 |
| **Small/Label** | 0.875rem (14px) | 500–600 | 0.15–0.25em | 1.4 |

### Typography Classes

```tsx
// Hero headline
className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"

// Section headline
className="text-4xl md:text-5xl font-bold mb-5"

// Eyebrow/Label
className="text-sm uppercase tracking-[0.25em] font-sans font-semibold"

// Body text
className="text-lg font-sans leading-relaxed"
```

## Logo Usage

### Primary Logo

- **Full name**: SANIMEX S.A.
- **Display**: Always in caps, always LTR (even in Arabic context)
- **Font**: Bold, tracking-tight

```tsx
<h3 className="text-white font-bold text-2xl tracking-tight" dir="ltr">
    SANIMEX S.A
</h3>
```

### Clear Space

Maintain clear space equal to the height of the "S" in SANIMEX around the logo on all sides.

### Don't

- Don't use lowercase
- Don't translate the company name
- Don't add taglines to the logo lockup
- Don't use colors other than white, dark, or blue-900

## Spacing & Layout

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| **Section Padding** | `py-24` to `py-28` | Between major sections |
| **Content Max Width** | `max-w-7xl` | Main content container |
| **Hero Padding** | `pt-36 pb-28` | Above-fold hero sections |
| **Card Padding** | `p-8` to `p-10` | Card interiors |
| **Gap (Grid)** | `gap-6` | Between grid items |
| **Gap (Flex/Small)** | `gap-3` to `gap-5` | Inline elements |

### Layout Principles

1. **Asymmetric grids** — Avoid uniform 3-column layouts

   ```tsx
   // Good: Asymmetric emphasis
   <div className="grid md:grid-cols-12 gap-6">
       <div className="md:col-span-6">Featured</div>
       <div className="md:col-span-3">Secondary</div>
       <div className="md:col-span-3">Secondary</div>
   </div>
   ```

2. **Generous whitespace** — Let content breathe

3. **Visual depth** — Use decorative background elements

   ```tsx
   <div className="absolute top-10 left-10 w-72 h-72 bg-[hsl(var(--sanimex-green-700))] rounded-full opacity-[0.04] blur-3xl" />
   ```

## Component Styling

### Buttons

| Type | Style |
|------|-------|
| **Primary CTA** | `bg-[hsl(var(--sanimex-blue-900))] text-white rounded-full px-10 py-5` |
| **Secondary** | `border-2 border-[hsl(var(--sanimex-blue-900))] rounded-full px-10 py-5` |
| **Accent (Acacia)** | `bg-[hsl(var(--sanimex-terracotta))] text-white rounded-full` |
| **Accent (Logistics)** | `bg-[hsl(var(--sanimex-green-700))] text-white rounded-full` |

### Cards

```tsx
// Standard card
className="bg-[hsl(var(--sanimex-cream))] p-8 rounded-3xl hover:shadow-xl transition-all duration-300"

// Highlighted card
className="bg-[hsl(var(--sanimex-blue-900))] text-white p-8 rounded-3xl shadow-2xl"
```

### Form Inputs

```tsx
className="w-full px-5 py-4 border border-[hsl(var(--sanimex-gray-100))] rounded-2xl focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] bg-[hsl(var(--sanimex-off-white))]"
```

## Motion & Animation

### Principles

- **Purposeful** — Animation should guide attention, not distract
- **Subtle** — Use 0.3s–0.8s durations with ease-out curves
- **Accessible** — Respect `prefers-reduced-motion`

### Standard Transitions

```css
/* Hover transitions */
transition-all duration-300

/* Slower reveals */
transition-all duration-500

/* Page load animations */
animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
```

### Animation Classes

| Class | Effect |
|-------|--------|
| `.slide-up` | Fade + translate up on page load |
| `.reveal` | Fade + translate up when scrolled into view |
| `.delay-100` to `.delay-600` | Stagger animation timing |

## Iconography

### Style

- Use emoji for icons where appropriate (🌳 🏗️ 🚛 📞 📍)
- Emoji icons should have `grayscale-[30%]` by default, `grayscale-0` on hover
- For arrow icons, use inline SVG with RTL support:

```tsx
<svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
```

## Photography & Imagery

### Style Guidelines

- **Hero images**: Full-bleed with gradient overlays
- **Gradient overlay**: `from-[hsl(var(--sanimex-dark))]/80 via-[hsl(var(--sanimex-dark))]/60 to-transparent`
- **Partner logos**: Grayscale by default, full color on hover
- **Loading**: Always use `loading="lazy"` for below-fold images

### Image Treatment

```tsx
// Hero image with gradient
<div className="absolute inset-0">
    <img src={heroImage} alt="..." className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sanimex-dark))]/80 via-[hsl(var(--sanimex-dark))]/60 to-transparent" />
</div>

// Partner logo
<img className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
```

## Accessibility

### Requirements

- Skip-to-content link on all pages
- Focus states visible on all interactive elements
- Color contrast ratio ≥ 4.5:1 for text
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML structure

### Focus States

```tsx
className="focus:ring-2 focus:ring-[hsl(var(--sanimex-blue-900))] focus:outline-none"
```

## Brand Voice

### Tone

- **Professional** — Institutional, trustworthy, established
- **Warm** — Family-owned heritage, personal relationships
- **Confident** — 30+ years of experience, proven track record

### Key Messages

- "Building Chad's future since 1993"
- "A family-owned multi-sector enterprise"
- "Direct from Chad" (for acacia gum)
- "UNICEF Certified Partner" (for logistics)

## Do's and Don'ts

### Do

✅ Use deep blue for trust and authority
✅ Use asymmetric layouts
✅ Apply staggered animations
✅ Include RTL support
✅ Use generous whitespace
✅ Apply hover states with transitions

### Don't

❌ Use purple gradients
❌ Default to Inter font
❌ Use uniform 3-column grids
❌ Skip hover/focus states
❌ Forget reduced motion support
❌ Use hardcoded colors (use CSS variables)
