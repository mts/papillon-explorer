// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
module.exports = {
    name: "Papillon Explorer",
    copyright: "MTS",
    paths: {
        src: {
            base: "./src/"
        },
        dist: {
            base: "./dist/",
            clean: [
                "./**",
            ]
        }
    },
    urls: {
        publicPath: "/"
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "app": "index.js"
    },
    criticalCssConfig: {
        base: "./dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                url: "",
                template: "index"
            }
        ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || false
    },
    manifestConfig: {
        basePath: ""
    },
    webappConfig: {
        logo: "./src/img/favicon-src.png",
        prefix: "img/favicons/"
    },
};
