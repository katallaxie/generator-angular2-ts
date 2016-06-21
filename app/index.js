// enable some of the new ESx features
'use strict';

// deps
var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');
var git = require('gitconfiglocal');
var path = require('path');
var pkg = require('../package.json');
var s = require('underscore.string');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var util = require('util');

// settings
var config = {
    www: 'www', // this is the live folder
    npm: {
        loglevel: 'error'
    },
    transpiler: ['typescript', 'babel']
}

// extending lodash with underscore.string methods
_.mixin(s.exports());

// use the base class of yeoman, and constuct ours generator
module.exports = yeoman.Base.extend({

    // generator constructor
    constructor: function() {
        yeoman.Base.apply(this, arguments);
        // add option to skip install

        // have appname as command parameter
        this.argument('appname', {
            type: String,
            defaults: path.basename(process.cwd())
        });

        // read the local git config, as so it it `git init`
        git('./', (error, config) => {
            this.git = !error && config.remote ? config.remote.origin.url : 'https://';
        });

    },

    // this is the initializer method of the generator
    initializing: function() {

        // we have a different root for the sources
        this.sourceRoot(path.join(__dirname, '../templates/app'));

        // we would the defaults here

    },

    // this property gets called by yeoman
    prompting: function() {

      // say yo!
      this.log(yosay('\'Greatings\'! Angular 2.x with Typescript/Babel + ES6/ES7!'));

      // promptings
      var prompts = [{
        type: 'input',
        name: 'app',
        message: `What is the name of your fun new app?`,
        default: this.appname,
        store: true
      }, {
        type: 'input',
        name: 'description',
        message: `What is your great new app doing?`,
        default: `Something really, really great ...`,
        store: true
      }, {
        type: 'input',
        name: 'name',
        message: `What is your name?`,
        default: this.user.git.name(),
        store: true
      }, {
        type: 'input',
        name: 'email',
        message: `What is your email?`,
        default: this.user.git.email(),
        store: true
      }, {
        type: 'input',
        name: 'git',
        message: `What is the uri of your git?`,
        default: this.git,
        store: true
      }, {
        type: 'list',
        name: 'template',
        message: `What is your transpiler`,
        choices: config.transpiler,
        require: true,
        store: true
      }];

      // async
      return this.prompt(prompts).then(function(answers) {
        this.answers = answers;
        this.answers.appname = _.camelize( _.slugify( _.humanize( this.answers.app ) ) );
      }.bind(this));

    },

    // configure before proceeding to setup
    configuring: function() {

        // helper variables
        this.isBabel = this.answers.template === 'babel';
        this.isTypescript = !this.isBabel;

        // set template directory
        this.dir = this.answers.template;

    },

    // writing the files to folder
    writing: function() {

        // creating the www for Cordova
        try {
            fs.mkdirSync(this.destinationPath('www'));
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
        this.copy('_gitattributes', '.gitattributes');

        // editorconfig
        this.copy('_editorconfig', '.editorconfig');

        // eslint
        this.copy('_eslintrc', '.eslintrc');
        this.copy('_eslintignore', '.eslintignore');

        // docker
        this.copy('Dockerfile', 'Dockerfile');
        this.copy('_dockerignore', '.dockerignore');

        // karma
        this.template(`../${ this.dir }/karma.conf.js`, 'karma.conf.js');
        this.copy(`../${ this.dir }/karma.shim.js`, 'karma.shim.js');

        // systemjs
        this.copy(`../${ this.dir }/config.js`, 'config.js');

        // app
        this.directory(`../${ this.dir }/src/app`, `${ this.destinationRoot() }/src/app`);

        // styles
        this.directory('src/styles');

        // images
        this.directory('src/images');

        // fonts
        this.directory('src/fonts');

        // index.html
        this.template('src/index.html');

        // testing
        this.directory(`../${ this.dir }/test`);

        // what follows is babel specific
        if (this.isBabel) {
            // grunt
            this.copy(`../${ this.dir }/grunt/aliases.js`, 'grunt/aliases.js');
            this.copy(`../${ this.dir }/grunt/watch.js`, 'grunt/watch.js');

            // git
            this.copy(`../${ this.dir }/_gitignore`, '.gitignore');
        }

        // what follows is typescript specific

        if (this.isTypescript) {
            // grunt
            this.copy(`../${ this.dir }/grunt/aliases.js`, 'grunt/aliases.js');
            this.copy(`../${ this.dir }/grunt/tslint.js`, 'grunt/tslint.js');
            this.copy(`../${ this.dir }/grunt/ts.js`, 'grunt/ts.js');
            this.copy(`../${ this.dir }/grunt/watch.js`, 'grunt/watch.js');

            // typescript
            this.copy(`../${ this.dir }/tslint.json`, 'tslint.json');
            this.copy(`../${ this.dir }/tsconfig.json`, 'tsconfig.json');
            this.copy(`../${ this.dir }/typings.json`, 'typings.json');

            // git
            this.copy(`../${ this.dir }/_gitignore`, '.gitignore');
        }

        // Write your files
        this.fs.write(this.destinationPath('README.md'), `# ${ this.app }\n`);

    },

    // ok, not really necessary
    default () {

        // compose here with others Yeoman generator

    },

    // post-setup
    installing: function() {

        // npm
        if (!this.options['skip-install']) {
            this.runInstall('npm', '', config.npm);
        }

    },

    // happy end
    end: function() {

        // saving config
        this.config.save();

        // in case you wanted to skip install
        if ( this.options[ 'skip-install' ] ) {
          this.log( [ '\nPlease have ', chalk.yellow.bold('npm install'), ' run. ',
            'Afterwards run ', chalk.yellow.bold('grunt fun'), ' or ', chalk.yellow.bold('grunt fun'), '.'].join(''));
        }

    }

});
