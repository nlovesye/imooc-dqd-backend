const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { APP_PATH, DIST_PATH, resolve } = require("./util");

const webpackconfig = {
  // target: "node",
  externalsPresets: { node: true },
  entry: {
    server: path.join(APP_PATH, "index.js"),
  },
  resolve: {
    alias: {
      "@": APP_PATH,
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [resolve("/node_modules")],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: ["prod", "production"].includes(process.env.NODE_ENV)
          ? "'production'"
          : "'development'",
      },
    }),
  ],
};

module.exports = webpackconfig;
