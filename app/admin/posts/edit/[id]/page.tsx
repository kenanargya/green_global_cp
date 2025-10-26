"use client"
import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import Toast from '../../../../../components/Toast'

export default function EditPost(){
  const params = useParams() as any
  const id = params.id
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('')
  const router = useRouter()

  useEffect(()=>{ (async ()=>{
    const res = await fetch(`/api/posts/${id}`)
    if (res.ok){ const data = await res.json(); setTitle(data.title); setContent(data.content) }
  })() }, [id])

  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await fetch(`/api/posts/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, content }) })
    if (res.ok) {
      setStatus('Saved')
      router.push('/admin/posts')
    } else {
      setStatus('Error')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-4xl py-12">
          <div className="backdrop-blur-sm bg-white/40 border border-white/10 rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
          <form onSubmit={submit} className="space-y-4">
            <input className="w-full p-3 rounded-lg border border-gray-200" placeholder="Title" value={title} onChange={e=>setTitle((e.target as HTMLInputElement).value)} />
            <textarea className="w-full p-3 rounded-lg border border-gray-200 h-48" placeholder="Content (HTML allowed)" value={content} onChange={e=>setContent((e.target as HTMLTextAreaElement).value)} />
            <div className="flex items-center justify-between">
              <button className="rounded-full px-5 py-2 bg-gradient-to-r from-brand-600 to-brand-400 text-white">Save</button>
              <div className="text-sm text-gray-600">{status}</div>
            </div>
          </form>
          {status && <Toast message={status} onClose={()=>setStatus('')} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}
