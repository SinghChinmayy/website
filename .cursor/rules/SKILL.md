---
alwaysApply: false
---
# Site Theme Guidelines

This document defines the design system and theme guidelines for Chinmay Singh's portfolio website. **All components must follow these guidelines consistently.**

## Design Philosophy

**Minimal & Clean**: Focus on typography, generous white space, and subtle interactions. The design is bold yet restrained, professional yet approachable.

## Color Palette

### Light Mode
- **Background**: `#ffffff` (white)
- **Foreground/Text**: `#171717` (near-black)
- **Primary**: `gray-900` (#171717)
- **Secondary Text**: `gray-600` (#52525b)
- **Muted Text**: `gray-400` (#a1a1aa)

### Dark Mode
- **Background**: `#0a0a0a` (near-black)
- **Foreground/Text**: `#ededed` (off-white)
- **Primary**: `white` (#ffffff)
- **Secondary Text**: `gray-400` (#a1a1aa)
- **Muted Text**: `gray-600` (#52525b)

### Usage Rules
- **Primary content** (headings, important text): `text-gray-900 dark:text-white`
- **Secondary content** (descriptions, body text): `text-gray-600 dark:text-gray-400`
- **Buttons/CTAs**: `bg-gray-900 dark:bg-white` with inverted text
- **Borders**: Always use `border-gray-900 dark:border-white` for consistency
- **Selection**: Dark background in light mode, light background in dark mode

## Typography

### Font Family
- **Primary Font**: Geist Sans (variable: `--font-geist-sans`)
- **Monospace Font**: Geist Mono (variable: `--font-geist-mono`)
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Font Sizes (Mobile → Desktop)
- **H1 (Name)**: `text-5xl md:text-7xl lg:text-8xl` (48px → 72px → 96px)
- **H2 (Title)**: `text-3xl md:text-4xl lg:text-5xl` (30px → 36px → 48px)
- **Body Large** (tagline): `text-xl md:text-2xl` (20px → 24px)
- **Body** (descriptions): `text-lg md:text-xl` (18px → 20px)
- **Navigation**: `text-xl` for logo, `text-base` for links

### Font Weights
- **Headings**: `font-bold` (700)
- **Body/Navigation**: `font-medium` (500)
- **Regular text**: default (400)

### Line Height
- **Headings**: `leading-tight` (prevents overlapping on large text)
- **Body text**: `leading-relaxed` (improves readability)

### Tracking
- **Large headings**: `tracking-tight` (tighter letter spacing)
- **Default**: No custom tracking

## Spacing System

### Padding (Sections)
- **Section vertical**: `py-20` (80px)
- **Section horizontal**: `px-6` (24px)
- **Container max-width**: `max-w-4xl` (768px) for content, `max-w-6xl` (1152px) for navigation

### Margins Between Elements
- **Greeting to Name**: `mb-4` (16px)
- **Name to Title**: `mb-6` (24px)
- **Title to Description**: `mb-8` (32px)
- **Description to Buttons**: `mb-10` (40px)
- **Base spacing**: `space-y-6` in containers

### Button Spacing
- **Internal padding**: `px-8 py-4` (32px horizontal, 16px vertical)
- **Top margin**: `pt-8` (32px)
- **Bottom margin**: `pb-4` (16px)
- **Side padding**: `px-4 sm:px-0` (mobile padding, none on desktop)
- **Gap between buttons**: `gap-4` (16px)

## Components

### Buttons
**Style**: Solid, bold, identical appearance
```
className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white"
```

**Rules**:
- Always have 2px border matching background color
- Rounded corners: `rounded-lg`
- Hover state slightly lighter: `hover:bg-gray-800 dark:hover:bg-gray-100`
- Transition duration: `duration-200`
- Full width on mobile: `flex-col sm:flex-row`

### Navigation
**Style**: Fixed top bar, minimal, semi-transparent
```
className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
```

**Logo**: Bold, large text with opacity hover
**Links**: Medium weight, color transition on hover

### Links
- **Default state**: `text-gray-600 dark:text-gray-400`
- **Hover state**: `hover:text-gray-900 dark:hover:text-white`
- **Transition**: `transition-colors` or `transition-opacity`

## Animations

### Animation Library
- **Use**: Framer Motion for all animations
- **Import**: `'use client'` directive required at top of file

### Standard Animation Pattern
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: [stagger], duration: 0.6 }}
```

### Timing
- **Duration**: `0.6s` (600ms) for entrance animations
- **Stagger delays**: 0.2s, 0.3s, 0.4s, 0.5s, 0.6s
- **Hover transitions**: `duration-200` (200ms)
- **All transitions**: `transition-all` for multi-property changes

### Animation Types
- **Fade in**: `opacity: 0 → 1`
- **Slide up**: `y: 20 → 0`
- **Navigation**: `y: -20 → 0` (slides down)

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px

### Mobile-First Approach
Always design for mobile first, then scale up:
```
text-xl md:text-2xl lg:text-3xl
```

### Layout Changes
- **Buttons**: Stack vertically on mobile (`flex-col`), horizontal on desktop (`sm:flex-row`)
- **Navigation**: Same on all sizes (no hamburger menu)
- **Padding**: Reduce horizontal padding on mobile if needed

## Accessibility

### Required Practices
- Semantic HTML: `<section>`, `<nav>`, `<h1>`, `<h2>`, `<p>`
- Alt text for images
- Proper heading hierarchy (H1 → H2 → H3)
- Focus states for interactive elements
- ARIA labels where needed

### Text Contrast
- Gray-900 on white: ✓ WCAG AAA
- Gray-600 on white: ✓ WCAG AA
- White on gray-900: ✓ WCAG AAA

## CSS/Tailwind Guidelines

### Class Order Convention
1. Layout (display, position, flex/grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Interactions (hover, transition)
6. Responsive modifiers (md:, lg:)
7. Dark mode modifiers (dark:)

### Example
```
className="flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
```

## File Organization

### Client Components
- All components using animations or hooks need `'use client'` directive
- Place at the very top of the file

### Component Structure
```typescript
'use client';

import { motion } from 'framer-motion';

export default function ComponentName() {
  return (
    <section className="...">
      <motion.div>
        {/* Content */}
      </motion.div>
    </section>
  );
}
```

## Don'ts

❌ **Never** use colors outside the gray scale (900, 600, 400, 50)  
❌ **Never** use different border styles (always 2px solid)  
❌ **Never** use box-shadows (keep it flat)  
❌ **Never** use gradients  
❌ **Never** forget dark mode variants  
❌ **Never** use inconsistent animation durations  
❌ **Never** forget responsive breakpoints  
❌ **Never** use different button styles  
❌ **Never** add custom colors without updating this guide  

## Do's

✅ **Always** include dark mode classes  
✅ **Always** use Framer Motion for animations  
✅ **Always** follow the spacing system  
✅ **Always** maintain consistent timing (0.6s entrance, 0.2s hover)  
✅ **Always** use mobile-first responsive design  
✅ **Always** test in both light and dark modes  
✅ **Always** use semantic HTML  
✅ **Always** add `leading-tight` to large headings  
✅ **Always** match button styles exactly (all CTAs look the same)  

## Quick Reference

### Most Common Classes
- **Section**: `min-h-screen flex items-center justify-center px-6 py-20`
- **Container**: `max-w-4xl w-full`
- **Button**: `px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white`
- **H1**: `text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight`
- **Body Text**: `text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed`
- **Link**: `text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors`

---

**When in doubt, reference existing components (Hero.tsx, Navigation.tsx) for patterns and consistency.**
