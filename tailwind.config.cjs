const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  corePlugins: {
    filter: false,
  },
  theme: {
    screens: {
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'opacity-to-white':
          'linear-gradient(270deg, #FFFFFF 34.89%, rgba(255, 255, 255, 0) 92.52%);',
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ['0.625rem', '0.625rem'], // 10px 10px
        xs: ['0.75rem', '1.125rem'], // 12px 18px
        sm: ['0.875rem', '1.375rem'], // 14px 22px
        lg: ['2.188rem', '3rem'], // 35px 48px
        base: ['1rem', '1.5rem'], // 16px 24px
        'title-sm': ['1.75rem', '2.5rem'], //28px 40px
        'title-xs': ['1.5rem', '1.875rem'], //24px 30px
        title: ['2rem', '2.5rem'], //32px 40px
        'title-lg': ['2.5rem', '3rem'], //40px 48px
      },
      colors: {
        main: {
          DEFAULT: 'rgba(240, 244, 240, <alpha-value>)',
          divider: 'rgba(235, 237, 240, <alpha-value>)',
          gradient: {
            start: 'rgba(var(--color-gradient-from), <alpha-value>)',
            end: 'rgba(var(--color-gradient-to), <alpha-value>)',
          },
          stroke: 'rgba(201, 202, 204, <alpha-value>)',
        },
        primary: {
          main: 'rgba(var(--color-primary-main), <alpha-value>)',
          hover: 'rgba(var(--color-primary-hover), <alpha-value>)',
          active: 'rgba(var(--color-primary-active), <alpha-value>)',
          // Text
          text: 'rgba(28, 28, 28, <alpha-value>)',
        },
        secondary: {
          hover: 'rgba(var(--color-secondary-hover), <alpha-value>)',
          active: 'rgba(var(--color-secondary-active), <alpha-value>)',
          // Gray
          light: 'rgba(245, 247, 249, <alpha-value>)',
          dark: 'rgba(226, 228, 229, <alpha-value>)',
          // Text
          text: 'rgba(125, 126, 127, <alpha-value>)',
        },
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      animation: {
        slide: 'progress linear', //TODO: I'm not sure, but it doesn't seem to be used. Need to check
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
  safelist: [],
};
