const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const path = require("path");

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",

    host: host,
    port: port,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },

    contentBase: './build',
    hot: true
  },
});

exports.output = () => ({
  output: {
    path: path.join(__dirname, './build'),
    filename: 'papillon-explorer-client.js',
  },
});

exports.pluginsDevelop = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: "Papillon Explorer Client",
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
});

exports.pluginsRelease = () => ({
  plugins: [
    new DotEnvPlugin({
      path: path.resolve(__dirname, './.env')
    }),
    new HtmlWebpackPlugin({
      title: "Papillon Explorer Client",
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
});

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        use: "babel-loader",
      },
    ],
  },
});

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path])],
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
    ],
  },
});
