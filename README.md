# 🌍 Personal Carbon Handprint Simulator

A modern, eco-focused dashboard built with **Next.js 16**, **React 19**, **Framer Motion**, and **Tailwind CSS** to track positive environmental impact aligned with **UN SDG 13: Climate Action**.

## ✨ Features

### Core Functionality
- **Client-Side State Management**: React `useState` & `useEffect` for action tracking
- **Persistent Storage**: All actions saved to localStorage for data persistence across sessions
- **Impact Calculation**: Hardcoded impact factors calculate total CO2 saved from user actions
- **Environmental Equivalencies (EVS)**: Converts CO2 savings into relatable metaphors:
  - **Tree-Days of Absorption**: How many days for one tree to absorb saved CO2
  - **Glacial Ice Prevented**: Liters of glacial melt prevented
  - **Environmental Timeline**: Years equivalent of average CO2 savings

### Visual Components

1. **Hero Section**
   - Large dynamic counter displaying total CO2 saved in kg
   - Real-time stat boxes (Action Count, Impact Level, Days Active)
   - Animated updates with spring transitions

2. **Quick Actions Grid**
   - Six action cards: Cycling, Composting, Renewable Energy, Public Transit, Plant Tree, Waste Reduction
   - Each card displays:
     - Impact factor (kg CO2 saved)
     - Unit of measurement
     - Hover tooltips with EVS science explanations
   - One-click "Add Action" buttons with smooth animations

3. **Growth Tracker**
   - Scalable SVG tree visualization that grows with CO2 savings
   - Animated progress bar (0-100% with 100kg CO2 benchmark)
   - Three EVS metric cards with icons and descriptions
   - Motivational messaging

4. **Action History**
   - Recent 10 actions displayed with timestamps
   - Undo functionality (remove actions)
   - Time-ago labels (e.g., "5m ago", "2h ago")
   - Smooth layout animations

## 🎨 Design System

### Color Palette
- **Emerald-50 to Emerald-900**: Primary green accent
- **Slate-50 to Slate-900**: Dark, neutral base
- **Sage-50 to Sage-900**: Secondary green accent
- **Glassmorphism**: 20% opacity white overlays with backdrop blur

### Typography
- **Font**: Geist (sans-serif)
- **Headings**: Bold, tracking-wide uppercase for metadata
- **Body**: Regular weight, 1.5 line height

### Responsive Design
- Mobile-first approach
- Tablet: 2-column action grid
- Desktop: 3-column layout (2 cols for content, 1 for summary)

## 📊 Impact Constants

```javascript
const IMPACT_CONSTANTS = {
  cycling: 0.12,           // kg CO2 saved per 1km
  composting: 0.5,         // kg CO2 saved per 1kg
  renewable: 0.45,         // kg CO2 saved per 1 kWh
  publicTransport: 0.08,   // kg CO2 saved per 1km
  plantTree: 20,           // kg CO2 saved per tree/year
  wasteReduction: 0.3,     // kg CO2 saved per 1kg
};
```

## 🔧 Technical Stack

- **Framework**: Next.js 16 (App Router)
- **UI Framework**: React 19.2
- **Animations**: Framer Motion 11
- **Styling**: Tailwind CSS 4.2 with custom tokens
- **Icons**: Lucide React
- **State**: React hooks + localStorage
- **Deployment**: Vercel (ready for production)

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Main dashboard page (Client component)
└── globals.css             # Theme tokens & global styles

components/
├── HeroSection.tsx         # Top counter & stats
├── ActionCards.tsx         # 6-card grid wrapper
├── ActionCard.tsx          # Individual action card
├── GrowthTracker.tsx       # Tree + EVS metrics
├── GrowthTreeSVG.tsx       # Animated SVG tree
├── ActionHistory.tsx       # Recent actions log
└── ui/                     # shadcn/ui components
    └── tooltip.tsx         # For impact tooltips
```

## 🚀 Getting Started

### Installation

```bash
# Clone and install
git clone <your-repo>
cd carbon-handprint-simulator
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## 💡 How It Works

1. **User clicks "Add Action"** → New CarbonAction object created with type & timestamp
2. **Action stored in React state** → Component re-renders with updated CO2 total
3. **State synced to localStorage** → Data persists on page refresh
4. **Calculations trigger updates**:
   - Total CO2 = sum of all action impact factors
   - EVS metaphors = CO2 totals converted to environmental equivalencies
   - Tree scale = 0.5 + (totalCO2 / 20), max 2x
5. **Animations play** on new actions (Framer Motion layout transitions)

## 🌱 Environmental Science Notes

- **Tree Absorption**: ~20kg CO2/year per mature tree (0.055kg/day)
- **Cycling**: 1km by bike avoids 0.12kg CO2 vs driving
- **Public Transit**: 8x more efficient than personal vehicles
- **Composting**: Prevents methane emissions (CO2e) from decomposition
- **Glacial Ice**: ~4.5L of glacial melt prevented per 1kg CO2 avoided

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## 🔐 Privacy

- All data stored locally in browser (`localStorage`)
- No external API calls
- No tracking or analytics by default
- No personal data collection

## 🎯 UN SDG 13 Alignment

**Climate Action**: This simulator empowers individual users to:
- Track measurable environmental contributions
- Understand carbon impact equivalencies
- Celebrate sustainable behavior change
- Build habits toward climate goals

## 📄 License

Created with ❤️ for climate action.

---

**Built with v0 by Vercel** | Next.js 16 | React 19 | Tailwind CSS 4 | Framer Motion
