'use strict';

/**
 * Grunt - useminPrepare
 *
 * Url: https://github.com/yeoman/grunt-usemin
 */
module.exports = () => {
  return {
    all : {
      options : {
        dest : 'build'
      },
      src : [ 'src/index.html' ]
    }
  };
};
