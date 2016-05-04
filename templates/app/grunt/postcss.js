'use strict';

/**
 * Grunt - eslint
 *
 * Url: https://github.com/sindresorhus/grunt-eslint
 */
module.exports = ( grunt, config ) => {
  return {
    options: {
      map: {
          inline: false,
          prev: `${config.path.tmp.styles}`
      },

      processors: [
        require('autoprefixer')(), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    all: {
      src: `${config.path.tmp.concat}/styles/**/*.css`
    }
  };
};
