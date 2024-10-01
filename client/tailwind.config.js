/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'main-yellow': '#FFB400',
        'primary-blue': '#2F8BD7',
        'desat-primary-blue': '#EEF6FC',
        'desat-main-yellow': '#F0DFB7',
        'warning-ocre': '#7A5600',
        'desat-red': '#F4C3C3',
        'warning-red': '#D92626',
      },
    },
  },
  plugins: [],
}

