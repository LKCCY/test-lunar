const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3002
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
        name: "app2",
        library: { type: "var", name: "app2" },
        filename: "remoteEntry.js",
        exposes: {
            './Print':'./src/Print'
        },
        shared: []
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3002/"
  }
};