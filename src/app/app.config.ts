import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
 import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
   provideAnimations()
  ]
};
