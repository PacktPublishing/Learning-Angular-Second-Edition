
import { Component } from "@angular/core";
import { Jedi } from "./jedi.model";

@Component({
  selector: 'jedi-list',
  template: `
  <jedi-detail class='jedi' *ngFor="let jedi of jedis" [jedi]="jedi" (switchSide)="switchSide($event)" >
  </jedi-detail>
  `
})
export class JediListComponent {
  jedis: Jedi[];

  constructor() {
    this.jedis = [
      new Jedi(1, 'Luke', 'Light'),
      new Jedi(2, 'Vader', 'Dark')
    ];
  }

  switchSide(jediToSwitch) {
    let newSide = jediToSwitch.side === 'Light' ? 'Dark' : 'Light';
    let switchedJedi = Object.assign({}, jediToSwitch, { side: newSide });
    this.jedis = [switchedJedi, ...this.jedis.filter(jedi => jedi.id !== jediToSwitch.id)];
  }
}

