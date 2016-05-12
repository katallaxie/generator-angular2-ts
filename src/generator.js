// enable some of the new ESx features
'use strict';

// importables
import { Base as Yeoman } from 'yeoman-generator';
import { default as _ } from 'lodash';
import { default as Chalk } from 'chalk';
import { default as Fs } from 'fs';
import { default as Git } from 'gitconfiglocal';
import { default as Path } from 'path';
import { default as Pkg } from '../package.json';
import { default as s } from 'underscore.string';
import { default as Util } from 'util';
import { default as Yosay } from 'yosay';

// settings
const config = {
  www : 'www', // this is the live folder
  npm : {
    loglevel : 'error'
  },
  transpiler : [ 'typescript', 'babel' ]
}

// extending lodash with underscore.string methods
_.mixin( s.exports() );

// use the base class of yeoman, and constuct ours generator
export default class Generator extends Yeoman {

  // generator constructor
  constructor( ...args ) {

    // call super class with arguments
    super( ...args );

    // have appname as command parameter
    this.argument( 'appname', {
      type : String,
      defaults : Path.basename( process.cwd() )
    } );

    // read the local git config, as so it it `git init`
    Git( './', ( error, config ) => {
      this.git = ! error && config.remote ? config.remote.origin.url : 'https://';
    } );

  }

  // this is the initializer method of the generator
  initializing () {

    // we have a different root for the sources
    this.sourceRoot( Path.join( __dirname, '../templates/app' ) );

    // we would the defaults here

  }

  // this property gets called by yeoman
  get prompting () {

    // the prompt object
    return {

      // greet the user, and be friendly
      greeting () {

        // say yo!
        Util.log( Yosay('\'Greatings\'! Angular 2.x with Typescript/Babel + ES6/ES7!') );

      },

      // first we ask for the app name
      askForApp() {

        // async
        let done = this.async();

        // displaying
        let prompts = [ {
          type : 'input',
          name : 'app',
          message : `What is the name of your fun new app?`,
          default : this.appname,
          store : true
        } ];

        this.prompt( prompts, ( { app } ) => {
          this.app = app;
          this.appname = _.camelize( _.slugify( _.humanize( app ) ) );
          // resolve
          done();
        } );

      },

      // provide a nice description for package json
      askForDescription() {

        // async
        let done = this.async();

        // displaying
        let prompts = [ {
          type : 'input',
          name : 'description',
          message : `What is your great new app doing?`,
          default : `Something really, really great ...`,
          store : true
        } ];

        this.prompt( prompts, ( { description } ) => {
          this.description = description;
          // resolve
          done();
        } );

      },

      // then we would like to setup the package.json
      askForGit () {

        // async
        let done = this.async();

        // displaying
        let prompts = [ {
          type : 'input',
          name : 'name',
          message : `What is your name?`,
          default : this.user.git.name(),
          store : true
        }, {
          type : 'input',
          name : 'email',
          message : `What is your email?`,
          default : this.user.git.email(),
          store : true
        }, {
          type : 'input',
          name : 'git',
          message : `What is the uri of your git?`,
          default : this.git,
          store : true
        } ];

        this.prompt( prompts, ( { name, email, git } ) => {
          this.author = {
            name: name,
            email: email
          };
          this.git = git;
          // resolve
          done();
        } );

      },

      askForTranspiler () {

        // async
        let done = this.async();

        // displaying
        let prompts = [ {
          type : 'list',
          name : 'template',
          message : `What is your transpiler`,
          choices : config.transpiler,
          require : true,
          store: true
        } ];

        this.prompt( prompts, ( { template } ) => {
          this.transpiler = template;
          // resolve
          done();
        } );

      }

    };

  }

  // configure before proceeding to setup
  configuring () {

    // helper variables
    this.isBabel = this.transpiler === 'babel';
    this.isTypescript = ! this.isBabel;

    // set template directory
    this.dir = this.transpiler;

  }

  // writing the files to folder
  writing () {

    // creating the www for Cordova
    try {
      Fs.mkdirSync( this.destinationPath( 'www' ) );
    } catch( error ) {
      if ( error.code !== 'EEXIST' ) throw error;
    }

    // these are the general things to setup

    // grunt
    this.directory( 'grunt' );
    this.template( 'Gruntfile.js' );

    // npm
    this.template( 'package.json', 'package.json' );

    // git
    this.copy( '_gitattributes', '.gitattributes' );

    // editorconfig
    this.copy( '_editorconfig', '.editorconfig' );

    // eslint
    this.copy( '_eslintrc', '.eslintrc' );
    this.copy( '_eslintignore', '.eslintignore' );

    // docker
    this.copy( 'Dockerfile', 'Dockerfile' );
    this.copy( '_dockerignore', '.dockerignore' );

    // karma
    this.template( `../${ this.dir }/karma.conf.js`, 'karma.conf.js' );
    this.copy( `../${ this.dir }/karma.shim.js`, 'karma.shim.js' );

    // systemjs
    this.copy( `../${ this.dir }/config.js`, 'config.js' );
    this.copy( `../${ this.dir }/grunt/systemjs.js`, 'grunt/systemjs.js' );

    // app
    this.directory( `../${ this.dir }/src/app`, `${ this.destinationRoot() }/src/app` );

    // styles
    this.directory( 'src/styles' );

    // images
    this.directory( 'src/images' );

    // fonts
    this.directory( 'src/fonts' );

    // index.html
    this.template( 'src/index.html' );

    // testing
    this.directory( `../${ this.dir }/test` );

    // what follows is babel specific
    if ( this.isBabel ) {
      // grunt
      this.copy( `../${ this.dir }/grunt/aliases.js`, 'grunt/aliases.js' );
      this.copy( `../${ this.dir }/grunt/watch.js`, 'grunt/watch.js' );

      // git
      this.copy( `../${ this.dir }/_gitignore`, '.gitignore' );
    }

    // what follows is typescript specific

    if ( this.isTypescript ) {
      // grunt
      this.copy( `../${ this.dir }/grunt/aliases.js`, 'grunt/aliases.js' );
      this.copy( `../${ this.dir }/grunt/tslint.js`, 'grunt/tslint.js' );
      this.copy( `../${ this.dir }/grunt/ts.js`, 'grunt/ts.js' );
      this.copy( `../${ this.dir }/grunt/watch.js`, 'grunt/watch.js' );

      // typescript
      this.copy( `../${ this.dir }/tslint.json`, 'tslint.json' );
      this.copy( `../${ this.dir }/tsconfig.json`, 'tsconfig.json' );
      this.copy( `../${ this.dir }/typings.json`, 'typings.json' );

      // SystemJS
      this.copy( `../${ this.dir }/builder.json`, 'builder.json' );

      // git
      this.copy( `../${ this.dir }/_gitignore`, '.gitignore' );
    }

    // Write your files
    this.fs.write( this.destinationPath( 'README.md' ), `# ${ this.app }\n` );

  }

  // ok, not really necessary
  default () {

    // compose here with others Yeoman generator

  }

  // post-setup
  installing () {

    // npm
    if ( ! this.options[ 'skip-install' ] ) {
      this.runInstall( 'npm', '', config.npm );
    }

  }

  // happy end
  end () {

    // saving config
    this.config.save();
    // in case you wanted to skip install
    if ( this.options[ 'skip-install' ] ) {
      Util.log( [ `\nPlease have '${Chalk.yellow.bold('npm install')}' run.`,
        `Afterwards run '${Chalk.yellow.bold('npm fun')}' or '${Chalk.yellow.bold('npm fun')}'`].join('\n'));
    }

  }

}
