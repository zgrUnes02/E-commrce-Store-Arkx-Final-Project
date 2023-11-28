/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: "'Archicoco', sans-serif",
      poppins: "'Poppins', sans-serif",
      text2: "'Londrina Outline', sans-serif;",
    },
  },
  plugins: [],
};
