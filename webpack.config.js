
module.exports = {
  entry: './app/app.es6',
  output: {
    filename: './dist/app.js',
  },
  resolve: {
    extensions: ["", ".js", ".es6"]
  },
  module: {
    loaders: [
      { test: /\.es6$/, loader: 'es6-loader' },
    ]
  }
};
