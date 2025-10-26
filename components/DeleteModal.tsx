'use client'
import React, { useEffect, useRef } from 'react'

export default function DeleteModal({ open, title, onConfirm, onCancel }:{ open:boolean, title:string, onConfirm:()=>void, onCancel:()=>void }){
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  useEffect(()=>{
    if (!open) return
    const prevActive = document.activeElement as HTMLElement | null
    // focus cancel for a safe default
    cancelRef.current?.focus()
    function onKey(e: KeyboardEvent){ if (e.key === 'Escape') onCancel() }
    document.addEventListener('keydown', onKey)
    return ()=>{ document.removeEventListener('keydown', onKey); prevActive?.focus() }
  },[open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
        <h3 className="text-lg font-semibold">Delete post</h3>
        <p className="text-sm text-gray-600 mt-2">Are you sure you want to delete "{title}"? This action cannot be undone.</p>
        <div className="mt-4 flex justify-end gap-3">
          <button ref={cancelRef} onClick={onCancel} className="px-4 py-2 rounded-md border">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-md bg-red-600 text-white">Delete</button>
        </div>
      </div>
    </div>
  )
}
