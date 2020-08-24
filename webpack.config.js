path = require("path");

module.exports = {
  entry: "./src/breadcrumbs.js",
  output: {
    library: "VueDHBreadcrumbs",
    libraryTarget: "umd",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
};
