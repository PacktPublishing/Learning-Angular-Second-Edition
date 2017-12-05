import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'currency-demo',
  template: `
  <p>{{ 11256.569 | currency:"SEK":'symbol-narrow':'4.1-2' }}</p>
  <p>{{ 11256.569 | currency:"SEK":'symbol':'4.1-2' }}</p>
  <p>{{ 11256.569 | currency:"SEK":'code' }}</p>
  `
})

export class CurrencyDemoComponent {
  constructor() { }
}
