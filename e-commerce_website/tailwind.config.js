/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      colors : {
        blacks : "#15161D"
      },
      fontSize : {
        xxs: '0.6rem',
      },
      fontFamily : {
        mont : "Montserrat,sans-serif"
      },
    },
  },
  plugins: [],
}

