/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Sansita One"', "cursive"], // الخط الأساسي
      },
      colors: {
        primary: "#030915", // اللون الأساسي
        secondary: "#0E317D", // اللون الثانوي
        white: "#ffffff", // الأبيض
      },
    },
  },
};
