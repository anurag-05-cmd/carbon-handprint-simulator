# Animation & Motion Guide

## 🎬 Animation Breakdown by Component

### Background Layer (`AnimatedBackground.tsx`)

#### Landscape Hills (SVG Paths)
```
Far Hills (opacity: 0.2)
├─ Duration: 6s
├─ Movement: Y-axis wave (-20px to +20px)
└─ Easing: easeInOut

Mid Hills (opacity: 0.35)
├─ Duration: 8s
├─ Movement: Y-axis wave (-20px to +20px)
└─ Easing: easeInOut

Front Hills (opacity: 0.5)
├─ Duration: 10s
├─ Movement: Y-axis wave (-10px to +10px)
└─ Easing: easeInOut
```

#### Falling Leaves (12 instances)
```
Each Leaf:
├─ Top Motion: -50px → 100vh (full height)
├─ Rotation: 0° → 720° (2 full rotations)
├─ Horizontal Drift: ±50px based on ID
├─ Duration: 8-12s (randomized)
├─ Opacity Fade: opacity → 50% → 0%
├─ Easing: easeIn
└─ Delay: 0-5s (randomized stagger)
```

#### Wind Particles (8 instances)
```
Each Particle:
├─ Horizontal Drift: -100% → +100% → -100%
├─ Vertical Position: Randomized start
├─ Opacity Pulse: 0.3 → 0.6 → 0.3
├─ Duration: 6-10s (randomized)
├─ Easing: easeInOut
└─ Infinite Loop: true
```

#### Footprints (2 trails)
```
Footprint 1 (left side):
├─ X Position: 0 → 30px → 0
├─ Opacity Pulse: 0.1 → 0.3 → 0.1
├─ Duration: 12s
├─ Delay: 0s
└─ Easing: easeInOut

Footprint 2 (right side):
├─ X Position: -30px → 0 → -30px
├─ Opacity Pulse: 0.05 → 0.2 → 0.05
├─ Duration: 14s
├─ Delay: 2s
└─ Easing: easeInOut
```

#### Sky Gradient
```
Sky Animation:
├─ Opacity: 0.5 → 0.7 → 0.5
├─ Duration: 8s
├─ Easing: easeInOut
└─ Infinite Loop: true
```

---

### Hero Section (`HeroSection.tsx` + `AnimatedFootprint.tsx`)

#### Animated Footprint Watermark
```
Container Animation:
├─ Y-Position: 0 → 6px → 0
├─ Opacity: 0.6 → 0.8 → 0.6
├─ Duration: 4s
└─ Easing: easeInOut

Heel Circle:
├─ Scale: 1 → 1.05 → 1
├─ Duration: 4s
└─ Easing: easeInOut

Each Toe (5 toes × staggered):
├─ Scale: 1 → 1.1 → 1
├─ Y-Position: 0 → 3px → 0
├─ Duration: 4s
├─ Easing: easeInOut
└─ Delay: 0-0.4s (per toe)
```

#### Main Counter
```
CO2 Value:
├─ Scale: 0.8 → 1
├─ Opacity: 0 → 1
├─ Duration: 0.3s
├─ Type: Spring (stiffness: 100)
└─ Trigger: On value change
```

#### Stat Boxes
```
On Hover:
├─ Scale: 1 → 1.05
├─ Transition: smooth
└─ Type: whileHover
```

---

### Action Cards (`ActionCard.tsx`)

#### Card Container
```
Initial State:
├─ Opacity: 0
├─ Y Position: 20px
└─ Scale: 0.95

Animate State:
├─ Opacity: 1
├─ Y Position: 0
├─ Scale: 1
├─ Duration: 0.3s
└─ Easing: default

On Hover:
├─ Scale: 1.02
└─ Type: whileHover

On Tap:
├─ Scale: 0.95
└─ Type: whileTap
```

#### Pulse Ring Button Effect
```
Ring Animation:
├─ Initial Scale: 1
├─ Expand To: 1.2
├─ Opacity: 1 → 0
├─ Duration: 1.5s
├─ Easing: easeOut
└─ Infinite Loop: true
```

---

### Growth Tree (`GrowthTreeSVG.tsx`)

#### Tree Sway Animation
```
Trunk & Foliage:
├─ Rotate Z: [0, -1.5°, 1.5°, -1°, 1°, 0°]
├─ Rotate X: [0, 2°, -2°, 0°]
├─ Duration: 6s
├─ Easing: easeInOut
└─ Infinite Loop: true
```

