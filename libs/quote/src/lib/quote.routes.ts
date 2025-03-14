import { Route } from '@angular/router';
import { resolveNamespaceTranslation } from './locale';
import { QuoteShellComponent } from './quote-shell.component';

export const QUOTE_ROUTES: Route[] = [
  {
    path: '',
    component: QuoteShellComponent,
    resolve: {
      resolveQuoteTranslation: resolveNamespaceTranslation,
    },
  },
];
