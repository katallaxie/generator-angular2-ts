// importables
import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';

import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
import { AppComponent } from './components/app/app';

// bootstrap & to production
// enableProdMode();
bootstrap( AppComponent );
