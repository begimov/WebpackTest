const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src'),
            'styles': path.join(__dirname, '../src/assets/styles'),
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.less$/,
            //     use: ['style-loader', 'css-loader', 'less-loader']
            // },
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