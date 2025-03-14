import { createNamespace } from '../compile-locale';

const ns = createNamespace('shared', {
  hello: 'Hi {name}!',
  welcomeMessage: 'Welcome to the locale library demo!',
  viewLinks: {
    viewArticle: 'View the article',
    viewRepository: 'View the repository',
  },
} as const);

export default ns.translation;

export const createSharedTranslation = ns.createTranslation;
