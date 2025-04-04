const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3003/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "cards",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/index.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^17.0.1" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.1" },
        "react-router-dom": { singleton: true, requiredVersion: "^5.2.0" },
      },
    }),
  ],
  devServer: {
    port: 3003,
    historyApiFallback: true,
  },
};
