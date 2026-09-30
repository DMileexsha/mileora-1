/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A24B',
          light: '#dfc279',
          dark: '#a88536',
        },
        maroon: {
          DEFAULT: '#6B1020',
          light: '#8e1b30',
          dark: '#4c0814',
        },
        ivory: {
          DEFAULT: '#FFFFF0',
          dark: '#F5F5DC' // beige
        }
      },
      fontFamily: {
        'display': ['"Abhaya Libre"', 'serif'],
        'sans': ['"Noto Sans Sinhala"', 'sans-serif'],
        'serif': ['"Noto Serif Sinhala"', 'serif'],
      },
      backgroundImage: {
        'mandala': "url('/watermark.png')", // We will add a placeholder or rely on CSS
      }
    },
  },
  plugins: [],
}
