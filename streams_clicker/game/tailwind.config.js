module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7f5', 
          100: '#ffeeeb', 
          200: '#fed5ce', 
          300: '#febcb1', 
          400: '#fd8976', 
          500: '#fc573b', 
          600: '#e34e35', 
          700: '#bd412c', 
          800: '#973423', 
          900: '#7b2b1d'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
