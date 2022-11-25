/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dhbwRed: '#E2001A',
        dhbwGrey: '#5C6971',
      },
    },
  },
  plugins: [require('daisyui')],
};
