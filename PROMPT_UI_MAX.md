# Goal
Transform the current “Green Global” company profile website (Next.js + Tailwind + Prisma + NextAuth) into a **world-class, high-end, visually stunning** web experience with perfect UX and responsive behavior.

# Design direction
- Visual identity: minimalistic corporate style with **elegant gradients**, **strong typography**, and **cinematic whitespace**.
- Color palette: emerald → lime gradients for primary brand, dark gray / off-white neutrals, and soft accent shadows.
- Font pairing: "Inter" for body, "Poppins 600" for headings.
- Rounded corners, soft drop shadows, subtle depth.

# Layout principles
- Max content width = 1200 px; center everything with consistent horizontal padding.
- Responsive grid (3–4 cols desktop → 1 col mobile).
- Vertical rhythm = balanced spacing (Tailwind `space-y-*` utilities).
- Use **Framer Motion** or Tailwind animate classes for smooth fade/slide/scale effects.

# Page-specific guidance
### Home
- Full-screen hero with gradient background, bold tagline, CTA (“Get in Touch”).
- Scroll-triggered animations for each section.
- 3 service highlights with vector icons, hover-scale + shadow.
- Testimonial slider or “trusted by” logos.

### About
- Split layout (image + text) with animated counters (Years of Experience, Projects Done).
- Vision & Mission cards with gradient borders.

### Services
- Service cards with icons, gradient outlines, hover lift.
- Subtle background pattern (e.g., radial-gradient / noise overlay).

### Blog
- Masonry or card grid with featured images.
- Each card has hover overlay & “Read More” button animation.
- Detail page: large hero image, clean typography, reading progress bar.

### Contact
- Form with floating labels, focus glow.
- Contact info panel with icons & map embed.

### Admin
- Glassmorphism dashboard; responsive table; sticky header.
- Buttons with consistent primary/secondary style; toast notifications on CRUD.

# Components to refine
- Navbar: sticky + glass blur; transition to solid on scroll; active link underline animation.
- Footer: two-column layout, quick links, social icons, copyright.
- Buttons: rounded-full, gradient background, smooth hover → slightly brighter.

# Interaction rules
- Always use Tailwind transitions (ease-in-out 200-300 ms).
- Use motion variants for section fade/slide on scroll.
- Avoid clutter; each section purpose-driven.

# Accessibility & performance
- WCAG-friendly contrast, alt text, semantic headings.
- Optimize images with Next/Image; lazy load below the fold.

# Implementation tasks
Copilot should:
1. Refactor JSX + Tailwind classes of all pages/components to apply this design.
2. Introduce small motion wrappers (`framer-motion`).
3. Update `globals.css` & `tailwind.config.js` with:
   - Brand colors (emerald → lime gradient)
   - Font imports (Inter, Poppins)
   - Animation keyframes if needed.
4. Ensure all pages stay responsive.
5. Produce a clean summary of changes & utilities added.

# Optional polish
- Add dark mode variant using Tailwind `dark:` classes.
- Add subtle gradient borders on cards and buttons.
- Add favicon & meta tags for better branding.

