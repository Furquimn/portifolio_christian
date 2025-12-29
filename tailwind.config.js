/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};
