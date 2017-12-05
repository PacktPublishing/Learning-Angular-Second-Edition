import { Component } from '@angular/core';

@Component({
  selector: 'json-demo',
  template: `
  {{ person | json }}
  `
})

export class JsonDemoComponent {
  person = {
    name: 'chris',
    age: 38,
    address: {
      street: 'Oxford Street',
      city: 'London'
    }
  }

  constructor() { }
}
