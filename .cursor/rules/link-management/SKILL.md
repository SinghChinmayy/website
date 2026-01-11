---
alwaysApply: true
---

# Link Management Standards

> **Purpose**: Ensure all external and social links are managed from a single, centralized data source across the entire project.

---

## Core Principle

**All external links MUST be stored in `data/links/links.md`**

Never hardcode external URLs (social media, contact, portfolio links) directly in components. This ensures:
- Single source of truth for all links
- Easy updates without touching component code
- Consistency across the entire website
- No broken or outdated links scattered in code

---

## Data Structure

### File: `data/links/links.md`

Store all links using frontmatter:

```markdown
---
social:
  github: "https://github.com/username"
  linkedin: "https://linkedin.com/in/username"
  x: "https://x.com/username"
  youtube: "https://youtube.com/@username"
  instagram: "https://instagram.com/username"
contact:
  email: "email@example.com"
  instagram: "https://instagram.com/username"
---
```

### Adding New Link Categories

When adding new types of links (e.g., blog, portfolio items):

1. Add the category to `data/links/links.md` frontmatter
2. Update the `Links` interface in `lib/links.ts`
3. Access via `getLinks()` in components

**Example:**

```markdown
---
social:
  github: "..."
portfolio:
  behance: "https://behance.net/username"
  dribbble: "https://dribbble.com/username"
---
```

```typescript
// Update lib/links.ts
export interface Links {
  social: { ... };
  portfolio: {
    behance?: string;
    dribbble?: string;
  };
}
```

---

## Usage in Components

### Accessing Links

Use the `getLinks()` function from `lib/links.ts`:

```typescript
import { getLinks } from '@/lib/links';

export default function MyComponent() {
  const links = getLinks();
  
  return (
    <div>
      {links.social.github && (
        <a href={links.social.github}>GitHub</a>
      )}
    </div>
  );
}
```

### Server Components vs Client Components

**Server Components** (default in Next.js App Router):
```typescript
import { getLinks } from '@/lib/links';

export default function ServerComponent() {
  const links = getLinks(); // ✅ Direct access
  // ...
}
```

**Client Components** (`'use client'`):
```typescript
'use client';

// Pass links as props from parent server component
interface Props {
  links: Links;
}

export default function ClientComponent({ links }: Props) {
  // Use links prop
}
```

---

## Conditional Rendering

Always check if a link exists before rendering:

```typescript
// ✅ Good - Only renders if link exists
{links.social.github && (
  <a href={links.social.github}>GitHub</a>
)}

// ❌ Bad - Will render even if undefined
<a href={links.social.github}>GitHub</a>
```

---

## Examples

### Footer Component

```typescript
import { getLinks } from '@/lib/links';

export default function Footer() {
  const links = getLinks();
  
  return (
    <footer>
      {/* Social Links */}
      <div>
        {links.social.github && <a href={links.social.github}>GitHub</a>}
        {links.social.linkedin && <a href={links.social.linkedin}>LinkedIn</a>}
        {links.social.x && <a href={links.social.x}>X</a>}
      </div>
    </footer>
  );
}
```

### Contact Section

```typescript
import { getLinks } from '@/lib/links';

export default function Contact() {
  const links = getLinks();
  
  return (
    <section>
      <h2>Get in Touch</h2>
      {links.contact.email && (
        <a href={`mailto:${links.contact.email}`}>Email</a>
      )}
      {links.contact.instagram && (
        <a href={links.contact.instagram}>Instagram</a>
      )}
    </section>
  );
}
```

---

## Rules Summary

### ✅ DO:

- Store all external links in `data/links/links.md`
- Use `getLinks()` from `lib/links.ts` to access links
- Check if link exists before rendering (`links.social.github && ...`)
- Add new link types to the frontmatter structure
- Update TypeScript interface when adding new categories

### ❌ DON'T:

- Hardcode social media URLs in components
- Hardcode contact URLs directly
- Skip conditional rendering checks
- Create duplicate link storage systems
- Store links in environment variables (use data/links/links.md)

---

## Architecture Pattern

This follows the same data-driven pattern as Projects and Logs:

```
Data Source (links.md) 
    ↓
Parser (lib/links.ts)
    ↓
Components (Footer, Contact, etc.)
```

**Benefits:**
- Centralized management
- Type safety via TypeScript interfaces
- Easy to update (one file change)
- Consistent across all components
- No risk of typos or outdated links

---

## Updating Links

To update any link:

1. Open `data/links/links.md`
2. Update the URL in frontmatter
3. Save - changes apply everywhere automatically
4. No component code changes needed

---

## Component Checklist

When creating components that need external links:

- [ ] Import `getLinks` from `@/lib/links`
- [ ] Call `getLinks()` in server component
- [ ] Use conditional rendering for all links
- [ ] Add proper aria-labels for accessibility
- [ ] Use `target="_blank"` and `rel="noopener noreferrer"` for external links
- [ ] Never hardcode URLs

---

**Last Updated:** January 2026  
**Applies To:** All components requiring external/social links
