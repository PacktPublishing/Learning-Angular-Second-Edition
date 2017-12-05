import { Component, OnInit } from '@angular/core';
import { AsyncDependencyService } from "./async.dependency.service";

@Component({
  selector: 'async-example',
  template: `
  <div>{{ title }}</div>
  `
})

export class AsyncExampleComponent {
  title: string;

  constructor(private service: AsyncDependencyService) {
    service.getData().then(data => this.title = data);
  }
}
