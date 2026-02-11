import { motion } from 'framer-motion'
import { Section, SectionItem } from './Section'
import { profile } from '../data/profile'

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <SectionItem variants={itemVariants}>
        <div className="max-w-xl space-y-6">
          <p className="text-stone-600 dark:text-stone-400">
            I'm open to new opportunities and conversations. Reach out via email or connect on socials.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors"
            >
              <span aria-hidden>✉</span> {profile.email}
            </a>
            {profile.location && (
              <span className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <span aria-hidden>📍</span> {profile.location}
              </span>
            )}
          </div>
          <div className="flex gap-4 pt-2">
            {profile.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </SectionItem>
    </Section>
  )
}
