"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const path = usePathname()

  const linkClass = (href:string) => `px-3 py-2 rounded-md text-sm font-medium ${path === href ? 'text-white bg-gradient-to-r from-brand-600 to-brand-400 shadow' : 'text-gray-700 hover:text-green-800'}`

  return (
    <nav className="sticky top-4 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="backdrop-blur-md bg-white/50 border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-sm">
          <Link href="/" className="text-xl font-extrabold text-green-800">Green Global</Link>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/services" className={linkClass('/services')}>Services</Link>
            <Link href="/blog" className={linkClass('/blog')}>Blog</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link href="/admin/login" className="ml-4 text-sm text-gray-600 px-3 py-2 rounded-md bg-white/30 hover:bg-white">Admin</Link>
          </div>
          <div className="md:hidden">
            {/* mobile menu placeholder */}
            <button aria-label="open menu" className="p-2 rounded-md bg-white/20">☰</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
