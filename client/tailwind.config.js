/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        lm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "2560px",
      },
      fontFamily: {
        heading:["Poppins", "sans-serif"],
        body:["Inter", "sans-serif"],
      },
      fontSize:{
        hero: "3rem",
        heroP: "2rem",
        heading: "2.25rem",
        textsm: "0.875rem",
        ctatxt: "0.875rem",
      },
    },
  },
  plugins: [],
}