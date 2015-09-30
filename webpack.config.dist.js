var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var rimraf = require('rimraf');
var path = require('path');

module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        path: "./dist",
        filename: "[name].[hash].bundle.js"
    },
        externals: {
        // don't include React in the bundle. Use a CDN for this.
        'react': 'React'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'src/index.html',
            inject: 'body'
        }),
        function() {
            rimraf.sync('./dist/');
        }
    ],
     module: {
        loaders: [
            // any React files need to have /** @jsx React.DOM */ as the first line in the file
            {
              test: /\.js$/,
              loaders: ['babel'],
              include: path.join(__dirname, 'src')
            }
        ]
    }
};