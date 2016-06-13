declare function require(name: string): any;

// importables
import { Component, OnInit } from '@angular/core';

// assets
const html = require('./app.component.html');
const styles = require('./app.component.css');

// decorator for component constructor
@Component( {
  selector : 'sg-app',
  styles: [ typeof styles === 'object' ? styles.default : styles ],
  template: typeof html === 'object' ? html.default : html
} )

// component
export class AppComponent implements OnInit { // it is recommended to export class in place

  // types and variable init
  public name: string = `wait for it ...`;

  // execute as component becomes ready
  public ngOnInit () {

    // timeout
    const timeout = 2500; // type is inferred

    // this is a bit artifical
    setTimeout( () => {
      this.name = `Angular 2.0`;
    }, timeout );

  }

}
