// importables
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap';

// assets
const html = require('./app.component.html!text');
const styles = require('./app.component.css!text');

// decorator for component constructor
@Component( {
  directives: [AlertComponent],
  moduleId: module.id, // should be removed in case of html, css
  selector : 'sg-app',
  // styleUrls: ['app/components/app/app.component.css'],
  // templateUrl: 'app/components/app/app.component.html'
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
