# Angular 2.x Generator + TypeScript

> Experimental Yeoman generator for your next Angular 2.x project

The generator is coded in [ES6](https://github.com/lukehoban/es6features) with [Babel](https://babeljs.io/) as polyfill. Thus, it avoids much of the overhead in creating the generator.

## Features
- Angular 2.x
- Use ES6 Modules via [SystemJS](https://github.com/systemjs/systemjs)
- TypeScript with SystemJS transpilling
- Modular [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/) for CSS preprocessing
- Bundling JavaScript via SystemJS (SFX)
- Uses [BrowserSync](https://www.browsersync.io/) to live code in the browser
- Also does image compression via imagemin

## Todo
- Smoke Testing & E2E (Karma & Nightwatch )
- Unit Testing
_ ...

## Requirements

- [Grunt](http://gruntjs.com)
- [Yeoman](http://yeoman.io))
- [Karma](http://karma-runner.github.io)
- [PhantomJS](http://phantomjs.org)

## Usage

> Many thins are still in the flow

### Setup

PhantomJS 2.x is needed to have the tests running; thus please install it separately as only PhantomJS 1.x is in the dependencies:

```
brew install phantomjs
```

Install `yo`, `grunt-cli`, `jspm`, `karma`, `typings`, `typescript` and `nightwatch` in the global scope `-g`:

> this is not really necessary, because some of these tools are installed locally, but it is best to have them always at hand

> use `npm set progress=false` as to dramatically improve the speed of npm

```
npm i -g yo grunt-cli jspm karma nightwatch typings typescript
```

Create a new folder for your project, and `cd` into it:

```
mkdir my-new-app && cd $_
```

Run `yo angular2-ts`

```
yo angular2-ts [appname]
```

Have fun with `fun`.

```
npm run start
```

or

```
grunt fun
```

### Release

As to build the final app run

```
grunt build
```

### Testing (tba)

> tba (unit testing, and uat... to come)
