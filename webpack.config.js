const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const ANALYZE = process.env.ANALYZE;

module.exports = {
  entry: {
    index: './server/index.jx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/'
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: (() => {
    let plugins = [
      new HtmlWebpackPlugin({
        template: './server/index.html'
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: false, // TODO: Set to true once resolve all current issues
        allowAsyncCycles: false,
        cwd: process.cwd()
      })
    ];

    if (ANALYZE) {
      plugins.push(
        new BundleAnalyzerPlugin({
          analyzerHost: '0.0.0.0'
        })
      );
    }

    return plugins;
  })()
};