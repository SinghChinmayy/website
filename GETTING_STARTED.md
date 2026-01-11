# Getting Started 🚀

Welcome to your new portfolio website! This guide will help you get up and running in minutes.

## ✅ What's Already Done

Your portfolio website is fully set up with:
- ✅ Next.js 14 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ SEO optimization
- ✅ Clean, minimal design
- ✅ Hero section with CTA buttons
- ✅ Navigation bar

## 🏃 Quick Start

### 1. Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

You should see your portfolio with placeholder text!

### 2. Customize Your Information

**The fastest way to make it yours:**

1. Open `components/Hero.tsx`
2. Replace "Your Name" with your actual name (line 28)
3. Update "Computer Science Student" with your title (line 38)
4. Change the tagline to describe yourself (lines 48-50)
5. Save and watch it update automatically!

**For detailed customization, see [CUSTOMIZATION.md](./CUSTOMIZATION.md)**

### 3. Update Site Metadata

1. Open `app/layout.tsx`
2. Update the title, description, and author name (lines 16-19)
3. Save the file

### 4. Update Navigation

1. Open `components/Navigation.tsx`
2. Change "YN" to your initials (line 17)
3. Save the file

## 🎨 Your First Customizations

### Change the Main Button Links

In `components/Hero.tsx`, around line 58:

```typescript
// Change these href values:
<a href="#projects">View Projects</a>
<a href="mailto:your.email@example.com">Contact Me</a>
```

### Add Your Social Links

Add this code after the buttons in `components/Hero.tsx`:

```typescript
<div className="flex gap-6 pt-4">
  <a href="https://github.com/yourusername">GitHub</a>
  <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
</div>
```

## 📁 Project Structure

```
my-cursor-site/
├── app/
│   ├── layout.tsx       # Site metadata, fonts, root layout
│   ├── page.tsx         # Home page (imports Hero)
│   └── globals.css      # Global styles and colors
├── components/
│   ├── Hero.tsx         # Main hero section (CUSTOMIZE THIS!)
│   └── Navigation.tsx   # Top navigation bar
├── public/              # Put images here
├── README.md            # Full documentation
├── CUSTOMIZATION.md     # Detailed customization guide
└── package.json         # Dependencies
```

## 🛠️ Available Commands

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check code quality
```

## 🎯 Next Steps

Now that you have the basics running:

### Immediate (5 minutes)
- [ ] Replace "Your Name" with your actual name
- [ ] Update your title/role
- [ ] Write a personal tagline
- [ ] Update site metadata

### Short-term (30 minutes)
- [ ] Add your social media links (GitHub, LinkedIn)
- [ ] Update button links to point to your profiles
- [ ] Change navigation initials
- [ ] Add your photo (see CUSTOMIZATION.md)

### Long-term (expand your site)
- [ ] Add an About section
- [ ] Create a Projects showcase
- [ ] Add Skills/Technologies section
- [ ] Include Experience/Education
- [ ] Add a Contact form
- [ ] Deploy to Vercel or Netlify

## 📚 Documentation

- **[README.md](./README.md)** - Complete project documentation
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Detailed customization guide
- **This file** - Quick start guide

## 🆘 Need Help?

### Common Issues

**Q: Changes aren't showing up?**
A: The dev server should auto-reload. Try hard refreshing (Ctrl+Shift+R)

**Q: How do I change colors?**
A: See the "Color Customization" section in CUSTOMIZATION.md

**Q: How do I add more sections?**
A: See "Adding More Sections" in README.md

**Q: Build errors?**
A: Run `npm run build` to see detailed error messages

### Learning Resources

- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚀 Ready to Deploy?

Once you're happy with your customizations:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your site will be live in minutes.

---

**Happy coding! 🎉**

If you need help, check the documentation files or the learning resources above.
