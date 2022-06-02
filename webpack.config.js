const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-bundle.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.s[ac]ss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.png$/, type: 'asset/resource' }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // devServer: {
  //   historyApiFallback: true
  // }
}