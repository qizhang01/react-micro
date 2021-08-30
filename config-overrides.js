const { name } = require('./package.json');
console.log(name)
const path = require('path')

module.exports = {
  webpack: function override(config, env) {
    config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.resolve.extensions = ['.js', '.json', '.jsx', '.ts', '.tsx'];
    config.resolve.alias = {
      "@src": path.resolve(__dirname, './src/'),
      "@static": path.resolve(__dirname, './static/css/'),
      "@libs": path.resolve(__dirname, './libs'),
      "@store": path.resolve(__dirname, './store'),
      "@components": path.resolve(__dirname, './components'),
      "~": path.resolve(__dirname, './components')
  }
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
