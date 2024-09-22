/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "biru-1": "#012a4a",
        "biru-2": "#013a63",
        "biru-3": "#01497c",
        "biru-4": "#014f86",
        "biru-5": "#2a6f97",
        "biru-6": "#2c7da0",
        "biru-7": "#468faf",
        "biru-8": "#61a5c2",
        "biru-9": "#89c2d9",
        "biru-10": "#a9d6e5",
      },

      fontFamily: {
        Helvetica: ['"Helvetica"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
