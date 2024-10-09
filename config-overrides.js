const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'), // Corrected line for the url polyfill
    };
    return config;
  }
);
