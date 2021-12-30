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
