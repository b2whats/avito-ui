const path = require('path')

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper')
  },
  components: 'packages/components/src/components/**/[A-Z]*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: {
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ],
      mainFields: ['browser', 'module', 'main']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  }
}