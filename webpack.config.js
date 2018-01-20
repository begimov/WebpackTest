const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9090,
        compress: true
    }
}