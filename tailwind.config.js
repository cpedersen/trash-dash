const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
