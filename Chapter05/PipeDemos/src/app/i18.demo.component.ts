import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i18-demo',
  template: `
  <h1> {{ jedis | i18nPlural:jediWarningMapping }} </h1>
  `
})

export class i18DemoComponent {
  jedis: number = 11;
  jediWarningMapping: any = {
    '=0': 'No jedis',
    '=1': 'One jedi present',
    'other': '# jedis in sight'
  }

  constructor() { }
}
