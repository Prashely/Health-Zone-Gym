/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#003366" /*Dark Blue */,
        primary: "#6286c7" /*Light Blue */,
        bgSecondary: "#edb634" /* Yellow */,
        bgTertiary: "#313638" /* Black */,
      },
    },
  },
  plugins: [require("daisyui")],
};
