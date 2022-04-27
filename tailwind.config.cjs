const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#42ab44',
        'second-primary': '#7d7e7f',
        'second-light': '#f5f7f9',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /col-.*/
  }]
};
