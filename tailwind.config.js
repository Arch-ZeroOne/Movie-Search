/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
