'use strict';

/**
 * Grunt - clean
 *
 * Url: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = ( grunt, config ) => {
  return {
    // clean destination of intermediares
    all : {
      options : {
        force : true, // caution, this is to allow deletion outside of cwd
      },
      files : {
        src : [ `${ config.path.www.base }/**/*` ]
      }
    }
  };
};
