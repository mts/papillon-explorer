const path = require("path");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "build"),
};

const commonConfig = merge([
  parts.output(),
  parts.loadJavaScript({ include: PATHS.app }),
  parts.loadCSS(),
]);

const developmentConfig = merge([
  parts.pluginsDevelop(),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

const productionConfig = merge([
  parts.pluginsRelease(),
  parts.clean(PATHS.build),
  parts.attachRevision(),
  parts.minifyJavaScript(),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
