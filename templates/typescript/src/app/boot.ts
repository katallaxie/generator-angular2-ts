declare global {
  interface Window {
        env?: string;
  }
}

// importables
import './polyfills';
import { AppComponent } from './components/app/app.component';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'; // production mode
import { APP_ROUTER_PROVIDERS, APP_HTTP_PROVIDERS } from './config';

// environment providers
const ENV_PROVIDERS = [];

// production
if ( ! window.env &&
  window.env !== 'fun' ) {
    enableProdMode();
  }

// aggregation of providers
const APP_PROVIDERS = [
  ENV_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  APP_HTTP_PROVIDERS
];

// bootstrap app
bootstrap( AppComponent, APP_PROVIDERS);
