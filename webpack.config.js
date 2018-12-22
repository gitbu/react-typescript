const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendor: ['antd/dist/antd.min.css'],
    app: './index.tsx'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    filename: '[name].boudle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [/* 'babel-loader?cacheDirectory', */ 'awesome-typescript-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  }
};