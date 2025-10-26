'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Toast from './Toast'
import DeleteModal from './DeleteModal'

export default function AdminPostsClient({ initialPosts }:{ initialPosts:any[] }){
  const [posts, setPosts] = useState(initialPosts || [])
  React.useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts')
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
      }
    }
    fetchPosts()
  }, [])
  const [modalOpen, setModalOpen] = useState(false)
  const [target, setTarget] = useState<any>(null)
  const [toast, setToast] = useState('')
  const [recentlyDeleted, setRecentlyDeleted] = useState<any | null>(null)

  function openDelete(p:any){ setTarget(p); setModalOpen(true) }

  async function confirmDelete(){
    if (!target) return
    try{
      const res = await fetch(`/api/posts/${target.id}`, { method: 'DELETE' })
      if (res.ok){
        setPosts(posts.filter(pt=>pt.id !== target.id))
        setRecentlyDeleted(target)
        setToast('Deleted')
      } else setToast('Error')
    }catch(e){ setToast('Error') }
    setModalOpen(false)
    setTarget(null)
  }

  async function undoDelete(){
    if (!recentlyDeleted) return
    try{
      const res = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: recentlyDeleted.title, content: recentlyDeleted.content || '' }) })
      if (res.ok){
        const created = await res.json()
        setPosts([created, ...posts])
        setToast('Restored')
        setRecentlyDeleted(null)
      } else setToast('Error')
    }catch(e){ setToast('Error') }
  }

  return (
    <div>
      <div className="backdrop-blur-sm bg-white/40 border border-white/10 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Posts</h1>
          <Link href="/admin/posts/new" className="px-3 py-2 bg-gradient-to-r from-brand-600 to-brand-400 text-white rounded-full">Add new</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="p-3">Title</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p:any)=> (
                <tr key={p.id} className="border-t">
                  <td className="p-3 align-top">{p.title}</td>
                  <td className="p-3 align-top text-gray-500">{p.slug}</td>
                  <td className="p-3 align-top">
                    <Link href={`/admin/posts/edit/${p.id}`} className="mr-4 text-green-700 font-medium">Edit</Link>
                    <button onClick={()=>openDelete(p)} className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal open={modalOpen} title={target?.title || ''} onConfirm={confirmDelete} onCancel={()=>setModalOpen(false)} />
      {toast && <Toast message={toast} onClose={()=>setToast('')} actionLabel={recentlyDeleted ? 'Undo' : undefined} onAction={recentlyDeleted ? undoDelete : undefined} />}
    </div>
  )
}
