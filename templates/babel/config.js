// config
var config = {
  baseURL: './',
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {
    'stage': 0,
    'optional': [
      'optimisation.modules.system'
    ]
  },
  packages: {
    'app': {
      'main': 'boot.js'
    },
    'babel': {
      'main': 'browser.js'
    },
    'babel-polyfill': {
      'main': 'browser.js'
    },
    'moment': {
      main: 'moment.js',
      meta: {
        '*.js': {
          typings: true
        }
      }
    },
    'ng2-bootstrap': {
      main: 'ng2-bootstrap.js',
      meta: {
        '*.js': {
          typings: true
        }
      }
    },
    'rxjs': {
      'main': 'index.js'
    },
    'symbol-observable': {
      'main': 'index.js'
    }
  },
  map: {
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'babel': 'node_modules/babel-core',
    'babel-polyfill': 'node_modules/babel-polyfill',
    'moment': 'node_modules/moment',
    'ng2-bootstrap': 'node_modules/ng2-bootstrap',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    'text': 'node_modules/systemjs-plugin-text/text.js',
    'zone.js': 'node_modules/zone.js'
  }
};

// ng2
[
  '@angular/common',
  '@angular/core',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic'
].forEach(function(pkg) {
  config.packages[pkg] = {
    main: 'index.js',
  };
  config.map[pkg] = 'node_modules/' + pkg;
});

// load
System.config(config);
