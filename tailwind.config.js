/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          red: '#331111',
          gray: '#111111',
          grayLight: '#222222',
          black: '#000000',
          white: '#AAAAAA'
      }
    },
  },
  plugins: [],
}

