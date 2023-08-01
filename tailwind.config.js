/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'xmd': '768px',
      'max-xmd': { max: '1280px' },
      'md': '1280px',
      'lg': '1440px',
      'xl': '1920px'
    }
  },
  plugins: [],
}
