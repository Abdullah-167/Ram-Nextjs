module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#47c2b4",
        dark: "#454646",
        gray: "rgb(55, 56, 56)",
        grayLight: "rgb(38, 38, 38)",
      },
      boxShadow: {
        inner:
          "rgb(94, 219, 205) 4.4px 4.4px 22px 0px inset, rgb(56, 168, 155) -4.4px -4.4px 22px 0px inset",
        btnHover:
          "inset .2rem .2rem .5rem #38a89b,inset -0.2rem -0.2rem .5rem rgb(255 255 255 / 25%)",
        card: "rgb(246, 246, 246) 6.6px 6.6px 6.6px 0px, rgb(255, 255, 255) -4.4px -4.4px 6.6px 0px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
