/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        content: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        positive: 'var(--green)',
        header: 'var(--header)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(48px, 6.7vw, 78px)', { lineHeight: '0.99', letterSpacing: '-0.07em' }],
        'display-sm': ['clamp(47px, 14vw, 67px)', { lineHeight: '0.99', letterSpacing: '-0.07em' }],
        sectionTitle: ['31px', { lineHeight: '1.2', letterSpacing: '-0.06em' }],
      },
      letterSpacing: {
        tightest: '-0.07em',
        label: '0.07em',
      },
      maxWidth: {
        wrap: 'min(1120px, calc(100% - 48px))',
        lede: '480px',
      },
      boxShadow: {
        card: '0 25px 70px rgba(0,0,0,.3), 0 0 35px rgba(92,105,255,.13)',
        float: '0 12px 24px rgba(0,0,0,.18)',
        menu: '0 15px 30px rgba(0,0,0,.2)',
        resume: '20px 25px 45px rgba(0,0,0,.15)',
        button: '0 8px 24px rgba(102,105,255,.24)',
      },
    },
  },
  plugins: [],
};


