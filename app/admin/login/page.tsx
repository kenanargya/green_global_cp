
'use client'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const { data: session, status: sessionStatus } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session && session.user) {
      router.replace('/admin/posts')
    }
  }, [session, router])

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await signIn('credentials', { redirect: false, email, password })
    if (res && res.ok) setStatus('Logged in')
    else setStatus('Invalid credentials')
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-12 flex-1">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <form onSubmit={submit} className="max-w-sm">
            <label className="block mb-2">Email</label>
            <input className="w-full mb-4 p-2 border" value={email} onChange={e=>setEmail((e.target as HTMLInputElement).value)} />
            <label className="block mb-2">Password</label>
            <input type="password" className="w-full mb-4 p-2 border" value={password} onChange={e=>setPassword((e.target as HTMLInputElement).value)} />
            <button className="px-4 py-2 bg-blue-600 text-white">Login</button>
          </form>
          <p className="mt-4">{status}</p>
        </main>
        <Footer />
      </div>
    </>
  )
}
