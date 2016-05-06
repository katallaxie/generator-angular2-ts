System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "tsconfig": true,
    "module": "system"
  },

  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "main": "boot.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
    "@angular/*": {
      "main": "index.js",
      "defaultExtension": "js",
      "meta": {
        "*.js": {
          "typings": true     // can also be path of a typings bundle
        }
      }
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  },

  map: {}
});
