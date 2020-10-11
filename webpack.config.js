const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/S3-Files"),
    filename: "bundle.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    port: 9999,
    host: "0.0.0.0",
    historyApiFallback: true
  }
};
