import { motion } from 'framer-motion'

// In-card contact block; profileImage optional (e.g. /profile.jpg in public)
const CONTACT = {
  email: 'pranish@vt.edu',
  phone: '(571) 639‑7483',
  location: 'Virginia, USA',
}

export function About({ profileImage = null }) {
  return (
    <section id="about" className="section-padding">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-stone-900/80 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 border border-stone-100 dark:border-stone-800 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Profile photo - left */}
          <div className="md:w-2/5 flex-shrink-0 flex justify-center md:justify-end p-6 md:p-8 bg-stone-50 dark:bg-stone-800/50">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Pranish Adhikari"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white dark:ring-stone-800 shadow-md"
              />
            ) : (
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-4xl md:text-5xl font-bold text-stone-400 dark:text-stone-500 ring-4 ring-white dark:ring-stone-800"
                aria-hidden
              >
                PA
              </div>
            )}
          </div>

          {/* Text + contact - right */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Full‑Stack Software Engineer at CACI. Life-long learner. Passionate about AI, data, and building full-stack applications.
            </p>
            <dl className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                    className="text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="sr-only">Location</dt>
                <dd className="text-stone-600 dark:text-stone-400">{CONTACT.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
