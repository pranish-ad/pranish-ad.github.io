import { motion } from 'framer-motion'
import { Section, SectionItem } from './Section'
import { skills } from '../data/profile'

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function SkillsSection() {
  const byCategory = skills.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {Object.entries(byCategory).map(([category, items], i) => (
          <SectionItem key={category} variants={itemVariants}>
            <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-700 dark:text-stone-300">{skill.name}</span>
                    <span className="text-stone-500 dark:text-stone-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-amber-500 dark:bg-amber-500"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </SectionItem>
        ))}
      </div>
    </Section>
  )
}
