var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app/app.es6',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ["", ".js", ".es6"]
  },
  module: {
    loaders: [
      { test: /\.es6$/, loader: 'es6-loader' },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [new HtmlWebpackPlugin({title: 'Barge'})]
};
