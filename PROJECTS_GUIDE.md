# Projects System Documentation

## Overview

Your portfolio now has a fully data-driven projects page! All project information is stored in a single Markdown file (`data/projects.md`), and the UI automatically adapts based on which fields are present.

## 📂 File Structure

```
my-cursor-site/
├── data/
│   └── projects.md          # Single source of truth for all projects
├── lib/
│   └── projects.ts          # Data parser and utilities
├── app/
│   └── projects/
│       └── page.tsx         # Projects listing page
├── components/
│   ├── ProjectCard.tsx      # Individual project display
│   └── ProjectList.tsx      # Projects container
└── public/
    └── projects/            # Store project images here
```

## 🎯 Adding a New Project

### Step 1: Edit `data/projects.md`

Add a new project block with frontmatter:

```markdown
---
title: "Your Project Name"
description: "A compelling description of what the project does and why it matters."
image: "/projects/your-image.jpg"
tech: ["React", "Node.js", "PostgreSQL"]
github: "https://github.com/username/repo"
demo: "https://your-demo.com"
youtube: "VIDEO_ID"
blog: "https://blog.com/your-post"
date: "2024-01"
---
```

### Step 2: (Optional) Add Project Image

If you included an `image` field:
1. Add your image to `public/projects/`
2. Reference it as `/projects/your-image.jpg`

### Step 3: Done!

The project will automatically appear on the `/projects` page, sorted by date (newest first).

## 📝 Field Reference

### Required Fields

- **title** (string): Project name
- **description** (string): Brief description of the project

### Optional Fields

All optional fields **automatically hide** if not present:

- **image** (string): Path to project image (e.g., `/projects/image.jpg`)
  - Displays as a large thumbnail on the left side
  - Supports local images from `public/` or external URLs

- **tech** (array): Technologies used
  - Displays as pills/badges below description
  - Example: `["React", "TypeScript", "Node.js"]`

- **github** (string): GitHub repository URL
  - Shows "GitHub" button

- **demo** (string): Live demo URL
  - Shows "Live Demo" button

- **blog** (string): Blog post URL
  - Shows "Read More" button

- **youtube** (string): YouTube video ID
  - Shows "▶ Watch Video" button
  - Click to expand and play embedded video
  - Example: For `https://youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ`

- **date** (string): Project date in YYYY-MM format
  - Displays as "January 2024"
  - Used for sorting (newest first)
  - Example: `"2024-01"` or `"2023-12"`

## 🎨 Examples

### Full-Featured Project

```markdown
---
title: "E-Commerce Platform"
description: "A full-stack e-commerce solution with real-time inventory management."
image: "/projects/ecommerce.jpg"
tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"]
github: "https://github.com/username/ecommerce"
demo: "https://demo.vercel.app"
blog: "https://blog.example.com/building-ecommerce"
date: "2024-01"
---
```

### Minimal Project

```markdown
---
title: "CLI Tool"
description: "A simple command-line utility for task management."
tech: ["Rust"]
github: "https://github.com/username/cli-tool"
date: "2023-10"
---
```

### Project with Video

```markdown
---
title: "AI Assistant"
description: "An intelligent chatbot powered by GPT-4."
tech: ["Python", "OpenAI API"]
github: "https://github.com/username/ai-bot"
youtube: "dQw4w9WgXcQ"
date: "2023-12"
---
```

## 🎯 Design Features

### Auto-Hide Logic

Components automatically hide when fields are missing:
- No image? → Card adjusts to full width
- No tech stack? → Pills section doesn't render
- No links? → Buttons section hidden
- No date? → Date text doesn't show

### YouTube Embeds

- **Click-to-load**: Video doesn't load until user clicks "Watch Video"
- **Privacy-friendly**: No tracking until user interaction
- **Responsive**: 16:9 aspect ratio on all screen sizes

### Styling

All components follow the site theme guidelines:
- Gray-scale colors only
- Consistent button styling
- Smooth animations (0.6s entrance)
- Mobile-responsive design
- Dark mode support

## 🔧 Technical Details

### Data Parsing

The `lib/projects.ts` file:
- Reads `data/projects.md` at build time
- Parses frontmatter using `gray-matter`
- Validates required fields
- Sorts by date (newest first)
- Generates slugs from titles

### Performance

- **Static Generation**: All projects pre-rendered at build time
- **Image Optimization**: Next.js `Image` component optimizes all images
- **Lazy Loading**: YouTube embeds load on demand

### TypeScript Types

```typescript
interface Project {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  youtube?: string;
  blog?: string;
  date?: string;
  slug: string;
}
```

## 📊 Current Projects

Your site currently has 5 sample projects demonstrating:
1. All fields (image, all links, tech, date)
2. YouTube embed
3. Minimal fields (title, description, tech, GitHub)
4. Various tech stacks
5. Different date formats

## 🚀 Tips

### Image Guidelines
- **Format**: JPG, PNG, or WebP
- **Size**: 1200x630px recommended (16:9 aspect ratio)
- **File size**: Keep under 500KB for fast loading
- **Location**: Store in `public/projects/`

### Writing Good Descriptions
- Keep it concise (1-2 sentences)
- Focus on impact and value
- Mention key features or achievements
- Use active voice

### Tech Stack
- List 3-6 main technologies
- Order by importance/prominence
- Use official names (e.g., "Next.js" not "NextJS")

### Date Format
- Use YYYY-MM format: `"2024-01"`
- Projects without dates appear last
- More recent projects appear first

## 🔄 Updating Projects

1. Edit `data/projects.md`
2. Save the file
3. Rebuild: `npm run build` (in production) or just refresh (in dev mode)
4. Changes appear immediately!

## ⚡ Quick Commands

```bash
# Development (auto-reload)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 📖 Next Steps

Your projects page is ready! You can:

1. Replace sample projects with your real projects
2. Add project images to `public/projects/`
3. Update GitHub links to your repositories
4. Add YouTube videos showcasing your work
5. Link to blog posts explaining your projects

## 🎉 That's It!

You now have a fully functional, data-driven projects page that's:
- Easy to update (just edit one markdown file)
- Flexible (optional fields auto-hide)
- Beautiful (follows your site theme)
- Fast (static generation + image optimization)
- Scalable (add unlimited projects)

---

**Happy showcasing!** 🚀
