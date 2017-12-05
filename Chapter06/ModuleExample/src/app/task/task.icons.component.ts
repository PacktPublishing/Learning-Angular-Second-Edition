import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-icons',
  template: `
  <img *ngFor="let icon of icons"
       src="/app/shared/assets/img/pomodoro.png"
       width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  icons: Object[] = [];
  @Input() taskTooltip: string;

  ngOnInit() {
    this.icons.length = this.task.noRequired;
    this.icons.fill({ name: this.task.name });
  }
}
