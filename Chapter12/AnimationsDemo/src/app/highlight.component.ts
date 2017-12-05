import { Component } from '@angular/core';

@Component({
  selector: 'highlight-example',
  template: `

  <div class="highlight-example" highlight>example text that will be animated using a directive</div>
  `,
  styles: [`
    .highlight-example {
      background: yellow;
    }
  `]
})

export class HighlightExampleComponent {
  constructor() { }
}
