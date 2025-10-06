/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          red: '#DC143C',
          blue: '#003DA5',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'lobster': ['"Lobster Two"', 'cursive'],
        'old-standard': ['"Old Standard TT"', 'serif'],
      }
    },
  },
  plugins: [],
}