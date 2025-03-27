/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        linkedinOrange: "#E68523",
        primary: "#E68523",
        secondary: "#0A66C2",
      },
      fontFamily: {
        linkedin: [
          "Source Sans Pro",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundColor: {
        light: "#FFFFFF",
        dark: "#1D2226",
      },
      textColor: {
        light: "#000000",
        dark: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
