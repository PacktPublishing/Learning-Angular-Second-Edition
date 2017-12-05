import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { DynamicComponent } from "./dynamic.component";
import { DynamicRefactored } from "./dynamic.refactored.component";
import { PersonTemplateComponent } from "./person.template.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DynamicComponent, DynamicRefactored, PersonTemplateComponent],
  declarations: [DynamicComponent, DynamicRefactored, PersonTemplateComponent],
  providers: [],
})
export class TemplateModule { }
