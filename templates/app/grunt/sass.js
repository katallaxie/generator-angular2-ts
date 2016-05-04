'use strict';

/**
 * Grunt - sass
 *
 * Url: https://github.com/sindresorhus/grunt-sass
 */
module.exports = ( grunt, config ) => {
  // using https://github.com/sass-eyeglass
  const eyeglass = require( 'eyeglass' );

  return {
    all : {
      options: eyeglass( {
        sourceMap : true,
        outputStyle : 'expanded' // release should be compressed
      } ),
      files: [ {
        expand : true,
        cwd : config.path.app.styles,
        src : [ 'app.scss' ],
        dest : config.path.tmp.styles,
        ext : '.css'
      } ]
    }
  };
};
