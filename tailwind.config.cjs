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
        violet: {
          100: '#A5A5FF'
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        }
      }
    },
  },
  plugins: [],
}
