import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/**
 * Wraps content with a scroll-triggered reveal animation (Framer Motion).
 * Use for sections or elements that should animate in on scroll.
 */
export function ScrollReveal({
  children,
  as: Component = motion.div,
  className = '',
  variants = defaultVariants,
  viewport = { once: true, margin: '-40px' },
  ...props
}) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
