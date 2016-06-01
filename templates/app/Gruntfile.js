'use strict';

/**
 * Grunt - The JavaScript task runner
 *
 * Url: http://gruntjs.com/
 */
module.exports = grunt => { // always try to be nice

  // measure time consumption of grunt
  require( 'time-grunt' )( grunt );

  // used modules
  const chalk = require( 'chalk' );
  const path = require( 'path' );

  // mappings of grunt.*
  const cli = grunt.cli;
  const file = grunt.file;
  const log = grunt.log;
  const option = grunt.option;

  // reading package.json info
  const pkg = file.readJSON( 'package.json' );

  // get root of the project
  const root = path.resolve( __dirname );

  // some dev sweetness and madness
  option('force', (cli.tasks[0] === 'dev' || cli.tasks[0] === 'fun') && !option('help'));

  // if we force the build, then we should be aware of this
  if (option('force')) {
    // hey, common, this is a bit of fun
    log.writeln(chalk.blue(`May the '--force' be with you ...`));
  }

  // the config to be passed to load-grunt-config
  const config = {

    // path to task.js files, defaults to grunt dir
    configPath: path.join( root, 'grunt' ),

    // auto grunt.initConfig
    init: true,

    // data that is passed into the tasks as config
    data: {
      pkg: pkg,
      path: { // app paths
        /**
         * This is a collection of file patterns that link the code structure to
         * the task configuration.
         *
         * - 'root'         project root path
         *
         * - 'styles'       contains css styles in sass
         * - 'images'       contains images
         * - 'fonts'        contains fonts
         * - 'scripts'      contains app
         * - 'html'         contains index.html
         * - 'templates'    contains templates
         */
        root: root,
        app: {
          base: `${ root }/src`,
          boot: `src/app/boot`,
          fonts: `${ root }/src/fonts`,
          index: [`${root}/src/index.html`],
          images: `${root}/src/images`,
          scripts: `${ root }/src/app`,
          styles: `${ root }/src/styles`,
          templates: [`${root}/src/app/**/*.tpl.html`]
        },
        /**
         * The 'tmp' folder is where all artifacts are pre-processed,
         * and then moved to www and build
         */
        tmp: {
          base: `${ root }/.tmp/`,
          main: `.tmp/scripts/app.js`,
          concat: `${ root }/.tmp/concat`,
          styles: `${ root }/.tmp/styles`,
          scripts: `${ root }/.tmp/scripts`
        },
        /**
         * The 'www' folder contains the pre-processed app.
         */
        www: {
          base: `${ root }/www`,
          index: `${ root }/www/index.html`,
          images: `${ root }/www/images`,
          fonts: `${ root }/www/fonts`,
          scripts: `${ root }/www/scripts`
        }
      }
    },

    jitGrunt: { // jitGrunt improves performance
      staticMappings: { // some tasks need to be mapped
        availabletasks: 'grunt-available-tasks',
        systemjs: 'grunt-systemjs-builder',
        usemin: 'grunt-usemin',
        useminPrepare: 'grunt-usemin'
      }
    },

    // can post process config object before it gets passed to grunt
    postProcess: function() {},

    // allows to manipulate the config object before it gets merged with the data object
    preMerge: function() {}

  };

  // using https://github.com/firstandthird/load-grunt-config
  require('load-grunt-config')(grunt, config);

};
