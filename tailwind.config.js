/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        test: "repeat( auto-fit, minmax(200px, 1fr) )",
      },
      backgroundImage: {
        "iframe-loader": "url(/loader.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        gray: "rgb(64, 64, 63)",
        customWhite: "#f4f4f4",
      },
      screens: {
        xs: "375px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
