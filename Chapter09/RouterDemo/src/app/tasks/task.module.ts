import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TasksComponent } from './tasks.component';
import { TaskEditorComponent } from './task.editor.component';
import { TaskTooltipDirective } from './task.tooltip.directive';

import { BrowserModule } from '@angular/platform-browser';

import { routes } from './routes';
import { TaskDetailComponent } from "./task.detail.component";
import { TaskService } from "./task.service";

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule
  ],
  declarations: [
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective,
    TaskDetailComponent
  ],
  exports: [
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective,
    RouterModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
