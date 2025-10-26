import '../styles/globals.css'
import React from 'react'
import SessionProviderWrapper from '../components/SessionProviderWrapper'

export const metadata = { title: 'Green Global' }

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-green-50 via-white to-green-100 font-sans antialiased min-h-screen">
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  )
}
