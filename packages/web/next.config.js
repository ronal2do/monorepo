const path = require('path');
const withCustomBabelConfig = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-transpile-modules');

module.exports = withCustomBabelConfig(
  withTranspileModules({
    babelConfigFile: path.resolve('babel.config.js'),
    target: 'serverless',
    transpileModules: ['@boilerplate/ui'],
  }),
);