import { Component } from '@angular/core';
import { DependencyService } from "./dependency.service";

@Component({
  selector: 'example',
  template: `
  <div>{{ title }}</div>
  `
})

export class ExampleComponent {
  title: string;

  constructor(private dependency: DependencyService) {
    this.title = this.dependency.getData();
  }
}
