import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  template: `
  example routing component
  `
})
export class ExampleRoutingComponent {
  constructor(private router: Router) { }

  back() {
    this.router.navigateByUrl('/list');
  }
}
