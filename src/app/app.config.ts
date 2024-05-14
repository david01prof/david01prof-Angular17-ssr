import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorResponseInterceptor } from './src/shared/error-response';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding(), withViewTransitions()), provideClientHydration(),provideHttpClient(withFetch(), withInterceptors([ErrorResponseInterceptor]))]
};
