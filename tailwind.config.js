/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#00040F',
        'light': '#FFFBF0',
        'gray': '#75CDC8',
        'yellow': '#FBC34A',
      },
    },
  },
  plugins: [],
}

