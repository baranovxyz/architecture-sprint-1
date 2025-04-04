const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3000/",
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
      name: "shell",
      remotes: {
        auth: "auth@http://localhost:3001/remoteEntry.js",
        profile: "profile@http://localhost:3002/remoteEntry.js",
        cards: "cards@http://localhost:3003/remoteEntry.js",
        common_ui: "common_ui@http://localhost:3004/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^17.0.1" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.1" },
        "react-router-dom": { singleton: true, requiredVersion: "^5.2.0" },
      },
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
