export { createNamespace } from './lib/compile-locale';

export * from './lib/inject-supported-locale';
export { SUPPORETED_LOCALES, SUPPORTED_LOCALE_LABELS } from './lib/locale.type';
export {
  LocalizeDirective,
  SharedLocalizeDirective,
} from './lib/localize.directive';
export { provideLocalizedRouter } from './lib/provide-localized-router';
export { registerLocale } from './lib/register-locale';
export * from './lib/resolver-date-fns-locale';
export { injectSharedT, type SharedTranslator } from './lib/shared';
