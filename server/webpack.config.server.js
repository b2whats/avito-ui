const path = require('path')

module.exports = {
  target: 'node',
  entry: __dirname + '/server.js',
  output: {
    filename: 'server.js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: [
          /node_modules\/@avito/,
          path.resolve(__dirname),
        ],
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
        //sideEffects: false,
      },
    ],
  },
  mode: 'development',
  stats: {
    modules: false,
  },
}
