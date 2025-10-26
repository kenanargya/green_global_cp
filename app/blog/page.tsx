import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogCard from '../../components/BlogCard'
import BlogGrid from '../../components/BlogGrid'

async function getPosts() {
  const prisma = (await import('../../lib/prisma')).prisma
  return prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
}

export default async function Blog() {
  const posts = await getPosts()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-800">Our Insights</h1>
          <p className="text-gray-600 mt-2">News, analysis, and stories on sustainability and green innovation.</p>
        </header>
        <section>
          <BlogGrid posts={posts} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
