const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = () => {

    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: 'inline-source-map',
        devServer: {
            open: true,
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }

};
