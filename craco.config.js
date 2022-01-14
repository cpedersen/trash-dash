const path = require('path')
const cracoAlias = require('craco-alias')
const postcssConfig = require('./postcss.config')

module.exports = {
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/'),
  //   },
  // },
  style: {
    postcss: postcssConfig,
    /*postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },*/
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}
