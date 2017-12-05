import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'person-template-component',
  template: `
    <h2>Person template component</h2>
    <form #formPerson="ngForm">
      <div>
        <input [(ngModel)]="person.firstName"
          #firstName="ngModel"
          id="name" name="name"
          placeholder="first name"
          required>
        <span *ngIf="firstName.errors && firstName.errors.required">This field is required</span>
      </div>
      <div>
        <input [(ngModel)]="person.surname"
          #surname="ngModel"
          id="surname"
          name="surname"
          placeholder="surname"
          required>
        <span *ngIf="surname.errors && surname.errors.required">This field is required</span>
      </div>
  <button (click)="submit()" *ngIf="formPerson.form.valid">Save</button>
  <div>
  Firstname form errors:{{ firstName.errors | json }} <br/>
  Surname form errors:{{ surname.errors | json }}
  </div>
</form>
  `
})
export class PersonTemplateComponent implements OnInit {
  person = {};
  constructor() { }

  ngOnInit() { }

  submit() {
    console.log('submitted', this.person);
  }
}
