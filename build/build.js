process.env.NODE_ENV = 'prod'

const webpack = require('webpack')
const config = require('./webpack.prod')
const ora = require('ora')

const spinner = ora('Building for production').start()

webpack(config, function (err, stats) {
    spinner.stop()

    if (err) {
        throw err
    }
})