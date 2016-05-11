// importables
import { Component } from '@angular/core';

// decorator for component constructor
@Component( {
  selector : 'sg-app',
  template : '<h4>Hello World. I am ... {{ name }}</h4>'
} )

// component
export class AppComponent { // it is recommended to export class in place

  // types and variable init
  public name: string = `wait for it ...`;

  // constructor
  constructor () {

    // timeout
    const timeout = 2500; // type is inferred

    // this is a bit artifical
    setTimeout( () => {
      this.name = `Angular 2.0`;
    }, timeout );

  }

}
