const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin")

module.exports = {
  mode: "development",
  entry: { index: "./src/index.js" },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Breathe",
      template: "./src/template.ejs",
    }),
    new HtmlWebpackInlineSVGPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
    publicPath: "/",
  },
}
