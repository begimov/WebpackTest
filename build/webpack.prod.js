const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 'style-loader',
    //                 {
    //                     loader: 'css-loader',
    //                     options: {
    //                         minimize: true
    //                     }
    //                 },
    //                 'sass-loader'
    //             ]
    //         }
    //     ]
    // }
})