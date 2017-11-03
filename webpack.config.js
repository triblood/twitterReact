var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[local]'
                }
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ]
}