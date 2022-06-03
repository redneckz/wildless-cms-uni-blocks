const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'title-xs': ['1.5rem', '1.875rem'], //24px 30px
        'title-xsm': ['0.75rem', '1.125rem'], // 12px 18px
        'text-xs': ['0.75rem', '1.125rem'], // 12px 18px
        'text-sm': ['0.875rem', '1.375rem'], // 14px 22px
        'text-base': ['1rem', '1.25rem'], // 16px 20px
        'title-sm': ['1.75rem', '2.5rem'], //28px 40px
        title: ['2rem', '2.5rem'], //32px 40px
        'title-lg': ['2.5rem', '3rem'], //40px 48px
      },
      colors: {
        main: {
          DEFAULT: '#F0F4F0',
          divider: '#EBEDF0',
        },
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
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      animation: {
        slide: 'progress linear',
      },
      keyframes: {
        progress: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    ...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`), // grid-cols-{1..12}, for ProductGallery block
  ],
};
