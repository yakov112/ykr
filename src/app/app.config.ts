import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes,RouterModule } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
