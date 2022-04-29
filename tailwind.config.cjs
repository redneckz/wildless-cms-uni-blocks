const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ['2rem', '2.5rem'],
        title2: ['2.5rem', '3rem'],
      },
      colors: {
        brand: '#42ab44',
        'second-primary': '#7d7e7f',
        'second-light': '#f5f7f9',
        promo: '#f7f8c5'
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-.*/,
    },
  ],
};
