/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'a-white': 'hsl(0, 0%, 98%)',
        'm-grey': 'hsl(0, 0%, 41%)',
        'a-black': 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

