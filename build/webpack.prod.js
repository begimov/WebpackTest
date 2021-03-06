const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = require('../config/prod.env')

module.exports = merge(base, {
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        }),
        new ExtractTextPlugin({
            filename: '../dist/css/app.css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                map: {
                    inline: false
                }
            }
        })
    ]
})