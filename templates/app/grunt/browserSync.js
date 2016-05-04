'use strict';

/**
 * Grunt - browserSync
 *
 * Url: http://www.browsersync.io/
 */
module.exports = ( grunt, config ) => {
  return {
    all : {
      options : {
        port : 8080,
        ui : {
          port : 8081, // default is 3001
          weinre : {
            port : 9090
          }
        },
        background : true, // this is what makes grunt-contrib-watch working
        browser : [
          'Chrome'
        ],
        server: {
          baseDir: [ '.tmp', 'src', 'jspm_packages', './' ] // include the artifacts and packages
        }
      },
      bsFiles: {
        src: [ config.path.app.base, config.path.tmp.styles, `!${ config.path.app.styles }/**/*.scss` ]
      }
    }
  };
};
