/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#0000FF',          
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        }
      }
    },
  },
  plugins: [],
}
