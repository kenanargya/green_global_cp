// Use a resilient import pattern to avoid type/module resolution issues
import * as PrismaPkg from '@prisma/client'

const PrismaClient = (PrismaPkg as any).PrismaClient

declare global {
  // allow global prisma across hot reloads in dev
  // eslint-disable-next-line no-var
  var prisma: any
}

export const prisma = (globalThis as any).prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') (globalThis as any).prisma = prisma

export default prisma
