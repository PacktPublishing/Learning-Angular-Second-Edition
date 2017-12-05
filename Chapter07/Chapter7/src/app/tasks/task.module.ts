import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { TaskService } from "./task.service";
import { TasksComponent } from "./task.component";
import { TasksAltComponent } from "./task.alt.component";
import { AltTaskService } from "./task.alt.service";


@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [TasksComponent, TasksAltComponent],
  providers: [TaskService, AltTaskService],
  exports: [TasksComponent, TasksAltComponent]
})
export class TaskModule { }
