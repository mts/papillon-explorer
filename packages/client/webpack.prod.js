// webpack.prod.js - production builds

const LEGACY_CONFIG = 'legacy';
const MODERN_CONFIG = 'modern';

// node modules
const git = require('git-rev-sync');
const glob = require('glob-all');
const merge = require('webpack-merge');
const moment = require('moment');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// config files
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const settings = require('./webpack.settings.js');

// Configure file banner
const configureBanner = () => {
    return {
        banner: [
            '/*!',
            ' * @project        ' + settings.name,
            ' * @name           ' + '[filebase]',
            ' * @author         ' + pkg.author.name,
            ' * @build          ' + moment().format('llll') + ' ET',
            ' * @release        ' + git.long() + ' [' + git.branch() + ']',
            ' * @copyright      Copyright (c) ' + moment().format('YYYY') + ' ' + settings.copyright,
            ' *',
            ' */',
            ''
        ].join('\n'),
        raw: true
    };
};

// Configure Bundle Analyzer
const configureBundleAnalyzer = (buildType) => {
    if (buildType === LEGACY_CONFIG) {
        return {
            analyzerMode: 'disabled',
            reportFilename: 'report-legacy.html',
        };
    }
    if (buildType === MODERN_CONFIG) {
        return {
            analyzerMode: 'disabled',
            reportFilename: 'report-modern.html',
        };
    }
};

// Configure Image loader
const configureImageLoader = (buildType) => {
    if (buildType === LEGACY_CONFIG) {
        return {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash].[ext]'
                    }
                }
            ]
        };
    }
    if (buildType === MODERN_CONFIG) {
        return {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash].[ext]'
                    }
                },
                {
                    loader: 'img-loader',
                    options: {
                        plugins: [
                            require('imagemin-gifsicle')({
                                interlaced: true,
                            }),
                            require('imagemin-mozjpeg')({
                                progressive: true,
                                arithmetic: false,
                            }),
                            require('imagemin-optipng')({
                                optimizationLevel: 5,
                            }),
                            require('imagemin-svgo')({
                                plugins: [
                                    {convertPathData: false},
                                ]
                            }),
                        ]
                    }
                }
            ]
        };
    }
};

// Configure optimization
const configureOptimization = (buildType) => {
    if (buildType === LEGACY_CONFIG) {
        return {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    common: false,
                    styles: {
                        name: settings.vars.cssName,
                        test: /\.(scss|css)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            minimizer: [
                new TerserPlugin(
                    configureTerser()
                ),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true,
                        },
                        safe: true,
                        discardComments: true
                    },
                })
            ]
        };
    }
    if (buildType === MODERN_CONFIG) {
        return {
            minimizer: [
                new TerserPlugin(
                    configureTerser()
                ),
            ]
        };
    }
};

// Configure Postcss loader
const configurePostcssLoader = (buildType) => {
    if (buildType === LEGACY_CONFIG) {
        return {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                },
                {
                    loader: 'resolve-url-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: () => [require("postcss-cssnext")()],
                    }
                }
            ]
        };
    }
    // Don't generate CSS for the modern config in production
    if (buildType === MODERN_CONFIG) {
        return {
            test: /\.(scss|css)$/,
            loader: 'ignore-loader'
        };
    }
};

// Configure terser
const configureTerser = () => {
    return {
        cache: true,
        parallel: true,
        sourceMap: true
    };
};

// Production module exports
module.exports = [
    merge(
        common.legacyConfig,
        {
            output: {
                filename: '[name]-legacy.[chunkhash].js',
            },
            mode: 'production',
            devtool: 'source-map',
            optimization: configureOptimization(LEGACY_CONFIG),
            module: {
                rules: [
                    configurePostcssLoader(LEGACY_CONFIG),
                    configureImageLoader(LEGACY_CONFIG),
                ],
            },
            plugins: [
                new MiniCssExtractPlugin({
                    path: path.resolve(__dirname, settings.paths.dist.base),
                    filename: '[name].[chunkhash].css',
                }),
                new webpack.BannerPlugin(
                    configureBanner()
                ),
                new BundleAnalyzerPlugin(
                    configureBundleAnalyzer(LEGACY_CONFIG),
                ),
            ]
        }
    ),
    merge(
        common.modernConfig,
        {
            output: {
                filename: '[name]-legacy.[chunkhash].js',
            },
            mode: 'production',
            devtool: 'source-map',
            optimization: configureOptimization(MODERN_CONFIG),
            module: {
                rules: [
                    configurePostcssLoader(MODERN_CONFIG),
                    configureImageLoader(MODERN_CONFIG),
                ],
            },
            plugins: [
                new webpack.optimize.ModuleConcatenationPlugin(),
                new webpack.BannerPlugin(
                    configureBanner()
                ),
                new ImageminWebpWebpackPlugin(),
                new BundleAnalyzerPlugin(
                    configureBundleAnalyzer(MODERN_CONFIG),
                ),
            ]
        }
    ),
];
