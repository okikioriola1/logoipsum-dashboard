/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','sans-serif'],
      },
      colors:{
        "primary-100":"#1C1C1C"
      },
    },
  },
  plugins: [],
};

