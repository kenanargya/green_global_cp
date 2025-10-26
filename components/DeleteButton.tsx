'use client'
import React, { useState } from 'react'
import Toast from './Toast'

export default function DeleteButton({ id, onDeleted }:{ id:number, onDeleted?: ()=>void }){
  const [confirming, setConfirming] = useState(false)
  const [status, setStatus] = useState('')

  async function handleDelete(){
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setStatus('Deleted')
        onDeleted && onDeleted()
        // allow toast to show briefly then refresh the list
        setTimeout(()=>{
          try { window.location.reload() } catch(e) { /* no-op */ }
        }, 800)
      } else setStatus('Error')
    } catch (e){ setStatus('Error') }
  }

  return (
    <div className="inline-block" role="group" aria-label="delete post">
      {confirming ? (
        <span className="space-x-2">
          <button onClick={handleDelete} className="text-red-600 font-medium" aria-label="confirm delete">Confirm</button>
          <button onClick={()=>setConfirming(false)} className="text-gray-600" aria-label="cancel delete">Cancel</button>
        </span>
      ) : (
        <button onClick={()=>setConfirming(true)} className="text-red-600" aria-label="delete">Delete</button>
      )}
      {status && <Toast message={status} onClose={()=>setStatus('')} />}
    </div>
  )
}
