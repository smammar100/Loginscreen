/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shrek': '#4ade80',
        'shrok': '#22c55e',
        'rock': 'linear-gradient(180deg, #87ceeb 0%, #98fb98 100%)',
      },
      spacing: {
        '1/10': '10%',
        '2/25': '8%',
        '3/20': '15%',
        '7/10': '70%',
        '8/25': '32%',
        '9/20': '45%',
        '9/50': '18%',
        '11/20': '55%',
        '13/20': '65%',
      }
    },
  },
  plugins: [],
}