/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#512B81",
        "dark-green":"#35155D",
        "primary":"#F0F0F0",
        "secondary":"#1e1e1e",
      },
      fontFamily:{
        "inter":"Inter",
        "koulen":"Koulen",
      },
      backgroundImage:{
        "pattern":"url('/pattern.png')",
        "pattern-new":"url('/pattern2.png')",
        "bg-one":"url('/bg.png')",
        "bg-two":"url('/bg-2.png')",
      }
    },
  },
  plugins: [],
}