import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(){
  const services = await prisma.service.findMany()
  return NextResponse.json(services)
}

export async function POST(req: Request){
  const body = await req.json()
  if (!body.title || !body.description) return NextResponse.json({ error: 'Missing' }, { status: 400 })
  const s = await prisma.service.create({ data: { title: body.title, description: body.description } })
  return NextResponse.json(s)
}
