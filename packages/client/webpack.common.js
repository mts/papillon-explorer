/* eslint-disable */

// webpack.common.js - common webpack config

const LEGACY_CONFIG = 'legacy'
const MODERN_CONFIG = 'modern'

// node modules
const path = require('path')
const merge = require('webpack-merge')

// webpack plugins
const ManifestPlugin = require('webpack-manifest-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// config files
const pkg = require('./package.json')
const settings = require('./webpack.settings.js')

// Configure Babel loader
const configureBabelLoader = browserList => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'entry',
              targets: {
                browsers: browserList,
              },
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-syntax-dynamic-import',
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: true,
            },
          ],
          '@babel/plugin-transform-spread',
        ],
      },
    },
  }
}

// Configure Entries
const configureEntries = () => {
  let entries = {}
  for (const [key, value] of Object.entries(settings.entries)) {
    entries[key] = path.resolve(__dirname, settings.paths.src.base + value)
  }

  return entries
}

// Configure Font loader
const configureFontLoader = () => {
  return {
    test: /\.(ttf|eot|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  }
}

// Configure Manifest
const configureManifest = fileName => {
  return {
    fileName: fileName,
    basePath: settings.manifestConfig.basePath,
    map: file => {
      file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2')
      return file
    },
  }
}

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {
    root: path.resolve(__dirname, settings.paths.build.base),
    verbose: true,
    dry: false,
  }
}

// Configure Html webpack
const configureHtml = () => {
  return {
    title: 'Papillon Explorer Client',
  }
}

// The base webpack config
const baseConfig = {
  name: pkg.name,
  entry: configureEntries(),
  output: {
    path: path.resolve(__dirname, settings.paths.build.base),
    // publicPath: settings.urls.publicPath
  },
  module: {
    rules: [configureFontLoader()],
  },
  plugins: [new CleanWebpackPlugin(settings.paths.build.clean, configureCleanWebpack()), new HtmlWebpackPlugin(configureHtml())],
}

// Legacy webpack config
const legacyConfig = {
  module: {
    rules: [configureBabelLoader(Object.values(pkg.browserslist.legacyBrowsers))],
  },
  plugins: [new ManifestPlugin(configureManifest('manifest-legacy.json'))],
}

// Modern webpack config
const modernConfig = {
  module: {
    rules: [configureBabelLoader(Object.values(pkg.browserslist.modernBrowsers))],
  },
  plugins: [new ManifestPlugin(configureManifest('manifest.json'))],
}

// Common module exports
module.exports = {
  legacyConfig: merge(legacyConfig, baseConfig),
  modernConfig: merge(modernConfig, baseConfig),
}

/* eslint-enable */
