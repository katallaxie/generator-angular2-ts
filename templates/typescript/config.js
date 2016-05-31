System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    tsconfig: true,
    typeCheck: true
  },

  path: {},

  packages: {
    "@angular/core": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/common": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/compiler": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/http": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/router": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/platform-browser": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "@angular/platform-browser-dynamic": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "app": {
      "main": "boot.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
    "babel-polyfill": {
      "main": "browser.js"
    },
    "rxjs": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    },
    "symbol-observable": {
      "main": "index.js"
    },
    "ts": {
      "main": "plugin.js"
    },
    "typescript": {
      "main": "lib/typescript.js",
      "meta": {
        "lib/typescript.js": {
          "exports": "ts"
        }
      }
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
    "babel-polyfill": "node_modules/babel-polyfill",
    "ts": "node_modules/plugin-typescript/lib",
    "typescript": "node_modules/typescript",
    "rxjs": "node_modules/rxjs",
    "symbol-observable": "node_modules/symbol-observable",
    "text": "node_modules/systemjs-plugin-text/text.js",
    "zone.js": "node_modules/zone.js"
  }
});
