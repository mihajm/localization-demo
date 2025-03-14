import { registerLocale } from '@app/locale';
import en from './quote.namespace';

export const { injectNamespaceT, resolveNamespaceTranslation } = registerLocale(
  en,
  {
    'sl-SI': () => import('./quote.locale.sl').then((m) => m.default),
  }
);
