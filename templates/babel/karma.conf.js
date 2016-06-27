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
      'karma-jspm',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-junit-reporter'
    ],

    // proxies
    proxies: {
      '/src/app': '/base/src/app'
    },

    // preprocessors
    preprocessors: {
      // source files, that you wanna generate coverage for - do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.!(spec)+(js)': ['babel', 'coverage']
    },

    // transpile with babel since the coverage reporter throws error on ES6 syntax
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'stage-0'],
        sourceMap: 'inline',
        plugins: ['transform-decorators-legacy']
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

      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false, served: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false, served: true},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false, served: true},
      {pattern: 'node_modules/symbol-observable/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/babel-polyfill/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/systemjs-plugin-text/**/*.js', included: false, watched: false},

      // shim for ESx
      'karma.shim.js',

      // app
      {pattern: 'src/app/**/*.js', included: false, watched: false},

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
    reporters: ['progress', 'junit', 'coverage'],

    // junit report, for jenkins
    junitReporter: {
      outputDir: '.',
      outputFile: 'test-results.xml',
       useBrowserName: false
    },

    // report coverage in different formats
    coverageReporter: {
      // this should also include formats for jenkins
      type: 'html',
      dir: 'reports/coverage/',
      reporters: [
        {
          type: 'html',
          subdir: 'html'
        },
        {
          type: 'lcov',
          subdir: 'lcov'
        },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {
          type: 'cobertura',
          subdir: '../../',
          file: 'coverage.xml'
        }
      ]
    },


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

    browserNoActivityTimeout: 90000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