#### Foliage Growth
```
Top Circle (radius: 30px base):
├─ Radius Scale: base × normalized_scale
├─ Duration: spring animation
├─ Stiffness: 50
└─ No delay

Mid Circles (radius: 25px base):
├─ Radius Scale: base × normalized_scale
├─ Duration: spring animation
├─ Stiffness: 50
└─ Delay: 0.05s

Lower Circles (radius: 20px base):
├─ Radius Scale: base × normalized_scale
├─ Duration: spring animation
├─ Stiffness: 50
└─ Delay: 0.1s
```

#### Leaf Sparkles (3 instances)
```
Each Sparkle:
├─ Radius: 3px → 5px → 3px
├─ Opacity: 0.4 → 1 → 0.4
├─ Y-Position: 0 → -4px → 0
├─ Duration: 2.5s
├─ Easing: easeInOut
└─ Delay: 0 / 0.6s / 1.2s (staggered)
```

---

### Growth Tracker (`GrowthTracker.tsx`)

#### Progress Bar
```
Container:
├─ Initial Opacity: 0
├─ Animate Opacity: 1
├─ Scale: 0.95 → 1
└─ Duration: default spring

Progress Fill:
├─ Width: 0 → target%
├─ Duration: spring animation
├─ Type: Spring (stiffness: 50)
└─ Easing: spring physics
```

#### EVS Message
```
On Change:
├─ Opacity: 0 → 1
├─ Y Position: 10px → 0
├─ Duration: 0.3s
└─ Type: motion.div key change trigger
```

---

### Action History (`ActionHistory.tsx`)

#### List Entry Animation
```
New Item Appears:
├─ Initial Opacity: 0
├─ Initial X: -20px
├─ Initial Scale: 0.95
├─ Animate Opacity: 1
├─ Animate X: 0
├─ Animate Scale: 1
├─ Duration: instant (layout animation)
└─ Type: Spring (stiffness: 300, damping: 30)

Glow Effect:
├─ Box Shadow: 0 0 0 → 0 0 12px emerald → 0 0 0
├─ Duration: 0.6s
├─ Easing: easeOut
└─ Delay: entrance
```

#### List Exit Animation
```
Item Removal:
├─ Opacity: 1 → 0
├─ X Position: 0 → 20px
├─ Duration: instant (layout animation)
└─ Type: exit prop
```

#### Delete Button
```
On Hover:
├─ Scale: 1 → 1.1
└─ Type: whileHover

On Tap:
├─ Scale: 0.95
└─ Type: whileTap
```

---

## 🎯 Animation Performance Tips

### Optimization Strategies Used:
1. **GPU Acceleration**: Only animating `transform` and `opacity` properties
2. **Lazy Evaluation**: `useMemo` for leaf generation
3. **Hardware-Accelerated SVG**: Using `scaleY`, `scaleX` instead of width/height
4. **Infinite Loops**: Well-damped easing to prevent jank
5. **Stagger Delays**: Prevent simultaneous animations of multiple elements

### Frame Rate Targets:
- **60 FPS** for smooth animations on desktop
- **30 FPS** acceptable on mobile devices
- All animations use `easeInOut` or spring physics (avoid `linear`)

---

## 🎨 Animation Psychology

### Why These Animations?

- **Falling Leaves**: Evoke natural calm, seasonal cycle, gentle progress
- **Swaying Tree**: Subtle life/growth feeling, organic movement
- **Pulse Rings**: Draw attention to interactive elements, provide feedback
- **Glow Effect**: Reinforce achievement when actions are added
- **Footprint Trails**: Visualize the "handprint" concept, show environmental presence
- **Hill Breathing**: Create atmospheric depth and life to the background

All animations are:
- **Non-intrusive**: Never block user interaction
- **Meaningful**: Enhance understanding of impact
- **Performance-conscious**: Run smoothly on all devices
- **Rewarding**: Provide visual feedback for user actions

---

## 🔧 Tweaking Animations

### To Slow Down All Animations:
Increase `duration` values globally (e.g., 6s → 8s)

### To Speed Up:
Decrease `duration` and `stiffness` values

### To Add More Leaves:
In `AnimatedBackground.tsx`:
```javascript
Array.from({ length: 12 }, ...)  // Change 12 to 20, 30, etc.
```

### To Change Colors:
Modify `fill="currentColor"` and `className` values in animations

### To Disable Specific Animations:
Replace `animate={{...}}` with `animate={{}}` to disable
