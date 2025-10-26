import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import PostMotion from '../../../components/PostMotion'
import ReadingProgress from '../../../components/ReadingProgress'

type Props = { params: { slug: string } }

async function getPost(slug:string) {
  const prisma = (await import('../../../lib/prisma')).prisma
  return prisma.post.findUnique({ where: { slug } })
}

export default async function PostPage({ params }:Props) {
  const post = await getPost(params.slug)

  if (!post) return <div>Not found</div>

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl py-12">
        <PostMotion>
          <header className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <div className="h-56 bg-gradient-to-r from-brand-600 to-brand-400 flex items-end p-6 text-white">
              <div>
                <h1 className="text-3xl font-extrabold">{post.title}</h1>
                <div className="text-sm text-white/90 mt-1">{post.author || 'Green Global'} • {new Date(post.createdAt).toLocaleDateString()}</div>
              </div>
            </div>
          </header>
          <article className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </PostMotion>
      </main>
      <Footer />
    </div>
  )
}
