/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  theme: {
    extend: {
      screens: {
        xs: { min: "465px" },
        sm: { min: "620px" },
        md: { min: "700px" },
        lg: { min: "980px" },
        xl: { min: "1450px" },
      },
      colors: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        support: "#eeeeee",
        hover_primary: "#696969",
        hover_secondary: "#9174ce",
      },
    },
  },
  plugins: [],
};
