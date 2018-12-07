const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
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

exports.plugins = () => ({
  plugins: [
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
        // ### Loading CSS
        {
          test: /\.css$/,
          include,
          exclude,

          use: [
            "style-loader",
            "css-loader",
            // ### PostCSS
            {
              loader: "postcss-loader",
              options: {
                // ### PostCSS
                // plugins: () => ([
                //   require("autoprefixer"),
                //   require("precss"),
                // ]),
                // ### cssnext
                plugins: () => [require("postcss-cssnext")()],
              },
            },
          ],
        },
        // ### Loading Less
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        // ### Loading Sass
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // ### Loading Stylus and Yeticss
        {
          test: /\.styl$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "stylus-loader",
              options: {
                use: [require("yeticss")],
              },
            },
          ],
        },
    ],
  },
});
