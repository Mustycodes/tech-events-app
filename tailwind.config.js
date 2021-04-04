module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0C0E16'
      },
      fontSize: {
        h1: ['2rem', { lineHeight: '1.125', letterSpacing: '-.03125em' }],
        h2: ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.02em' }],
        h3: ['1.25rem', { lineHeight: '1.1', letterSpacing: '-.0315em' }],
        h4: ['1rem', { lineHeight: '1.5', letterSpacing: '-.05em' }],
        body: ['.75rem', { lineHeight: '1.25', letterSpacing: '-.02em' }],
        small: ['.6875rem', { lineHeight: '1.65', letterSpacing: '-.02em' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
