// Karma configuration
// Generated on Tue Jan 12 2016 09:29:32 GMT+0100 (CET)
module.exports = config => {

  // config
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine'
    ],

    // list of plugins
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-typescript-preprocessor',
      'karma-chrome-launcher'
    ],

    // proxies
    proxies: {
      '/src/app': '/base/src/app'
    },

    // preprocessors
    preprocessors: {
      // source files, that you wanna generate coverage for - do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        target: 'es5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: false, // (optional) Skip resolution and preprocessing.
        removeComments: true, // (optional) Do not emit comments to output.
        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',

      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false, served: true},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/babel-polyfill/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/plugin-typescript/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/moment/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/ng2-bootstrap/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false, served: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/symbol-observable/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/systemjs-plugin-text/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/ts-helpers/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/typescript/**/*.js', included: false, watched: false},

      // shim for ESx
      'karma.shim.js',

      // app
      {pattern: 'src/app/**/*.ts', included: false, watched: false},

      // assets
      {pattern: 'src/**/*.html', included: false, watched: true},
      {pattern: 'src/**/*.css', included: false, watched: true},
      {pattern: '.tmp/styles/**/*.css', included: false, watched: true}
    ],

    // list of files to exclude
    exclude: [
      'node_modules/**/*spec.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
