const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [{loader: "style-loader",}, {
          loader: "css-loader",
          options: {importLoaders: 1, modules: {mode: "icss",},},
        }, {loader: "sass-loader",},],
      },
      {
        test: /\.module\.scss$/i,
        use: [{loader: "style-loader",}, {
          loader: "css-loader",
          options: {importLoaders: 1, modules: {mode: "local",},},
        }, {loader: "sass-loader",},],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}