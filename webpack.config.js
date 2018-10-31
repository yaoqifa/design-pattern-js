const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 9000
  }
}