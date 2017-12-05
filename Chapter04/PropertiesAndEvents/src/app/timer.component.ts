import { Component } from "@angular/core";

@Component({
  selector: 'timer',
  template: `
    <div class="container text-center">
      <countdown-timer [seconds]="25"
                 (complete)="onCountdownCompleted()"
                 #counter >
      </countdown-timer>
      <p>
        <button class="btn btn-default"
                (click)="counter.seconds = 25">
                reset
        </button>
      </p>
      <p *ngIf="counter.seconds < 10">
        Beware, only !
        <strong>{{ counter.seconds }} seconds</strong>
      </p>
    </div>`
})
export class TimerComponent {
  // timeout: any /* No longer required */
  onCountdownCompleted(): void {
    alert('Time up');
  }
}
