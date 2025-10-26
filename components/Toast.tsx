'use client'
import React, { useEffect, useRef, useState } from 'react'

interface ToastProps { message: string, onClose?: ()=>void, actionLabel?: string, onAction?: ()=>void }

export default function Toast({ message, onClose, actionLabel, onAction }: ToastProps){
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(()=>{
    if (!paused) timerRef.current = window.setTimeout(()=> onClose && onClose(), 4000)
    return ()=> { if (timerRef.current) clearTimeout(timerRef.current) }
  },[paused])

  return (
    <div onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} className="fixed bottom-6 right-6 bg-white/90 backdrop-blur rounded-lg shadow-lg px-4 py-3 border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-800">{message}</div>
        {actionLabel && <button onClick={()=>{ onAction && onAction(); onClose && onClose() }} className="text-sm text-green-700 font-medium">{actionLabel}</button>}
      </div>
    </div>
  )
}
