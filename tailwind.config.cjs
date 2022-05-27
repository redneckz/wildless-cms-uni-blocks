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
        primary: {
          main: 'var(--color-primary-main)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          // Text
          text: '#1C1C1C',
        },
        secondary: {
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
          // Gray
          light: '#F5F7F9',
          dark: '#E2E4E5',
          // Text
          text: '#7D7E7F',
        },

        // Deprecated. // TODO: Remove this shit
        //secondary: '#9FA79F',
        //'secondary-hover': '#E5F3E5',
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
