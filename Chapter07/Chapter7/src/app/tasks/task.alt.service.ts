import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AltTaskService {
  private internalTasks: Task[];
  get tasks() {
    return this.internalTasks;
  }

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  private getTasks(): void {
    this.http
      .get<Task[]>(`data/tasks.json`)
      .subscribe(tasks => this.internalTasks = tasks);
  }
}
