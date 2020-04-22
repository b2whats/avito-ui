module.exports = {
  entry: __dirname + '/client.tsx',
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}