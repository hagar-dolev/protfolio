/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/pages/*.{html,js}",
    "./src/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "oswold-g": ["Oswald"],
        aboreto: ["Aboreto"],
      },
    },
  },
  plugins: [],
};
