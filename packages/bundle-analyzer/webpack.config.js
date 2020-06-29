const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Visualizer = require('webpack-visualizer-plugin')

const path = require('path')

module.exports = {
  entry: {
    mobile: path.join(__dirname, '../mobile-components/src/index.ts'),
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
  plugins: [
    new Visualizer(),
    // new BundleAnalyzerPlugin(),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'React',
  },
}
