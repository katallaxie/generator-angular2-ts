'use strict';

/**
 * Grunt - watch
 *
 * Url: https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = ( grunt, config ) => {
  return {
    options : {
      spawn : false, // important, do not remove this to have browserSync running
      reload : true
    },
    all : {
      files : [
        `${config.path.app.styles}/**/*.scss`,
        `${config.path.app.scripts}/**/*.scss`,
        `${config.path.app.scripts}/**/*.ts`,
        `${config.path.app.scripts}/**/*.html`
      ],
      tasks : [
        // typescript linting
        'tslint',
        // processing the sass
        'sass'
      ]
    }
  };
};
