import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import AdminPostsClient from '../../../components/AdminPostsClient'

async function getPosts() {
  const prisma = (await import('../../../lib/prisma')).prisma
  return prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
}

export default async function AdminPosts() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl py-12">
        <AdminPostsClient initialPosts={posts} />
      </main>
      <Footer />
    </div>
  )
}
