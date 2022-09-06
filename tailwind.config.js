module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        gray: {
          950: "#6D6D6D",
          1000: "#696969",
          1050: "#4A4A4A",
          1100: "#E5E5E5",
          1150: "#E5E5E5",
          1200: "#818181",
          1250: "#C4C4C4",
          1300:"#4A4A4A",
          1350:"#F8F8F8",
          1400:"#262626",
          1450:"#F3F3F3",
          1500:'#272727',
          1550:"#8A8A8A"
        },
        blue: {
          950: "#014E9C",
        },
        yellow: {
          950: "#FFC700",
          1000: "#E76F00",
          1050:"#33A0FF"
        },
        red: {
          950: "#EC0000",
        },
      },
    },
  },
  plugins: [],
};
