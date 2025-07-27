import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-layout',
  template: `
    <app-header />
    <main class="container  mx-auto py-3 min-h-[calc(100vh-6rem)]">
      <router-outlet></router-outlet>
    </main>
    <app-footer />
  `,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class MainLayoutComponent {}
