/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#003366" /* Blue */,
        primary: "#003366" /* Blue */,
        bgSecondary: "#003eaa" /* Yellow */,
        bgTertiary: "#313638" /* Black */,
      },
    },
  },
  plugins: [require("daisyui")],
};
