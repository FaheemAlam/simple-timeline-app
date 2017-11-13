var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': './client/app.js',
    'stylesheet': './client/styles.scss'
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,

        loaders: ['to-string-loader'].concat(ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader', query: {modules: false, sourceMaps: false}},
            {loader: 'sass-loader', query: {sourceMaps: true}}
          ]
        }))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'client/assets')}
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    })
  ],
  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  }
};
