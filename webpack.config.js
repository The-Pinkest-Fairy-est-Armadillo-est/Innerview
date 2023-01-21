const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './build'),
      publicPath: '/',
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''},
        secure: false,
      }
    },
    open: true, // "Tells dev-server to open the browser after server had been started. Set it to true to open your default browser."
    headers: {'Access-Control-Allow-Origin': '*' }
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ],
          }
        }
      },
      {
        test: /.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node-modules/,
        use: [
          'file-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './client/index.html'
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  }
};