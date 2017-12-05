import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
  selector: 'tasks',
  template: `
  <div class="task" *ngFor="let task of tasks$ | async">
  {{ task.name }}
  </div>
  `,
  styles: [`
    .task {
      box-shadow: 0 0 5px lightgray;
      margin: 10px;
      padding: 10px;
    }
  `]
})
export class TasksComponent {
  tasks$: Observable<Task[]>;
  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }
}
