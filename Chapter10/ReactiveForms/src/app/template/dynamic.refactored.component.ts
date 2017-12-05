import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'dynamic-refactored',
  template: `
  <h2>Form with dynamic content</h2>
  <form (ngSubmit)="submit()" [formGroup]="dynamicForm">
  <div *ngFor="let q of questions">
    {{ q.Question }}
    <input [formControl]="questionGroup[q.Key]" placeholder="fill in answer">
  </div>
  <button>Save</button>
</form>
  `
})

export class DynamicRefactored implements OnInit {
  questions = [];
  questionGroup;
  dynamicForm;

  constructor() {
    this.questions = [{
      Question: 'What is Supermans real name',
      Key: '1'
    }, {
      Question: 'Who is Lukes father',
      Key: '2'
    }];

    this.questionGroup = {};
    this.questions.forEach(qa => {
      this.questionGroup[qa.Key] = new FormControl('', Validators.required)
    });

    this.dynamicForm = new FormGroup(this.questionGroup);
  }

  ngOnInit() { }
  submit() {
    console.log(this.dynamicForm.value);
  }
}




