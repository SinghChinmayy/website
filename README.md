# Portfolio Website

A modern, minimal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for Computer Science students and developers to showcase their work.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences
- **SEO Optimized**: Proper metadata and OpenGraph tags
- **Fast Performance**: Static generation for optimal loading speed
- **Clean Code**: Well-organized component structure

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-cursor-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### 1. Personal Information

Edit `components/Hero.tsx` to update your personal information:

```typescript
// Update your name (line 30)
<h1>Your Name</h1>

// Update your title (line 40)
<h2>Computer Science Student</h2>

// Update your tagline (line 50)
<p>Passionate about building elegant solutions...</p>
```

### 2. Metadata & SEO

Edit `app/layout.tsx` to update site metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your description here",
  keywords: ["Your", "Keywords"],
  authors: [{ name: "Your Name" }],
  // ... more metadata
};
```

### 3. Call-to-Action Buttons

Edit the button links in `components/Hero.tsx` (around line 60):

```typescript
// Update href to link to your sections or external links
<a href="#projects">View Projects</a>
<a href="#contact">Contact Me</a>
```

### 4. Colors & Styling

The site uses a minimal color palette. To customize:

**Global Colors**: Edit `app/globals.css`
```css
:root {
  --background: #ffffff;  /* Light mode background */
  --foreground: #171717;  /* Light mode text */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Dark mode background */
    --foreground: #ededed;  /* Dark mode text */
  }
}
```

**Component Colors**: Use Tailwind classes in components
- Text: `text-gray-900`, `text-gray-600`, etc.
- Background: `bg-gray-900`, `bg-white`, etc.
- Borders: `border-gray-900`, etc.

### 5. Fonts

The site uses Geist Sans and Geist Mono fonts. To change:

Edit `app/layout.tsx`:
```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

Then update the CSS variables in `app/globals.css`.

### 6. Adding More Sections

To add new sections (About, Projects, Skills, etc.):

1. Create a new component in `components/`:
```typescript
// components/About.tsx
export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20">
      {/* Your content */}
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:
```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
my-cursor-site/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── Hero.tsx         # Hero section component
├── public/              # Static assets
└── package.json         # Dependencies
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 🎯 Next Steps

Here are some ideas to expand your portfolio:

- [ ] Add an About section with your story
- [ ] Create a Projects section to showcase your work
- [ ] Add a Skills section with technologies you know
- [ ] Include an Experience/Education timeline
- [ ] Add a Contact form with email integration
- [ ] Include social media links (GitHub, LinkedIn, Twitter)
- [ ] Add a blog section for articles
- [ ] Include animations on scroll
- [ ] Add a resume download button

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

Built with ❤️ using Next.js
