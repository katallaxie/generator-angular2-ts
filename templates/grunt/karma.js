'use strict';

/**
 * Grunt - karma (https://github.com/karma-runner/grunt-karma)
 */
module.exports = () => {
  // returning the config object
  return {
    all: {
      options: {
        configFile: 'karma.conf.js'
      }
    }
  };
};
