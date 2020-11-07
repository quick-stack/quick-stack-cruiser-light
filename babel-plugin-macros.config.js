const { NODE_ENV } = process.env;

module.exports = {
  twin: {
    config       : './ui/theme/tailwind.config.js',
    preset       : 'styled-components',
    debugProp    : NODE_ENV !== 'production',
    debugPlugins : NODE_ENV !== 'production',
    debug        : NODE_ENV !== 'production',
  },
};
