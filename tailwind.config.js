const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: {
        300: "#00B37E",
        500: "#00875F",
      },
      gray: {
        100: "#E1E1E6",
        300: "#C4C4CC",
        800: "#202024",
        900: "#121214",
      },
      white: "#FFFFFF",
      black: "#000",
      "gradient-green": "#1EA483",
      "gradient-purple": "#7465D4",
      purple: colors.purple,
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
    },
  },
  plugins: [],
};
