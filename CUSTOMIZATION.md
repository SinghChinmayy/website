# Quick Customization Guide

This guide will help you quickly customize your portfolio website with your own information.

## 🎯 Quick Start (5 Minutes)

### Step 1: Update Your Personal Information

Open `components/Hero.tsx` and update:

1. **Line 30** - Your name:
   ```typescript
   Your Name
   ```
   Change to your actual name.

2. **Line 40** - Your title:
   ```typescript
   Computer Science Student
   ```
   Change to your role (e.g., "Software Developer", "Full Stack Engineer").

3. **Lines 50-52** - Your tagline:
   ```typescript
   Passionate about building elegant solutions to complex problems.
   Currently learning and exploring the world of software development.
   ```
   Write a brief description about yourself.

### Step 2: Update Site Metadata

Open `app/layout.tsx` and update:

1. **Line 16** - Page title:
   ```typescript
   title: "Your Name | Portfolio",
   ```

2. **Line 17** - Description:
   ```typescript
   description: "Computer Science student passionate about...",
   ```

3. **Line 19** - Your name in authors:
   ```typescript
   authors: [{ name: "Your Name" }],
   ```

### Step 3: Update Navigation Logo

Open `components/Navigation.tsx` and update:

1. **Line 17** - Your initials:
   ```typescript
   YN
   ```
   Change to your initials (e.g., "JS" for John Smith).

### Step 4: Update Button Links

Open `components/Hero.tsx` and update the button links (lines 60-70):

**Option A: Link to sections you'll add later**
```typescript
<a href="#projects">View Projects</a>
<a href="#contact">Contact Me</a>
```

**Option B: Link to external sites**
```typescript
<a href="https://github.com/yourusername">GitHub</a>
<a href="mailto:your.email@example.com">Email Me</a>
```

## 🎨 Color Customization

### Change Accent Color

To add a custom accent color, edit `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #3b82f6;  /* Add this line - your brand color */
}
```

Then use it in components with Tailwind:
```typescript
className="bg-[var(--accent)] text-white"
```

### Predefined Color Schemes

**Option 1: Blue Accent**
- Replace `bg-gray-900` with `bg-blue-600`
- Replace `border-gray-900` with `border-blue-600`

**Option 2: Purple Accent**
- Replace `bg-gray-900` with `bg-purple-600`
- Replace `border-gray-900` with `border-purple-600`

**Option 3: Green Accent**
- Replace `bg-gray-900` with `bg-green-600`
- Replace `border-gray-900` with `border-green-600`

## 📱 Social Links

Add social links to your Hero component. Add this after the buttons section in `components/Hero.tsx`:

```typescript
{/* Social Links */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7, duration: 0.6 }}
  className="flex gap-6 pt-4"
>
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    GitHub
  </a>
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    LinkedIn
  </a>
  <a
    href="https://twitter.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    Twitter
  </a>
</motion.div>
```

## 🖼️ Add Your Photo

1. Add your photo to the `public` folder (e.g., `public/profile.jpg`)

2. In `components/Hero.tsx`, add this import at the top:
   ```typescript
   import Image from 'next/image';
   ```

3. Add the image before your name:
   ```typescript
   <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.2, duration: 0.6 }}
     className="mb-8"
   >
     <Image
       src="/profile.jpg"
       alt="Your Name"
       width={150}
       height={150}
       className="rounded-full"
     />
   </motion.div>
   ```

## 🚀 Test Your Changes

After making changes:

1. Save all files
2. The development server will auto-reload
3. Check [http://localhost:3000](http://localhost:3000)

## 📝 Common Issues

**Issue: Changes not showing up**
- Solution: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**Issue: Build errors**
- Solution: Run `npm run build` to see detailed error messages

**Issue: Styling looks broken**
- Solution: Make sure you didn't accidentally delete any Tailwind classes

## 🎓 Next Steps

Once you've customized the basics:

1. Add an About section
2. Create a Projects showcase
3. Add your skills/technologies
4. Include work experience
5. Add a contact form

Check the main README.md for detailed instructions on adding these sections!
