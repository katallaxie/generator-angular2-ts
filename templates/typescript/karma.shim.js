// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// cancel Karma's start
__karma__.loaded = function () {};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.js$/.test(path);
}

function isBuiltFile(path) {
  var builtPath = '/base/src/app';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

// Load our SystemJS configuration.

var packages = {
  'app':  { main: 'boot.js' },
  'rxjs': { main: 'index.js', defaultExtension: 'js' },
  'symbol-observable': { 'main': 'index.js' }
};

// Add angular packages to SystemJS config
[
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/upgrade'
].forEach(function (name) { packages[name] = {main: 'index.js', defaultExtension: 'js'};});

System.config({
  baseURL: '/base',
  defaultJSExtensions: true,
  map: {
    '@angular': '/base/node_modules/@angular',
    'angular2-in-memory-web-api': '/base/node_modules/angular2-in-memory-web-api',
    'rxjs': '/base/node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable'
  },
  packages: packages
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.setBaseTestProviders(
    testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      console.log(moduleName);
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);
