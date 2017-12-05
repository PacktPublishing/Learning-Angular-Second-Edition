import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'example',
  template: `
  <button (click)="makeBigger()">Make bigger</button>
  <button (click)="makeSmaller()">Make smaller</button>
  <p class="animate" [@sizeAnimation]="state">some text</p>
  `
  ,
  animations: [
    trigger('sizeAnimation', [
      state('small', style({
        transform:'scale(1)',
        backgroundColor: 'green'})),
      state('large', style({
        transform: 'scale(1.4)',
        backgroundColor : 'red'
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small',animate('100ms ease-out'))
    ])
  ],
  styles : [`
  .animate {
    background: green;
    width: 100px;
  }
  `]

})
export class ExampleComponent {
  state: string;

  makeBigger() {
    this.state = 'large';
  }

  makeSmaller() {
    this.state = 'small';
  }
}
