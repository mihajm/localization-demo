import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideLocalizedRouter } from '@app/locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideExperimentalZonelessChangeDetection(),
    provideLocalizedRouter([
      {
        path: 'quote',
        loadChildren: () => import('@app/quote').then((m) => m.QUOTE_ROUTES),
      },
      {
        path: '**',
        redirectTo: 'quote',
      },
    ]),
  ],
};
