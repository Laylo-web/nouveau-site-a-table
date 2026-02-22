/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#af431d',
          accent: '#878232',
          background: '#F4EFE8',
          surface: '#EFE4D9',
          dark: '#1F1A17',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        drama: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      }
    },
  },
  plugins: [],
}
