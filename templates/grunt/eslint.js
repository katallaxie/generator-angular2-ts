'use strict';

/**
 * Grunt - eslint
 *
 * Url: https://github.com/sindresorhus/grunt-eslint
 */
module.exports = () => {
  return {
    options : {},
    src : [ 'Gruntfile.js', 'grunt/*.js' ]
  };
};
