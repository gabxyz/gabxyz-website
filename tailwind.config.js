const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 350,
        normal: 450,
        medium: 550,
        semibold: 650,
        bold: 750,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.xl"),
            },
            h2: {
              fontWeight: theme("fontWeight.medium"),
              fontSize: theme("fontSize.lg"),
            },
            h3: {
              fontWeight: theme("fontWeight.medium"),
              fontSize: theme("fontSize.lg"),
            },
            p: {
              fontWeight: theme("fontWeight.normal"),
              fontSize: theme("fontSize.base"),
              color: theme("colors.gray.11"),
            },
            a: {
              fontWeight: theme("fontWeight.medium"),
            },
          },
        },
      }),
      transitionTimingFunction: {
        /**
         * See: https://carbondesignsystem.com/guidelines/motion/overview/
         */
        "productive-standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
        "productive-entrance": "cubic-bezier(0, 0, 0.38, 0.9)",
        "productive-exit": "cubic-bezier(0.2, 0, 1, 0.9)",
        "expressive-standard": "cubic-bezier(0.4, 0.14, 0.3, 1)",
        "expressive-entrance": "cubic-bezier(0, 0, 0.3, 1)",
        "expressive-exit": "cubic-bezier(0.4, 0.14, 1, 1)",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(0.25rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-0.25rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-0.25rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(0.25rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "scale-fade": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(-0.15rem)" },
        },
      },
      animation: {
        "slide-up-fade":
          "slide-down-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-down-fade":
          "slide-up-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-right-fade":
          "slide-left-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-left-fade":
          "slide-right-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "scale-fade": "scale-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
    require("windy-radix-palette"),
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
  ],
};
