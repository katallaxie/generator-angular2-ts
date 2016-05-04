'use strict';

/**
 * Grunt - imagemin-svgo
 *
 * Url: https://github.com/gruntjs/grunt-contrib-imagemin
 */
module.exports = (grunt, config) => {
  // imports
  const svgo = require('imagemin-svgo');
  // returning the config object
  return {
    all: {
      options: { // Target options
        optimizationLevel: 3,
        use: [svgo({
          plugins: [{
            removeViewBox: false
          }, {
            removeEmptyAttrs: false
          }]
        })]
      },
      files: [{
        expand: true,
        cwd: config.path.app.images,
        src: [
          '**/*.{png,gif,jpg,jpeg,svg}',
        ],
        dest: config.path.www.images
      }]
    }
  };
};
