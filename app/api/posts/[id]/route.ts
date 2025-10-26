import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import slugify from 'slugify'

export async function GET(req: Request){
  const id = req.url.split('/').pop()
  const post = await prisma.post.findUnique({ where: { id: Number(id) } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: Request){
  const id = req.url.split('/').pop()
  const body = await req.json()
  const data:any = { title: body.title, content: body.content }
  if (body.title) data.slug = slugify(body.title, { lower: true }) + '-' + Date.now()
  const post = await prisma.post.update({ where: { id: Number(id) }, data })
  return NextResponse.json(post)
}

export async function DELETE(req: Request){
  const id = req.url.split('/').pop()
  await prisma.post.delete({ where: { id: Number(id) } })
  return NextResponse.json({ ok: true })
}
