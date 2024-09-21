/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": " 0px 0px 5px rgba(0, 0, 0)",
        "5xl": " 0px 0px 15px rgba(0, 0, 0)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      width:{
        "3xl": "55rem",
        "300" : "300px",
        "600" : "600px",

      },

      height:{
        "600" : "600px",
        "300" : "300px",
      }
    },
  },
  plugins: [
  ],
};
