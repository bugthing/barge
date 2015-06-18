var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/app.js'],
    test: './spec/BargeSpec.js'
  },
  output: {
    path: 'dist',
    filename: '[name]_bundle.js',
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
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      title: 'Barge',
      template: 'app/index_template.html',
      files: { js: [ 'app_bundle.js' ] },
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      chunks: ['app', 'test'],
      filename: 'test.html',
      template: 'app/test_template.html',
      inject: 'body'
    })
  ]
};
