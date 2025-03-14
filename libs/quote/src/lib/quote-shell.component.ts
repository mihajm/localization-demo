import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventType, NavigationEnd, Router } from '@angular/router';
import {
  injectSupportedLocale,
  SUPPORETED_LOCALES,
  SUPPORTED_LOCALE_LABELS,
} from '@app/locale';
import { filter, map } from 'rxjs';
import { injectNamespaceT, LocalizeQuoteDirective } from './locale';

@Component({
  selector: 'app-quote-shell',
  imports: [LocalizeQuoteDirective],
  template: `
    <hr />
    <p localize="shared.welcomeMessage">Welcome to the locale library demo!</p>
    <br />
    <p localize="quote.works">Quote works</p>

    <hr />

    <!-- simple concatenation example -->
    <p>{{ t('shared.changeLocale') }}:</p>
    <div>
      <!-- full reloads are required when switching locales, just like angular localize -->
      @for (loc of locales(); track loc.value) {
      <a [href]="loc.link">{{ loc.label }}</a>

      }
    </div>

    <hr />

    <div>
      <!-- url will be changed when article is published...workin' on it :) -->
      <a
        href="https://dev.to/mihamulec"
        target="_blank"
        localize="shared.viewLinks.viewArticle"
        >View article</a
      >
      <a
        href="https://github.com/mihajm/localization-demo"
        target="_blank"
        localize="shared.viewLinks.viewRepository"
        >View repository</a
      >
    </div>
  `,
  styles: `
    div {
      display: flex;
      gap: 1rem;
    }

    hr {
      border-top: 1px solid #ccc;
    }
  `,
})
export class QuoteShellComponent {
  protected readonly t = injectNamespaceT();
  private readonly currentLocale = injectSupportedLocale();
  private readonly router = inject(Router);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter(
        (e): e is NavigationEnd =>
          'type' in e && e.type === EventType.NavigationEnd
      ),
      map((e) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  protected readonly locales = computed(() => {
    return SUPPORETED_LOCALES.map((loc) => ({
      value: loc,
      link:
        loc === this.currentLocale
          ? this.url()
          : this.url().replace(this.currentLocale, loc),
      label: SUPPORTED_LOCALE_LABELS[loc] ?? loc,
    }));
  });
}
