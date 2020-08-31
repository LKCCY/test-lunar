const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        './ElButton':'./src/components/ElButton.vue'
      },
      shared: { vue: { eager: true }}
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".vue", ".js"],
  },
  output: {
    publicPath: "http://localhost:4000/"
  }
};