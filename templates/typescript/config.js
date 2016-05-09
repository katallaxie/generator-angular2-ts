System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "compilerOptions": {
      "target": "es5",
      "module": "system",
      "sourceMap": true,
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "noImplicitAny": false,
      "newLine": "LF",
      "compileOnSave": false
    },
    "exclude": [
      "node_modules",
      "typings/main.d.ts",
      "typings/main"
    ]
  },

  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "main": "main",
      "defaultExtension": "ts"
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
