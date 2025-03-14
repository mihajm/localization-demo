import { Component } from '@angular/core';
import { injectNamespaceT, LocalizeQuoteDirective } from './locale';

@Component({
  selector: 'app-quote-shell',
  imports: [LocalizeQuoteDirective],
  template: `
    <p>{{ t('shared.welcomeMessage') }}</p>

    <br />
    <p localize="quote.works">Quote works</p>

    <a localize="shared.viewLinks.viewArticle">View article</a>
    <a
      href="https://github.com/mihajm/localization-demo"
      localize="shared.viewLinks.viewRepository"
      >View repository</a
    >
  `,
  styles: ``,
})
export class QuoteShellComponent {
  protected readonly t = injectNamespaceT();
}
