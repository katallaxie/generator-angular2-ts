// importables
import { it, expect, beforeEachProviders, describe } from '@angular/core/testing';

// testables
import { AppComponent } from './app';

// a helper component
class TestComponent {
}

// description of the test
describe( 'App', () => {

  // variables
  let app;

  beforeEachProviders( () => {
    // init a new instance of the underlying class
    app = new AppComponent();
  } );

  // the lame duck
  it( `true is true`, () => {
    expect( true ).toBe( true );
  } );

  // do some actual testing
  it( `should be constructed`, () => {
    expect( app ).not.toBe( undefined );
  } );

} );
