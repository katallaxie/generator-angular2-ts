'use strict';

/**
 * Grunt - browserSync
 *
 * Url: http://www.browsersync.io/
 */
module.exports = ( grunt, config ) => {
  // find out to be run in a container
  /* eslint-disable camelcase */
  const child_process = require( 'child_process' );
  const containerized = () => {
    let isContainerized = true; // this is very simple minded
    child_process.exec( `cat /proc/self/cgroup`, error => {
      isContainerized = error === null;
    } );
    return isContainerized;
  };
  /* eslint-enable camelcase */
  // config
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
        browser : containerized() ? [] : ['Chrome'],
        server: {
          baseDir: [ '.tmp', 'src', 'node_modules', './' ] // include the artifacts and packages
        }
      },
      bsFiles: {
        src: [ config.path.app.base, config.path.tmp.styles, `!${ config.path.app.styles }/**/*.scss` ]
      }
    }
  };
};
