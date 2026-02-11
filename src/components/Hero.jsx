import { motion } from 'framer-motion'

const RESUME_URL = '/resume.pdf'

// Staggered entrance: container orchestrates children with delay
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 max-w-5xl mx-auto"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4"
        >
          Hi, I'm Pranish Adhikari
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 mb-8"
        >
          Full‑Stack Software Engineer
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
