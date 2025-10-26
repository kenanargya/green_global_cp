'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

export default function PostMotion({ children }:{ children: React.ReactNode }){
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      {children}
    </motion.div>
  )
}
