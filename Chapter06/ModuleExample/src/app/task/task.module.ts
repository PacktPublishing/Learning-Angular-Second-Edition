import { TaskDetailComponent } from './task.detail.component';
import { TaskDetailsComponent } from './task.details.component';
import { TaskComponent } from './task.component';
import { NgModule } from '@angular/core';
import { TasksComponent } from "./tasks.component";
import { TaskService } from "./task.service";
import { BrowserModule } from '@angular/platform-browser';
import { TaskIconsComponent } from "./task.icons.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    TaskComponent,
    TaskDetailsComponent,
    TaskDetailComponent,
    TasksComponent,
    TaskIconsComponent
  ],
  exports: [TasksComponent],
  providers: [TaskService]
})
export class TaskModule { }


