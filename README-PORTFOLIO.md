# Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and shadcn/ui.

## Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Dark Mode Toggle**: Full dark mode support with Light/Dark/System options
- **Fully Responsive**: Mobile-first approach, works on all devices
- **Sticky Navbar**: Transparent navbar that becomes solid on scroll, with hamburger menu on mobile
- **8 Sections**:
  1. Hero Section - Introduction and call-to-action
  2. Tech Stack - Technologies and tools
  3. Projects - Portfolio projects with links
  4. Professional Journey - Work experience
  5. Blog & Articles - Blog posts with tags
  6. Contact - Email and social links
  7. Footer - Quick links and social media
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **Type-Safe**: Fully typed with TypeScript
- **Ready for Database**: All data types are defined for easy migration from static to dynamic data

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page assembling all sections
│   ├── layout.tsx        # Root layout with metadata and ThemeProvider
│   └── globals.css       # Global styles with smooth scroll
├── components/
│   ├── navbar.tsx                          # Sticky navbar with theme toggle (Client Component)
│   ├── theme-provider.tsx                  # Theme context provider (Client Component)
│   ├── mode-toggle.tsx                     # Dark mode toggle button (Client Component)
│   ├── hero-section.tsx                    # Hero section (Client Component)
│   ├── tech-stack-section.tsx              # Tech stack grid
│   ├── projects-section.tsx                # Projects grid
│   ├── professional-journey-section.tsx    # Work experience cards
│   ├── blog-section.tsx                    # Blog posts grid
│   ├── contact-section.tsx                 # Contact with social links (Client Component)
│   ├── footer.tsx                          # Footer (Client Component)
│   └── ui/                                 # shadcn/ui components
├── types/
│   ├── nav.ts             # Navigation types
│   ├── hero.ts            # Hero section types
│   ├── tech-stack.ts      # Tech stack types
│   ├── project.ts         # Project types
│   ├── work-experience.ts # Work experience types
│   ├── blog.ts            # Blog post types
│   ├── contact.ts         # Contact types
│   ├── footer.ts          # Footer types
│   └── index.ts           # Type exports
└── lib/
    ├── data.ts            # Static data for all sections
    └── utils.ts           # Utility functions
```

## Architecture Decisions

### Server vs Client Components
- **Server Components** (default): Tech stack, projects, professional journey, and blog sections
- **Client Components**: Navbar (scroll detection + theme toggle), hero (button interactions), contact (copy email), footer (smooth scroll), theme provider, and mode toggle

### File Naming
- **kebab-case** for files: `hero-section.tsx`, `tech-stack-section.tsx`
- **camelCase** for functions and variables: `heroData`, `formatDate`

### Type Definitions
- Stored in separate `src/types/` directory
- Each domain has its own file for better organization
- Exported through `index.ts` for easy imports

### Component Structure
- Reusable and separated components
- No component nesting in single files
- Each section is independent and can be easily modified

## Customizing Your Portfolio

### 1. Update Personal Data
Edit `src/lib/data.ts` to replace placeholder data with your information:
- `heroData`: Your name, role, headline, description
- `techStackData`: Your tech stack
- `projectsData`: Your projects
- `workExperienceData`: Your work history
- `blogPostsData`: Your blog posts
- `contactData`: Your email and social links

### 2. Update Metadata
Edit `src/app/layout.tsx` to update:
- Page title
- Meta description

### 3. Add Project Images
Place project images in the `public/projects/` directory and update image paths in `data.ts`.

### 4. Customize Styling
- Edit `src/app/globals.css` for global styles
- Modify shadcn/ui theme colors in the CSS variables
- Adjust component-specific styles in individual component files

## Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Future Enhancements

Since all types are defined, you can easily migrate to dynamic data:

1. **Database Integration**: Replace static data with database queries
2. **Blog Detail Pages**: Create `app/blog/[slug]/page.tsx` for individual posts
3. **Project Detail Pages**: Create `app/projects/[slug]/page.tsx` for project details
4. **CMS Integration**: Connect to a headless CMS
5. **Admin Dashboard**: Add content management features

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theme**: next-themes (dark mode support)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## License

This is your personal portfolio. Feel free to customize it however you like!

