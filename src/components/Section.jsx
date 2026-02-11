import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export function Section({ id, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
      }}
    >
      {title && (
        <motion.h2 variants={defaultVariants} className="section-title">
          {title}
        </motion.h2>
      )}
      {children}
    </motion.section>
  )
}

export function SectionItem({ children, variants = defaultVariants, ...props }) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  )
}
