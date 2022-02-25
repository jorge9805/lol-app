module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // change the responsive breakpoints
    screens: {
      sm: "640px",
      md: "1048px",
      xl: "1280px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
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
