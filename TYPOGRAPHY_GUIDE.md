# Typography System - Premium Eco-Modern Design

## Premium Font Stack

The Carbon Handprint Simulator uses a carefully curated typography system featuring Plus Jakarta Sans, the font of choice for modern sustainability and eco-tech brands.

### Font Stack Overview

**Sans-Serif (Body Text & UI):** Plus Jakarta Sans
- **Why This Font?** Used by leading eco-tech and sustainability brands worldwide
- Modern geometric design with subtle organic curves that evoke natural forms
- Conveys innovation, balance, and environmental consciousness
- Exceptional readability at all sizes and weights
- Geometric precision suggests equilibrium and sustainability
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- Used for all body copy, buttons, cards, navigation, and UI elements

**Serif (Headings & Emphasis):** Crimson Text
- **Why This Font?** Classical elegance with modern sensibility
- Elegant, warm serif that adds literary quality to headings
- Natural, earthy aesthetic that complements environmental themes
- Exceptional pairing with Plus Jakarta Sans for visual hierarchy
- Weights: 400 (Regular), 600 (SemiBold)
- Used for page titles, section headings, and important callouts

**Monospace (Code/Data):** JetBrains Mono
- Professional monospace font for technical elements and data displays
- Clean, modern appearance with excellent clarity
- Weights: 400 (Regular), 600 (SemiBold)
- Used in technical references and status indicators

### CSS Font Configuration

```css
@theme inline {
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-serif: 'Crimson Text', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

All fonts are loaded via Next.js Google Fonts with proper system font fallbacks for reliability.

## Footer Enhancement

The footer now features a distinctive dark background for excellent visibility and clear separation from the main content.

### Footer Design Elements

**Background:**
- Gradient background: `from-slate-900 via-slate-800 to-slate-900`
- Shadow-2xl for depth and prominence
- Decorative gradient accent bar at the top (emerald-500 → sage-400 → emerald-500)

**Content Structure:**
- Two-column layout (single column on mobile) with generous spacing
- **Left Column:** Project information and UN SDG 13 description
- **Right Column:** Team credits from Department of CSE (IoT) with all 6 creators listed

**Visual Hierarchy:**
- White text on dark background for maximum contrast
- Emerald-400 accents for icons and bullet points
- Slate-300/400 for secondary text
- Bold, uppercase section headers with letter-spacing

**Interactive Elements:**
- Team member names have hover effects (border color transitions)
- Smooth entrance animations with staggered timing for each team member
- Gradient divider line separating sections

### Color Palette Used in Footer

- Background: `bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900`
- Text Primary: `text-white`
- Text Secondary: `text-slate-300`
- Text Tertiary: `text-slate-400`
- Accents: `bg-emerald-400`, `bg-emerald-500`, `text-emerald-400`
- Dividers: `border-slate-700` with hover effects

## Design Philosophy

Plus Jakarta Sans has become the preferred font for environmental and sustainability-focused projects because it:

1. **Sustainability Signal:** Recognized as the font of modern eco-tech brands
2. **Visual Balance:** Geometric qualities suggest equilibrium and harmony with nature
3. **Organic Warmth:** Subtle curves evoke natural forms without being whimsical
4. **Professional Trust:** Modern yet timeless, conveying expertise and credibility
5. **Global Readability:** Excellent across all sizes and digital platforms
6. **Technical Clarity:** Clean letterforms work for data visualization and metrics

The pairing with Crimson Text adds literary warmth and timeless elegance, creating a sophisticated, premium feel while maintaining the environmental focus.

## Typography Hierarchy

### Page & Section Titles
- Font: Crimson Text 600
- Size: 2.5rem (h1), 2rem (h2), tracking-tight
- Usage: Main headings and important section titles

### Card Headings
- Font: Plus Jakarta Sans 700
- Size: 1.25rem-1.5rem
- Usage: Subsection titles and card headers

### Body Text
- Font: Plus Jakarta Sans 400
- Size: 1rem (16px) with line-height 1.5rem (24px)
- Color: Slate-900 or slate-700 depending on context
- Usage: Main content, descriptions, explanations

### Small Text & Labels
- Font: Plus Jakarta Sans 400-500
- Size: 0.875rem-0.75rem (14px-12px)
- Usage: Labels, captions, metadata

### Buttons & CTAs
- Font: Plus Jakarta Sans 600-700
- Size: 0.875rem-1rem (14px-16px)
- Letter-spacing: 0.5px-1px
- Usage: Action buttons, interactive elements

## Responsive Typography

All fonts scale responsively for optimal readability:
- **Mobile:** Base sizes optimized for 16px minimum (accessibility standard)
- **Tablet:** Increased heading sizes (md: breakpoint scaling)
- **Desktop:** Full hierarchy with generous letter-spacing and line-height

Touch targets maintain minimum 44px height for accessibility.

## Browser Compatibility & Performance

Fonts are served via Google Fonts with intelligent fallbacks:
- **Plus Jakarta Sans** → system-ui, -apple-system, sans-serif
- **Crimson Text** → Georgia, serif
- **JetBrains Mono** → monospace

System fallbacks ensure proper rendering even if Google Fonts is unavailable, and Latin-subset loading optimizes performance with zero Cumulative Layout Shift (CLS).

## Why This Typography Works for Environmental Design

The combination of Plus Jakarta Sans and Crimson Text creates:
- **Modern Appeal:** Contemporary feel that resonates with eco-conscious audiences
- **Professional Credibility:** Sophisticated pairing trusted by sustainability brands
- **Natural Warmth:** Subtle organic qualities align with environmental values
- **Technical Clarity:** Excellent for displaying environmental metrics and data
- **Global Accessibility:** Supports international audiences caring about climate action
- **Timeless Quality:** Won't feel dated as sustainability movements evolve
