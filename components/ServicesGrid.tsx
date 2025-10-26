'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../lib/motion'
import ServiceCard from './ServiceCard'

export default function ServicesGrid({ services }:{ services:any[] }){
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {services.map((s:any, idx:number) => (
        <motion.div key={s.id || s.title} variants={fadeInUp}>
          <ServiceCard service={s} animationDelay={idx * 100} />
        </motion.div>
      ))}
    </motion.div>
  )
}
