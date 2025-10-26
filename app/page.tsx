
import React from 'react'
import { prisma } from '../lib/prisma'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'

export const revalidate = 0

async function getLatestPosts() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' }, take: 3 })
  return posts
}

// Dummy service data for preview grid
const services = [
  {
    icon: '🌱',
    title: 'Eco Consulting',
    desc: 'Expert advice for sustainable business.'
  },
  {
    icon: '💧',
    title: 'Water Solutions',
    desc: 'Innovative water management systems.'
  },
  {
    icon: '⚡',
    title: 'Renewable Energy',
    desc: 'Clean energy for a greener future.'
  },
  {
    icon: '🏢',
    title: 'Green Building',
    desc: 'Eco-friendly construction and retrofits.'
  }
]

export default async function Home() {
  const posts = await getLatestPosts()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100 font-sans">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-20 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-green-800/90 -z-10" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg mb-4 animate-fade-in">Green Global</h1>
          <p className="text-lg md:text-2xl text-green-900 mb-8 animate-fade-in delay-100">Sustainable solutions for a better tomorrow.</p>
          <Link href="/about" className="inline-block px-8 py-3 rounded-full bg-white text-green-700 font-semibold shadow-lg hover:bg-green-100 transition-all animate-fade-in delay-200">Learn More</Link>
        </section>

        {/* Service Preview Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={service.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
                <span className="text-4xl mb-4">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial / Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-green-700">Why Choose Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-green-50 rounded-lg shadow p-6 flex-1 animate-slide-in-left">
              <h3 className="font-semibold text-green-800 mb-2">Expert Team</h3>
              <p className="text-gray-700">Our professionals have decades of experience in sustainability and green technology.</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow p-6 flex-1 animate-slide-in-up">
              <h3 className="font-semibold text-green-800 mb-2">Proven Results</h3>
              <p className="text-gray-700">We deliver measurable impact for our clients and the environment.</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow p-6 flex-1 animate-slide-in-right">
              <h3 className="font-semibold text-green-800 mb-2">Trusted Partners</h3>
              <p className="text-gray-700">We build long-term relationships based on trust and transparency.</p>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-700">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post:any) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/blog" className="text-green-700 font-semibold hover:underline">View all posts</Link>
          </div>
        </section>

        {/* Contact CTA Banner */}
        <section className="bg-green-700 rounded-xl py-10 px-6 text-center text-white mb-12 shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">Ready to go green?</h2>
          <p className="mb-4">Contact us today to start your sustainability journey.</p>
          <Link href="/contact" className="inline-block px-6 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 transition-all">Contact Us</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
