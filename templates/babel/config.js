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

  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {}
});
