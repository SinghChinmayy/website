# Portfolio Website - Complete Documentation

<div align="center">

**[Quick Start](#quick-start)** • **[Customization](#customization)** • **[Projects](#projects-system)** • **[Deployment](#deployment)** • **[Troubleshooting](#troubleshooting)**

</div>

---

## Table of Contents

- [Quick Start](#quick-start)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Customization](#customization)
  - [Personal Information](#1-personal-information)
  - [Site Metadata](#2-site-metadata)
  - [Navigation](#3-navigation)
  - [Colors & Styling](#4-colors--styling)
  - [Fonts](#5-fonts)
- [Projects System](#projects-system)
  - [Adding Projects](#adding-a-new-project)
  - [Field Reference](#project-field-reference)
  - [Examples](#project-examples)
- [Available Commands](#available-commands)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Learning Resources](#learning-resources)

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Clone and navigate
git clone <your-repo-url>
cd my-cursor-site

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

### First 5-Minute Setup

1. **Update your name**: Edit `components/Hero.tsx` line ~32
2. **Update your title**: Edit `components/Hero.tsx` line ~42
3. **Update tagline**: Edit `components/Hero.tsx` line ~52
4. **Update metadata**: Edit `app/layout.tsx` lines 16-24
5. **Update navigation**: Edit `components/Navigation.tsx` line 19

---

## Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 16.1.1 |
| **TypeScript** | Type safety | 5+ |
| **Tailwind CSS** | Styling | 4+ |
| **Framer Motion** | Animations | 12.25.0 |
| **gray-matter** | Parse project data | Latest |

**Features:**
- ✅ Server-side rendering
- ✅ Static generation
- ✅ Automatic dark mode
- ✅ Mobile-first responsive design
- ✅ SEO optimized
- ✅ Data-driven projects page

---

## Project Structure

```
my-cursor-site/
├── app/
│   ├── layout.tsx              # Root layout, metadata, Navigation
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── projects/
│       └── page.tsx            # Projects listing page
├── components/
│   ├── Hero.tsx                # Hero section (customize this!)
│   ├── Navigation.tsx          # Top navigation bar
│   ├── ProjectCard.tsx         # Individual project display
│   └── ProjectList.tsx         # Projects container
├── data/
│   └── projects.md             # Projects data (edit to add projects)
├── lib/
│   └── projects.ts             # Projects parser
├── public/
│   └── projects/               # Store project images here
└── package.json                # Dependencies
```

---

## Customization

### 1. Personal Information

**File:** `components/Hero.tsx`

```typescript
// Line ~32: Your name
<h1>Chinmay Singh</h1>

// Line ~42: Your title
<h2>Backend • Ops • AI/ML</h2>

// Line ~52: Your tagline
<p>I am a backend dev with interest in scalable and high performance infrastructure.</p>
```

### 2. Site Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your description here",
  keywords: ["Backend", "DevOps", "AI/ML"],
  authors: [{ name: "Your Name" }],
};
```

### 3. Navigation

**File:** `components/Navigation.tsx`

```typescript
// Line ~19: Update logo/initials
<a href="/">CS</a>

// Lines ~24-44: Update links
<a href="/">Home</a>
<a href="/projects">Projects</a>
<a href="#contact">Contact</a>
```

### 4. Colors & Styling

**File:** `app/globals.css`

```css
:root {
  --background: #ffffff;    /* Light mode background */
  --foreground: #171717;    /* Light mode text */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Dark mode background */
    --foreground: #ededed;  /* Dark mode text */
  }
}
```

**Component Colors** (Tailwind classes):
- Primary text: `text-gray-900 dark:text-white`
- Secondary text: `text-gray-600 dark:text-gray-400`
- Buttons: `bg-gray-900 dark:bg-white`
- Borders: `border-gray-900 dark:border-white`

### 5. Fonts

**File:** `app/layout.tsx`

Current fonts: Geist Sans (primary), Geist Mono (monospace)

To change:
```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

---

## Projects System

Your portfolio features a **data-driven projects page** where all projects are managed from a single markdown file.

### Adding a New Project

**File:** `data/projects.md`

Add a new project block:

```markdown
---
title: "Project Name"
description: "Brief description of what it does"
image: "/projects/image.jpg"
tech: ["React", "Node.js", "PostgreSQL"]
github: "https://github.com/username/repo"
demo: "https://demo.com"
youtube: "VIDEO_ID"
blog: "https://blog.com/post"
date: "2024-01"
---
```

Separate each project with `---` delimiters.

### Project Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Project name |
| `description` | string | ✅ Yes | Brief description |
| `image` | string | ❌ No | Path to image (`/projects/name.jpg`) |
| `tech` | array | ❌ No | Technologies used |
| `github` | string | ❌ No | GitHub repository URL |
| `demo` | string | ❌ No | Live demo URL |
| `youtube` | string | ❌ No | YouTube video ID |
| `blog` | string | ❌ No | Blog post URL |
| `date` | string | ❌ No | Date (YYYY-MM format) |

**Auto-Hide Feature:** Optional fields automatically hide if not provided!

### Project Examples

**Minimal Project:**
```markdown
---
title: "CLI Task Manager"
description: "Lightweight command-line task manager"
tech: ["Rust", "SQLite"]
github: "https://github.com/username/cli-tool"
date: "2023-10"
---
```

**Full-Featured Project:**
```markdown
---
title: "E-Commerce Platform"
description: "Full-stack e-commerce with real-time inventory"
image: "/projects/ecommerce.jpg"
tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"]
github: "https://github.com/username/ecommerce"
demo: "https://demo.vercel.app"
blog: "https://blog.com/building-ecommerce"
date: "2024-01"
---
```

**Project with Video:**
```markdown
---
title: "AI Chat Assistant"
description: "GPT-4 powered customer support chatbot"
tech: ["Python", "FastAPI", "OpenAI"]
github: "https://github.com/username/ai-bot"
youtube: "dQw4w9WgXcQ"
date: "2023-12"
---
```

### Adding Project Images

1. Add image to `public/projects/`
2. Reference as `/projects/your-image.jpg`
3. Recommended: 1200x630px (16:9 ratio), under 500KB

---

## Available Commands

```bash
# Development
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check code quality

# Git
git status       # Check changes
git add .        # Stage all changes
git commit -m "message"  # Commit changes
git restore .    # Revert all uncommitted changes
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! 🎉

Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

---

## Troubleshooting

### Common Issues

**Issue:** Changes not showing
- **Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Issue:** Build errors
- **Solution:** Run `npm run build` to see detailed errors
- Check for TypeScript errors
- Verify all imports are correct

**Issue:** Port 3000 already in use
- **Solution:** Kill the process or use different port
  ```bash
  npm run dev -- -p 3001
  ```

**Issue:** Projects not parsing
- **Solution:** Check `data/projects.md` format
- Ensure proper `---` delimiters between projects
- Verify YAML frontmatter syntax

**Issue:** Images not loading
- **Solution:** Verify images are in `public/projects/`
- Check file paths start with `/projects/`
- Ensure images exist with correct filenames

**Issue:** Navigation overlap
- **Solution:** Main content has `pt-16 sm:pt-20` padding-top
- Fixed navbar height is accounted for

### Revert to Last Commit

If something breaks:
```bash
git status              # Check what changed
git restore .           # Revert ALL changes
git restore <file>      # Revert specific file
```

### Check Build Locally

Before deploying:
```bash
npm run build           # Build production version
npm start               # Test production build
```

Visit `http://localhost:3000` to verify.

---

## Learning Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling reference
- [Framer Motion Docs](https://www.framer.com/motion/) - Animation library
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide

### Tutorials
- [Next.js Learn](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first) - Utility-first CSS
- [React Tutorial](https://react.dev/learn) - Learn React fundamentals

### Design Resources
- [Tailwind UI Components](https://tailwindui.com/components) - Pre-built components
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- [Google Fonts](https://fonts.google.com/) - Free web fonts

---

## Quick Reference Card

| Task | File | Line |
|------|------|------|
| Update name | `components/Hero.tsx` | ~32 |
| Update title | `components/Hero.tsx` | ~42 |
| Update tagline | `components/Hero.tsx` | ~52 |
| Update metadata | `app/layout.tsx` | 16-24 |
| Add project | `data/projects.md` | End of file |
| Change colors | `app/globals.css` | 3-20 |
| Update navigation | `components/Navigation.tsx` | 19-44 |

---

## Contributing

Feel free to fork and customize this project for your own use!

---

## License

This project is open source and available under the MIT License.

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[↑ Back to Top](#portfolio-website---complete-documentation)

</div>
