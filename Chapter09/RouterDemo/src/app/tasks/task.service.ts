import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { Task } from "./task.model";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) { }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`data/task${id}.json`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`data/tasks.json`);
  }
}
