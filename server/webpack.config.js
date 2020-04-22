module.exports = {
  entry: __dirname + '/client.tsx',
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        sideEffects: false,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        sideEffects: false,
      },
    ],
  },
  mode: 'production',
  stats: {
    modules: false,
  },
}