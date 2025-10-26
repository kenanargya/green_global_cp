# Prompt GitHub Copilot

Kamu adalah asisten pengembang yang membantu membangun website **Company Profile dinamis** untuk tes Full Stack Developer.

Gunakan **Next.js (App Router) + TypeScript + Tailwind CSS + Prisma ORM + MySQL + NextAuth**.

Buatkan proyek lengkap yang memiliki:

---

## 📂 Struktur dan Fitur

### Halaman Publik:
1. **Home** — hero section, ringkasan perusahaan, dan preview 3 posting blog terbaru.
2. **About** — profil perusahaan, visi, dan misi.
3. **Services** — daftar layanan (data dari database).
4. **Contact** — form (nama, email, pesan) yang disimpan ke database.
5. **Blog**
   - List blog post.
   - Halaman detail (`/blog/[slug]`).

### Dashboard Admin:
- **Login page** (NextAuth credential login).
- **CRUD Blog**: tambah, ubah, hapus posting.
- **CRUD Services** (opsional).
- **Proteksi route** untuk `/admin/*` hanya bisa diakses setelah login.

---

## 🧱 Database Schema (Prisma)
Gunakan MySQL dengan Prisma ORM.

model User {
id Int @id @default(autoincrement())
email String @unique
password String
name String?
role String @default("admin")
createdAt DateTime @default(now())
}

model Post {
id Int @id @default(autoincrement())
title String
slug String @unique
content String @db.LongText
published Boolean @default(false)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model Service {
id Int @id @default(autoincrement())
name String
description String @db.Text
createdAt DateTime @default(now())
}

model Message {
id Int @id @default(autoincrement())
name String
email String
body String @db.Text
createdAt DateTime @default(now())
}

markdown
Copy code

---

## 🧰 Fitur Teknis

- **Framework:** Next.js (App Router)
- **Database:** MySQL
- **ORM:** Prisma
- **Auth:** NextAuth (credential-based)
- **Styling:** Tailwind CSS
- **Deployment target:** Vercel

### Environment Variables
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DBNAME"
NEXTAUTH_SECRET="generate_a_secret"
NEXTAUTH_URL="http://localhost:3000"

yaml
Copy code

---

## 🧱 Struktur Folder
/app
/about
/admin
/login
/posts
/services
/blog
[slug]
/contact
/services
page.tsx
/components
Navbar.tsx
Footer.tsx
BlogCard.tsx
/lib
prisma.ts
auth.ts
/prisma
schema.prisma

yaml
Copy code

---

## 📜 Tugas Copilot
1. Buat seluruh struktur folder di atas.
2. Implementasikan:
   - CRUD API (Next.js API Routes) untuk Blog, Services, dan Messages.
   - Admin dashboard dengan proteksi login.
   - Form Contact yang menyimpan ke DB.
   - Navigasi Navbar + Footer global.
   - Tampilan publik yang menarik dan responsif.
3. Tambahkan **README.md** dengan petunjuk:
   - Setup proyek (`npm install`, `npx prisma migrate dev`, dll)
   - Cara menjalankan (`npm run dev`)
   - Cara deploy ke Vercel.
4. Gunakan Tailwind untuk styling modern dan clean.

---

## ✨ Output yang Diharapkan
- Website berjalan penuh (CRUD Blog + Auth + Contact)
- Dapat dijalankan lokal dan di-deploy ke Vercel.
- Kode bersih, modular, dan rapi.

---

Mulai bangun proyek **dari awal** sesuai spesifikasi di atas.