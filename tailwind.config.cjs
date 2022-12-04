/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#020D73",
          lighter: "#242E8C",
          darker: "#00052E",
          darkest: "#000424",
        },
        secondary: {
          DEFAULT: "#430087",
          dark: "#443058",
          darker: "#210043",
          darkest: "#100021",
          light: "#725193",
          lighter: "#8E66B7",
          lightest: "#C6B2DB",
        },
        accent: {
          lightest: "#f0e4dc",
          lighter: "#e8d7ca",
          DEFAULT: "#e0c9b8",
          dark: "#D9BDA8",
          darker: "#c9a183",
          darkest: "#8f613e",
          darkestContent: "#2D1E13",
        },
        base: { DEFAULT: "#F8F1FF", darker: "#F4E9FF" },
        neutral: {},
      },
    },
    fontFamily: {
      sans: ["Varta", "sans-serif"],
      serif: ["Yrsa", "serif"],
      accent: ["MerriwaterSans", "sans-serif"],
      sc: ["SmallcapsSC"],
    },
  },
  plugins: [],
};
