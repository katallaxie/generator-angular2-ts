'use strict';

/**
 * Grunt - sass-globbing
 *
 * Url: https://github.com/DennisBecker/grunt-sass-globbing
 */
module.exports = ( grunt, config ) => {
  return {
    all: {
      files: {
        'src/styles/base/_components.scss': `${ config.path.app.base }/app/**/*.scss`
      }
    }
  };
};
