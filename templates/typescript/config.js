// config
var config = {
  baseURL: './',
  defaultJSExtensions: true,
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true,
    typeCheck: true
  },
  packages: {
    'app': {
      main: 'boot.ts',
      defaultExtension: 'ts',
      meta: {
        '*.ts': {
          loader: 'ts'
        }
      }
    },
    'src/app': {
      main: 'boot.ts',
      defaultExtension: 'ts',
      meta: {
        '*.ts': {
          loader: 'ts'
        }
      }
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
    'babel-polyfill': {
      main: 'browser.js'
    },
    'rxjs': {
      main: 'index.js',
      meta: {
        '*.js': {
          typings: true
        }
      }
    },
    'symbol-observable': {
      main: 'index.js'
    },
    'ts': {
      main: 'plugin.js'
    },
    'ts-helpers': {
      main: 'index.js'
    },
    'typescript': {
      main: 'lib/typescript.js',
      meta: {
        'lib/typescript.js': {
          exports: 'ts'
        }
      }
    }
  },
  map: {
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'babel-polyfill': 'node_modules/babel-polyfill',
    'moment': 'node_modules/moment',
    'ng2-bootstrap': 'node_modules/ng2-bootstrap',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    'text': 'node_modules/systemjs-plugin-text/text.js',
    'ts-helpers': 'node_modules/ts-helpers',
    'ts': 'node_modules/plugin-typescript/lib',
    'typescript': 'node_modules/typescript',
    'zone.js': 'node_modules/zone.js'
  }
};

// ng2
[
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser-dynamic',
  '@angular/platform-browser',
  '@angular/router'
].forEach( function (pkg) {
  config.packages[pkg] = {
    main: 'index.js',
    meta: {
      '*.js': {
        typings: true
      }
    }
  };
  config.map[pkg] = 'node_modules/' + pkg;
} );

// load
System.config(config);
