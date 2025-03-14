import { Directive } from '@angular/core';
import { LocalizeDirective } from '@app/locale';
import type en from './quote.namespace';
import { injectNamespaceT } from './register';

@Directive({
  selector: '[localize]',
})
export class LocalizeQuoteDirective extends LocalizeDirective<typeof en> {
  readonly t = injectNamespaceT();
}
