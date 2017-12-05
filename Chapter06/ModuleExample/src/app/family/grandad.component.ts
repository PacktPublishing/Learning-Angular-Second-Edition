import { Service } from './service';
import { Component, Host } from '@angular/core';

@Component({
  selector: 'granddad',
  template: 'granddad <father>',
  providers: [Service]
})
export class GranddadComponent {
  constructor(srv: Service) { }
}
