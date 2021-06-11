const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/*.{vue,js}', './src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      warmGray: colors.warmGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
      trueGray: colors.trueGray,
      white: colors.white,
      green: colors.green,
      red: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
