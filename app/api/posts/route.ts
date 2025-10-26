import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import slugify from 'slugify'

export async function GET(){
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(posts)
}

export async function POST(req: Request){
  const body = await req.json()
  if (!body.title || !body.content) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  const slug = slugify(body.title, { lower: true }) + '-' + Date.now()
  const post = await prisma.post.create({ data: { title: body.title, content: body.content, slug } })
  return NextResponse.json(post)
}
