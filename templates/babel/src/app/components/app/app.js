// importables
import { Component } from '@angular/core';

// decorator for component constructor
@Component( {
  selector : 'sg-app',
  template : '<h4>Hello World. I am ... {{ name }}</h4>'
} )

// component
export class AppComponent { // it is recommended to export class in place

  // constructor
  constructor () {

    // this is for demoing
    this.name = `wait for it ...`;

    // timeout
    const timeout = 2500; // type is inferred

    // this is a bit artifical
    setTimeout( () => {
      this.name = `Angular 2.0`;
    }, timeout );

  }

}
