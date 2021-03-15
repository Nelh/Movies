const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'production';

module.exports = {
  mode,

  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    publicPath: "assets/dist"
  },

  resolve: {
    extensions: ['.css', '.scss'],
  },

  entry: {
    "style": './assets/scss/index.scss',
    "script": './assets/js/index.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}