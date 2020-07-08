module.exports = {
  entry: __dirname + '/client.tsx',
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
        //sideEffects: false,
      },
    ],
  },
  mode: 'production',
  stats: {
    modules: false,
  },
}
