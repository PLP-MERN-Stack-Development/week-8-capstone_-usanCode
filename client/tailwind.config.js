/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #f0f4ff, #e0ecff)',
      },
    },
  },
  plugins: [],
};



