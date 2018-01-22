const webpack = require('webpack')

process.env.NODE_ENV = 'prod'

const config = require('./webpack.prod')

webpack(config, function (err, stats) {
    //
})