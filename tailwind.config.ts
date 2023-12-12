import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Gabarito', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'spin-around-left': {
          '0%': {
            transform: 'rotate(0deg) translate(10px) translateX(0)',
          },
          '50%': {
            transform: 'rotate(180deg) translate(60px) translateX(50%)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(60px) translateX(0)',
          },
        },
        'spin-around-right': {
          '0%': {
            transform: 'rotate(0deg) translate(50px) translateX(0)',
          },
          '50%': {
            transform: 'rotate(180deg) translate(50px) translateX(50%)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(50px) translateX(0)',
          },
        },
      },
      animation: {
        'spin-around-left': 'spin-around-left 6s linear infinite offset-1s',
        'spin-around-right': 'spin-around-right 6s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
