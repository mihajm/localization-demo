import { createNamespace } from '@app/locale';

const ns = createNamespace('quote', {
  works: 'Quote works',
});

export default ns.translation;
export const createQuoteTranslation = ns.createTranslation;
