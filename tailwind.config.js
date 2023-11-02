/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#009CDE",
        "primary-dark": "#00426A",
        "accent-red": "#FF422E",
        "accent-green": "#00DA44",
        "accent-light-green": "#C4D600",
        "accent-pink": "#A50050",
        "base-200": "#F5F5FB",
        "base-300": "#E2E7F0",
        "base-400": "#A0ABC0",
        "base-500": "#717D96",
      },
    },
  },
  plugins: [],
};
