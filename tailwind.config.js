const colors = require("tailwindcss/colors");
const { darken, lighten } = require("polished");

const navyBlue = "#1A3A4F";
const orange = "#F05A28";
const sizes = {
  0: "0", // 1
  "1px": "1px", // 1
  "2px": "2px",
  "3px": "3px",
  "4px": "4px", // 2
  "6px": "6px",
  "8px": "8px",
  "10px": "10px",
  "12px": "12px",
  "14px": "14px",
  "16px": "16px", // 4
  "20px": "20px",
  "24px": "24px",
  "28px": "28px",
  "32px": "32px",
  "36px": "36px",
  "40px": "40px", // 8
  "48px": "48px",
  "56px": "56px",
  "64px": "64px",
  "68px": "68px",
  "72px": "72px",
  "80px": "80px",
  "88px": "88px",
  "96px": "96px",
  "104px": "104px",
  "112px": "112px", // 16
  "128px": "128px",
  "144px": "144px", // -- general sizes
  "160px": "160px",
  "192px": "192px",
  "224px": "224px", // ----
  "256px": "256px", // * 1.5
  "512px": "512px",
  "1024px": "1024px",
  "1gd": "112px", // grid
  "2gd": "224px", // 16 grid
  "3gd": "336px", // 16 grid
  "4gd": "448px", // 16 grid
  "5gd": "560px", // 16 grid
  "6gd": "672px", // 16 grid
  "7gd": "784px", // 16 grid
  "8gd": "896px", // 16 grid
  "9gd": "1008px", // 16 grid
  "10gd": "1120px", // 16 grid
  "11gd": "1232px", // 16 grid
  "12gd": "1344px", // 16 grid,
  "golden-1": "24%",
  "golden-2": "38%",
  "golden-3": "62%",
  "10p": "10%",
  "20p": "20%",
  "25p": "25%",
  "30p": "30%",
  "33p": "33.333%",
  "40p": "40%",
  "50p": "50%",
  "60p": "60%",
  "66p": "66.666%",
  "70p": "70%",
  "75p": "75%",
  "80p": "80%",
  "90p": "90%",
  "100p": "100%",
  "10vh": "10vh",
  "20vh": "20vh",
  "25vh": "25vh",
  "30vh": "30vh",
  "33vh": "33.333vh",
  "40vh": "40vh",
  "50vh": "50vh",
  "60vh": "60vh",
  "66vh": "66.666vh",
  "70vh": "70vh",
  "75vh": "75vh",
  "80vh": "80vh",
  "90vh": "90vh",
  "100vh": "100vh",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  important: true,
  theme: {
    extend: {
      spacing: sizes,
      fontSize: sizes,
    },
    filter: {
      invert: "invert(0.7)",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    colors: {
      green: "#4fff9e",
      orange: {
        300: "#FBA56B",
        400: orange,
        500: darken(0.1, orange),
        600: darken(0.2, orange),
      },
      blue: {
        100: "#E5F1FA",
        200: lighten(0.2, navyBlue),
        300: lighten(0.1, navyBlue),
        400: navyBlue,
        500: darken(0.1, navyBlue),
        600: darken(0.2, navyBlue),
      },
      red: {
        400: "#E51515",
        401: darken(0.05, "#E51515"),
        402: darken(0.1, "#E51515"),
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: { 400: "#F5F5F5", 500: "#DFDFDF", 550: "#B7B7B7", 600: "#AAAAAA", 700: "#808080" },
      indigo: colors.indigo,
      yellow: colors.amber,
    },
  },

  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-filters"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    }),
  ],
};
