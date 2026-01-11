---
alwaysApply: false
description: Standards for designing and implementing consistent, high-quality frontend user interfaces and experiences for this project
---

# Site Theme Guidelines

This document defines the design system and theme guidelines for Chinmay Singh's portfolio website. **All components must follow these guidelines consistently.**

---

## Design Philosophy

**Minimal & Clean**: Focus on typography, generous white space, and subtle interactions.  
The design is bold yet restrained, professional yet approachable.  
Content clarity and structure always take priority over decoration.

---

## Layout Principles

- Single-column, content-centered layout by default
- Mobile-first design; scale up progressively
- Avoid multi-column grids unless content explicitly requires it
- Pages should read top-to-bottom like documentation
- Spacing communicates hierarchy, not shadows or visual noise
- Layout decisions should feel deliberate, calm, and engineering-driven

---

## Color Palette

### Light Mode
- **Background**: `#ffffff`
- **Foreground/Text**: `#171717`
- **Primary**: `gray-900` (`#171717`)
- **Secondary Text**: `gray-600` (`#52525b`)
- **Muted Text**: `gray-400` (`#a1a1aa`)

### Dark Mode
- **Background**: `#0a0a0a`
- **Foreground/Text**: `#ededed`
- **Primary**: `white` (`#ffffff`)
- **Secondary Text**: `gray-400` (`#a1a1aa`)
- **Muted Text**: `gray-600` (`#52525b`)

### Usage Rules
- **Primary content**: `text-gray-900 dark:text-white`
- **Secondary content**: `text-gray-600 dark:text-gray-400`
- **Buttons/CTAs**: `bg-gray-900 dark:bg-white` with inverted text
- **Borders (default)**: `border-gray-900 dark:border-white`
- **Borders (subtle dividers)**: `border-gray-600 dark:border-gray-400` when hierarchy requires it
- **Selection**: Dark background in light mode, light background in dark mode

---

## Typography

### Font Family
- **Primary**: Geist Sans (`--font-geist-sans`)
- **Monospace**: Geist Mono (`--font-geist-mono`)
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Font Sizes (Mobile → Desktop)
- **H1**: `text-5xl md:text-7xl lg:text-8xl`
- **H2**: `text-3xl md:text-4xl lg:text-5xl`
- **Body Large**: `text-xl md:text-2xl`
- **Body**: `text-lg md:text-xl`
- **Navigation**: `text-xl` (logo), `text-base` (links)

### Font Weights
- **Headings**: `font-bold`
- **Body / Navigation**: `font-medium`
- **Regular text**: default

### Line Height
- **Headings**: `leading-tight`
- **Body**: `leading-relaxed`

### Tracking
- **Large headings**: `tracking-tight`
- **Default**: no custom tracking

---

## Spacing System

### Spacing Scale (Tailwind Default)
Based on 0.25rem (4px) increments:
- `0`: 0px
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `10`: 2.5rem (40px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)

### Sections
- **Vertical padding**: `py-20` (80px) - Consistent across all page sections
- **Horizontal padding**: `px-6` (24px) - Matches on mobile, can increase on larger screens
- **Content container**: `max-w-4xl` (896px) - For main content
- **Navigation container**: `max-w-6xl` (1152px) - For header/footer
- **Section gap**: `space-y-20` or `mb-20` between major sections

### Vertical Rhythm
Context-specific spacing for homepage hero:
- Greeting → Name: `mb-4` (16px)
- Name → Title: `mb-6` (24px)
- Title → Description: `mb-8` (32px)
- Description → Buttons: `mb-10` (40px)

General content spacing:
- Between paragraphs: `space-y-6` (24px)
- Between headings and content: `mb-4` (16px)
- Between sections: `mb-12` or `mb-16` (48-64px)

### Component Spacing

#### Buttons
- **Internal padding**: `px-8 py-4` (large), `px-6 py-3` (medium), `px-4 py-2` (small)
- **Gap between buttons**: `gap-4` (16px)
- **Layout**: Stack vertically on mobile (`flex-col`), horizontal on desktop (`md:flex-row`)

#### Cards
- **Internal padding**: `p-6` (24px)
- **Gap between cards**: `gap-6` or `gap-8` (24-32px)
- **Margin bottom for elements inside**: `mb-4` (16px)

#### Forms
- **Label to input**: `mb-2` (8px)
- **Input to input**: `space-y-4` (16px)
- **Form to button**: `mt-6` (24px)

