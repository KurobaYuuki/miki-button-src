const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  chainWebpack: config => {
    // See: https://github.com/vuejs/vue-cli/issues/5753
    // Prevents "Multiple assets emit different content to the same filename index.html"
    config.plugin('copy').tap(args => {
      args[0].patterns[0].globOptions.ignore.push('**/index.html');
      return args;
    });
  }
}