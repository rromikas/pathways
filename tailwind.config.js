const colors = require("tailwindcss/colors");
const { darken, lighten } = require("polished");

const navyBlue = "#1A3A4F";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  important: true,

  theme: {
    filter: {
      invert: "invert(0.7)",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    colors: {
      green: "#4fff9e",
      blue: {
        100: lighten(0.7, navyBlue),
        200: lighten(0.2, navyBlue),
        300: lighten(0.1, navyBlue),
        400: navyBlue,
        500: darken(0.1, navyBlue),
        600: darken(0.2, navyBlue),
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      yellow: colors.amber,
    },
  },

  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("tailwindcss-filters"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    }),
  ],
};
