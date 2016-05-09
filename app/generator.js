// enable some of the new ESx features
'use strict';

// importables

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _gitconfiglocal = require('gitconfiglocal');

var _gitconfiglocal2 = _interopRequireDefault(_gitconfiglocal);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _underscore = require('underscore.string');

var _underscore2 = _interopRequireDefault(_underscore);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// settings
var config = {
  www: 'www', // this is the live folder
  npm: {
    loglevel: 'error'
  },
  transpiler: ['typescript', 'babel']
};

// extending lodash with underscore.string methods
_lodash2.default.mixin(_underscore2.default.exports());

// use the base class of yeoman, and constuct ours generator

var Generator = function (_Yeoman) {
  _inherits(Generator, _Yeoman);

  // generator constructor

  function Generator() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Generator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // have appname as command parameter

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Generator)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    // call super class with arguments


    _this.argument('appname', {
      type: String,
      defaults: _path2.default.basename(process.cwd())
    });

    // read the local git config, as so it it `git init`
    (0, _gitconfiglocal2.default)('./', function (error, config) {
      _this.git = !error && config.remote ? config.remote.origin.url : 'https://';
    });

    return _this;
  }

  // this is the initializer method of the generator


  _createClass(Generator, [{
    key: 'initializing',
    value: function initializing() {

      // we have a different root for the sources
      this.sourceRoot(_path2.default.join(__dirname, '../templates/app'));

      // we would the defaults here
    }

    // this property gets called by yeoman

  }, {
    key: 'configuring',


    // configure before proceeding to setup
    value: function configuring() {

      // helper variables
      this.isBabel = this.transpiler === 'babel';
      this.isTypescript = !this.isBabel;

      // set template directory
      this.dir = this.transpiler;
    }

    // writing the files to folder

  }, {
    key: 'writing',
    value: function writing() {

      // creating the www for Cordova
      try {
        _fs2.default.mkdirSync(this.destinationPath('www'));
      } catch (error) {
        if (error.code !== 'EEXIST') throw error;
      }

      // these are the general things to setup

      // grunt
      this.directory('grunt');
      this.template('Gruntfile.js');

      // npm
      this.template('package.json', 'package.json');

      // git
      this.copy('_gitignore', '.gitignore');
      this.copy('_gitattributes', '.gitattributes');

      // editorconfig
      this.copy('_editorconfig', '.editorconfig');

      // eslint
      this.copy('_eslintrc', '.eslintrc');
      this.copy('_eslintignore', '.eslintignore');

      // docker
      this.copy('Dockerfile', 'Dockerfile');

      // karma
      this.template('../' + this.dir + '/karma.conf.js', 'karma.conf.js');

      // jspm
      this.copy('../' + this.dir + '/config.js', 'config.js');

      // app
      this.directory('../' + this.dir + '/src/app', this.destinationRoot() + '/src/app');

      // styles
      this.directory('src/styles');

      // images
      this.directory('src/images');

      // fonts
      this.directory('src/fonts');

      // index.html
      this.template('src/index.html');

      // what follows is babel specific
      if (this.isBabel) {
        // grunt
        this.copy('../' + this.dir + '/grunt/aliases.js', 'grunt/aliases.js');
        this.copy('../' + this.dir + '/grunt/systemjs.js', 'grunt/systemjs.js');
      }

      // what follows is typescript specific

      if (this.isTypescript) {
        // grunt
        this.copy('../' + this.dir + '/grunt/aliases.js', 'grunt/aliases.js');
        this.copy('../' + this.dir + '/grunt/tslint.js', 'grunt/tslint.js');

        // typescript
        this.copy('../' + this.dir + '/tslint.json', 'tslint.json');
        this.copy('../' + this.dir + '/tsconfig.json', 'tsconfig.json');
        this.copy('../' + this.dir + '/typings.json', 'typings.json');

        // SystemJS
        this.copy('../' + this.dir + '/builder.json', 'builder.json');
      }

      // Write your files
      this.fs.write(this.destinationPath('README.md'), '# ' + this.app + '\n');
    }

    // ok, not really necessary

  }, {
    key: 'default',
    value: function _default() {}

    // compose here with others Yeoman generator

    // post-setup

  }, {
    key: 'installing',
    value: function installing() {

      // npm
      if (!this.options['skip-install']) {
        this.runInstall('npm', '', config.npm);
      }
    }

    // happy end

  }, {
    key: 'end',
    value: function end() {

      // saving config
      this.config.save();
      // in case you wanted to skip install
      if (this.options['skip-install']) {
        _util2.default.log(['\nPlease have \'' + _chalk2.default.yellow.bold('npm install') + '\' run.', 'Afterwards run \'' + _chalk2.default.yellow.bold('npm fun') + '\' or \'' + _chalk2.default.yellow.bold('npm fun') + '\''].join('\n'));
      }
    }
  }, {
    key: 'prompting',
    get: function get() {

      // the prompt object
      return {

        // greet the user, and be friendly

        greeting: function greeting() {

          // say yo!
          _util2.default.log((0, _yosay2.default)('\'Greatings\'! Angular 2.x with Typescript/Babel + ES6/ES7!'));
        },


        // first we ask for the app name
        askForApp: function askForApp() {
          var _this2 = this;

          // async
          var done = this.async();

          // displaying
          var prompts = [{
            type: 'input',
            name: 'app',
            message: 'What is the name of your fun new app?',
            default: this.appname,
            store: true
          }];

          this.prompt(prompts, function (_ref) {
            var app = _ref.app;

            _this2.app = app;
            _this2.appname = _lodash2.default.camelize(_lodash2.default.slugify(_lodash2.default.humanize(app)));
            // resolve
            done();
          });
        },


        // provide a nice description for package json
        askForDescription: function askForDescription() {
          var _this3 = this;

          // async
          var done = this.async();

          // displaying
          var prompts = [{
            type: 'input',
            name: 'description',
            message: 'What is your great new app doing?',
            default: 'Something really, really great ...',
            store: true
          }];

          this.prompt(prompts, function (_ref2) {
            var description = _ref2.description;

            _this3.description = description;
            // resolve
            done();
          });
        },


        // then we would like to setup the package.json
        askForGit: function askForGit() {
          var _this4 = this;

          // async
          var done = this.async();

          // displaying
          var prompts = [{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: this.user.git.name(),
            store: true
          }, {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            default: this.user.git.email(),
            store: true
          }, {
            type: 'input',
            name: 'git',
            message: 'What is the uri of your git?',
            default: this.git,
            store: true
          }];

          this.prompt(prompts, function (_ref3) {
            var name = _ref3.name;
            var email = _ref3.email;
            var git = _ref3.git;

            _this4.author = {
              name: name,
              email: email
            };
            _this4.git = git;
            // resolve
            done();
          });
        },
        askForTranspiler: function askForTranspiler() {
          var _this5 = this;

          // async
          var done = this.async();

          // displaying
          var prompts = [{
            type: 'list',
            name: 'template',
            message: 'What is your transpiler',
            choices: config.transpiler,
            require: true,
            store: true
          }];

          this.prompt(prompts, function (_ref4) {
            var template = _ref4.template;

            _this5.transpiler = template;
            // resolve
            done();
          });
        }
      };
    }
  }]);

  return Generator;
}(_yeomanGenerator.Base);

exports.default = Generator;
module.exports = exports['default'];