# Tree Gallery - Dedicated Visualization Area

## Overview
The Tree Gallery is a dedicated full-width section specifically designed to showcase your growing tree and environmental impact in a clear, visible manner. It appears below the main grid layout and provides ample space for the tree to grow without being cut off.

## Key Features

### 1. **Large Expandable Container**
- Minimum height of 20rem (320px) that grows with content
- Gradient background (emerald to slate) to create a natural environment
- Glassmorphic card styling that matches the overall design theme
- Full-width layout for maximum visibility

### 2. **Properly Scaled Tree Display**
- Tree visualization is centered and can scale from 0.5x to 2x without overflow
- Plenty of vertical space ensures the tree is always fully visible
- Grows dynamically as you add more carbon-saving actions
- 6-second sway animation simulates natural wind movement

### 3. **Growth Indicators**
- **Real-time CO₂ Counter**: Shows exact kg of CO₂ saved below the tree
- **Growth Percentage**: Displays how much of maximum growth has been achieved
- **Progress Bar**: Visual indicator of growth from 0-100% with spring animation
- **Three Stats Cards**: Shows total impact, tree equivalents, and growth percentage

### 4. **Three Statistics Cards**
```
┌─────────────────┬──────────────┬──────────────┐
│  Total Impact   │ Trees Equiv.  │   Growth     │
│   24.5 kg CO₂   │   1.2 trees   │    60%       │
└─────────────────┴──────────────┴──────────────┘
```
- Each card has hover animations for interactivity
- Displays different metrics to reinforce environmental impact
- Uses color coding (emerald, sage, blue) for visual variety

## Layout Integration

### Page Structure
```
┌─────────────────────────────────────────────┐
│            Header & Title                   │
├─────────────────────────────────────────────┤
│  Hero + Actions (2/3) │ Tracker + History   │
│                       │ (1/3 column)        │
├─────────────────────────────────────────────┤
│        TREE GALLERY (Full Width)            │  ← NEW DEDICATED AREA
│    ┌─────────────────────────────────────┐  │
│    │                                     │  │
│    │        🌲 Animated Tree 🌲         │  │
│    │                                     │  │
│    │    Total: 24.5 kg | Growth: 60%   │  │
│    │                                     │  │
│    │   [Progress Bar ═════════════]     │  │
│    │                                     │  │
│    │  [Stats] [Stats] [Stats]          │  │
│    └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Responsive Behavior

### Mobile (< 768px)
- Takes full width with 1rem padding
- Tree scales down proportionally
- Stats cards stack in 3 columns
- All content remains visible

### Tablet (768px - 1024px)
- Full width with 1.5rem padding
- Tree maintains proper aspect ratio
- Cards display in 3-column grid
- Optimal viewing experience

### Desktop (> 1024px)
- Full width with 2rem padding
- Tree scales to maximum 2x size at max CO₂
- All elements properly spaced
- Stats cards side-by-side

## Animation Details

### Tree Animations
- **Sway**: Gentle rotation (±1.5°) over 6 seconds
- **Sparkles**: Three leaf elements twinkle with 0.6s stagger
- **Scale**: Grows smoothly from 0.5x to 2x as CO₂ accumulates

### Growth Progress
- **Progress Bar**: Spring animation (stiffness: 50) fills smoothly
- **Stat Cards**: Subtle hover scale (1.05x) for interactivity
- **Entry Animation**: Each card fades in with spring transition

## Component Props

```typescript
interface TreeGalleryProps {
  totalCO2: number; // kg of CO2 saved
}
```

## Color Scheme
- **Background**: Emerald-50/Slate-50 gradient
- **Border**: Emerald-200/30 with backdrop blur
- **Tree**: SVG green (#86efac)
- **Stats**: Emerald, Sage, Blue accent colors
- **Progress Bar**: Gradient from Emerald to Sage

## Why a Dedicated Gallery?

### Problem Solved
Previously, the tree was embedded in the GrowthTracker component on the right sidebar, which meant:
- Tree could be cut off when fully grown
- Limited space for large-scale visualization
- Not the focal point of the page

### Solution Benefits
- **Full Visibility**: Tree grows without any overflow or clipping
- **Primary Focus**: Dedicated section makes the tree the centerpiece
- **Better Feedback**: Users can see their impact growing clearly
- **Scalability**: Can accommodate future features like tree variations

## Integration with Other Components

### Data Flow
```
page.tsx (totalCO2 state)
    ↓
TreeGallery Component
    ↓
GrowthTreeSVG (visual tree)
    ├─ Renders SVG with scale prop
    ├─ Animates sway & sparkles
    └─ Responds to totalCO2 changes
```

### Independent from GrowthTracker
- GrowthTracker now focuses on EVS metaphors (tree-days, glacial ice)
- TreeGallery handles growth visualization
- Separation of concerns improves code maintainability

## Usage Examples

### Adding Actions
```
User clicks "Add Action" → totalCO2 increases → 
Tree grows → Progress bar fills → Stats update
```

### Tree Growth Milestones
- 0 kg: No tree (message: "Plant your first action")
- 1-10 kg: Seedling (0.5x - 1x scale)
- 10-20 kg: Young tree (1x - 1.5x scale)
- 20+ kg: Mature tree (1.5x - 2x scale, maxed out)

## Future Enhancements
- Different tree types based on action categories
- Seasonal variations (autumn leaves, snow)
- Multi-tree forest view for team impact
- Tree health bar based on action types
- Achievement badges for milestones
