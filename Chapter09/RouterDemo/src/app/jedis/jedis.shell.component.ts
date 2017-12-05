import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="header" >
    <router-outlet name="header"></router-outlet>
  </div>
  <div>
    <router-outlet name="body"></router-outlet>
  </div>
  `,
  styles: [`
    .header {
      background: black;
      color: white;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }

    .popup {
      background: lightblue;
    }
  `]
})

export class JedisShellComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
