/* eslint-disable quote-props */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'main': '#734aea',
      'white': '#fff',
      'divider': '#e5eaf4',
    },
    borderColor: {
      'grey': '#c3cad9',
    },
    textColor: {
      'lightBlack': '#172939',
      'label': '#5A7184',
      'placeholder': '#959ead',
      'white': '#fff',
      'divider': '#183b56',
    },
    borderRadius: {
      'xxs': '0.8rem',
      's': '1.9rem',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    fontSize: {
      base: ['10px'],
      sm: ['15px'],
      lg: ['18px'],
      xl: ['36px'],
    },
    extend: {
      screens: (theme) => ({
        'xsm': '320px',
        ...theme.screens,
      }),
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
