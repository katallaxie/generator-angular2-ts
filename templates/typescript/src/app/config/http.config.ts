// importables
import { HTTP_PROVIDERS, RequestOptions, ResponseOptions } from '@angular/http';
import { CommonRequestOptions, CommonResponseOptions } from '../common';

// provider aggregation
export const APP_HTTP_PROVIDERS = [
  HTTP_PROVIDERS,
  { provide: RequestOptions, useClass: CommonRequestOptions },
  { provide: ResponseOptions, useClass: CommonResponseOptions }
];
