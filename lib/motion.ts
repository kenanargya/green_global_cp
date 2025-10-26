export const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
