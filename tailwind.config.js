/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Pretendard',
          'Apple SD Gothic Neo',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // Deep "space" surfaces
        ink: {
          950: '#05060d',
          900: '#080a14',
          850: '#0b0e1a',
          800: '#10131f',
          700: '#171b2b',
          600: '#222739',
        },
        aurora: {
          indigo: '#818cf8',
          violet: '#c084fc',
          cyan: '#22d3ee',
        },
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(129,140,248,0.25), 0 8px 40px -12px rgba(129,140,248,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        aurora:
          'linear-gradient(100deg, var(--aurora-1), var(--aurora-2) 45%, var(--aurora-3))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'scroll-hint': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'aurora-pan': 'aurora-pan 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
      },
      typography: () => ({
        invert: {
          css: {
            '--tw-prose-body': '#c3c8dc',
            '--tw-prose-headings': '#f3f5fc',
            '--tw-prose-links': '#a5b4fc',
            '--tw-prose-bold': '#eef1fa',
            '--tw-prose-quotes': '#c3c8dc',
            '--tw-prose-quote-borders': 'rgba(129,140,248,0.5)',
            '--tw-prose-hr': 'rgba(255,255,255,0.08)',
            '--tw-prose-bullets': 'rgba(129,140,248,0.5)',
            '--tw-prose-code': '#e2e6f5',
            '--tw-prose-th-borders': 'rgba(255,255,255,0.12)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.08)',
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid rgba(165,180,252,0.35)',
              transition: 'border-color 0.2s ease',
            },
            'a:hover': { borderBottomColor: 'rgba(165,180,252,0.9)' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: 'rgba(129,140,248,0.12)',
              borderRadius: '0.375rem',
              padding: '0.15em 0.4em',
              fontWeight: '500',
            },
            blockquote: {
              fontStyle: 'normal',
              borderRadius: '0.25rem',
              backgroundColor: 'rgba(129,140,248,0.06)',
              padding: '0.25rem 1.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
