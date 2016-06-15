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
    'ts': 'node_modules/plugin-typescript/lib',
    'ts-helpers': 'node_modules/ts-helpers',
    'typescript': 'node_modules/typescript',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    'text': 'node_modules/systemjs-plugin-text/text.js',
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
