const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js', // Our file entry point
  output: {
    path: path.resolve(__dirname, './build'), // Our bundle file output point
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    host: 'localhost', // devServer on localhost:8080
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './build'), // matching the Output point
      publicPath: '/', // matching the Output 'publicPath'
    },
    proxy: {
      '/api/**': { // proxy-ing any api calls from the client(8080) to the Express server(3000)
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''}, // removes the 'api' from the URL
      }
    },
    open: true, // "Tells dev-server to open the browser after server had been started. Set it to true to open your default browser."
    headers: {'Access-Control-Allow-Origin': '*' } // Included this header to try to prevent the CORS error from happening
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, // Looking for any .js or .jsx files, and if found:
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // use the babel transpiler to:
          options: {
            presets: [
              '@babel/preset-env', // compile down all modern JS code to any version required by the browser (backwards compatibility)
              '@babel/preset-react' // compile down all JSX code to JS so that it can be understood by the browser
            ],
          }
        }
      },
      {
        test: /.(css|scss)$/i, // Looking for any .css or .sass files, and if found:
        exclude: /node_modules/, // except! anything in our 'node_modules' folder...
        use: [
          'style-loader', // takes CSS imported in JS files and injects them into the DOM
          'css-loader', // reads any CSS 'import' in index.js and resolves it
          'sass-loader', // reads any SASS 'import' in index.js and resolves it
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Looking for any .png, .jpg, .jpeg, or .gif files, and if found:
        exclude: /node-modules/, // except! anything in our 'node_modules' folder...
        use: [
          'file-loader' // import these media files to the JS code in the build
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // Generates an HTML file based on the template we pass in to serve our webpack files
      filename: 'index.html',
      template: './client/index.html' // which in this case, the template is our own 'index.html' file
    })
  ],
  resolve: {
    extensions: [ // Enable importing .js and .jsx files without specifying their extension
      '.js',
      '.jsx'
    ],
  }
};