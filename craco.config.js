const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  style: {
    postcss: {
      plugins: [
        require('stylelint')({
          configFile: 'stylelint.config.js',
        }),
        require('postcss-extend'),
        require('precss'),
        require('postcss-preset-env'),
        // uncomment if you're using Tailwind
        require('tailwindcss')('tailwind.config.js'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-reporter'),
      ],
    },
  },
}
