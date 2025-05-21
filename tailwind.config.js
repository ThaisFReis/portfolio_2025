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
        heading: ["Poppins", "sans-serif"], // Fonte para títulos
        body: ["Roboto", "sans-serif"], // Fonte para textos
        quicksand: ["Quicksand", "sans-serif"], // Fonte Quicksand
        josefin: ["Josefin Sans", "sans-serif"], // Fonte Josefin Sans
        ubuntu: ["Ubuntu", "sans-serif"], // Fonte Ubuntu
        sourceSans: ["Source Sans 3", "sans-serif"], // Fonte Source Sans 3
        crimson: ["Crimson Text", "serif"], // Fonte Crimson Text
        lora: ["Lora", "serif"], // Fonte Lora
        imFell: ["IM Fell English", "serif"], // Fonte IM Fell English
        bebas: ["Bebas Neue", "sans-serif"], // Fonte Bebas Neue
        sans: ['"Inter"', "sans-serif"],
      },
    },
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
      glass: '0 4px 20px rgba(255, 255, 255, 0.1)',
    },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
