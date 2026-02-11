import { motion } from 'framer-motion'
import { Section, SectionItem } from './Section'
import { about } from '../data/profile'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function AboutSection() {
  return (
    <Section id="about" title={about.headline}>
      <SectionItem variants={itemVariants}>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </SectionItem>
    </Section>
  )
}
