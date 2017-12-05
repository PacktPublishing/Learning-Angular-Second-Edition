import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import 'rxjs/add/operator/do';

@Component({
  selector: 'login-component',
  template: `
  <h2>Login component</h2>
  <form class="form-group" [formGroup]="loginForm">
    <input type="text"
           class="form-control"
           formControlName="username"
           placeholder="Your username">
    <input class="form-control"
           type="password"
           placeholder="Your password">
    <div class="help-block" *ngIf="loginForm.get('username').hasError('required')">
      Username is required
    </div>
    <p *ngIf="showUsernameHint"class="help-block">
     That does not look like a proper username, needs to be an email
    </p>
  </form>`,
  styles: [`
  .help-block {
    border: solid 2px red;
    background: salmon;
    padding: 10px;
  }
  `]
})
export class LoginComponent implements AfterViewInit {
  loginForm: FormGroup;
  notValidCredentials: boolean = false;
  showUsernameHint: boolean = false;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.email])],
      password: ['', Validators.required]
    });

    //this.loginForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
  }

  ngAfterViewInit() {
    const username: AbstractControl = this.loginForm.get('username');
    username.valueChanges
      .do(changes => { console.log('name has changed:', changes) })
      .subscribe(value => {
        this.showUsernameHint = (username.dirty &&
          value.indexOf('@') < 0);
      });
  }
}
