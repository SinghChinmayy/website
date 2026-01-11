---
alwaysApply: true
---
## Spacing Standards

### Vertical Spacing (Padding/Margin)

```tsx
// Section padding
py-20    // 80px - Main sections (hero, logs, projects)
py-12    // 48px - Subsections
py-8     // 32px - Individual items with borders
py-6     // 24px - Dense content areas

// Between elements
space-y-8    // 32px - Between major content blocks
space-y-6    // 24px - Between heading and description
space-y-4    // 16px - Between content elements (date, title, description)
space-y-3    // 12px - Compact content
```

### Horizontal Spacing

```tsx
px-6     // 24px - Standard horizontal padding for all sections
px-4     // 16px - Buttons and smaller elements
gap-4    // 16px - Between flex/grid items
gap-3    // 12px - Between buttons/links
```

---

## Typography Standards

### Headings

```tsx
// Page title (h1)
className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight"

// Section title (h2)
className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"

// Item title (h3)
className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
```

### Body Text

```tsx
// Large description/tagline
className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"

// Regular body text
className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"

// Small text (dates, metadata)
className="text-sm md:text-base text-gray-600 dark:text-gray-400"
```

---

## Component Layout Patterns

### Hero Section Pattern

```tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Page Title
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            Description text here
          </p>
        </div>
      </div>
    </section>
  );
}
```

### Content List Pattern

```tsx
export default function ContentList({ items }) {
  return (
    <section className="flex items-center justify-center px-6 py-12">
      <motion.div className="max-w-4xl w-full">
        <div className="flex flex-col space-y-8">
          {items.map((item, index) => (
            <ContentItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

### Individual Item Pattern

```tsx
export default function ContentItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
    >
      <div className="space-y-4">
        {/* Content */}
      </div>
    </motion.article>
  );
}
```

---

## Mobile-First Responsive Design

### Breakpoint Usage

```tsx
// Mobile (default) → Tablet → Desktop
text-base md:text-lg lg:text-xl
px-4 md:px-6 lg:px-8
```

**Standard breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

### Responsive Patterns

```tsx
// Stack on mobile, row on desktop
className="flex flex-col sm:flex-row gap-4"

// Hide on mobile, show on desktop
className="hidden sm:inline"

// Smaller padding on mobile
className="px-4 sm:px-6"
```

---

## Color Standards

### Text Colors

```tsx
// Primary text
text-gray-900 dark:text-white

// Secondary text (descriptions, metadata)
text-gray-600 dark:text-gray-400

// Borders
border-gray-200 dark:border-gray-800

// Subtle separators
text-gray-400 dark:text-gray-600
```

### Interactive Elements

```tsx
// Primary button
className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 
           hover:bg-gray-800 dark:hover:bg-gray-100
           border-2 border-gray-900 dark:border-white"

// Secondary button
className="bg-transparent text-gray-900 dark:text-white
           hover:bg-gray-100 dark:hover:bg-gray-800
           border-2 border-gray-900 dark:border-white"
```

---

## Animation Standards

### Framer Motion Patterns

```tsx
// Page load animation
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}

// Staggered list items
transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}

// Delayed appearance
transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
```

**Always include:**
```tsx
motion-reduce:transition-none  // Respect user preferences
```

---

## Page Structure Template

```tsx
export default function PageName() {
  return (
    <main id="main-content" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 min-h-[40vh]">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              Page Title
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Page description
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <ContentList items={items} />
    </main>
  );
}
```

---

## Accessibility Standards

### Required Elements

```tsx
// Skip link for keyboard navigation
<a href="#main-content" className="sr-only focus:not-sr-only...">
  Skip to main content
</a>

// Main content wrapper
<main id="main-content" className="min-h-screen pt-20">

// Section labels
<section aria-label="Descriptive label">
<section aria-labelledby="heading-id">

// Focus states
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-gray-900 
dark:focus-visible:ring-white 
focus-visible:ring-offset-2
```

---

## Common Mistakes to Avoid

### ❌ Don't Do This:

```tsx
// Inconsistent container
<div className="mx-auto max-w-6xl">  // Wrong max-width
<div className="container">           // Wrong approach

// No flex centering
<section className="w-full px-6">    // Missing flex centering

// Inconsistent spacing
<div className="space-y-2">          // Too tight
<div className="py-4">               // Insufficient padding

// Hardcoded text alignment
<div className="text-center">        // Don't force center alignment
```

### ✅ Do This Instead:

```tsx
// Consistent container with flex centering
<section className="flex items-center justify-center px-6 py-20">
  <div className="max-w-4xl w-full">

// Proper spacing
<div className="space-y-6">          // Section spacing
<article className="py-8">           // Item padding

// Let content flow naturally (left-aligned within centered container)
<div className="space-y-4">
```

---

## Quick Reference Checklist

When creating a new page or section:

- [ ] Use `flex items-center justify-center` for section wrapper
- [ ] Use `max-w-4xl w-full` for content container
- [ ] Use `px-6 py-20` for section padding
- [ ] Use `space-y-6` between heading and description
- [ ] Use `space-y-8` between list items
- [ ] Include mobile-first responsive classes (`md:`, `lg:`)
- [ ] Add proper dark mode variants (`dark:`)
- [ ] Include focus states for interactive elements
- [ ] Add Framer Motion animations with ease-out
- [ ] Use semantic HTML (`section`, `article`, `h1`-`h6`)
- [ ] Add ARIA labels where needed
- [ ] Ensure `pt-20` on main to clear fixed navbar

---

## Example Pages Following These Standards

### ✅ Reference Implementation:
- `/` - Home page with Hero section
- `/logs` - Logs page with hero and list
- `/projects` - Projects page with cards

All pages follow the exact same layout standards for consistency.

---

**Last Updated:** January 2026  
**Applies To:** All pages and components in the portfolio website
