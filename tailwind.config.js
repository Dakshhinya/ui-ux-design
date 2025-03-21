/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens:{
        'custom-md':'661px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

