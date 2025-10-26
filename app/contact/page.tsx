'use client'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingLabelInput from '../../components/FloatingLabelInput'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus('Please fill all fields')
      return
    }

    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('Message sent')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Error sending message')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl py-16">
        <h1 className="text-4xl font-extrabold text-green-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-6">Reach out with questions or to start a project — we’ll respond within 2 business days.</p>
            <FloatingLabelInput id="name" label="Full name" value={name} onChange={e=>setName((e.target as HTMLInputElement).value)} />
            <FloatingLabelInput id="email" label="Email address" value={email} onChange={e=>setEmail((e.target as HTMLInputElement).value)} />
            <div className="relative mt-6">
              <textarea id="message" placeholder="Your message" value={message} onChange={e=>setMessage((e.target as HTMLTextAreaElement).value)} className="peer w-full rounded-lg border border-gray-200 bg-white px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition h-40" />
              <label htmlFor="message" className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-700 transition-all">Message</label>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button type="submit" className="rounded-full px-6 py-2 bg-gradient-to-r from-brand-600 to-brand-400 text-white font-semibold shadow">Send Message</button>
              <div className="text-sm text-gray-600">{status}</div>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-green-800">Our Office</h3>
              <p className="text-gray-600 mt-2">123 Green Street, Sustainable City, Earth</p>
              <p className="text-sm text-gray-500 mt-3">Phone: +1 555 123 4567</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64">
              {/* Simple map embed placeholder - replace with real embed when available */}
              <iframe className="w-full h-full" src="https://maps.google.com/maps?q=Green%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed" aria-label="company location" />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
