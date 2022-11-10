const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '46': '11.5rem',
        '108': '27rem',
        '112': '28rem',
        '132': '33rem',
        '152': '38rem',
        '160': '40rem',
        '224': '56rem',
        '1/5': '20%'
      },
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
