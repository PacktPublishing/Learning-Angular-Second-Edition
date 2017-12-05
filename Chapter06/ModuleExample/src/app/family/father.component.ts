import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'father',
  template: 'father <child>'
})
export class FatherComponent {
  constructor(srv: Service) { }
}