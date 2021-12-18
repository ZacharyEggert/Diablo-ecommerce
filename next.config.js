const webpack = require('webpack');

const { parsed: myEnv } = require('dotenv').config();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
        return config;
    },
};

module.exports = nextConfig;
