const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(base, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9090,
        compress: true
    }
})