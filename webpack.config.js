var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/app.js']
  },
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Barge',
    template: 'app/index_template.html',
    inject: 'body'
  })]
};
