# Typography & Footer Enhancement Guide

## Font Changes

The project now uses premium, modern fonts that provide a much more sophisticated and professional appearance compared to the generic Geist font family.

### Font Stack

**Sans-Serif (Body Text & UI):** Poppins
- A geometric, modern font perfect for interfaces and sustainability themes
- Used for all body copy, buttons, cards, and general UI
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Provides excellent readability and a contemporary feel

**Serif (Headings & Emphasis):** Merriweather
- A traditional, warm serif font for headlines and emphasis
- Adds sophistication and credibility to the project
- Weights: 300 (Light), 400 (Regular), 700 (Bold)
- Used in headings and decorative elements for contrast

**Monospace (Code/Data):** JetBrains Mono
- Professional monospace font for technical elements
- Clean, modern appearance for data displays
- Used in any code snippets or technical references

### CSS Font Configuration

```css
@theme inline {
  --font-sans: 'Poppins', system-ui, -apple-system, sans-serif;
  --font-serif: 'Merriweather', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

Fonts are loaded via Next.js Google Fonts with proper fallbacks for system fonts.

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

## Typography Usage Across Components

### Headings
- Main titles: Merriweather 700, large size, tracking-tight
- Section headers: Poppins 600-700, uppercase with tracking-wide
- Card titles: Poppins 600

### Body Text
- Default: Poppins 400, 14px-16px with leading-relaxed
- Small text: Poppins 400, 12px-14px
- Descriptions: Poppins 400-500, with good line-height

### Buttons & Interactive Elements
- Font: Poppins 500-600
- Size: 14px-16px
- Letter-spacing for emphasis on action buttons

## Responsive Typography

All fonts scale responsively:
- Mobile: Base sizes with proper touch targets (minimum 44px height)
- Tablet: Increased heading sizes for better hierarchy
- Desktop: Full-size hierarchy with generous spacing

## Browser Compatibility

Fonts are served via Google Fonts with system fallbacks:
- Poppins → system-ui, -apple-system, sans-serif
- Merriweather → Georgia, serif
- JetBrains Mono → monospace

Ensures proper rendering even if Google Fonts fails to load.
