'use strict';

/**
 * Grunt - tslint
 *
 * Url: https://www.npmjs.com/package/grunt-tslint
 */
module.exports = () => {
  return {
    options : {
      configuration : 'tslint.json'
    },
    all : {
      src : [ 'src/**/*.ts' ]
    }
  };
};
