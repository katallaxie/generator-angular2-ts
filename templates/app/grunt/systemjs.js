'use strict';

// @deprecated

/**
 * Grunt - systemjs
 *
 * Url: https://www.npmjs.com/package/grunt-systemjs-builder
 */
module.exports = ( grunt, config ) => {
  return {
    options : {
      sfx : true, // this is subject to discussion
      configFile : './config.js',
      minify : true,
      build : {
        mangle : false
      }
    },
    all : {
      files : [ {
        src : config.path.app.boot,
        dest : config.path.tmp.main
      } ]
    }
  };
};
