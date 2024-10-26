/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#373790" /* Blue */,
        bgSecondary: "#fdf02e" /* Yellow */,
        bgTertiary: "#313638" /* Black */,
      },
    },
  },
  plugins: [require("daisyui")],
};
