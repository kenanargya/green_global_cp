import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100 font-sans">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 md:px-8 max-w-5xl py-16">
        <section className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          {/* Left: Team/Office Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/img/company.jpg" alt="Green Global Team" className="rounded-xl shadow-lg w-full max-w-md object-cover h-72 md:h-96" />
          </div>
          {/* Right: Text */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-green-800 mb-6">About Green Global</h1>
            <p className="text-lg text-gray-700 mb-4">We are committed to providing sustainable services to help businesses reduce their environmental impact.</p>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h2>
                <p className="text-gray-600">To lead the transition to a sustainable future through innovative solutions and partnerships.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Our Mission</h2>
                <p className="text-gray-600">Empowering organizations to achieve their sustainability goals with expert guidance and proven strategies.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
