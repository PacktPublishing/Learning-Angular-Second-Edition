import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  template: `
  <div>{{ no | number }}</div>
  <div>{{ no | number:'2.1-5' }}</div>
  <div>{{ no | number:'7.1-5' }}</div>
  <div>{{ no | number:'7.1-5':'sv' }}</div>
  `
})

export class PipeDemoComponent {
  no: number = 3.1411434344;

  constructor() { }
}
