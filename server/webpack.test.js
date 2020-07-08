const path = require('path')

module.exports = {
  entry: [__dirname + '/src/test.js'],
  output: {
    filename: 'test.js',
    path: __dirname + '/build',
  },
  resolve: {
    //mainFields: ['main'],
    extensions: ['.js', '.json'],
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  //mode: 'production',
  //--display-reasons --progress
  stats: 'verbose',
}