---

## Breakpoints

Following Tailwind's default breakpoint system:

- **sm**: `640px` - Small devices (landscape phones)
- **md**: `768px` - Medium devices (tablets)
- **lg**: `1024px` - Large devices (desktops)
- **xl**: `1280px` - Extra large devices
- **2xl**: `1536px` - 2X large devices

**Usage**: Always design mobile-first. Apply breakpoint prefixes for larger screens (`md:`, `lg:`, etc.)

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white disabled:opacity-50 disabled:cursor-not-allowed">
  Button Text
</button>
```

#### Secondary/Ghost Button
```tsx
<button className="px-8 py-4 bg-transparent text-gray-900 dark:text-white rounded-lg font-medium text-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white disabled:opacity-50 disabled:cursor-not-allowed">
  Button Text
</button>
```

#### Button States
- **Default**: Full opacity, visible border
- **Hover**: Slightly darker/lighter background, smooth transition
- **Focus**: Ring outline for keyboard navigation (2px offset)
- **Active**: No specific active state (rely on hover)
- **Disabled**: 50% opacity, cursor not-allowed

#### Button Sizes
- **Large** (default): `px-8 py-4 text-lg`
- **Medium**: `px-6 py-3 text-base`
- **Small**: `px-4 py-2 text-sm`

#### Touch Targets
- Minimum size: 44x44px for mobile touch targets
- Buttons naturally meet this with `py-4` padding

---

### Links

#### Standard Link
```tsx
<a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white rounded-sm">
  Link Text
</a>
```

#### Navigation Link
```tsx
<a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white rounded-sm px-1">
  Nav Link
</a>
```

#### Link States
- **Default**: Primary text color
- **Hover**: Fades to secondary text color
- **Focus**: Ring outline for keyboard navigation
- **Visited**: No special styling (maintains consistency)
- **Active**: No special styling

---

### Navigation

#### Header Navigation
```tsx
<nav className="w-full py-6 px-6">
  <div className="max-w-6xl mx-auto flex items-center justify-between">
    <a href="/" className="text-xl font-medium text-gray-900 dark:text-white">
      Logo/Name
    </a>
    <div className="flex gap-6 items-center">
      <a href="/about" className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
        About
      </a>
      <a href="/projects" className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
        Projects
      </a>
    </div>
  </div>
</nav>
```

#### Navigation Principles
- Fixed max-width container (`max-w-6xl`)
- Horizontal padding matches page sections (`px-6`)
- Logo/name is text-based, not image (for accessibility)
- Links are equally weighted (no "active" state by design choice)
- Mobile: Consider hamburger menu if links exceed 3-4 items

---

### Cards

#### Project Card
```tsx
<article className="border-2 border-gray-900 dark:border-white rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-200 focus-within:ring-2 focus-within:ring-gray-900 dark:focus-within:ring-white focus-within:ring-offset-2">
  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
    Project Title
  </h3>
  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
    Project description goes here...
  </p>
  <a href="/project" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 font-medium">
    View Project →
  </a>
</article>
```

#### Card Principles
- 2px border matches button styling
- Subtle hover state (background change, not shadow)
- Semantic HTML (`<article>` for content cards)
- Focus-within for keyboard navigation
- Arrow (→) indicates clickable/actionable items

---

### Forms

#### Input Field
```tsx
<input 
  type="text"
  className="w-full px-4 py-3 border-2 border-gray-900 dark:border-white rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
  placeholder="Enter text..."
/>
```

#### Textarea
```tsx
<textarea 
  className="w-full px-4 py-3 border-2 border-gray-900 dark:border-white rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium resize-vertical min-h-32"
  placeholder="Enter text..."
/>
```

#### Label
```tsx
<label className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
  Label Text
</label>
```

#### Form Principles
- Always include labels (visible or `aria-label`)
- Maintain 2px border consistency
- Clear focus states for accessibility
- Placeholder text is muted but readable
- Disable state is visually obvious

---

## Accessibility

### Focus Management

#### Focus Indicators
- **Required**: All interactive elements must have visible focus states
- **Style**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white`
- **Offset**: `focus-visible:ring-offset-2` for visual separation
- **Rounded**: Add `rounded-sm` to links, `rounded-lg` to buttons/inputs

