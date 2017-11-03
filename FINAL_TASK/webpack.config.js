var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV;
var webpack = require('webpack');

module.exports = {
    entry: './js/start.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'build.js',
      library: "app"
    },

    watch: false,

    devtool: "source-map",

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["es2015"]
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },

    resolve: {
      modules: ['node_modules'],
    },

    plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack app',
        template: 'index.html'
      })
    ]
};


if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: true
    })
  )
};

