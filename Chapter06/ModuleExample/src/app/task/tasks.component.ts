import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from "./task.model";
import { SettingsService } from "../core/settings.service";

@Component({
  selector: 'tasks',
  styleUrls: ['tasks.component.css'],
  templateUrl: 'tasks.component.html'
})
export class TasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queued: number;
  queueHeaderMapping: any;
  timerMinutes: number;

  constructor(
    private taskService: TaskService,
    private settingsService: SettingsService) {

    this.tasks = this.taskService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = this.settingsService.pluralsMap.tasks;
    this.timerMinutes = this.settingsService.timerMinutes;
  }

  ngOnInit(): void {
    this.updateQueued();
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueued();
  }

  private updateQueued(): void {
    this.queued = this.tasks
      .filter((Task: Task) => Task.queued)
      .reduce((no: number, queuedTask: Task) => {
        return no + queuedTask.noRequired;
      }, 0);
  }

}
