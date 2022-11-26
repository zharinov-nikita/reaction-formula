const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.(ts)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
}