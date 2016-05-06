System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 1,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },

  packages: {
    "app": {
      "main": "boot.js",
      "defaultExtension": "js"
    },
    "@angular/*": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  },

  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {}
});
