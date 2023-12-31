/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      r01: ["Poppins", "sans-serif"],
      form: ["Work Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        form: 'url("./src/assets/form/background-image.jpg")',
      },
    },
  },
  plugins: [],
};
