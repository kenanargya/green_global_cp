import * as PrismaPkg from '@prisma/client'
import bcrypt from 'bcryptjs'

const PrismaClient = (PrismaPkg as any).PrismaClient
const prisma = new PrismaClient()
async function main(){
  const pw = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({ where: { email: 'admin@example.com' }, update: {}, create: { email: 'admin@example.com', password: pw, name: 'Admin' } })

  await prisma.post.createMany({ data: [
    { title: 'Welcome to Green Global', slug: 'welcome-' + Date.now(), excerpt: 'Intro', content: 'Welcome content' },
    { title: 'Sustainability Tips', slug: 'tips-' + Date.now(), excerpt: 'Tips', content: 'Tips content' },
  ] })

  await prisma.service.createMany({ data: [
    { title: 'Consulting', description: 'Sustainability consulting' },
    { title: 'Auditing', description: 'Energy auditing services' },
  ] })
}

main().catch(e=>{ console.error(e); process.exit(1) }).finally(()=>prisma.$disconnect())
