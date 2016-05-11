'use strict';

/**
 * Grunt - grunt-load-config
 *
 * Url: https://github.com/firstandthird/load-grunt-config
 */
module.exports = () => { // passing in grunt and the config
  // returning the available grunt tasks
  return {

    'default' : { // nothing is done in the default task
      description : 'Grab a coffee, and thing about something awesome',
      tasks : []
    },

    'init' : { // initializes the project
      description : 'Initialize the project',
      tasks : [
        // clean up the mess ...
        'clean'
      ]
    },

    'fun' : { // the main task for local development
      description : 'Local development in the browser of choice (default: Chrome)',
      tasks : [
        // eslint
        'eslint',
        // tslint
        'tslint',
        // typescript
        'ts',
        // globbing sass on components
        'sass_globbing',
        // compile sass
        'sass',
        // launching browserSync
        'browserSync',
        // watch for changes
        'watch'
      ]
    },

    'dev' : { // this is legacy, please, have 'fun' in the future
      description : 'Alias for \'fun\' task',
      tasks : [ 'fun' ]
    },

    'test' : { // test the app
      description : 'Runs unit tests, smoke tests, and else',
      tasks : [
        // tslint
        'tslint',
        // typescript
        'ts',
        // running tests with karma
        'karma'
      ]
    },

    // what follows are the usable tasks
    'build' : {
      description : 'Ready to ship this awesome project',
      tasks : [
        // eslint
        'eslint',
        // tslint
        'tslint',
        // typescript
        'ts',
        // globbing sass on components
        'sass_globbing',
        // compile sass
        'sass',
        // prepare usemin
        'useminPrepare',
        // concat css
        'concat:generated',
        // post process css
        'postcss',
        // compile systemjs
        'systemjs',
        // copy everything to www
        'copy',
        // compress images
        'newer:imagemin',
        // substitute
        'usemin',
        // postprocess html
        'processhtml'
      ]
    }

  };
};
