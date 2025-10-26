# Green Global (Scaffold)

This repository contains a Next.js (App Router) TypeScript scaffold for a company profile with admin dashboard, Prisma + MySQL, NextAuth (credentials), and Tailwind CSS.

Setup

1. Install dependencies

   npm install

2. Create .env from `.env.example` and set `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

3. Run Prisma migrate and generate client

   npx prisma migrate dev --name init
   npx prisma generate

4. Seed database

   node prisma/seed.ts

5. Run dev server

   npm run dev

Deploy

Deploy to Vercel (ensure `DATABASE_URL` and `NEXTAUTH_SECRET` are set in project env vars).
