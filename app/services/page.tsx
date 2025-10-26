import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'
import ServicesGrid from '../../components/ServicesGrid'

async function getServices() {
  const prisma = (await import('../../lib/prisma')).prisma
  return prisma.service.findMany()
}

export default async function Services() {
  const services = await getServices()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100 font-sans">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-6xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-green-800 mb-6 text-center">Our Services</h1>
          <ServicesGrid services={services} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
