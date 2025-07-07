/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
	  fontSize: {
		'80px': '80px',
		'60px': '60px',
    '50px': '50px',
		'40px': '40px',
	  }, 
      colors: {
        'qs': {
          dark: 'var(--qs-dark)',
          'bg-very-light': 'var(--qs-bg-very-light)',
          'bg-light': 'var(--qs-bg-light)',
          cta: 'var(--qs-cta)',
          accent: 'var(--qs-accent)',
          'text-dark': 'var(--qs-text-dark)',
          'text-light': 'var(--qs-text-light)',
          'accent-blue': 'var(--qs-accent-blue)',
          
          // Versiones RGB para usar con opacidad
          'dark-rgb': 'var(--qs-dark-rgb)',
          'bg-very-light-rgb': 'var(--qs-bg-very-light-rgb)',
          'bg-light-rgb': 'var(--qs-bg-light-rgb)',
          'cta-rgb': 'var(--qs-cta-rgb)',
          'accent-rgb': 'var(--qs-accent-rgb)',
          'text-dark-rgb': 'var(--qs-text-dark-rgb)',
          'text-light-rgb': 'var(--qs-text-light-rgb)',
          'accent-blue-rgb': 'var(--qs-accent-blue-rgb)',
        },
        
        transparent: 'transparent',
      },

      typography: {
        DEFAULT: {
          css: {
            color: 'var(--qs-text-dark)',
            maxWidth: '100% !important',
            h1: {
              fontSize: '3.052em',
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '2.441em',
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
            },
            h3: {
              fontSize: '1.953em',
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
            },
            h4: {
              fontSize: '1.563em',
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
            },
            h5: {
              fontSize: '1.25em',
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
            },
            p: {
              color: 'var(--qs-text-dark)',
              fontFamily: 'var(--font-primary)',
              marginBottom: '1em !important',
            },
            strong: {
              color: 'var(--qs-text-dark)',
              fontWeight: '700',
            },
            a: {
              color: 'var(--qs-accent)',
              fontFamily: 'var(--font-primary)',
              '&:hover': {
                color: 'var(--qs-cta)',
              },
              textDecoration: 'none !important',
            },
            button: {
              color: 'var(--qs-text-light) !important',
              '&:hover': {
                color: 'var(--qs-text-light)',
              },
              textDecoration: 'none !important',
            },
            th: {
              color: 'var(--qs-text-dark)',
            },
            ul: {
              listStyleType: 'disc !important',
              listStylePosition: 'outside',
              marginTop: '0.5rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            },
            ol: {
              listStyleType: 'decimal !important',
              listStylePosition: 'outside',
              marginTop: '0.5rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            },
            li: {
              color: 'var(--qs-text-dark)',
              marginBottom: '0.2rem',
              fontFamily: 'var(--font-primary)',
            },
            hr: {
              borderColor: 'var(--qs-text-dark)',
              borderWidth: '1px',
              borderStyle: 'solid',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography
  ],
  darkMode: 'class', // Habilitar modo oscuro basado en clases
}