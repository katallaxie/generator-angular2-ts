// importables
import './polyfills';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'; // production mode
import { AppComponent } from './components/app/app.component';

// production
if ( ! window.env &&
  window.env !== 'fun' ) {
    enableProdMode();
  }

// bootstrap app
bootstrap( AppComponent );
