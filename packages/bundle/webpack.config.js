const path = require('path')
const babelConfig = require('../../babel.config')

module.exports = {
  entry: {
    mobile: path.join( __dirname, '../mobile-components/src/index.ts'),
    web: path.join(__dirname, '../web-components/src/index.ts')
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      use: {
        loader: 'babel-loader',
        options: babelConfig
      }
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    'react': 'React'
  }
}
