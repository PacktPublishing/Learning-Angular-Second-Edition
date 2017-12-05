import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Jedi } from './jedi.model';
import { JediService } from './jedi.service';

@Component({
  template: `
  routing params example
  `
})
export class ExampleRoutingParamsComponent {
  jedi: Jedi;
  constructor(
    private route: ActivatedRoute,
    private jediService: JediService
  ) {
    route.paramMap.subscribe(p => {
      const id = p.get('id');
      // jediService.getJedi(id).subscribe(data => this.jedi = data);
    });
  }
}
