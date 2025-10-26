'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../lib/motion'
import BlogCard from './BlogCard'

export default function BlogGrid({ posts }:{ posts:any[] }){
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {posts.map((p:any)=> (
        <motion.div key={p.id} variants={fadeInUp}>
          <BlogCard post={p} />
        </motion.div>
      ))}
    </motion.div>
  )
}
