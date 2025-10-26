import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request){
  const body = await req.json()
  if (!body.name || !body.email || !body.message) return NextResponse.json({ error: 'Missing' }, { status: 400 })
  const m = await prisma.message.create({ data: { name: body.name, email: body.email, message: body.message } })
  return NextResponse.json(m, { status: 201 })
}
