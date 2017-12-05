import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: `<h1>Time left: {{seconds}}</h1>`
})
export class CountdownTimerComponent {
  @Input() seconds: number;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();
  intervalId;

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearTimeout(this.intervalId);
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }
}
