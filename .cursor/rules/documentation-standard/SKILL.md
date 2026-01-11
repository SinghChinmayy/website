---
name: documentation-standard
description: Standards for writing and maintaining project documentation
---

# Documentation Standard

This rule defines how documentation should be written and maintained for this project.

## Core Principles

1. **Single Source of Truth**: All documentation lives in the root `README.md`
2. **Navigation First**: Always include a navigation bar at the top
3. **Table of Contents**: Include detailed TOC for easy navigation
4. **Mobile-Friendly**: Markdown renders well on all devices
5. **Searchable**: Use clear headings and keywords

## README Structure

Every README.md must have:

### 1. Title and Navigation Bar
```markdown
# Project Title

<div align="center">
**[Section 1](#section-1)** • **[Section 2](#section-2)** • **[Section 3](#section-3)**
</div>

---
```

### 2. Table of Contents
- Detailed list of all major sections
- Links to each section
- Update when adding new sections

### 3. Quick Start Section
- Prerequisites
- Installation steps (numbered)
- How to run (copy-paste commands)
- Expected outcome

### 4. Main Content Sections
- Logical organization
- Clear headings (H2, H3)
- Code examples with syntax highlighting
- Tables for reference data

### 5. Troubleshooting Section
- Common issues
- Solutions
- Command examples

### 6. Footer
- Back to top link
- License/Contributing info
- Built with attribution

## Writing Guidelines

### Use Clear Headings
```markdown
## Major Section (H2)
### Subsection (H3)
#### Detail (H4)
```

### Include Navigation
Always provide quick links:
- Navigation bar at top
- Table of contents
- Back to top link at bottom
- Section cross-references

### Code Blocks
Always specify language:
```markdown
\`\`\`bash
npm install
\`\`\`

\`\`\`typescript
const example = "code";
\`\`\`
```

### Use Tables
For structured data:
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

### Use Callouts
```markdown
**✅ Success:** Use checkmarks for completed items
**❌ Error:** Use X for errors or issues
**💡 Tip:** Use bulb for tips
**⚠️ Warning:** Use warning for cautions
```

### File References
Always use backticks and specify line numbers if relevant:
```markdown
Edit `components/Hero.tsx` line ~32
```

### Commands
Always provide copy-paste ready commands:
```bash
# Bad
Run the dev server

# Good
npm run dev
```

## What NOT to Create

❌ **Multiple documentation files** (START_HERE.md, GETTING_STARTED.md, etc.)
❌ **Separate guides** for each feature
❌ **Duplicate information** across files
❌ **Version-specific docs** (keep updated in place)

## What TO Do

✅ **Single README.md** in root directory
✅ **Clear sections** with navigation
✅ **Inline examples** where needed
✅ **Reference tables** for quick lookup
✅ **Keep it updated** with changes

## Updating Documentation

When adding features:
1. Add section to README.md
2. Update Table of Contents
3. Update Navigation bar at top
4. Add to Quick Reference if applicable
5. Include code examples
6. Test all links work

## Documentation Checklist

Before considering documentation complete:

- [ ] Navigation bar at top with all major sections
- [ ] Complete Table of Contents
- [ ] Quick Start section (< 5 minutes to get running)
- [ ] Code examples for all features
- [ ] Troubleshooting section
- [ ] File structure documented
- [ ] All commands listed
- [ ] Links tested
- [ ] Grammar checked
- [ ] Mobile-friendly markdown

## Example Structure

```markdown
# Project Name

<div align="center">
**[Quick Start](#quick-start)** • **[Features](#features)** • **[Docs](#documentation)**
</div>

---

## Table of Contents
- [Quick Start](#quick-start)
- [Features](#features)
...

## Quick Start
### Installation
1. Step one
2. Step two

## Main Sections
Content here...

## Troubleshooting
Common issues...

---

<div align="center">
[↑ Back to Top](#project-name)
</div>
```

## Maintenance

- Review documentation quarterly
- Update when features change
- Remove outdated information
- Keep examples working
- Maintain link validity

---

**Remember: Good documentation is a feature, not an afterthought!**
