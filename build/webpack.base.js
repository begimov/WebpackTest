const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: process.env.NODE_ENV === 'prod'
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // babelrc: false,
                            // presets: ['@babel/preset-env'],
                            // plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                ]
            }
        ]
    }
}