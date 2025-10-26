'use client'
import React, { useEffect, useState } from 'react'

export default function ReadingProgress(){
  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    const handler = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / height) * 100
      setProgress(Math.min(100, Math.max(0, scrolled)))
    }
    window.addEventListener('scroll', handler)
    handler()
    return ()=> window.removeEventListener('scroll', handler)
  },[])

  return (
    <div aria-hidden className="fixed left-0 top-0 h-1 w-full z-50">
      <div className="h-1 bg-gradient-to-r from-brand-600 to-brand-400" style={{ width: `${progress}%` }} />
    </div>
  )
}
