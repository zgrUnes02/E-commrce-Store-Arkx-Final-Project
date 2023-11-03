/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
    },
    fontFamily: {
      title: "'Archicoco', sans-serif",
      text: "'Poppins', sans-serif" 
    }
  },
  plugins: [
    require("daisyui")
  ],
}

