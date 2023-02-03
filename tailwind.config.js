const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 350,
        normal: 450,
        medium: 550,
        semibold: 650,
        bold: 750,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('windy-radix-typography'),
    require('windy-radix-palette'),
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
  ],
};
