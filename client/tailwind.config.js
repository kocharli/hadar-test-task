const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      'milano-red': '#C10708',
      'silver-chalice': '#A4A4A4'
    },
    borderColor: {
      'milano-red': '#C10708',
      'silver-chalice': '#A4A4A4'
    },
    height: {
      xl: '70px'
    },
    boxShadow: {
      DEFAULT: '2px 6px 10px #00000029'
    },
    borderWidth: {
      '0.5': '0.5px',
      '1': '1px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
