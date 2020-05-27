// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

module.exports = {
  siteName: 'Slds Resume',
  plugins: [],
  chainWebpack(config) {
    config.module
      .rule('scss')
      .oneOf('modules')
      .use('sass-loader')
      .options({
        sourceMap: true,
      })
      .end()
      .use('resolve-url')
      .loader('resolve-url-loader')
      .options({
        root: path.resolve(
          __dirname,
          './node_modules/@salesforce-ux/design-system',
        ),
      })
      .before('sass-loader');
    config.module
      .rule('scss')
      .oneOf('normal')
      .use('sass-loader')
      .options({
        sourceMap: true,
      })
      .end()
      .use('resolve-url')
      .loader('resolve-url-loader')
      .options({
        root: path.resolve(
          __dirname,
          './node_modules/@salesforce-ux/design-system',
        ),
      })
      .before('sass-loader');

    // copy slds icon sprites to assets
    config.plugin('copy').use(require.resolve('copy-webpack-plugin'), [
      {
        patterns: [
          {
            from: path.posix.join(
              path
                .resolve(
                  __dirname,
                  './node_modules/@salesforce-ux/design-system',
                )
                .replace(/\\/g, '/'),
              '/assets/icons/**/svg/symbols.svg',
            ),
            transformPath(targetPath) {
              const [, category] = targetPath.match(/\/(\w+)-sprite\//) || [];
              return path.join('assets/img/slds-icons', category, 'symbols.svg');
            },
          },
        ],
      },
    ]);

    // console.log(config.toString());
  },
};
