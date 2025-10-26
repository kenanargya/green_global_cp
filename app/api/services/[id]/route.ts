import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function PUT(req:Request){
  const id = req.url.split('/').pop()
  const body = await req.json()
  const s = await prisma.service.update({ where: { id: Number(id) }, data: { title: body.title, description: body.description } })
  return NextResponse.json(s)
}

export async function DELETE(req:Request){
  const id = req.url.split('/').pop()
  await prisma.service.delete({ where: { id: Number(id) } })
  return NextResponse.json({ ok: true })
}
