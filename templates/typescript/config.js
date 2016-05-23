System.config({
  baseURL: "./",
  defaultJSExtensions: true,

  path: {},

  packages: {
    "@angular/core": {
      "main": "index.js"
    },
    "@angular/common": {
      "main": "index.js"
    },
    "@angular/compiler": {
      "main": "index.js"
    },
    "@angular/http": {
      "main": "index.js"
    },
    "@angular/router": {
      "main": "index.js"
    },
    "@angular/platform-browser": {
      "main": "index.js"
    },
    "@angular/platform-browser-dynamic": {
      "main": "index.js"
    },
    "app": {
      "main": "boot.js"
    },
    "rxjs": {
      "main": "index.js"
    },
    "symbol-observable": {
      "main": "index.js"
    }
  },

  map: {
    "@angular/common": "node_modules/@angular/common",
    "@angular/compiler": "node_modules/@angular/compiler",
    "@angular/core": "node_modules/@angular/core",
    "@angular/http": "node_modules/@angular/http",
    "@angular/platform-browser": "node_modules/@angular/platform-browser",
    "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic",
    "@angular/router": "node_modules/@angular/router",
    "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
    "rxjs": "node_modules/rxjs",
    "symbol-observable": "node_modules/symbol-observable",
    "text": "node_modules/systemjs-plugin-text/text.js"
  }
});
