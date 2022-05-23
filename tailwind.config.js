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
        "1frAutoAuto": "1fr auto auto",
      },
      maxWidth: {
        cardWidth: "300px",
        cardImgWidth: "200px",
      },
      backgroundImage: {
        correctImg: "url(/src/assets/correct.svg)",
        hero: "url(/src/assets/herobanner.png)",
      },
    },
  },
  plugins: [],
};
