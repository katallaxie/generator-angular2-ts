'use strict';

/**
 * Grunt - processhtml
 *
 * Url: https://www.npmjs.com/package/grunt-processhtml
 */
module.exports = () => {
  return {
    options : {
      commentMarker : 'process' // that is because we have usemin
    },
    all : {
      files : {
        'www/index.html' : 'www/index.html'
      }
    }
  };
};
