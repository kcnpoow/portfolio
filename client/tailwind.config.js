/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zeus: '#221F1F',
        casper: '#A6BBCC',
        timberwolf: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
