import { motion } from 'framer-motion'

// Grouped by category; badges use gradient border + hover scale/shadow
const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['Java', 'C', 'Python'],
  },
  {
    title: 'Web',
    skills: ['React', 'Angular'],
  },
  {
    title: 'Tools',
    skills: ['Linux', 'Windows', 'MacOS'],
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35 },
  }),
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        className="section-title"
      >
        Skills
      </motion.h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: groupIndex * 0.08, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <span className="inline-flex p-[2px] rounded-lg bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/25 group-hover:scale-105">
                    <span className="flex items-center px-4 py-2 rounded-[6px] bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 font-medium text-sm">
                      {skill}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
