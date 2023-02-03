/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        light: 325,
        normal: 425,
        medium: 525,
        semibold: 625,
        bold: 725,
      },
    },
  },
  plugins: [],
};
