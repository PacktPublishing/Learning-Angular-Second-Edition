import { Component, Host } from '@angular/core';
import { Service } from './service';

/* 
adding @Host() will cause it look for Service from the FatherComponent, 
which it will not find
*/

@Component({
  selector: 'child',
  template: 'child'
})
export class ChildComponent {
  constructor(srv: Service) { }
}
