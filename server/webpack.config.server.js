module.exports = {
  target: 'node',
  entry: __dirname + '/server.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        //sideEffects: false,
      },
    ],
  },
  mode: 'production',
  stats: {
    modules: false,
  },
}