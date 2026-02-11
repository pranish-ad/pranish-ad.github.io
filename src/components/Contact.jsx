import { useState } from 'react'
import { motion } from 'framer-motion'

const LINKEDIN_URL = 'https://www.linkedin.com/in/pranish-adhikari/'
const GITHUB_URL = 'https://github.com/pranish-ad'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const initialValues = { name: '', email: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

// Client-side validation; server (Netlify/Formspree) may apply its own
function validate(values) {
  const errors = { ...initialErrors }
  if (!values.name.trim()) errors.name = 'Name is required'
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email'
  if (!values.message.trim()) errors.message = 'Message is required'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
    const nextErrors = validate(values)
    setErrors((prev) => ({ ...prev, [e.target.name]: nextErrors[e.target.name] || '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus('submitting')
    try {
      const form = e.target
      const formData = new FormData(form)
      // POST to current origin (Netlify Forms) or set form action to Formspree/etc.
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        setValues(initialValues)
        setTouched({ name: false, email: false, message: false })
        setErrors(initialErrors)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        className="section-title"
      >
        Contact
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-xl grid gap-10 md:grid-cols-[1fr,auto] md:gap-12"
      >
        {/* Form - Netlify Forms (or set action to Formspree / your endpoint) */}
        {/* Netlify Forms: use action="/" and data-netlify="true". For Formspree: action="https://formspree.io/f/YOUR_ID" and remove data-netlify. */}
        <motion.form
          variants={item}
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="name"
              placeholder="Your name"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow ${
                errors.name && touched.name
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-stone-300 dark:border-stone-600'
              }`}
            />
            {errors.name && touched.name && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow ${
                errors.email && touched.email
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-stone-300 dark:border-stone-600'
              }`}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              rows={4}
              placeholder="Your message..."
              className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow resize-y min-h-[100px] ${
                errors.message && touched.message
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-stone-300 dark:border-stone-600'
              }`}
            />
            {errors.message && touched.message && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {status === 'success' && (
            <p className="text-sm text-green-600 dark:text-green-400" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500 dark:text-red-400" role="alert">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-950 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div variants={item} className="flex flex-row md:flex-col gap-6 md:gap-4">
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">Or connect with me</p>
          <div className="flex gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
