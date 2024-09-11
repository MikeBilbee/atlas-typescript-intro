/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#5C164E',
        'dark-secondary': '#9B287B',
        'dark-background': '#170F11',
        'light-primary': '#73e4bb',
        'light-secondary': '#E5BEED',
        'light-background': '#9B287B'
      },
      borderColor: {
        black: '#000000'
      }
    },
  },
  plugins: [],
}

