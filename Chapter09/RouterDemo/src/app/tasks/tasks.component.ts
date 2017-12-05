import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
  selector: 'tasks',
  template: `
  <div class="task" *ngFor="let task of tasks">
    {{ task.title }}
    <button (click)="navigate(task.id)">detail</button>
  </div>
  `,
  styles: [`
  .task {
    box-shadow: 0 0 5px lightgrey;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  `]
})

export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(
    private router: Router,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // demoing query params
    this.route
      .queryParamMap
      .subscribe(params => {
        let pageSize = params.get('pageSize');
        let page = params.get('page');

        console.log('Page size', pageSize);
        console.log('Page', page);
      })

    this.taskService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  navigate(id) {
    this.router.navigate(['tasks', id]);
  }
}
