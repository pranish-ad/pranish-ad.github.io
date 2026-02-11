import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Signal Simulator',
    description: 'Full-stack signal simulator with live data streaming and real-time visualization. Optimized GET request times from 1 minute to milliseconds; modernized stack and GitLab/Docker pipelines.',
    stack: ['Flask', 'Angular', 'Python', 'Docker', 'GitLab'],
    github: 'https://github.com/pranish-ad',
    demo: null,
  },
  {
    title: 'Evergreen Visions',
    description: 'Social media marketing agency for chiropractors. Built the agency frontend, managed domain and SSL, and drove client engagement through strategic outreach and lead generation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    demo: '/Evergreen/index.html',
  },
  {
    title: 'Personal Website',
    description: 'Interactive portfolio showcasing web development skills, academic and professional experience, and projects with an engaging, easy-to-navigate design.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/pranish-ad/pranish-ad.github.io',
    demo: 'https://pranish-ad.github.io',
  },
  {
    title: 'Covid Data Tracker',
    description: 'Data visualization app for COVID metrics across demographics. UML-modeled architecture and an intuitive GUI for front-end design and data viz.',
    stack: ['Java', 'GUI', 'UML'],
    github: 'https://github.com/pranish-ad',
    demo: null,
  },
  {
    title: 'Beyond Medicine',
    description: 'Student-led organization raising awareness for mental health. Web developer role: built the organization website and mobile application from concept to launch.',
    stack: ['Web', 'Mobile'],
    github: null,
    demo: null,
  },
]

// Stagger cards on scroll; custom (i) used for per-item delay
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        className="section-title"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/** Single project card with 3D tilt + shadow on hover (perspective on wrapper). */
function ProjectCard({ project }) {
  return (
    <div className="h-full [perspective:1000px]" style={{ transformStyle: 'preserve-3d' }}>
      <motion.article
        className="h-full rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 overflow-hidden flex flex-col"
        initial={false}
        whileHover={{
          rotateY: 4,
          rotateX: -2,
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(245,158,11,0.1)',
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
            >
              <ExternalIcon className="w-4 h-4" />
              Live demo
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-sm text-stone-400 dark:text-stone-500">Links TBD</span>
          )}
        </div>
      </div>
    </motion.article>
    </div>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
