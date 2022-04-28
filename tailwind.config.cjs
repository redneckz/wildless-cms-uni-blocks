const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ['2rem', '2.5rem'],
      },
      colors: {
        brand: '#42AB44',
        'second-primary': '#7D7E7F',
      },
    },
  },
  plugins: [],
};
