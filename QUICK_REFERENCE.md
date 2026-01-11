# Quick Reference Card

## 🚀 Commands

```bash
npm run dev      # Start development (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check code quality
```

## 📝 Files to Customize

| File | What to Change | Line(s) |
|------|---------------|---------|
| `components/Hero.tsx` | Your name | ~28 |
| `components/Hero.tsx` | Your title | ~38 |
| `components/Hero.tsx` | Your tagline | ~48-50 |
| `components/Hero.tsx` | Button links | ~58-70 |
| `components/Navigation.tsx` | Your initials | ~17 |
| `app/layout.tsx` | Site title | ~16 |
| `app/layout.tsx` | Site description | ~17 |
| `app/layout.tsx` | Author name | ~19 |

## 🎨 Common Customizations

### Change Button Link
```typescript
// In components/Hero.tsx
<a href="https://github.com/yourusername">
```

### Add Social Links
```typescript
// After buttons in components/Hero.tsx
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

### Change Colors
```typescript
// Replace bg-gray-900 with:
bg-blue-600   // Blue
bg-purple-600 // Purple
bg-green-600  // Green
bg-red-600    // Red
```

### Add Your Photo
```typescript
// In components/Hero.tsx, add before your name:
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Your Name"
  width={150}
  height={150}
  className="rounded-full"
/>
```

## 📂 Where to Put Things

| Item | Location |
|------|----------|
| Images | `public/` folder |
| New components | `components/` folder |
| New pages | `app/` folder |
| Styles | `app/globals.css` |

## 🎯 5-Minute Setup

1. Run `npm run dev`
2. Open `components/Hero.tsx`
3. Replace "Your Name" (line ~28)
4. Replace "Computer Science Student" (line ~38)
5. Update tagline (lines ~48-50)
6. Save and check browser!

## 📚 Documentation

- **Start Here**: [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Customize**: [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Full Docs**: [README.md](./README.md)
- **Summary**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## 🆘 Quick Fixes

| Problem | Solution |
|---------|----------|
| Changes not showing | Hard refresh: Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac) |
| Build error | Run `npm run build` for details |
| Lint error | Run `npm run lint` to see issues |
| Port in use | Kill process or use different port: `npm run dev -- -p 3001` |

## 🌐 Deploy in 3 Steps

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository → Deploy!

## 💡 Pro Tips

- Save files to see instant updates
- Use Cmd/Ctrl + Click on imports to jump to files
- Check browser console for errors (F12)
- Test on mobile (browser dev tools)
- Commit changes regularly

## 🎨 Color Reference

### Tailwind Colors
```
gray-50, gray-100, ..., gray-900
blue-50, blue-100, ..., blue-900
purple-50, purple-100, ..., purple-900
green-50, green-100, ..., green-900
red-50, red-100, ..., red-900
```

### Text Sizes
```
text-sm, text-base, text-lg, text-xl
text-2xl, text-3xl, text-4xl, text-5xl
text-6xl, text-7xl, text-8xl, text-9xl
```

### Spacing
```
p-4, px-6, py-8    (padding)
m-4, mx-6, my-8    (margin)
gap-4, gap-6       (flex/grid gap)
```

## 🔗 Useful Links

- [Tailwind Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Keep this file handy for quick reference!** 📌
