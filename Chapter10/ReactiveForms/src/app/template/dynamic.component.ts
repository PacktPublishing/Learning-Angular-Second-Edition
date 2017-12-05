import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic',
  template: `
  dynamic
 <div [formGroup]="form">
    <input [formControl]="group['ctrl1']" placeholder="name">
  </div>`
})
export class DynamicComponent implements OnInit {
  form: FormGroup;
  group;
  constructor() {
    this.group = {};
    this.group['ctrl1'] = new FormControl('start value');

    this.form = new FormGroup(this.group);
  }

  ngOnInit() { }
}
