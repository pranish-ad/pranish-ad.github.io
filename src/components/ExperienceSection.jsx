import { motion } from 'framer-motion'
import { Section, SectionItem } from './Section'
import { experience } from '../data/profile'

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
}

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job, i) => (
          <SectionItem key={i} variants={itemVariants}>
            <div className="relative pl-6 border-l-2 border-amber-500/30 dark:border-amber-500/40">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 dark:bg-amber-500" />
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100">
                {job.role}
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium text-sm mt-0.5">
                {job.company} · {job.period}
              </p>
              <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {job.description}
              </p>
            </div>
          </SectionItem>
        ))}
      </div>
    </Section>
  )
}
