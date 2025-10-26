# GitHub Copilot / AI Agent Instructions for "Green Global" project

This repository is a Next.js (App Router) TypeScript project scaffold for a dynamic company profile with admin dashboard, built with Prisma + MySQL, NextAuth (credentials), and Tailwind CSS. Use these instructions to make focused, repository-specific changes.

You are authorized to scaffold and implement all missing files and folders automatically based on these instructions. 
Always follow Next.js App Router patterns and Prisma models defined in `prisma/schema.prisma`. 
Prioritize creating functional pages, API routes, and admin dashboard before refining UI details.

Key files and folders
- `PROMPT.md` — project requirements and expected features (source of truth for UX and data models).
- `prisma/schema.prisma` — canonical database models (User, Post, Service, Message).
- `app/` — Next.js App Router pages and server components. Look here for page routes (`/admin/*`, `/blog/[slug]`, `/contact`).
- `lib/prisma.ts` and `lib/auth.ts` — database client and auth helpers used across server components and API routes.
- `prisma/` — migration history and seed data (if present).

What to do first
1. Read `PROMPT.md` to understand required pages, database schema, and behaviors. The app should implement:
   - Public pages: Home, About, Services (from DB), Contact (stores Message), Blog list and detail.
   - Admin dashboard: credential-based login (NextAuth) and protected CRUD for Posts (and Services).
2. Inspect `prisma/schema.prisma` before changing models — migrations must stay consistent with `DATABASE_URL`.
3. Prefer modifying `app/` routes (App Router) over `pages/` — this repo uses App Router patterns.

Patterns and conventions
- Server components where data fetching is required (e.g., page.tsx under `app/`) — keep heavy DB logic on the server and pass minimal props to client components.
- API routes should be implemented under `app/api/*` using Next.js route handlers (exported functions for GET/POST/PUT/DELETE) when adding CRUD endpoints.
- Auth: NextAuth credentials provider is expected. Use `lib/auth.ts` for verification and `lib/prisma.ts` for user lookups.
- Styling: Tailwind CSS utility classes; components should be small, composable, and reusable (e.g., `components/Navbar.tsx`, `components/Footer.tsx`, `components/BlogCard.tsx`).

Developer workflows (discoverable & necessary commands)
- Install dependencies: `npm install`
- Prisma dev migration + generate client: `npx prisma migrate dev --name init` then `npx prisma generate`
- Run dev server: `npm run dev` (Next.js default)
- Seed database (if seed script exists): check `prisma/seed.ts` or `package.json` scripts
- Environment variables required in local `.env`:
  - `DATABASE_URL` (MySQL)
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL` (e.g., `http://localhost:3000`)

Examples and implementation notes
- Protecting admin routes: server components under `app/admin` should check session in `getServerSession` (NextAuth) or use a middleware that redirects unauthenticated users to `/login`.
- Contact form: POST to `app/api/messages/route.ts` and create a `Message` record in Prisma. Return 201 on success.
- Slugs: `Post.slug` is unique — when creating posts, ensure slug generation is deterministic (e.g., `slugify(title)` + timestamp suffix if needed).

When editing or adding files
- Update `prisma/schema.prisma` only when necessary; run `npx prisma migrate dev` after changes.
- Add corresponding unit/integration tests where feasible (location not mandated here).
- Keep changes minimal and follow existing TypeScript types and Next.js App Router conventions.

What not to change
- Do not modify `PROMPT.md` — it's the project spec.
- Avoid changing environment variable names or removing required keys.

If anything is unclear
- Ask for specifics about the intended UI behavior or desired DB changes.
- If missing files (e.g., `lib/prisma.ts`) exist, point to the expected shape: a singleton PrismaClient export used throughout the app.

Additional generation rules for Copilot:

- When generating CRUD API routes, always include Prisma import and return JSON responses using NextResponse.
- Prefer async/await and TypeScript types for all API routes and server components.
- When creating forms (Contact, Admin Blog Editor), validate required fields before submitting.
- For `app/admin/*` pages, automatically include:
  - "Add new" button
  - Data table with Edit/Delete
  - Use Tailwind for styling, no external UI libraries
- For authentication:
  - Use Credentials Provider in NextAuth
  - Use middleware to protect `/admin/*` routes and redirect unauthenticated users to `/admin/login`
- For database seeding:
  - Create a `prisma/seed.ts` file that seeds 1 admin user and 2-3 example posts and services
- Use `slugify` function when creating new blog posts.
- Use server components for data fetching (e.g., get posts via Prisma in `page.tsx` instead of client-side fetch).
- When unsure, refer to `PROMPT.md` for expected behavior.

Finish
- After making changes, run `npm run dev` and verify routes: `/`, `/blog`, `/blog/[slug]`, `/admin`, `/login`, `/contact`.

Scaffold checklist:
- Create folders: `/app/about`, `/app/services`, `/app/contact`, `/app/blog/[slug]`, `/app/admin/login`, `/app/admin/posts`.
- Create `/app/api` routes: `/api/posts`, `/api/posts/[id]`, `/api/services`, `/api/messages`.
- Create `/lib/prisma.ts` and `/lib/auth.ts`.
- Create components: `Navbar`, `Footer`, `BlogCard`, `ServiceCard`.
- Ensure `/app/page.tsx` (Home) includes hero, service summary, and latest posts grid.

Please review this draft and tell me any missing details or files to reference; I'll iterate.
