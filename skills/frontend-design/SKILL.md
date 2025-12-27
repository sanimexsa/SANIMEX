```markdown
# frontend-design

Create distinctive, production-grade frontend interfaces with high design quality for SANIMEX. This skill guides all UI development to avoid generic "AI slop" aesthetics and create memorable, professional experiences.

## Design Philosophy

SANIMEX represents **African excellence in global trade** - the design should communicate:
- **Authority & Trust**: A company trusted by UNICEF, World Bank, AfDB
- **Natural Heritage**: Connection to acacia gum and Chad's natural resources
- **Modern Professionalism**: Contemporary B2B enterprise aesthetics
- **Cultural Authenticity**: Respecting Arabic, French, and English audiences

### Aesthetic Direction: "Desert Modernism"
A refined, earthy aesthetic that blends African warmth with corporate sophistication. Think: sandy gradients, deep blue-greens (like oasis water), warm terracotta accents, and confident typography.

## Typography Standards

### Primary Font Stack
- **Display/Headlines**: `Playfair Display` - Elegant serif for authority
- **Body/UI**: `IBM Plex Sans Arabic` - Clean, multilingual support
- **Accents**: Consider `Sora` or `DM Sans` for modern touches

### Rules
- Headlines: Bold, generous letter-spacing for impact
- Body: 16-18px minimum, 1.6-1.8 line-height for readability
- NEVER use: Inter, Roboto, Arial, system fonts as primary choices
- Ensure Arabic typography uses proper RTL-optimized fonts

## Color System

### Core Palette
```css
:root {
  /* Primary - Deep Blue (Trust, Authority) */
  --primary-900: #1e3a5f;
  --primary-800: #234b7a;
  --primary-700: #2d5f99;
  
  /* Accent - Warm Sand/Terracotta (African Earth) */
  --accent-warm: #c4956a;
  --accent-terracotta: #b85c38;
  --accent-sand: #e8dcc4;
  
  /* Accent - Oasis Green (Natural/Growth) */
  --accent-green: #2d6a4f;
  --accent-teal: #40916c;
  
  /* Neutrals */
  --neutral-900: #141413;
  --neutral-700: #3d3d3d;
  --neutral-500: #6b6b6b;
  --neutral-200: #e5e5e5;
  --neutral-50: #fafaf9;
}
```

### Usage Rules
- Dominant: Deep blue for headers, CTAs, and trust elements
- Accent: Warm tones for highlights, hover states, and featured sections
- NEVER use: Purple gradients, generic blue (#0066cc), pure black (#000)
- Ensure WCAG AA contrast (4.5:1 minimum)

## Motion & Interaction

### Page Load
- Staggered fade-in reveals for sections (100-200ms delays)
- Hero text slides up with fade
- Images scale from 95% to 100% on load

### Scroll Animations
- Sections fade in when entering viewport
- Parallax subtle backgrounds (0.5x speed)
- Number counters animate on scroll

### Micro-interactions
- Buttons: Scale 1.02x on hover, color shift
- Cards: Subtle shadow lift on hover
- Links: Underline grows from left on hover
- Language switcher: Smooth background slide

### Implementation
```css
/* Staggered reveal */
.reveal { 
  opacity: 0; 
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible { 
  opacity: 1; 
  transform: translateY(0);
}

/* Button hover */
.btn-primary {
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(30, 58, 95, 0.3);
}
```

## Spatial Composition

### Layout Principles
- **Asymmetric grids**: Don't default to 3-equal-columns
- **Generous whitespace**: Sections need breathing room (80-120px padding)
- **Visual hierarchy**: One hero element per section
- **Grid-breaking**: Allow elements to overlap or extend beyond containers

### Section Patterns
- Hero: Full-width, bold statement, single CTA focus
- Features: Offset grid with varied card sizes
- Partners: Horizontal scroll or masonry layout
- CTA: Full-bleed color block with contrast

## Backgrounds & Texture

### Techniques
- Subtle grain overlays for organic feel
- Gradient meshes instead of solid colors
- Pattern backgrounds (geometric, subtle)
- Layered depths with shadows

### Examples
```css
/* Grain overlay */
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,...") repeat;
  opacity: 0.03;
  pointer-events: none;
}

/* Gradient mesh background */
.hero-bg {
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(45, 106, 79, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(196, 149, 106, 0.15) 0%, transparent 40%),
    linear-gradient(180deg, #fafaf9 0%, #fff 100%);
}
```

## Component Standards

### Buttons
- Rounded-full for primary CTAs (pill shape)
- Generous padding (16px 32px minimum)
- Clear hover/active states
- Icon + text combinations

### Cards
- Rounded corners (12-16px)
- Subtle shadows, stronger on hover
- Clear visual hierarchy within
- Consistent internal spacing

### Forms
- Large touch targets (48px height minimum)
- Clear focus states (not just outline)
- Inline validation feedback
- Proper label association

## Accessibility Requirements

1. **Skip link**: First focusable element
2. **ARIA landmarks**: `role="main"`, `role="navigation"`, `role="banner"`
3. **Focus indicators**: Visible and clear
4. **Color contrast**: WCAG AA minimum
5. **Motion**: Respect `prefers-reduced-motion`
6. **RTL**: Full support for Arabic layout

## Anti-Patterns (NEVER DO)

- ❌ Purple gradients on white backgrounds
- ❌ Generic stock photo aesthetics
- ❌ Centered-everything layouts
- ❌ Inter/Roboto/Arial as primary fonts
- ❌ Pure white (#fff) backgrounds without texture
- ❌ Cookie-cutter card grids
- ❌ Animations without purpose
- ❌ Low contrast text

## Quality Checklist

Before shipping, verify:
- [ ] Typography hierarchy is clear and distinctive
- [ ] Color palette is cohesive and on-brand
- [ ] Animations enhance, not distract
- [ ] Mobile experience is first-class
- [ ] RTL layout works perfectly for Arabic
- [ ] Accessibility standards met
- [ ] No generic "AI slop" patterns
- [ ] Performance is optimized (LCP < 2.5s)
```
