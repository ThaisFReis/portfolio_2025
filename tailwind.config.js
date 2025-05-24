/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      coral: "#FF6B6B",
      pinkAccent: "#D9A5B3",
      lavender: "#B3A5D9",
      background: "#1E1E2F",
      textPrimary: "#CFCFD5",
    },
    screens: {
      mobile: "410px",
      tablet: "783px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
        lora: ["Lora", "serif"],
        imFell: ["IM Fell English", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 4px 20px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
