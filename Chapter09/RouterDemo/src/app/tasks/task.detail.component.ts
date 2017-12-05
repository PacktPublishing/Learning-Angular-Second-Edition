import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { TaskService } from "./task.service";
import { Task } from "./task.model";

@Component({
  template: `
  <h2>Task detail</h2>
  <div *ngIf="task">{{task.title}}</div>
  <button (click)="back()">Back</button>
  `
})

export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.route
      .params
      .switchMap(params => this.taskService.getTask(+params['id']))
      .subscribe(task => {
        this.task = task;
      });
  }

  back() {
    this.router.navigate(['/tasks']);
  }
}
