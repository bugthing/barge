var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/app.js'],
    test: ['./spec/BargeSpec.js', './spec/SuitesSpec.js']
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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {  presets: ['es2015', 'react', 'stage-0'], plugins: ['transform-decorators-legacy' ] } },
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
      chunks: ['test'],
      filename: 'test.html',
      template: 'app/test_template.html',
      inject: 'body'
    })
  ]
};
