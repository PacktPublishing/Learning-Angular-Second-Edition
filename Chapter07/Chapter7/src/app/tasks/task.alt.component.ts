import { Component } from "@angular/core";

import { Task } from "./task.model";
import { AltTaskService } from "./task.alt.service";

@Component({
  selector: 'alt-tasks',
  template: `
  <div class="task" *ngFor="let task of tasks">
  {{ task.name }}
  </div>
  `,
  styles: [`
    .task {
      box-shadow: 0 0 5px gray;
      margin: 10px;
      padding: 10px;
    }
  `]
})
export class TasksAltComponent {
  get tasks() {
    return this.taskService.tasks;
  }

  constructor(private taskService: AltTaskService) {

  }
}
