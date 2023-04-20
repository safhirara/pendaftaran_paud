/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2152",
        primary2: "#FEE771",
        bgPrimary: "rgba(44, 33, 82, 0.8)"

      }
    },
  },
  plugins: [],
}