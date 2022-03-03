module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // change the responsive breakpoints
    screens: {
      sm: "780px",
      md: "1048px",
      lg: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      fira: ["Fira Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        gridlol: "repeat(auto-fill, minmax(280px, 1fr))",
      },
      animation: {
        fade: "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
