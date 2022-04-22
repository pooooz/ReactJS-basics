const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV === 'development';
const withReport = process.env.npm_config_withReport;

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'bundle.js',
    clean: true,
    path: path.resolve(__dirname, './build'),
    environment: {
      arrowFunction: false,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  devtool:
    process.env.NODE_ENV === 'production'
      ? 'hidden-source-map'
      : 'eval-source-map',
  devServer: {
    compress: true,
    port: 8000,
    client: {
      logging: 'info',
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(j|t)sx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'icss' } },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.module\.scss$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local' } },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...(withReport ? new BundleAnalyzerPlugin() : ''),
  ],
};
