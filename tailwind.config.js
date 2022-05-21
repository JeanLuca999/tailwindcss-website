module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#359756",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      gridTemplateRows: {
        auto1Fr: "auto 1fr",
      },
    },
  },
  plugins: [],
};
