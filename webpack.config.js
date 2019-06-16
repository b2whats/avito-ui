const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';
const ANALYZE = process.env.ANALYZE;

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  mode: isProduction ? 'production' : 'development',
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
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: (() => {
    let plugins = [
      new HtmlWebpackPlugin({
        template: './src/index.html'
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