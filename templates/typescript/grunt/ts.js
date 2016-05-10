'use strict';

/**
 * Grunt - ts
 *
 * Url: https://github.com/TypeStrong/grunt-ts
 */
module.exports = () => {
  return {
    all : {
      tsconfig: true,
      src : [ 'src/**/*.ts', '!node_modules/**/*.js' ]
    }
  };
};
