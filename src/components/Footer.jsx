import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          © {currentYear} Pranish Adhikari. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/pranish-ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranish-adhikari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
