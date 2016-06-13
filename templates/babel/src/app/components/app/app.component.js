// importables
import { Component, OnInit } from '@angular/core';
import Html from 'src/app/components/app.component.html!text';
import Css from 'src/app/components/app.component.css!text';

// decorator for component constructor
@Component( {
  selector : 'sg-app',
  styles: [ Css ],
  template : Html
} )

// component
export class AppComponent implements OnInit { // it is recommended to export class in place

  // constructor
  constructor () {

    // call to OnInit
    super ();

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
