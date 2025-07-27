import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  template: `
    <header class="bg-gradient-to-r from-purple-400 to-purple-500">
      <div class="h-16 flex items-center container mx-auto">
        <span class="text-2xl font-mono font-bold text-white">Studio Booking System</span>
      </div>
    </header>
  `,
  imports: [],
})
export class HeaderComponent {}
