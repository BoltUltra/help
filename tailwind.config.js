/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "420px",
      
      md: "768px",
      
      lg: "1024px",
     
      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2B4E8C",
        background: "#292E36",
        accent: "#FFF8F5",
        paragraph: "#555555",
        turquoise: "#0ecfe5",
      },
    },
  },
  plugins: [],
};
