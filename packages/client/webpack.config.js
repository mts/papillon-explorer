const path = require("path");
const config = require('mts-scripts/webpackClientReact')

module.exports = (mode) => {
  const paths = {
    app: path.join(__dirname, "src"),
    build: path.join(__dirname, "build"),
  };

  return config(mode, paths)
};
