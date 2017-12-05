import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="popup">
  this is a popup text
  </div>
  `,
  styles: [`
    .popup {
      height: 50px;
      background: blue;
      color: white;
    }
  `]
})

export class PopupComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
