const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    server: './app/app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  target: 'node'
}