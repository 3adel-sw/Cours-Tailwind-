/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ff3333",
        secondary: {
          100: "#9dc3ff",
          200: "#80a9ff",
          300: "#6690ff",
          400: "#4d76ff",
          500: "#3366ff",
          600: "#264dcd",
          700: "#1a337b",
          800: "#0d1d39",
          900: "#000000",
        },
      },
    },
    fontFamily: {
      bodyFont: ["Cairo", "sans-serif"],
    },
  },
  plugins: [],
};
