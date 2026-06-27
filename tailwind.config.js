import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontWeight: '700' },
            h2: { fontWeight: '700' },
          },
        },
      },
      colors: {
        'clinic-navy': '#1B2B3A',
        'clinic-off-white': '#F4F1EA',
        'clinic-gold': '#C5A059',
        'clinic-dark': '#1A1A1A',
        'clinic-gray': '#717171',
        'clinic-beige': '#F9F7F2',
      },
      fontFamily: {
        sans: ['"Geller Headline"', 'Inter', 'sans-serif'],
        serif: ['"Geller Headline"', 'Playfair Display', 'serif'],
        display: ['"Geller Headline"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        clinic: '0 4px 20px -2px rgba(27, 43, 58, 0.05)',
      },
    },
  },
  plugins: [typography],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // This allows you to use 'object-top-quarter' as a class
      objectPosition: {
        'top-quarter': 'center 12.5%',
      }
    },
  },
  plugins: [],
}

export default config;