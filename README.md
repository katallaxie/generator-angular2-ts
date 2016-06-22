# Angular 2.x Generator + TypeScript/Babel (ES6/ES7)

> Experimental Yeoman generator for your first Angular 2 project ... have `fun`

The generator enables you to write your Angular 2 application in plain JavaScript using ES6/ES7 features such as decorators and template strings. Along side the [Babel](https://babeljs.io/) flavor you can write your Angular 2 application using TypeScript. Both flavors are lived transpiled in the browser of your choice.

## Features
- Angular 2.0 RC3 using the new component router, and inline templates
- [Babel](https://babeljs.io/) with ES6/ES7 features
- [SystemJS](https://github.com/systemjs/systemjs) and [SystemJS Builder](https://github.com/systemjs/builder)
- TypeScript + tslint (with [Codelyzer](https://github.com/mgechev/codelyzer))
- Babel with SystemJS
- Modular [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/) for CSS preprocessing
- Uses [BrowserSync](https://www.browsersync.io/) to live code in the browser
- Also does image compression via imagemin
- There also is a docker provided for deployment

## Todo
- Smoke Testing & E2E (Nightwatch)
_ ...

## Requirements

- [TypeScript](https://www.typescriptlang.org)
- [Babel](http://babeljs.io)
- [Grunt](http://gruntjs.com)
- [Yeoman](http://yeoman.io)
- [Karma](http://karma-runner.github.io)
- [PhantomJS](http://phantomjs.org)

## Usage

> Many things are still in the flow

### Setup

> use `npm set progress=false` as to dramatically improve the speed of npm

Install `grunt-cli` and `typings`, in the global scope `-g`:

```
npm i -g yo grunt-cli typings generator-angular2-ts
```

Create a new folder for your project, and `cd` into it:

```
mkdir my-new-app && cd $_
```

Run `yo angular2-ts`

```
yo angular2-ts [appname]
```

### Develop in the Browser

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

### Docker

As to build the docker image run
```
npm run docker
```

and have run

```
docker run -it --rm -p 80:8080 angular2-ts
```

in the deployment.
