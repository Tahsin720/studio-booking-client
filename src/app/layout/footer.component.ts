import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  template: `
    <footer
      class="h-12 md:h-8 py-2 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center text-sm justify-end px-4"
    >
      <span class="text-gray-700">
        Made by Tahsin Habib Brinto as an assignment for Selise Digital Platforms.
      </span>
      <div>
        <span class="size-5 bg-yellow-400"></span>
        <span class="size-5 bg-yellow-400"></span>
      </div>
    </footer>
  `,
  imports: [RouterModule],
})
export class FooterComponent {}
