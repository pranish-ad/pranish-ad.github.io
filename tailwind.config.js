import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        surface: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.surface.700'),
            '--tw-prose-headings': theme('colors.surface.900'),
            '--tw-prose-links': theme('colors.primary.600'),
            '--tw-prose-bold': theme('colors.surface.900'),
            '--tw-prose-counters': theme('colors.surface.500'),
            '--tw-prose-bullets': theme('colors.surface.400'),
            '--tw-prose-quotes': theme('colors.surface.600'),
            '--tw-prose-quote-borders': theme('colors.primary.500'),
            '--tw-prose-captions': theme('colors.surface.500'),
            '--tw-prose-code': theme('colors.surface.800'),
            '--tw-prose-pre-code': theme('colors.surface.100'),
            '--tw-prose-pre-bg': theme('colors.surface.800'),
            maxWidth: '65ch',
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.surface.300'),
            '--tw-prose-headings': theme('colors.surface.100'),
            '--tw-prose-links': theme('colors.primary.400'),
            '--tw-prose-bold': theme('colors.surface.100'),
            '--tw-prose-counters': theme('colors.surface.400'),
            '--tw-prose-bullets': theme('colors.surface.500'),
            '--tw-prose-quotes': theme('colors.surface.400'),
            '--tw-prose-quote-borders': theme('colors.primary.500'),
            '--tw-prose-captions': theme('colors.surface.500'),
            '--tw-prose-code': theme('colors.surface.200'),
            '--tw-prose-pre-code': theme('colors.surface.200'),
            '--tw-prose-pre-bg': theme('colors.surface.900'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}
