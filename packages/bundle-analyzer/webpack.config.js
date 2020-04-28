const path = require('path')
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  entry: {
    mobile: path.join( __dirname, '../mobile-components/src/index.ts'),
    web: path.join(__dirname, '../web-components/src/index.ts'),
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      },
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new Visualizer()],
  externals: {
    'react': 'React',
  },
}
