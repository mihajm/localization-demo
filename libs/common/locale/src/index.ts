export { createNamespace } from './lib/compile-locale';

export {
  LocalizeDirective,
  SharedLocalizeDirective,
} from './lib/localize.directive';
export { provideLocalizedRouter } from './lib/provide-localized-router';
export { registerLocale } from './lib/register-locale';
export * from './lib/resolver-date-fns-locale';
export { injectSharedT, type SharedTranslator } from './lib/shared';
