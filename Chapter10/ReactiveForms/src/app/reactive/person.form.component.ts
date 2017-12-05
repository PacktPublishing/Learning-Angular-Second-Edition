import { FormBuilder, FormGroup } from '@angular/forms'
import { Component } from "@angular/core";
import { minValueValidator } from "./min.value.validator";

@Component({
  selector: 'person-form',
  template: `
  <h2>Reactive person form</h2>
  <form (ngSubmit)="submit(formGroup)" [formGroup]="formGroup">
  <label for="name">Name</label>
    <input id="name" formControlName="name" placeholder="full name">
    <label for="age">Age</label>
    <input id="age" formControlName="age" placeholder="age">

    <div formGroupName='address'>
      <label for="city">City</label>
      <input formControlName="city" placeholder="city" >
       <label for="country">Country</label>
      <input formControlName="country" placeholder="country">
    </div>
    <div class="help-block" *ngIf="formGroup.get('age').hasError('minValue')">
      You must be at least 18
    </div>
    <button>Save</button>
  </form>
  `, styles: [`
  .help-block {
    border: solid 2px red;
    background: salmon;
    padding: 10px;
  }
  `]
})
export class PersonFormComponent {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: '',
      age: [0, minValueValidator(18)],
      address: this.formBuilder.group({
        city: 'London',
        country: 'UK'
      })
    });
  }

  submit() { }
}
