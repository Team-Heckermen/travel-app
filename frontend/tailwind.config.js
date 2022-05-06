module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "925px",
    },
    borderWidth: {
      0.5: "0.5px",
    },
    extend: {
      colors: {
        custom: "#15202b",
      },
      inset: {
        "5%": "5%",
      },
      height: {
        "90%": "90%",
        "75%": "75%",
        "70%": "70%",
        "50%": "50%",
      },
      width: {
        "3%": "3%",
        "20%": "20%",
        "30%": "30%",
        "47.5%": "47.5%",
        "50%": "50%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "95%": "95%",
        "98%": "98%,",
      },
      margin:{
        "5%":"5%", 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
