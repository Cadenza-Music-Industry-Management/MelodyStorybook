/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "melody-",
  content: [
    "./**/*.{html,js,jsx,ts,tsx}"
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#0C192C',
          '200': '#1B3B6B',
          '300': '#2A63B6'
        },
        'secondary': {
          '100': '#9F8560',
          '200': '#DBAB67',
          '300': '#F3CA91'
        },
        'accent': {
          '100': '#ABDDE5',
          '200': '#73ECFF',
          '300': '#ABDDE5'
        },
        black: {
          0: '#000000',
          100: '#707070',
          200: '#424242',
          300: '#323232',
          400: '#242424',
          500: '#181818',
          600: '#0a0a0a',
          700: '#040404'
        },
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
