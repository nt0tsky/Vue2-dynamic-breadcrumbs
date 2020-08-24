path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    library: "VueDynamicBreadcrumbs",
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