#### Skip Links
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-900 dark:focus:bg-white focus:text-white dark:focus:text-gray-900 focus:rounded-lg">
  Skip to main content
</a>
```

### Color Contrast

#### WCAG AA Compliance (Minimum)
- **Normal text**: 4.5:1 contrast ratio
- **Large text** (18pt+): 3:1 contrast ratio
- **UI components**: 3:1 contrast ratio

#### Current Palette Compliance
- ✅ `gray-900` on `white`: 17.9:1 (AAA)
- ✅ `white` on `#0a0a0a`: 19.6:1 (AAA)
- ✅ `gray-600` on `white`: 4.6:1 (AA)
- ✅ `gray-400` on `#0a0a0a`: 5.8:1 (AA)

### Semantic HTML

- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<article>` for independent content (blog posts, projects)
- Use `<section>` for thematic grouping
- Use `<header>` and `<footer>` appropriately
- Use headings in order (`h1` → `h2` → `h3`, no skipping)

### ARIA Labels

```tsx
// Icon buttons need labels
<button aria-label="Open menu">
  <MenuIcon />
</button>

// Images need alt text
<img src="project.jpg" alt="Screenshot of project dashboard" />

// Decorative images
<img src="decoration.svg" alt="" role="presentation" />

// Loading states
<button aria-busy="true" aria-label="Loading...">
  <Spinner />
</button>
```

### Keyboard Navigation

- **Tab**: Move forward through interactive elements
- **Shift + Tab**: Move backward through interactive elements
- **Enter**: Activate buttons and links
- **Space**: Activate buttons
- **Escape**: Close modals/dropdowns (if applicable)

#### Tab Order
- Follow natural DOM order (top to bottom, left to right)
- Never use positive `tabindex` values
- Use `tabindex="0"` for custom interactive elements
- Use `tabindex="-1"` for programmatically focusable elements

---

## Animations & Transitions

### Transition Timing

#### Default Duration
- **Quick interactions**: `duration-200` (hover, focus)
- **Page transitions**: `duration-300`
- **Large movements**: `duration-500`

#### Easing Functions
- **Default**: `ease-in-out` (Tailwind default)
- **Enter**: `ease-out` (elements appearing)
- **Exit**: `ease-in` (elements disappearing)

### Animation Principles

- **Subtle over flashy**: Animations should enhance, not distract
- **Purpose-driven**: Every animation should have a reason
- **Respect user preferences**: Honor `prefers-reduced-motion`

#### Reduced Motion Support
```tsx
<div className="transition-all duration-200 motion-reduce:transition-none">
  Content
</div>
```

### Common Patterns

#### Hover Transitions
```tsx
// Color changes
className="transition-colors duration-200"

// Background changes
className="transition-all duration-200"

// Transform changes
className="transition-transform duration-200 hover:scale-105"
```

#### Page Load Animations
```tsx
// Fade in
className="animate-in fade-in duration-500"

// Slide up
className="animate-in slide-in-from-bottom-4 duration-500"
```

---

## Performance Guidelines

### Image Optimization

#### Format Selection
- **Photos**: WebP with JPEG fallback
- **Graphics/Logos**: SVG when possible
- **Screenshots**: WebP or PNG

#### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

#### Sizing Strategy
- Define explicit `width` and `height` to prevent layout shift
- Use responsive sizes: `sizes="(max-width: 768px) 100vw, 800px"`
- Lazy load images below the fold (Next.js does this by default)

### Font Loading

#### Strategy: Swap
```tsx
// In layout.tsx or _app.tsx
import { GeistSans, GeistMono } from 'geist/font'

export const metadata = {
  // ...
}

<html className={`${GeistSans.variable} ${GeistMono.variable}`}>
```

#### Preload Critical Fonts
```tsx
// In <head>
<link
  rel="preload"
  href="/fonts/geist-sans.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### Code Splitting

- Use dynamic imports for heavy components
- Route-based splitting (Next.js does this automatically)
- Lazy load below-the-fold content

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### Bundle Size

- Keep first-load JS under 200KB (gzipped)
- Use `next/bundle-analyzer` to monitor bundle size
- Avoid importing entire libraries (use tree-shaking)

```tsx
// ❌ Bad
import _ from 'lodash'

// ✅ Good
import debounce from 'lodash/debounce'
```

---

## Icons & Images

### Icon System

