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
      },
      {
        test: /\.(ico)$/,
        use: "file-loader?name=assets/[name].[ext]"
      }
    ]
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/S3-Files"),
    filename: "bundle.min.[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  devServer: {
    port: 9999,
    host: "0.0.0.0",
    historyApiFallback: true
  }
};
