'use strict';

/**
 * Grunt - usemin
 *
 * Url: https://github.com/yeoman/grunt-usemin
 */
module.exports = ( grunt, config ) => {
  return {
    all : {
      src : [ config.path.www.index ]
    }
  };
};
