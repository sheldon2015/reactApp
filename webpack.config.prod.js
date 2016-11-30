const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: ['./index.jsx']

    },
    output: {
        path: 'prod/dist', //打包生成目录
        filename: '[name].js',
        chunkFilename: '[name].js'

    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack
            .optimize
            .DedupePlugin(),
        new webpack
            .optimize
            .OccurrenceOrderPlugin(),
        new webpack
            .optimize
            .UglifyJsPlugin({
                compress: {
                    warnings: false

                },
                output: {
                    comments: false

                }
            })

    ],

    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!less'

            }, {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1000"
            }

        ]

    },

    resolve: {
        root: [path.resolve('./src')],
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    }

}