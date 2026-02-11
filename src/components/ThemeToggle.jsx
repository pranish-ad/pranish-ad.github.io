import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-stone-300 dark:bg-stone-600 transition-colors"
      whileTap={{ scale: 0.98 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <span className="text-amber-400 text-sm">🌙</span>
        ) : (
          <span className="text-amber-500 text-sm">☀️</span>
        )}
      </motion.span>
    </motion.button>
  )
}
