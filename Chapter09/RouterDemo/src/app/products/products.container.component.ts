import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  template: `
    <router-outlet></router-outlet>
  `
})
export class ProductsContainerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
