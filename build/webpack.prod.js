const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin()
    ]
})