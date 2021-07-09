const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = (env, options) => ({
    entry: ['./src/index.tsx', './style/index.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new Dotenv()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@static': path.resolve(__dirname, 'static'),
            // '@actions': path.resolve(__dirname, 'src/actions'),
            // '@api': path.resolve(__dirname, 'src/api'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            // '@network': path.resolve(__dirname, 'src/network'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    watchOptions: { ignored: /node_modules/, aggregateTimeout: 300, poll: 500 },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'import-glob-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash].[ext]',
                    publicPath: '/static',
                },
            },
        ],
    },
})
