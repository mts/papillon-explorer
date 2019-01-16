/* eslint-disable */

// webpack.dev.js - development builds

const LEGACY_CONFIG = 'legacy'
const MODERN_CONFIG = 'modern'

// node modules
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

// webpack plugins
const DotEnvPlugin = require('dotenv-webpack')

// config files
const common = require('./webpack.common.js')
const pkg = require('./package.json')
const settings = require('./webpack.settings.js')

// Configure the webpack-dev-server
const configureDevServer = buildType => {
  return {
    public: settings.devServerConfig.public(),
    host: settings.devServerConfig.host(),
    port: settings.devServerConfig.port(),
    https: !!parseInt(settings.devServerConfig.https()),
    hot: true,
    hotOnly: true,
    overlay: true,
    stats: 'errors-only',
    watchOptions: {
      poll: !!parseInt(settings.devServerConfig.poll()),
      ignored: /node_modules/,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

// Configure Image loader
const configureImageLoader = buildType => {
  if (buildType === LEGACY_CONFIG) {
    return {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash].[ext]',
          },
        },
      ],
    }
  }
  if (buildType === MODERN_CONFIG) {
    return {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash].[ext]',
          },
        },
      ],
    }
  }
}

// Configure the Postcss loader
const configurePostcssLoader = buildType => {
  // Don't generate CSS for the legacy config in development
  if (buildType === LEGACY_CONFIG) {
    return {
      test: /\.(scss|css)$/,
      loader: 'ignore-loader',
    }
  }
  if (buildType === MODERN_CONFIG) {
    return {
      test: /\.(scss|css)$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
        },
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [require('postcss-cssnext')()],
          },
        },
      ],
    }
  }
}

// Development module exports
module.exports = [
  // merge(
  //     common.legacyConfig,
  //     {
  //         output: {
  //             filename: path.join('./js', '[name]-legacy.[hash].js'),
  //             publicPath: settings.devServerConfig.public() + '/',
  //         },
  //         mode: 'development',
  //         devtool: 'inline-source-map',
  //         devServer: configureDevServer(LEGACY_CONFIG),
  //         module: {
  //             rules: [
  //                 configurePostcssLoader(LEGACY_CONFIG),
  //                 configureImageLoader(LEGACY_CONFIG),
  //             ],
  //         },
  //         plugins: [
  //             new webpack.HotModuleReplacementPlugin(),
  //             new DotEnvPlugin({
  //               path: path.resolve(__dirname, './.env.develop')
  //             }),
  //         ],
  //     }
  // ),
  merge(common.modernConfig, {
    output: {
      filename: path.join('./js', '[name].[hash].js'),
      publicPath: settings.devServerConfig.public() + '/',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: configureDevServer(MODERN_CONFIG),
    module: {
      rules: [configurePostcssLoader(MODERN_CONFIG), configureImageLoader(MODERN_CONFIG)],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DotEnvPlugin({
        path: path.resolve(__dirname, './.env.develop'),
      }),
    ],
  }),
]

/* eslint-enable */
