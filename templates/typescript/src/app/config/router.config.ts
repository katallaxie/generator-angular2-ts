// importables
import { provideRouter, RouterConfig } from '@angular/router';
import { HelloWorldComponent } from '../components/helloworld/helloworld.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// routes
export const routes: RouterConfig = [ // routes to be configured
  { component: HelloWorldComponent, path: '' }
];

// provider aggregation
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  { provide: LocationStrategy, useClass: PathLocationStrategy } // could be changed to HashLocationStrategy
];
