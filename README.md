# Next Generation Angular + Cordova Generator

> Experimental Yeoman generator for your next and next-gen Angular 1.x or 2 +  Cordova project - lets you quickly set up a project with recent technologies in mind.

The generator is coded in [ES6](https://github.com/lukehoban/es6features) with [Babel](https://babeljs.io/) as polyfill. Thus, it avoids much of the overhead in creating the generator.

## Features
- Angular 2.0 and Angular 1.x + Ionic in ES6 with ng-upgrade path
- [Ionic 1.x](http://ionicframework.com) + Angular 1.x template
- Cordova 5 + Setup (Asset production to come...)
- Uses ES6/ES7 with [Babel](https://babel.js) as transpiler to write modern-day JavaScript without the use of typescript
- Use ES6 Modules via [SystemJS](https://github.com/systemjs/systemjs)
- Modular [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/) for CSS preprocessing
- Bundling JavaScript via SystemJS (SFX)
- Uses [BrowserSync](https://www.browsersync.io/) to live code in the browser
- Also does image compression via imagemin
- It is delivered with [Crosswalk](https://crosswalk-project.org/) as web view (Android only)
- Also adds many default plugins for Cordova

> Only supported platforms are iOS and Android

## Todo
- Smoke Testing & E2E (Karma & Nightwatch + Appium)
- Deployment to stores
- More tide integration
- ... many more things

## Requirements

- [Grunt](http://gruntjs.com)
- [Cordova](http://cordova.apache.org)
- [GraphicsMagick](http://graphicsmagick.org)
- [ios-sim](https://github.com/phonegap/ios-sim)
- [Karma](http://karma-runner.github.io)
- [PhantomJS](http://phantomjs.org)

## Usage

> Many thins are still in the flow

### Setup

GraphicsMagick can be installed via [Homebrew](http://brew.sh):

```
brew install graphicsmagick

```

PhantomJS 2.x is needed to have the tests running; thus please install it separately as only PhantomJS 1.x is in the dependencies:

```
brew install phantomjs
```

Install `yo`, `grunt-cli`, `cordova`, `jspm`, `karma` and `ios-sim` in the global scope `-g`:

```
npm i -g yo grunt-cli cordova jspm karma ios-sim
```

Create a new folder for your project, and `cd` into it:
```
mkdir my-new-app && cd $_
```

Run `yo i-want-nice-ng-cordova`
```
yo i-want-nice-ng-cordova [appname]
```

Have fun with `fun`.

```
npm start
```

or

```
grunt fun
```

### Debug & Release

As to to have a release build you have to provide a keystore and information in `build.json`.

As to to have a debug build just run `debug`:

```
grunt debug
```

As to to have a release build just run `release` or `build`:

```
grunt release
```

### Testing

> tba (unit testing, and uat... to come)
