const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ['1.75rem', '2.5rem'],
        title2: ['2.5rem', '3rem'],
      },
      colors: {
        main: '#F0F4F0',
        brand: '#42ab44',
        'primary-text': '#1c1c1c',
        secondary: '#9FA79F',
        'secondary-hover': '#E5F3E5',
        promo: '#f7f8c5',
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
