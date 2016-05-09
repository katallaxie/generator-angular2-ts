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
      'jspm',
      'jasmine'
    ],

    // list of plugins
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-jspm',
      'karma-junit-reporter',
      'karma-phantomjs-launcher'
    ],

    // jspm
    jspm: {
      config: 'config.js',
      loadFiles: ['test/shims.js', 'src/app/**/*.spec.ts'],
      serveFiles: ['src/app/**/*.!(spec)+(ts)']
    },

    // proxies
    proxies: {
      '/src/app': '/base/src/app',
      '/test': '/base/test',
      '/jspm_packages/' : '/base/jspm_packages/'
    },

    // preprocessors
    preprocessors: {
      // source files, that you wanna generate coverage for - do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.!(spec)+(js)': []
    },

    // list of files / patterns to load in the browser
    files: [],

    // list of files to exclude
    exclude: [],

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
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
