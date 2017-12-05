import { Component } from "@angular/core";

@Component({
  selector: 'timer-widget',
  styleUrls: ['timer.widget.component.css'],
  template: `
  <div class="text-center">
    <div class="task" [ngClass]="{ pulse: !isPaused }"></div>
    <h3><small>{{ taskName }}</small></h3>
    <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
    <p>
      <button (click)="togglePause()" class="btn btn-danger">
      Toggle
      </button>
    </p>
  </div>`
})
export class TimerWidgetComponent {
  taskName: string = 'task';
  minutes = 10;
  seconds = 20;
  isPaused = true;

  togglePause() {
    this.isPaused = !this.isPaused;
  }
}
