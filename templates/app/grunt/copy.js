'use strict';

/**
 * Grunt - copy
 *
 * Url: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = ( grunt, config ) => {
  return {
    all : { // prepare for distribution in www (test)
      files : [ {
        expand : true,
        cwd : config.path.app.base,
        src : [
          'index.html'
        ],
        dest : config.path.www.base
      }, {
        expand : true,
        cwd : config.path.tmp.base,
        src : [
          'scripts/**/*.{js,map}'
        ],
        dest : config.path.www.base
      }, {
        expand : true,
        cwd : config.path.tmp.concat,
        src : [
          'styles/**/*.{css,map}'
        ],
        dest : config.path.www.base
      }, {
        expand : true,
        cwd : config.path.app.fonts,
        src : [
          '**/*.{eot,svg,ttf,woff,woff2}'
        ],
        dest : config.path.www.fonts,
        flatten : true
      }, {
        expand : true,
        cwd : './node_modules',
        src : [
          'es6-shim/es6-shim.min.js',
          'zone.js/dist/zone.js',
          'reflect-metadata/Reflect.js',
          'systemjs/dist/system.js',
          'systemjs/dist/system-polyfills.js'
        ],
        dest : config.path.www.scripts,
        flatten : true
      } ]
    }
  };
};
