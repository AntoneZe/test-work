const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][fullhash].js",
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "public",
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/plugin-syntax-jsx",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CleanWebpackPlugin(),
  ],
};
