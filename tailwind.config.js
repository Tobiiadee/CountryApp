/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%), opacity: 0"},
          "100%": { transform: "translateX(100%), opacity: 1"},
        },
        animation: {
          slide: "slide 500ms ease-in-out forwards"
        }
      },
      colors: {
        gray1: "#848484",
        vdBlue: "#0e1315",
        primary: {
          1: "#ffffff",
          2: "#fafafa",
        },
        secondary: {
          1: "#1e303b",
          2: "#19282b",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};

