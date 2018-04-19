const webpack = require('webpack')

module.exports = {
  entry: "./app.js",
  mode: 'production',
  cache: false,
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ejs$/, loader: require.resolve("../") + "?htmlmin"}
    ]
  }
}
