import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { PersonFormComponent } from "./person.form.component";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [PersonFormComponent, LoginComponent],
  declarations: [
    PersonFormComponent,
    LoginComponent
  ],
  providers: [],
})
export class ReactiveModule { }
