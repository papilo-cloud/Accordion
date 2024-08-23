/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Work Sans', 'Sans-Serif']
      },
      colors: {
        purple: {
          grayish: '#f9f0ff',
          dark: '#2f1533'
        },
        pink: {
          light: '#f9f0ff'
        }
      }
    },
  },
  plugins: [],
}

