import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jedi } from "./jedi.model";

@Component({
  selector: 'jedi-detail',
  template: `
  <div *ngIf="jedi" (click)="switchSide.emit(jedi)">{{ jedi.name }} {{jedi.side}}</div>
  `
})

export class JediDetailComponent {
  @Input() jedi: Jedi;
  @Output() switchSide = new EventEmitter<any>();
}
