const webpack = require('webpack');
const path = require('path');

const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle: ['./src/index.jsx']

    },
    output: {

        filename: '[name].js',
        publicPath: '/dist/',
        chunkFilename: '[name].js'

    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:3000',
            browser: 'chrome',
            ignoreErrors: true
        }),
        new ExtractTextPlugin("name.css")
    ],

    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
        contentBase: __dirname
    },



    module: {

        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', "css!postcss!less")

            },
            //如果图片的资源大小大于limit在外部引入，不然就声称data urls嵌入
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1000"
            }

        ]

    },

    resolve: {
        root: [path.resolve('./src'), path.resolve('./src')], //loader resolve 资源的路径
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },
    devtool: "source-map" //生成sourcemap文件

}
