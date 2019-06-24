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
      alias: {
        "@avito/components": path.resolve(__dirname, 'packages/components/src'),
        "@avito/tokens": path.resolve(__dirname, 'packages/tokens/src'),
      },
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