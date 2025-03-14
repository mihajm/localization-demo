import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectSharedT } from '@app/locale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <!-- wont translate as it's outside of the locale shell -->
    <p>This wont translate: "{{ t('shared.welcomeMessage') }}"</p>
    <router-outlet />
  `,
})
export class AppComponent {
  protected readonly t = injectSharedT();
}
