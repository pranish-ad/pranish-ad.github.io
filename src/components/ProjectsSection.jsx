import { motion } from 'framer-motion'
import { Section, SectionItem } from './Section'
import { projects } from '../data/profile'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <SectionItem key={project.title} variants={itemVariants}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </SectionItem>
        ))}
      </div>
    </Section>
  )
}
