const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: {
        vendor: [
          'react',
          'react-dom'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", 
            filename: "[name].build.js"
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: true
        })
    ]
});