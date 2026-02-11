import { motion } from 'framer-motion'

// Latest-first; type drives RoleIcon (dev | research | leadership)
const EXPERIENCE = [
  {
    role: 'Director of Operations',
    organization: 'Tech Fellows',
    location: 'Blacksburg, VA',
    dates: 'Jun 2024 – Dec 2024',
    type: 'leadership',
    bullets: [
      'Aided the COO in overseeing all operational activities and execution of club initiatives.',
      'Coordinated with departments to drive strategic goals and enhance member engagement.',
      'Technology Commercialization Fellowship with Boeing.',
    ],
  },
  {
    role: 'Full‑Stack Developer Intern',
    organization: 'CACI',
    location: 'Sterling, VA',
    dates: 'May 2024 – Aug 2024',
    type: 'dev',
    bullets: [
      'Led development of a full-stack signal simulator web app; 30% increase in testing efficiency.',
      'Integrated live data streaming for real-time signal visualization.',
      'Upgraded codebase to Flask, Angular, and Docker. Top 5% of interns—presented to company VPs.',
    ],
  },
  {
    role: 'Solutions Architect',
    organization: 'Tech Fellows',
    location: 'Blacksburg, VA',
    dates: 'Jul 2023 – Jun 2024',
    type: 'leadership',
    bullets: [
      'Conducted research and delivered data-driven insights for Pamplin Tech Fellows program.',
      'Collaborated with leadership, conducted market research, and fostered partnerships at industry events.',
      'Technology Commercialization Fellowship with Boeing.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    organization: 'CACI / Hume Center',
    location: 'Blacksburg, VA',
    dates: 'Aug 2023 – May 2024',
    type: 'research',
    bullets: [
      'Collaborated with CACI on signal processing, communications, and software-defined radios.',
      'Mentorship, technical seminars, and bi-weekly progress presentations.',
      'Workforce Development Program—10 hrs/week commitment.',
    ],
  },
  {
    role: 'Founder / COO',
    organization: 'Evergreen Visions',
    location: 'Chantilly, VA',
    dates: 'Jun 2023 – Dec 2024',
    type: 'leadership',
    bullets: [
      'Established social media marketing agency for chiropractors.',
      'Oversaw website development, domain, and security; drove client engagement via cold outreach.',
      'Managed remote employees and contributed to conversion-focused marketing strategies.',
    ],
  },
  {
    role: 'Software Developer',
    organization: 'Diggeridoos at Virginia Tech',
    location: 'Blacksburg, VA',
    dates: 'Jan 2023 – Dec 2024',
    type: 'dev',
    bullets: [
      'Developed GUI for Tunnel Boring Machine with the engineering design team.',
      'Competed in The Boring Company Not-a-Boring Competition—12 teams selected from 400 applicants.',
    ],
  },
  {
    role: 'Online Digital Assistant',
    organization: 'Walmart',
    location: 'Sterling, VA',
    dates: 'Jun 2021 – Dec 2021',
    type: 'leadership',
    bullets: [
      'Fulfilled online pickup orders and used company software to plan and reroute deliveries.',
    ],
  },
  {
    role: 'Co-Founder / Web Developer',
    organization: 'Beyond Medicine',
    location: 'Aldie, VA',
    dates: 'Mar 2020 – Dec 2021',
    type: 'dev',
    bullets: [
      'Co-founded student-led organization to raise awareness for mental health.',
      'Built and maintained the organization website and mobile application.',
    ],
  },
  {
    role: 'Customer Service Representative',
    organization: 'Walmart',
    location: 'Sterling, VA',
    dates: 'Aug 2019 – Aug 2020',
    type: 'leadership',
    bullets: [
      'Resolved customer issues daily and strengthened customer service skills.',
    ],
  },
]

function RoleIcon({ type, className = 'w-5 h-5' }) {
  const base = 'text-amber-500 dark:text-amber-400 flex-shrink-0 ' + className
  if (type === 'dev') {
    return (
      <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
  if (type === 'research') {
    return (
      <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
  // leadership (default)
  return (
    <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        className="section-title"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical timeline line; cards sit to the right with staggered reveal */}
        <div
          className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent dark:from-amber-500/40 dark:via-amber-500/20"
          aria-hidden
        />

        <ul className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <motion.li
              key={`${job.organization}-${job.dates}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="relative pl-14 md:pl-20"
            >
              {/* Timeline node */}
              <div className="absolute left-2 md:left-5 top-6 w-6 h-6 rounded-full bg-amber-500 dark:bg-amber-500 ring-4 ring-white dark:ring-stone-950 flex items-center justify-center">
                <RoleIcon type={job.type} className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Card */}
              <article className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 shadow-md hover:shadow-lg dark:shadow-stone-950/50 transition-shadow duration-300 p-5 md:p-6">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100">
                    {job.role}
                  </h3>
                  <span className="text-stone-500 dark:text-stone-400">·</span>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">
                    {job.organization}
                  </p>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  {job.location} · {job.dates}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
                    >
                      <span className="text-amber-500 dark:text-amber-400 mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
