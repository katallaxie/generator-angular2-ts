// importables
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap';

// assets
import Html from './app.component.html!text';
import Css from './app.component.css!text';

// decorator for component constructor
@Component( {
  directives: [AlertComponent],
  selector : 'sg-app',
  styles: [ Css ],
  template : Html
} )

// component
export class AppComponent extends OnInit { // it is recommended to export class in place

  // constructor
  constructor () {

    // call to super
    super();

    // this is for demoing
    this.name = `wait for it ...`;

  }

  ngOnInit () {

    // timeout
    const timeout = 2500; // type is inferred

    // this is a bit artifical
    setTimeout( () => {
      this.name = `Angular 2.0`;
    }, timeout );

  }

}