#### Icon Size Scale
- **Small**: `w-4 h-4` (16px) - Inline with text
- **Medium**: `w-6 h-6` (24px) - Buttons, cards
- **Large**: `w-8 h-8` (32px) - Hero sections

#### Icon Styling
```tsx
<svg className="w-6 h-6 text-gray-900 dark:text-white" fill="currentColor">
  {/* ... */}
</svg>
```

#### Recommended Libraries
- **Lucide React**: Clean, consistent, tree-shakeable
- **Heroicons**: Tailwind-native icon set
- **Radix Icons**: Minimal and accessible

### Image Spacing

- **Hero images**: `mb-8` or `mb-10`
- **Content images**: `my-6`
- **Gallery images**: `gap-4` or `gap-6`

---

## Responsive Design Patterns

### Layout Shifts (Mobile → Desktop)

#### Stack → Horizontal
```tsx
<div className="flex flex-col md:flex-row gap-4">
  {/* Items stack on mobile, side-by-side on desktop */}
</div>
```

#### Center → Left-align
```tsx
<div className="text-center md:text-left">
  {/* Centered on mobile, left-aligned on desktop */}
</div>
```

#### Hidden → Visible
```tsx
<div className="hidden md:block">
  {/* Only shows on desktop */}
</div>
```

### Container Patterns

#### Full-width with max-width
```tsx
<section className="w-full px-6">
  <div className="max-w-4xl mx-auto">
    {/* Content */}
  </div>
</section>
```

#### Responsive padding
```tsx
<section className="px-6 md:px-8 lg:px-12">
  {/* Padding increases with screen size */}
</section>
```

---

## Testing Checklist

### Visual Testing
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on iOS Safari (different from desktop Safari)
- [ ] Test on Android Chrome
- [ ] Test with system dark mode on/off
- [ ] Test with different font sizes (browser zoom 150%, 200%)

### Accessibility Testing
- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (NVDA, VoiceOver, or JAWS)
- [ ] Verify color contrast with WebAIM checker
- [ ] Check heading hierarchy (use HeadingsMap extension)
- [ ] Verify all images have alt text
- [ ] Test with reduced motion enabled

### Performance Testing
- [ ] Lighthouse score > 90 on all metrics
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s

### Responsive Testing
- [ ] iPhone SE (375px width)
- [ ] iPhone 12/13/14 (390px width)
- [ ] iPad (768px width)
- [ ] Desktop (1024px+ width)
- [ ] Large desktop (1920px+ width)

---

## Common Patterns

### Loading States

```tsx
<button disabled className="relative">
  <span className="opacity-0">Button Text</span>
  <span className="absolute inset-0 flex items-center justify-center">
    <Spinner className="w-5 h-5" />
  </span>
</button>
```

### Error States

```tsx
<div className="border-2 border-red-600 dark:border-red-400 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
  <p className="text-red-600 dark:text-red-400 font-medium">
    Error message here
  </p>
</div>
```

### Empty States

```tsx
<div className="text-center py-20">
  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
    No projects found
  </p>
  <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium">
    Create your first project
  </button>
</div>
```

---

## Do's and Don'ts

### Do ✅
- Use semantic HTML
- Provide alt text for all images
- Test with keyboard navigation
- Maintain consistent spacing
- Use relative units (`rem`) for typography when appropriate
- Follow the defined color palette
- Keep animations subtle and purposeful
- Write descriptive link text (avoid "click here")

### Don't ❌
- Use color alone to convey information
- Remove focus indicators
- Use images for text content
- Create custom scrollbars (respect OS settings)
- Use `!important` in CSS (follow specificity rules)
- Animate layout properties (use `transform` and `opacity`)
- Skip heading levels
- Use generic link text

---

## Resources

### Design References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [HeadingsMap Browser Extension](https://chromewebstore.google.com/detail/headingsmap)

### Development Tools
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

---

## Changelog

### Version 1.1.0 (January 2026)
- Added accessibility guidelines section
- Added animation and transition guidelines
- Added performance optimization guidelines
- Added responsive design patterns
- Added testing checklist
- Added form components
- Added icon guidelines
- Added common patterns (loading, error, empty states)
- Fixed incomplete button component code block
- Added breakpoint definitions
- Expanded component library with variants and states

### Version 1.0.0 (Initial)
- Initial design system documentation
- Basic color palette
- Typography system
- Spacing guidelines
- Initial component patterns
